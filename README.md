# Freelancer Task Marketplace

[Live Demo](https://freelance-task-auth.web.app/)

---

## Concise project overview
**Freelancer Task Marketplace** is a lightweight platform where clients post short freelance tasks and freelancers browse, apply, and manage task posts. Built with a React + Vite frontend and an Express + MongoDB backend, the app includes authentication-protected routes for task creation and user dashboards, category-based browsing, and deadline-prioritized listings on the homepage.

---





## Main technologies used
- **Frontend:** React, Vite
- **Routing & UI helpers:** react-router, react-responsive-carousel, react-icons, react-simple-typewriter
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas or self-hosted)
- **Auth & Hosting:** Firebase Authentication & Firebase Hosting (deployed demo)

---

## Core features
- **Homepage (dynamic):** Loads and displays 6 tasks prioritized by nearest deadlines.  
- **Browse services by category:** Filter tasks by category (Design, Writing, Development, etc.).
- **Add Task (protected):** Only authenticated users can create tasks (private route).  
- **Browse Tasks:** View and search all available tasks across categories.  
- **My Posted Tasks (protected):** Authenticated users can view and manage tasks they created.

---

## Dependencies (not exhaustive)
**Client (example)**:
```
react

react-router
react-responsive-carousel
react-icons
react-simple-typewriter
firebase
axios
```
**Server (example)**:
```
express
cors
mongodb        # or mongoose
dotenv
```
> Install exact versions from your `package.json`. Add testing, linting, or state-management packages as needed.

---

## Environment variables (examples)
Create `.env` files for both server and client (Vite requires `VITE_` prefix for client-side envs).

**server/.env**
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret      # if using JWT auth
```
**client/.env (Vite)**
```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_API_BASE_URL=http://localhost:5000
```

---

## Run locally — step-by-step
> This assumes a two-folder repo structure (`client/` and `server/`).

1. **Clone the repository**
```bash
git clone <repo-url>
cd <repo-folder>
```

2. **Start the server**
```bash
cd server
cp .env.example .env   # or create .env with the keys above
npm install
npm run dev            # or: nodemon index.js / node index.js
```
Server will typically run at `http://localhost:5000` (or the port you set).

3. **Start the client**
```bash
cd ../client
cp .env.example .env   # add VITE_FIREBASE_* variables and VITE_API_BASE_URL
npm install
npm run dev
```
Vite usually serves the client at `http://localhost:5173` (check terminal output).

4. **Use the app**
- Open the client URL (e.g. `http://localhost:5173`)
- Register / sign in via Firebase Auth (or your chosen auth)
- Access **Add Task** and **My Posted Tasks** (protected routes)

---

## Build & deploy
**Client**
```bash
cd client
npm run build
```
Deploy `dist/` to Firebase Hosting, Netlify, Vercel, or similar.


---

## Live project & resources
- **Live demo:** https://freelance-task-auth.web.app/
- Add links to API docs, Postman collection, or domain-specific README files here if you have them.

---

## Project structure (recommended)
```
root/
├─ client/
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  └─ package.json
├─ server/
│  ├─ config/
│  ├─ index.js
│  └─ package.json
│  
│  
└─ README.md
```







