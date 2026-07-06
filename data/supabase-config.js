/* ════════════════════════════════════════════════════════════
   IKEVERSE SUPABASE CONFIG
   data/supabase-config.js

   SETUP:
   1. Go to supabase.com → New Project
   2. Run data/supabase-schema.sql in SQL Editor
   3. Go to Settings → API
   4. Copy your Project URL and anon public key below
   5. Add this file to index.html BEFORE cultural-extensions.js
════════════════════════════════════════════════════════════ */

const SUPABASE_URL  = 'https://fmrjdvsqdfyaqtzwbbqi.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtcmpkdnNxZGZ5YXF0endiYnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1OTE2MzYsImV4cCI6MjA5MTE2NzYzNn0.UKyvX02bG4cNhb7U2TK96t8XFREHYYwHJIKbPK06nqs';

/* ── Supabase client (minimal, no SDK needed) ──────────────
   We use raw fetch() so there's zero dependency.
────────────────────────────────────────────────────────── */
const _sb = {
  _h: () => ({
    'apikey':        SUPABASE_ANON,
    'Authorization': `Bearer ${SUPABASE_ANON}`,
    'Content-Type':  'application/json',
  }),

  async query(table, params = '') {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, { headers: _sb._h() });
    if (!r.ok) throw new Error(`Supabase ${r.status}: ${await r.text()}`);
    return r.json();
  },

  async upsert(table, data) {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: { ..._sb._h(), 'Prefer': 'resolution=merge-duplicates' },
      body: JSON.stringify(data),
    });
    if (!r.ok) throw new Error(`Supabase upsert ${r.status}`);
    return r.json();
  },
};

/* ── Load and apply Supabase knowledge on top of local data ─
   Runs after IKE_EXTENSIONS finishes applying.
────────────────────────────────────────────────────────── */
window.SUPABASE_READY = false;

async function loadSupabaseKnowledge() {
  if (!SUPABASE_URL.includes('supabase.co') || SUPABASE_URL.includes('YOUR_PROJECT')) {
    console.log('[IKE] Supabase not configured — using local data only');
    return;
  }

  try {
    /* Stars */
    const stars = await _sb.query('star_knowledge', 'select=*');
    stars.forEach(row => {
      const star = (typeof STARS !== 'undefined') && STARS.find(s => s.id === row.star_id);
      if (!star) return;
      if (row.haw_name)      star.h       = row.haw_name;
      if (row.meaning)       star.meaning = row.meaning;
      if (row.moolelo)       star.moolelo = row.moolelo;
      if (row.nav_use)       star.nav     = row.nav_use;
      if (row.culture_names) star.cults   = { ...star.cults, ...row.culture_names };
      if (typeof STAR_MAP !== 'undefined' && STAR_MAP[row.star_id]) Object.assign(STAR_MAP[row.star_id], star);
    });

    /* Formations */
    const forms = await _sb.query('formation_knowledge', 'select=*');
    forms.forEach(row => {
      if (typeof CULTURES === 'undefined') return;
      const cult = CULTURES[row.culture_id];
      if (!cult) return;
      const f = cult.formations?.find(x => x.id === row.formation_id);
      if (!f) return;
      if (row.moolelo) f.moolelo = row.moolelo;
      if (row.nav_use) f.navUse  = row.nav_use;
      if (row.meaning) f.meaning = row.meaning;
    });

    /* Moon nights */
    const nights = await _sb.query('moon_nights', 'select=*&order=night_num');
    if (nights.length && typeof MAHINA_NIGHTS !== 'undefined') {
      nights.forEach(row => {
        const i = row.night_num - 1;
        if (!MAHINA_NIGHTS[i]) return;
        if (row.name)     MAHINA_NIGHTS[i].n       = row.name;
        if (row.meaning)  MAHINA_NIGHTS[i].meaning = row.meaning;
        if (row.best_for) MAHINA_NIGHTS[i].bestFor = row.best_for;
        if (row.taboos)   MAHINA_NIGHTS[i].taboos  = row.taboos;
        if (row.notes)    MAHINA_NIGHTS[i].notes   = row.notes;
      });
    }

    window.SUPABASE_READY = true;
    console.log(`[IKE] Supabase: ${stars.length} stars, ${forms.length} formations, ${nights.length} moon nights loaded`);

  } catch(e) {
    console.warn('[IKE] Supabase load failed (using local data):', e.message);
  }
}

