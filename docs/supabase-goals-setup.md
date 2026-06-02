# Supabase setup for Fjera goals

This follows the same idea as the teacher guide: React uses `fetch` to read from Supabase.

## 1. Environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://rbpfibcjdqgsmmicyltz.supabase.co/rest/v1/goals
VITE_SUPABASE_USER_SETTINGS_URL=https://rbpfibcjdqgsmmicyltz.supabase.co/rest/v1/user_settings
VITE_SUPABASE_AUTH_URL=https://rbpfibcjdqgsmmicyltz.supabase.co/auth/v1
VITE_SUPABASE_APIKEY=sb_publishable_your_key_here
```

Use the publishable key from Supabase. Do not use the secret/service role key in React.

`VITE_SUPABASE_URL` points directly to the `goals` table, just like the teacher guide points directly to the `posts` table.

`VITE_SUPABASE_AUTH_URL` points to Supabase Auth. Auth is not a normal table, so the URL ends with `/auth/v1`.

## 2. Goals table

Create a table called `goals` with these columns:

| Column | Type | Used for |
| --- | --- | --- |
| `id` | `int8` / bigint | React key and sorting |
| `created_at` | `timestamptz` | When the goal was created |
| `title` | `text` | Goal text shown on the Home page |
| `icon_key` | `text` | Chooses the local icon in React |
| `period` | `text` | Example: `Morning` |
| `completed` | `bool` | Whether the goal is done |

Example rows:

| title | icon_key | period | completed |
| --- | --- | --- | --- |
| `wake up by 7am` | `clock` | `Morning` | `false` |
| `Brush teeth` | `toothbrush` | `Morning` | `false` |
| `Just be` | `chicken` | `Morning` | `false` |

## 3. Policy

For now, make sure the table can be read publicly while we are testing.

Later, when auth is connected, we should make the policy private so users only see their own goals.

## 4. User settings table

Create a table called `user_settings`. This stores the name the user writes during onboarding and the bird they choose.

| Column | Type | Used for |
| --- | --- | --- |
| `id` | `int8` / bigint | Unique row id |
| `created_at` | `timestamptz` | When the profile was created |
| `email` | `text` | Optional email if we choose to save it later |
| `human_name` | `text` | The user's name from "What Is Your Name?" |
| `bird_type` | `text` | The selected bird, for example `hummingbird` |

For testing, the table needs an insert policy for anon/public users.

Later, when auth is connected, this should become private so each user only edits their own profile.

## 5. GitHub Pages variables

Because `.env` is not pushed to GitHub, add these repository variables in GitHub:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_USER_SETTINGS_URL
VITE_SUPABASE_AUTH_URL
VITE_SUPABASE_APIKEY
```

Use the same values as in the local `.env` file.

## 6. Authentication setup

Supabase Auth stores login users under **Authentication -> Users**. You do not need to create your own login table.

In Supabase:

1. Go to **Authentication**.
2. Go to **Providers**.
3. Open **Email**.
4. Make sure email login is enabled.
5. For easier testing, turn **Confirm email** off. If it is on, the user must confirm their email before login works.

The React app uses these Auth endpoints:

| Action | Endpoint |
| --- | --- |
| Sign up | `/auth/v1/signup` |
| Login | `/auth/v1/token?grant_type=password` |

The request sends:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Supabase usually requires passwords to be at least 6 characters. If signup fails, check the error message shown in the app.
