# Portfolio CMS (Admin + Viewer)

> Personal portfolio and headless CMS built for **Doni Aditya Pratama** (Flutter Mobile Developer).

## Tech Stack
- **Framework:** Nuxt 4 (Vue 3 + TypeScript)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Database & Auth:** Firebase (Cloud Firestore + Firebase Authentication)
- **Media Storage:** Cloudinary
- **State Management:** Pinia
- **Validation:** Zod + VeeValidate
- **Testing:** Vitest

---

## Getting Started

### 1. Prerequisites
- Node.js `^22.12.0`
- npm

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your Firebase and Cloudinary credentials:
```bash
cp .env.example .env
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Development Server
Start the local Nuxt development server at `http://localhost:3000`:
```bash
npm run dev
```

### 5. Type Checking & Unit Tests
```bash
# Run TypeScript type check
npm run typecheck

# Run unit tests
npm run test
```

### 6. Production Build
```bash
npm run build
npm run preview
```

---

## Project Structure
- `app/pages/` — Viewer routes (`/`, `/projects`, `/certificates`, `/about`, `/contact`) and Admin routes (`/admin/*`)
- `app/layouts/` — `default.vue` (public viewer) and `admin.vue` (admin control panel)
- `app/composables/` — composables for Auth, Projects, Certificates, Skills, and Cloudinary upload
- `app/stores/` — Pinia stores (`auth.ts`, `ui.ts`)
- `app/middleware/` — `admin-auth.ts` route guard
- `app/types/` — TypeScript interfaces & Zod schemas
- `server/api/` — Serverless Nitro endpoints (Cloudinary upload signatures, contact notifications)
