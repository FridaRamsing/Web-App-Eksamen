const SUPABASE_PROJECT_URL = "https://rbpfibcjdqgsmmicyltz.supabase.co";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || `${SUPABASE_PROJECT_URL}/rest/v1/goals`;
export const SUPABASE_USER_SETTINGS_URL =
  import.meta.env.VITE_SUPABASE_USER_SETTINGS_URL || `${SUPABASE_PROJECT_URL}/rest/v1/user_settings`;
const SUPABASE_AUTH_URL = import.meta.env.VITE_SUPABASE_AUTH_URL || `${SUPABASE_PROJECT_URL}/auth/v1`;
const AUTH_SESSION_KEY = "fjeraAuthSession";
const SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_APIKEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_KConyu4VkBTBDN8upDDItQ_8myrXZHd";

function getSupabaseAuthUrl() {
  if (SUPABASE_AUTH_URL) {
    return SUPABASE_AUTH_URL;
  }

  const tableUrl = SUPABASE_USER_SETTINGS_URL || SUPABASE_URL;
  const [projectUrl] = tableUrl?.split("/rest/v1") || [];

  return projectUrl ? `${projectUrl}/auth/v1` : "";
}

function saveAuthSession(session) {
  if (typeof window === "undefined" || !session) return;

  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
}

async function parseSupabaseResponse(response) {
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export function hasSupabaseConfig(tableUrl = SUPABASE_URL) {
  return Boolean(tableUrl && SUPABASE_KEY);
}

export function hasSupabaseAuthConfig() {
  return Boolean(getSupabaseAuthUrl() && SUPABASE_KEY);
}

export async function fetchSupabaseRows(query = "select=*", tableUrl = SUPABASE_URL) {
  if (!hasSupabaseConfig(tableUrl)) {
    throw new Error("Missing Supabase URL or API key in .env");
  }

  const response = await fetch(`${tableUrl}?${query}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Could not fetch rows from Supabase");
  }

  return response.json();
}

export async function insertSupabaseRow(tableUrl, row) {
  if (!hasSupabaseConfig(tableUrl)) {
    throw new Error("Missing Supabase URL or API key in .env");
  }

  const response = await fetch(tableUrl, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(row),
  });

  if (!response.ok) {
    throw new Error("Could not insert row in Supabase");
  }

  return true;
}

export async function signUpWithEmail(email, password) {
  if (!hasSupabaseAuthConfig()) {
    throw new Error("Missing Supabase Auth URL or API key in .env");
  }

  const response = await fetch(`${getSupabaseAuthUrl()}/signup`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await parseSupabaseResponse(response);

  if (!response.ok) {
    throw new Error(data?.msg || data?.message || "Could not create account in Supabase");
  }

  saveAuthSession(data);
  return data;
}

export async function signInWithEmail(email, password) {
  if (!hasSupabaseAuthConfig()) {
    throw new Error("Missing Supabase Auth URL or API key in .env");
  }

  const response = await fetch(`${getSupabaseAuthUrl()}/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await parseSupabaseResponse(response);

  if (!response.ok) {
    throw new Error(data?.msg || data?.message || "Could not log in with Supabase");
  }

  saveAuthSession(data);
  return data;
}
