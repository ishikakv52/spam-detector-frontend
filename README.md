# Smart Spam Message Detection System — Frontend

Next.js (App Router) + Tailwind CSS frontend for the BCA minor project.

## Setup

```bash
npm install
cp .env.local.example .env.local     # points at your Django backend
npm run dev                          # http://localhost:3000
```

Make sure the backend is running first (see ../backend/README.md) — the app
will not work standalone since all data and AI analysis come from the Django API.

## Pages

- `/login`, `/register` — public
- `/dashboard` — totals, spam %, recent detections
- `/analyzer` — paste a message, click Analyze, see the Spam/Not Spam result
- `/history` — table of all past detections
- `/history/[id]` — full detail for one record, edit notes, delete
- `/profile` — view/edit account details

## Auth

JWT access + refresh tokens are stored in `localStorage` after login/register.
`lib/api.ts` attaches the access token to every request and silently refreshes
it on a 401 before retrying once; if refresh also fails it sends the user back
to `/login`. `ProtectedRoute` guards every page that needs a logged-in user.
# spam-detector-frontend