/* ── Device session sync ───────────────────────────────────
   Saves and restores observer's last position cross-device
────────────────────────────────────────────────────────── */
let _deviceId = localStorage.getItem('ike-device-id');
if (!_deviceId) {
  _deviceId = 'dev-' + Math.random().toString(36).slice(2,10);
  localStorage.setItem('ike-device-id', _deviceId);
}

async function syncObserverSession() {
  if (!window.SUPABASE_READY) return;
  try {
    await _sb.upsert('observer_sessions', {
      device_id:    _deviceId,
      lat:          OBSERVER?.lat,
      lon:          OBSERVER?.lon,
      last_culture: state?.culture,
      last_seen:    new Date().toISOString(),
    });
  } catch(e) { /* silent fail */ }
}

async function restoreObserverSession() {
  if (!window.SUPABASE_READY) return;
  try {
    const rows = await _sb.query('observer_sessions', `device_id=eq.${_deviceId}&select=*`);
    if (rows[0]?.last_culture && typeof switchCulture === 'function') {
      switchCulture(rows[0].last_culture);
    }
  } catch(e) { /* silent fail */ }
}

/* ══════════════════════════════════════════════════════════
   AUTH — Email + Password  &  Google OAuth
   Required Supabase setup:
     1. Dashboard → Auth → URL Configuration
        Add your site URL to "Site URL" and "Redirect URLs"
     2. Dashboard → Auth → Providers → Google
        Enable Google, add Client ID + Client Secret from Google Cloud Console
        (Callback URL to set in Google Cloud: https://[ref].supabase.co/auth/v1/callback)
     3. Dashboard → Auth → Settings → disable "Enable email confirmations"
        (so sign-up is instant — or leave on if you want verification emails)
     4. Run this SQL in Supabase SQL Editor:
          CREATE TABLE IF NOT EXISTS user_progress (
            user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
            learn_progress jsonb NOT NULL DEFAULT '{}',
            updated_at timestamptz DEFAULT now()
          );
          ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
          CREATE POLICY "own_progress" ON user_progress FOR ALL
            USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
══════════════════════════════════════════════════════════ */

let _userSession = null;  // { access_token, refresh_token, user }
let _userToken   = null;  // shortcut to access_token
let _authMode    = 'signin'; // 'signin' | 'signup'

/* Override _sb._h to use user JWT when signed in */
_sb._h = (tok) => ({
  'apikey':        SUPABASE_ANON,
  'Authorization': `Bearer ${tok || _userToken || SUPABASE_ANON}`,
  'Content-Type':  'application/json',
});

function _saveSession(session) {
  _userSession = session;
  _userToken   = session?.access_token || null;
  if (session) {
    localStorage.setItem('ike-session', JSON.stringify(session));
    // Mirror to Pikoverse SDK storage key so profile.html picks up IkeStar sign-ins
    localStorage.setItem('piko_supabase_auth', JSON.stringify({
      access_token:  session.access_token,
      refresh_token: session.refresh_token || null,
      expires_in:    session.expires_in || 3600,
      expires_at:    Math.floor(Date.now() / 1000) + (session.expires_in || 3600),
      token_type:    session.token_type || 'bearer',
      user:          session.user || null,
    }));
  } else {
    localStorage.removeItem('ike-session');
    localStorage.removeItem('piko_supabase_auth');
  }
  window.dispatchEvent(new CustomEvent('ike-auth-change', { detail: { user: session?.user || null } }));
}

function _loadStoredSession() {
  // 1. IkeStar native session
  try {
    const s = JSON.parse(localStorage.getItem('ike-session') || 'null');
    if (s?.access_token) { _saveSession(s); return true; }
  } catch {}

  // 2. Pikoverse SDK session (user signed in via profile.html)
  try {
    const raw = localStorage.getItem('piko_supabase_auth');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.access_token && !(parsed.expires_at && parsed.expires_at * 1000 < Date.now() + 60000)) {
        _saveSession({
          access_token:  parsed.access_token,
          refresh_token: parsed.refresh_token || null,
          expires_in:    parsed.expires_in || 3600,
          token_type:    parsed.token_type || 'bearer',
          user:          parsed.user || null,
        });
        return true;
      }
    }
  } catch {}

  // 3. LKP Supabase v2 SDK session (default storage key)
  try {
    const ref = SUPABASE_URL.replace(/^https?:\/\//, '').split('.')[0];
    const raw = localStorage.getItem('sb-' + ref + '-auth-token');
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!parsed?.access_token) return false;
    if (parsed.expires_at && parsed.expires_at * 1000 < Date.now() + 60000) return false;
    _saveSession({
      access_token:  parsed.access_token,
      refresh_token: parsed.refresh_token || null,
      expires_in:    parsed.expires_in || 3600,
      token_type:    parsed.token_type || 'bearer',
      user:          parsed.user || null,
    });
    return true;
  } catch {}
  return false;
}

