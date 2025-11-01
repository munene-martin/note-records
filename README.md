# note-records
MERN
Mern ThinkBoard is a lightweight MERN full‑stack app for creating and organizing thinking boards and notes. It pairs a React frontend with an Express/Node backend and MongoDB for persistence. Server-side rate limiting and simple caching use Upstash Redis; environment secrets are loaded only on the server to keep the client bundle free of Node-only modules.

Key features

Create, edit, and organize boards and notes
Server-side rate limiting via @upstash/ratelimit and @upstash/redis
Secure env handling: dotenv runs only in Node (guarded), while client uses build-time env vars (VITE_/REACT_APP_)
Simple, extensible MERN architecture ready for deployment
Tech stack

Frontend: React
Backend: Node.js + Express
Database: MongoDB
Rate limiting / Redis: Upstash
Local env: dotenv (server only)
Environment & run

Backend needs a .env with MONGO_URI, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
Frontend uses build-time vars (e.g., VITE_* or REACT_APP_*)
Start:
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
Note
Do not import server-only modules into client code. The backend config (backend/config/upstash.js) already guards dotenv with a check for window to prevent bundling Node APIs into the browser.