/* Handle OAuth / email-confirm callback via URL hash */
function _handleOAuthCallback() {
  const hash = window.location.hash;
  if (!hash.includes('access_token=')) return false;
  const params = new URLSearchParams(hash.slice(1));
  const session = {
    access_token:  params.get('access_token'),
    refresh_token: params.get('refresh_token'),
    expires_in:    parseInt(params.get('expires_in') || '3600'),
    token_type:    params.get('token_type'),
    user:          null,
  };
  fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { 'apikey': SUPABASE_ANON, 'Authorization': `Bearer ${session.access_token}` }
  })
  .then(r => r.json())
  .then(u => {
    session.user = u;
    _saveSession(session);
    history.replaceState(null, '', window.location.pathname + window.location.search);
    syncProgressFromCloud();
  })
  .catch(() => {});
  return true;
}

/* ── Auth helpers ────────────────────────────────────────── */
function _authMsg(text, isError) {
  const el = document.getElementById('auth-msg');
  if (!el) return;
  el.textContent = text;
  el.className   = isError ? 'error' : (text ? 'success' : '');
}

function _authBusy(busy, label) {
  const btn = document.getElementById('auth-submit-btn');
  if (!btn) return;
  btn.disabled    = busy;
  btn.textContent = label || (busy ? '…' : (_authMode === 'signup' ? 'Create Account' : 'Sign In'));
}

/* Sign in with email + password */
async function signInWithPassword(email, password) {
  if (!email || !email.includes('@')) { _authMsg('Enter a valid email address.', true); return; }
  if (!password || password.length < 6) { _authMsg('Password must be at least 6 characters.', true); return; }
  _authBusy(true, 'Signing in…');
  try {
    const r = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error_description || data.msg || 'Sign-in failed');
    // Fetch full user record
    const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { 'apikey': SUPABASE_ANON, 'Authorization': `Bearer ${data.access_token}` }
    });
    data.user = uRes.ok ? await uRes.json() : null;
    _saveSession(data);
    _authMsg('');
    document.getElementById('auth-overlay')?.classList.remove('open');
    syncProgressFromCloud();
  } catch (e) {
    _authMsg(e.message, true);
  } finally {
    _authBusy(false);
  }
}

/* Sign up with email + password */
async function signUpWithPassword(email, password) {
  if (!email || !email.includes('@')) { _authMsg('Enter a valid email address.', true); return; }
  if (!password || password.length < 6) { _authMsg('Password must be at least 6 characters.', true); return; }
  _authBusy(true, 'Creating account…');
  try {
    const r = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error_description || data.msg || 'Sign-up failed');
    if (data.access_token) {
      // Email confirmations disabled — signed in immediately
      const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: { 'apikey': SUPABASE_ANON, 'Authorization': `Bearer ${data.access_token}` }
      });
      data.user = uRes.ok ? await uRes.json() : null;
      _saveSession(data);
      _authMsg('');
      document.getElementById('auth-overlay')?.classList.remove('open');
      syncProgressFromCloud();
    } else {
      // Email confirmation required — tell the user
      _authMsg('✦ Account created! Check your email to confirm, then sign in.', false);
      _setAuthMode('signin');
    }
  } catch (e) {
    _authMsg(e.message, true);
  } finally {
    _authBusy(false);
  }
}

/* Sign in with Google (redirect flow) */
function signInWithGoogle() {
  const redirectTo = encodeURIComponent(window.location.origin + window.location.pathname);
  window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectTo}`;
}

async function signOut() {
  try {
    await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_ANON, 'Authorization': `Bearer ${_userToken}` },
    });
  } catch {}
  _saveSession(null);
  _authMsg('Signed out.', false);
}

/* Toggle sign-in / sign-up mode */
function _setAuthMode(mode) {
  _authMode = mode;
  const btn    = document.getElementById('auth-submit-btn');
  const toggle = document.getElementById('auth-mode-switch');
  const pwEl   = document.getElementById('auth-password-input');
  _authMsg('');
  if (mode === 'signup') {
    if (btn)    btn.textContent    = 'Create Account';
    if (toggle) toggle.textContent = 'Sign In';
    if (pwEl)   pwEl.autocomplete  = 'new-password';
    const wrap = document.querySelector('.auth-mode-toggle');
    if (wrap) wrap.firstChild.textContent = 'Already have an account? ';
  } else {
    if (btn)    btn.textContent    = 'Sign In';
    if (toggle) toggle.textContent = 'Sign Up';
    if (pwEl)   pwEl.autocomplete  = 'current-password';
    const wrap = document.querySelector('.auth-mode-toggle');
    if (wrap) wrap.firstChild.textContent = "Don't have an account? ";
  }
}

/* Wire up auth form */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('auth-google-btn')?.addEventListener('click', signInWithGoogle);

  document.getElementById('auth-submit-btn')?.addEventListener('click', () => {
    const email = document.getElementById('auth-email-input')?.value?.trim();
    const pw    = document.getElementById('auth-password-input')?.value;
    if (_authMode === 'signup') signUpWithPassword(email, pw);
    else                        signInWithPassword(email, pw);
  });

  // Enter key in either field submits
  ['auth-email-input', 'auth-password-input'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const email = document.getElementById('auth-email-input')?.value?.trim();
      const pw    = document.getElementById('auth-password-input')?.value;
      if (_authMode === 'signup') signUpWithPassword(email, pw);
      else                        signInWithPassword(email, pw);
    });
  });

  // Password show / hide
  document.getElementById('auth-pw-toggle')?.addEventListener('click', () => {
    const pwEl = document.getElementById('auth-password-input');
    if (!pwEl) return;
    const show = pwEl.type === 'password';
    pwEl.type = show ? 'text' : 'password';
    const btn = document.getElementById('auth-pw-toggle');
    // Swap between open-eye and crossed-eye SVG
    if (btn) btn.innerHTML = show
      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  });

  document.getElementById('auth-mode-switch')?.addEventListener('click', () => {
    _setAuthMode(_authMode === 'signin' ? 'signup' : 'signin');
  });

  document.getElementById('auth-signout-btn')?.addEventListener('click', signOut);
});

/* ══════════════════════════════════════════════════════════
   PROGRESS SYNC — push / pull ikestar-learn-progress to cloud
══════════════════════════════════════════════════════════ */
async function syncProgressToCloud() {
  if (!_userToken || !_userSession?.user?.id) return;
  try {
    const progress = JSON.parse(localStorage.getItem('ikestar-learn-progress') || '{}');
    await _sb.upsert('user_progress', {
      user_id:        _userSession.user.id,
      learn_progress: progress,
      updated_at:     new Date().toISOString(),
    });
  } catch (e) { console.warn('[IKE] Progress sync failed:', e.message); }
}

async function syncProgressFromCloud() {
  if (!_userToken || !_userSession?.user?.id) return;
  try {
    const rows = await _sb.query('user_progress', `user_id=eq.${_userSession.user.id}&select=learn_progress`);
    if (!rows[0]?.learn_progress) return;
    // Merge: cloud wins on lesson-level (take union of completed lessons)
    const local  = JSON.parse(localStorage.getItem('ikestar-learn-progress') || '{}');
    const merged = { ...rows[0].learn_progress };
    Object.keys(local).forEach(k => { if (local[k]) merged[k] = merged[k] || local[k]; });
    localStorage.setItem('ikestar-learn-progress', JSON.stringify(merged));
    if (typeof renderLearnProgress === 'function') renderLearnProgress();
    if (typeof window.showToast === 'function') window.showToast('Progress synced from your profile ✦');
  } catch (e) { console.warn('[IKE] Progress pull failed:', e.message); }
}

/* Patch setLearnProgress to also push to cloud after every lesson update */
window.addEventListener('load', () => {
  // Wait for main.js setLearnProgress to be defined, then wrap it
  const _orig = window.setLearnProgress;
  if (typeof _orig === 'function') {
    window.setLearnProgress = function(progress) {
      _orig(progress);
      if (_userToken) setTimeout(syncProgressToCloud, 500);
    };
  }
});

/* ── Run after page loads ──────────────────────────────────── */
window.addEventListener('load', async () => {
  // Handle Google OAuth / email-confirm callback first
  const wasCallback = _handleOAuthCallback();

  if (!wasCallback) {
    if (_loadStoredSession()) {
      syncProgressFromCloud();
    }
  }

  await loadSupabaseKnowledge();
  await restoreObserverSession();
  // Sync session every 5 minutes
  setInterval(syncObserverSession, 5 * 60 * 1000);
});