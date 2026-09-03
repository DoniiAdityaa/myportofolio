# PRD & Technical Blueprint — Portfolio CMS (Admin + Viewer)

**Owner:** Doni · **Dibuat:** September 2026 · **Status:** Draft v1 — siap dieksekusi (manual atau via AI coding agent)

---

## 0. Ringkasan Eksekutif

Website portofolio pribadi dengan dua permukaan (surface):

1. **Admin Panel** (privat, hanya Doni) — tempat menambah/mengedit *project/case study*, sertifikat, skill, dan membaca pesan dari pengunjung.
2. **Viewer / Public Site** (publik) — ditampilkan ke recruiter, calon klien freelance, atau siapa pun yang cari tahu tentang Doni. Kontennya **otomatis update real-time** begitu admin menambah data baru — tanpa perlu deploy ulang.

Dokumen ini mencakup PRD, keputusan tech stack (dengan alasan, termasuk revisi dari usulan awal), arsitektur sistem, desain database, rules keamanan, struktur folder, roadmap pengerjaan, sampai rencana production/deployment. Ditulis cukup detail supaya bisa langsung dieksekusi oleh AI coding agent (mis. Claude Code) tanpa banyak keputusan yang menggantung.

---

## 1. Latar Belakang & Tujuan

- Doni butuh portofolio yang **hidup** — bukan static site yang harus di-edit-code tiap kali ada project/sertifikat baru. Cukup login ke admin, isi form, langsung muncul di sisi publik.
- Tujuan utama: alat bantu untuk **melamar kerja** (Flutter Mobile Developer) dan **akuisisi klien freelance**.
- Sekaligus jadi **portfolio piece itu sendiri** — recruiter yang teknis bisa menilai kualitas kode/arsitektur dari repo-nya. Jadi kualitas engineering di project ini penting, bukan cuma tampilannya.

## 2. Asumsi & Scope

Karena beberapa hal belum kamu tentukan secara eksplisit, berikut asumsi yang dipakai di seluruh dokumen ini — silakan revisi bagian ini duluan kalau ada yang meleset sebelum diteruskan ke AI executor:

| Asumsi | Detail |
|---|---|
| Jumlah admin | Satu (Doni sendiri) — tidak perlu sistem role/permission bertingkat |
| Bahasa konten | Indonesia sebagai bahasa utama, istilah teknis Inggris dibiarkan apa adanya. Toggle EN/ID penuh masuk *future enhancement*, bukan MVP |
| Skala traffic | Rendah–menengah (portofolio pribadi), jadi semua rekomendasi dioptimalkan untuk **gratis/nyaris gratis**, bukan untuk scale besar |
| Device dev | Mac 8GB RAM yang sama dipakai untuk Flutter/Android emulator — tooling web dipilih yang ringan supaya nggak bentrok |
| "Case/project/sertifikat" | Digabung jadi 2 entity: **Projects** (termasuk case study naratif) dan **Certificates** (terpisah, karena strukturnya beda: issuer, tanggal, credential ID) |

### In-scope (MVP)
- Admin: login, CRUD Projects, CRUD Certificates, CRUD Skills, kotak pesan masuk (contact form), edit profil/bio.
- Viewer: Home/Hero, daftar & detail Project (case study), galeri Certificates, About, Contact form.

### Out-of-scope (v1) — masuk roadmap Phase 6 / stretch
- Blog/artikel, testimonial dari klien, multi-bahasa penuh, analytics dashboard custom, live chat.

## 3. User Roles & Persona

| Role | Siapa | Kebutuhan utama |
|---|---|---|
| **Admin** | Doni | Cepat nambah project baru setelah selesai kerjain sesuatu, tanpa harus buka code editor |
| **Visitor — Recruiter/HR** | Perekrut yang cari kandidat Flutter dev | Scan cepat: skill, project relevan, bukti nyata (link demo/repo), cara kontak |
| **Visitor — Calon Klien Freelance** | Orang/bisnis yang butuh jasa dev | Lihat portofolio project sejenis, testimoni (nanti), cara booking/kontak |

## 4. Functional Requirements

### 4.1 Admin Panel (`/admin/*`, protected)

| Fitur | Detail |
|---|---|
| Login | Email+password via Firebase Auth. Redirect ke `/admin/login` kalau belum auth |
| Dashboard | Ringkasan: total project, total sertifikat, pesan belum dibaca |
| Projects CRUD | Tambah/edit/hapus, upload cover + galeri gambar, tulis case study (markdown), set tags tech stack, toggle *featured*, drag-to-reorder, status draft/published |
| Certificates CRUD | Tambah/edit/hapus, upload gambar/PDF sertifikat, issuer, tanggal terbit, credential ID/URL |
| Skills CRUD | Tambah/edit/hapus, kategori (Mobile/Web/Tools/Backend), urutan tampil |
| Messages Inbox | Daftar pesan dari contact form, tandai sudah dibaca, hapus |
| Profile/Settings | Edit bio, tagline, foto profil, resume/CV link, social links, SEO default |

### 4.2 Public Site / Viewer

| Halaman | Konten |
|---|---|
| Home | Hero (nama, role, tagline, CTA), featured projects, ringkasan skill, sertifikat terbaru, CTA kontak |
| Projects (`/projects`) | Grid/list semua project published, filter by kategori/tech |
| Project Detail (`/projects/[slug]`) | Case study lengkap: masalah → solusi → proses → hasil, galeri gambar, link live demo/repo |
| Certificates (`/certificates`) | Galeri sertifikat, klik untuk lihat/download |
| About | Bio panjang, timeline pendidikan (Udinus, SMKN 1 Bangsri) & pengalaman (internship Can Creative, dst) |
| Contact | Form (nama, email, pesan) → tersimpan ke Firestore, notifikasi email ke Doni |

## 5. User Stories (contoh)

- *Sebagai admin*, saya ingin menambah project baru dalam < 5 menit lengkap dengan gambar, supaya nggak males update portofolio tiap kali selesai kerjain sesuatu.
- *Sebagai admin*, saya ingin project langsung muncul di situs publik tanpa deploy ulang.
- *Sebagai recruiter*, saya ingin dalam 30 detik pertama tahu Doni ini spesialisasinya apa dan sudah pernah bikin apa saja.
- *Sebagai calon klien*, saya ingin lihat contoh project sejenis kebutuhan saya sebelum menghubungi.

## 6. Non-Functional Requirements

| Aspek | Target |
|---|---|
| Performance | Lighthouse Performance ≥ 90, First Contentful Paint < 1.5s di koneksi 4G |
| SEO | Semua halaman publik ter-index Google, meta tag dinamis per project, sitemap.xml, Open Graph image untuk share link |
| Responsiveness | Mobile-first (mayoritas recruiter buka dari HP), breakpoint standar Tailwind |
| Accessibility | Minimal WCAG AA dasar — kontras warna cukup, semantic HTML, alt text gambar |
| Security | Firestore rules ketat (publik cuma read data published), admin route ter-guard, input contact form disanitasi |
| Keandalan biaya | Semua service dalam free tier untuk traffic portofolio normal |

## 7. UX/UI Design Direction

*(Kamu bilang belum tahu desain yang cocok — ini arahnya, plus aku buatkan mockup visualnya di chat setelah dokumen ini.)*

### 7.1 Filosofi Desain
**"Developer-minimal, bukan template generik."** Karena target audiencenya sebagian teknis (recruiter engineering), gaya yang cocok: banyak whitespace, tipografi tegas, dark mode sebagai default (umum di kalangan developer, dan bikin cover image project lebih menonjol), card-based grid, micro-interaction halus (bukan animasi berlebihan).

Hindari: template Bootstrap default (terlalu generik/mirip semua orang), warna terlalu ramai, terlalu banyak gradient/efek "AI slop".

### 7.2 Design System

| Elemen | Rekomendasi |
|---|---|
| Base warna | Dark neutral (`slate-950`/`zinc-950`) sebagai background utama, satu warna aksen personal (pilih 1: electric blue, emerald, atau oranye — sesuaikan selera), teks putih pudar (`slate-100`/`slate-300`) |
| Tipografi | Heading: font geometris modern (`Space Grotesk` / `Sora`). Body: `Inter`. Kode/tags: `JetBrains Mono` (cocok untuk tag tech stack, kesan developer) |
| Spacing | Skala 4px Tailwind default, generous padding di section (`py-24` desktop) |
| Komponen | Card dengan border tipis + subtle glow saat hover, bukan shadow tebal ala Bootstrap |
| Dark/Light toggle | Ya, disimpan di `localStorage`/cookie, default dark |

### 7.3 Layout Viewer — Home (wireframe ringkas)
```
┌─────────────────────────────────────────┐
│ Logo/Nama        Nav: Projects Certs     │  ← sticky header, toggle theme
│                   About Contact          │
├─────────────────────────────────────────┤
│   [Foto/ilustrasi]   Hi, I'm Doni        │
│                       Flutter Mobile Dev │  ← Hero
│                       [CV] [Lihat Project]│
├─────────────────────────────────────────┤
│  Featured Projects                        │
│  [Card] [Card] [Card]                     │  ← grid 3 kolom, scroll di mobile
├─────────────────────────────────────────┤
│  Skills        [icon grid per kategori]   │
├─────────────────────────────────────────┤
│  Certificates  [card scroll horizontal]   │
├─────────────────────────────────────────┤
│  Contact CTA + Footer (social links)      │
└─────────────────────────────────────────┘
```

### 7.4 Layout Admin — Dashboard (wireframe ringkas)
```
┌───────────┬─────────────────────────────┐
│ Sidebar   │  Topbar: judul halaman        │
│ Dashboard │─────────────────────────────│
│ Projects  │  [Total Project] [Total Cert] │
│ Certs     │  [Pesan Baru]                 │
│ Skills    │─────────────────────────────│
│ Messages  │  Tabel/List project terbaru   │
│ Settings  │  dengan aksi edit/hapus       │
└───────────┴─────────────────────────────┘
```
Admin **tidak perlu** dibikin sebagus viewer — prioritaskan fungsional & cepat dipakai sendiri, bukan estetika (nggak akan dilihat recruiter).

## 8. Tech Stack — Rekomendasi Final

Beberapa dari list awalmu aku sesuaikan — tabel di bawah beserta alasannya (per Sep 2026, sudah dicek versi-versi terkininya):

| Kategori | Usulan Kamu | Rekomendasi Final | Kenapa |
|---|---|---|---|
| Framework | Vue 3 | **Nuxt 4** (dibangun di atas Vue 3 + TS) | Nuxt 3 sudah EOL 31 Juli 2026, Nuxt 4 versi aktif sekarang. Dapat SSR/SSG gratis → SEO jauh lebih baik daripada Vue 3 SPA murni (penting karena recruiter search nama kamu di Google, dan link portofolio di-share ke LinkedIn butuh OG preview yang jalan) |
| Bahasa | TypeScript | **Tetap** | Sinyal kualitas kode ke recruiter, dan bikin AI executor lebih akurat saat generate code |
| State | Pinia | **Tetap** | Official state management Vue 3, ringan |
| CSS | Bootstrap | **Tailwind CSS v4** | Kamu sudah familiar Tailwind dari kerjaan Laravel — manfaatkan itu. Tailwind v4 sekarang CSS-first config (nggak perlu `tailwind.config.js` lagi), dan hasil desainnya lebih mudah dibikin "khas kamu" dibanding Bootstrap yang cenderung generik |
| Database | Firebase | **Tetap — Firestore + Auth** | Kamu sudah pakai Firebase Auth+Firestore di project Laundriin, jadi learning curve rendah. Cocok untuk single-admin CMS: nggak perlu bikin backend sendiri |
| Realtime | Socket.io | **Dihapus, pakai Firestore `onSnapshot`** | Socket.io butuh server Node yang nyala terus — kontradiktif kalau kamu pakai Firebase yang serverless. Firestore sudah punya realtime listener bawaan, jadi begitu admin simpan data, viewer otomatis update tanpa server tambahan. Lihat detail di §9.3 |
| Media storage | — | **Cloudinary** | Kamu sudah pakai ini di Laundriin. Dapat optimasi gambar otomatis (resize/WebP) gratis — penting untuk skor Lighthouse Performance, dan lebih ringan daripada handle resize manual |
| HTTP client | Axios | **Tetap, tapi scope-nya spesifik** | Firestore dipanggil lewat Firebase SDK langsung (bukan REST via Axios). Axios dipakai untuk panggilan REST lain saja: API GitHub (nampilin repo stats), API email (Resend), dsb |
| Peta | Leaflet | **Opsional, bukan core** | Cuma relevan kalau kamu mau pin lokasi di halaman Contact/About. Kalau cuma itu, cukup embed link Google Maps tanpa perlu library — lebih ringan. Pakai Leaflet kalau nanti mau nampilin sesuatu yang lebih interaktif (misal peta lokasi outlet Mau Coffee sebagai bagian case study) |
| Validasi | — | **Zod + VeeValidate** | Kamu sudah kenal konsep Zod dari eksplorasi React Native vs Flutter (Zod ≈ json_serializable). Dipakai untuk validasi form admin & schema data |
| Editor case study | — | **`md-editor-v3`** (markdown editor ringan) | Dipilih dibanding rich-text editor (TipTap dkk) yang lebih berat di RAM — relevan karena dev machine kamu 8GB dan sudah sering kena RAM pressure dari Gradle/emulator |
| UI komponen admin | — | **Reka UI** (headless, ex-Radix Vue) + Tailwind | Primitif accessible (modal, dropdown, tabs) tanpa bawa desain system berat kayak Vuetify/Bootstrap — cek nama & versi terbaru di npm sebelum install, ekosistem JS cepat berubah |
| Reorder project | — | **`vuedraggable`** | Drag-and-drop urutan featured project di admin |
| Sanitasi | — | **DOMPurify** | Wajib sebelum render markdown jadi HTML — cegah XSS dari input admin sendiri (jaga-jaga) |
| Hosting | — | **Vercel** (Hobby/free tier) | First-class support untuk Nuxt SSR, auto preview URL tiap PR (bagus buat portofolio ke recruiter teknis juga — nunjukin kamu paham CI/CD). Firebase tetap murni jadi BaaS (Auth/Firestore), bukan hosting |
| CI/CD | — | **GitHub Actions** | Lint → typecheck → test → build otomatis tiap push |

> Catatan: Vercel Hobby resminya untuk "personal, non-commercial". Portofolio buat lamar kerja jelas personal — aman. Kalau nanti section-nya eksplisit jualan jasa freelance berbayar, itu masuk area abu-abu ToS mereka; alternatif gratis tanpa batasan itu misalnya Cloudflare Pages atau Netlify.

## 9. System Architecture

### 9.1 High-Level Architecture (lihat juga diagram visual di chat)

```
[Admin Browser] ──auth──> [Firebase Auth]
       │
       ├──CRUD──> [Firestore] <──realtime read (onSnapshot)── [Viewer Browser]
       │
       └──upload──> [Cloudinary]

[Viewer Browser] ──submit form──> [Firestore /messages] 
                                        │
                                   (trigger, opsional)
                                        ▼
                          [Nuxt server/api route @ Vercel] ──> [Resend/SendGrid] ──> email ke Doni

[GitHub repo] ──push──> [GitHub Actions: lint/test/build] ──deploy──> [Vercel] (hosts Nuxt app: admin + viewer, satu deployment)
```

### 9.2 Kenapa satu Nuxt app untuk admin & viewer?
Satu codebase, satu deployment — lebih simpel untuk project skala ini. Pemisahan cukup lewat routing (`/admin/*` di-guard middleware) dan layout berbeda (`layouts/default.vue` vs `layouts/admin.vue`). Nggak perlu dua project terpisah.

### 9.3 Kenapa bukan Socket.io?
Firestore's `onSnapshot()` listener sudah realtime secara native — begitu dokumen di collection `projects` berubah, semua client yang subscribe langsung dapat update, tanpa perlu server Socket.io yang harus terus nyala (dan butuh hosting terpisah yang biayanya jalan terus, beda sama serverless Firebase/Vercel yang scale-to-zero). Socket.io baru worth dipakai kalau nanti ada fitur real *bidirectional* seperti live chat — bukan use case portofolio ini.

### 9.4 Kenapa Nuxt server/api routes, bukan Firebase Cloud Functions?
Karena hosting-nya di Vercel (yang sudah punya Node runtime serverless bawaan Nuxt/Nitro), logic backend kecil (generate signature upload Cloudinary, kirim notifikasi email) bisa taruh di `server/api/*.ts` tanpa perlu mengaktifkan Firebase Blaze plan (billing plan) sama sekali. Firestore & Auth di Spark plan (gratis) sudah cukup.

## 10. Database Design (Firestore)

### 10.1 Collections & Schema

**`profile/main`** (single document)
```ts
{
  name: string
  role: string                // "Flutter Mobile Developer"
  tagline: string             // "Flutter Developer with Dio/BLoC expertise"
  bio: string                 // markdown, long-form
  avatarUrl: string
  resumeUrl: string
  email: string
  location: string            // "Jepara, Jawa Tengah, Indonesia"
  socials: { github?: string; linkedin?: string; instagram?: string; whatsapp?: string }
  education: Array<{ institution: string; degree: string; period: string; description?: string }>
  experience: Array<{ company: string; role: string; period: string; description?: string }>
  updatedAt: Timestamp
}
```

**`projects/{projectId}`**
```ts
{
  slug: string                // unik, url-friendly
  title: string
  summary: string             // ringkasan untuk card
  body: string                // markdown: problem → solution → process → result
  role: string                // "Solo Developer", dst
  category: "mobile" | "web" | "freelance"
  techStack: string[]         // ["Flutter","Firebase","BLoC"]
  coverImageUrl: string
  gallery: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  order: number
  status: "draft" | "published"
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

**`certificates/{certId}`**
```ts
{
  title: string
  issuer: string
  issueDate: Timestamp
  expiryDate?: Timestamp
  credentialId?: string
  credentialUrl?: string
  fileUrl: string              // gambar/PDF di Cloudinary
  category: string             // "Course" | "Competition" | "Bootcamp"
  order: number
  createdAt: Timestamp
}
```

**`skills/{skillId}`**
```ts
{
  name: string
  category: "mobile" | "web" | "backend" | "tools"
  level?: number               // 1-5, opsional
  icon: string
  order: number
}
```

**`messages/{messageId}`**
```ts
{
  name: string
  email: string
  message: string
  read: boolean
  createdAt: Timestamp
}
```

**`settings/site`** (single document)
```ts
{
  seoDefaultTitle: string
  seoDefaultDescription: string
  ogImageUrl: string
  themeDefault: "dark" | "light"
}
```

### 10.2 Firestore Security Rules
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null && request.auth.uid == "ADMIN_UID_DISINI";
    }

    match /profile/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /projects/{projectId} {
      allow read: if resource.data.status == "published" || isAdmin();
      allow write: if isAdmin();
    }

    match /certificates/{certId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /skills/{skillId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /messages/{messageId} {
      allow create: if request.resource.data.keys().hasAll(['name','email','message'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.message is string;
      allow read, update, delete: if isAdmin();
    }

    match /settings/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}
```

### 10.3 Index yang Dibutuhkan
Composite index untuk query `projects` yang di-filter `status == "published"` sekaligus di-sort `order` atau `createdAt` — Firestore akan kasih link auto-generate index pertama kali query ini dijalankan di dev; tinggal klik link-nya.

## 11. Folder & Project Structure

```
portfolio/
├─ app/
│  ├─ pages/
│  │  ├─ index.vue
│  │  ├─ projects/index.vue
│  │  ├─ projects/[slug].vue
│  │  ├─ certificates/index.vue
│  │  ├─ about.vue
│  │  ├─ contact.vue
│  │  └─ admin/
│  │     ├─ login.vue
│  │     ├─ index.vue
│  │     ├─ projects/index.vue
│  │     ├─ projects/new.vue
│  │     ├─ projects/[id]/edit.vue
│  │     ├─ certificates/index.vue
│  │     ├─ skills/index.vue
│  │     ├─ messages/index.vue
│  │     └─ settings.vue
│  ├─ components/
│  │  ├─ viewer/        # Hero, ProjectCard, CertCard, ContactForm, PublicHeader
│  │  └─ admin/          # AdminSidebar, DataTable, ImageUploader, MarkdownEditor
│  ├─ composables/
│  │  ├─ useAuth.ts
│  │  ├─ useProjects.ts
│  │  ├─ useCertificates.ts
│  │  ├─ useSkills.ts
│  │  ├─ useMessages.ts
│  │  └─ useCloudinaryUpload.ts
│  ├─ stores/            # Pinia: auth, ui
│  ├─ middleware/
│  │  └─ admin-auth.ts   # named middleware, dipasang di semua page /admin/*
│  ├─ layouts/
│  │  ├─ default.vue
│  │  └─ admin.vue
│  ├─ types/
│  │  └─ index.ts        # interface + Zod schema per entity
│  └─ utils/
│     └─ firebase.ts     # init Firebase app, export auth & db
├─ server/api/
│  ├─ cloudinary-signature.post.ts
│  └─ contact-notify.post.ts
├─ nuxt.config.ts
├─ .env.example
└─ package.json
```

## 12. Komponen & Composable Utama

| File | Tanggung jawab |
|---|---|
| `useAuth.ts` | Login/logout, expose `user` reactive state, dipakai middleware guard |
| `useProjects.ts` | `fetchPublished()`, `subscribeRealtime()`, `create()`, `update()`, `remove()`, `reorder()` |
| `useCloudinaryUpload.ts` | Ambil signature dari `server/api/cloudinary-signature`, upload file, return URL |
| `admin-auth.ts` middleware | Redirect ke `/admin/login` kalau `useAuth().user` kosong |

Pola: **komponen UI tidak pernah panggil Firebase SDK langsung** — selalu lewat composable, supaya gampang di-test dan gampang diganti provider kalau suatu saat pindah dari Firebase.

## 13. Seed Content — Project Awal untuk Diisi

Supaya nggak mulai dari kosong, ini 3 project nyata kamu yang cocok jadi konten pertama di CMS:

1. **Laundriin** (Flutter + Firebase, tugas akhir SMK) — Auth+Firestore, relay Laravel ke WhatsApp via Wablas API, integrasi printer thermal Bluetooth, dual role Admin/Staff, grafik income. Case study bagus untuk nunjukin end-to-end product thinking (dari client real: Cendana Laundry).
2. **Mau Coffee POS** — Flutter + backend Node/Express, integrasi printer ESC/POS + cash drawer. Bagus untuk nunjukin kamu bisa handle hardware integration, bukan cuma CRUD app biasa.
3. **LPK Surya Kencana** — company profile + CMS Laravel untuk klien driving school (Pak Azzam). Bagus untuk nunjukin sisi freelance/client-facing (proposal, pricing, delivery).

Portofolio ini sendiri (yang lagi kamu bangun) juga layak jadi project ke-4 begitu selesai — nunjukin Vue/Nuxt/Firebase di luar Flutter.

## 14. Roadmap Pengerjaan

| Phase | Isi | Estimasi |
|---|---|---|
| 0 — Setup | Scaffold Nuxt 4+TS+Tailwind, project Firebase, akun Cloudinary, project Vercel, skeleton CI | 2-3 hari |
| 1 — Auth & Data Layer | Integrasi Firebase, Pinia store, composables, login admin + route guard | 3-4 hari |
| 2 — Admin CRUD | Form & list Projects/Certificates/Skills, upload gambar, Firestore rules | ~1 minggu |
| 3 — Viewer Pages | Home, Projects list/detail, Certificates gallery, About, Contact — konsumsi data realtime | ~1 minggu |
| 4 — Polish | Animasi halus, QA responsive, dark/light theme, SEO meta/OG, sitemap | 4-5 hari |
| 5 — Deploy | Testing, finalisasi CI/CD, deploy Vercel production, custom domain | 2-3 hari |
| 6 — Stretch | Testimonials, blog, toggle bahasa EN/ID, integrasi GitHub API (live commit stats), analytics dashboard | opsional |

## 15. Production & Deployment

### 15.1 Environment
- `local` — `.env.local`, Firebase project terpisah untuk dev (opsional, biar data testing nggak campur produksi)
- `production` — env vars disimpan di dashboard Vercel, bukan di repo

### 15.2 CI/CD (GitHub Actions)
Tiap push/PR: `eslint` → `vue-tsc --noEmit` → `vitest run` → `nuxt build`. Merge ke `main` → auto-deploy ke Vercel production. Tiap PR juga dapat preview URL otomatis dari Vercel.

### 15.3 Hosting & Domain
- Hosting: Vercel (Hobby/free)
- Domain: beli custom domain (mis. `.dev` atau `.com`, ~Rp150-200rb/tahun di Niagahoster/Domainesia/Namecheap), arahkan DNS ke Vercel

### 15.4 Monitoring & Analytics
- Vercel Web Analytics (otomatis aktif kalau deploy di Vercel, gratis untuk basic) — cukup untuk lihat jumlah visitor tanpa setup tambahan
- Error tracking (Sentry free tier) — opsional, bisa nyusul kalau dirasa perlu

### 15.5 Estimasi Biaya
| Layanan | Plan | Biaya |
|---|---|---|
| Firebase (Auth+Firestore) | Spark (free) | Rp 0 |
| Cloudinary | Free tier | Rp 0 |
| Vercel | Hobby | Rp 0 |
| Domain | .com/.dev tahunan | ~Rp150-200rb/tahun |

Praktis **satu-satunya biaya rutin adalah domain**, itu pun opsional (bisa pakai subdomain gratis dari Vercel dulu: `nama-kamu.vercel.app`).

## 16. Security Checklist

- [ ] Firestore rules: publik cuma bisa `read` data `status == "published"`, `write` cuma admin
- [ ] Route `/admin/*` di-guard middleware, redirect ke login kalau belum auth
- [ ] Signature upload Cloudinary di-generate server-side (`server/api`), API secret nggak pernah kekirim ke client
- [ ] Sanitasi output markdown dengan DOMPurify sebelum di-render jadi HTML
- [ ] Aktifkan 2FA/MFA di akun Firebase Auth admin
- [ ] Rate-limit / Cloudflare Turnstile di contact form (cegah spam bot)
- [ ] Environment variables nggak pernah di-commit ke repo (`.env` masuk `.gitignore`)

## 17. Testing Strategy

| Level | Tool | Cakupan |
|---|---|---|
| Unit | Vitest | Composables (`useProjects`, dsb), util functions, Zod schema |
| Component | @vue/test-utils | Komponen kritikal (ContactForm, ProjectCard) |
| E2E (opsional/stretch) | Playwright | Smoke test: login admin → tambah project → muncul di viewer |

## 18. Risiko & Pertanyaan Terbuka

- Kalau nanti section freelance service jadi lebih menonjol (bukan cuma portofolio pasif), perlu evaluasi ulang ToS Vercel Hobby (lihat catatan §8).
- Belum diputuskan: mau pakai custom domain dari awal atau mulai dari `*.vercel.app` dulu?
- Belum diputuskan: konten bio/about ditulis sendiri manual, atau mau dibantu drafting?

## 19. Appendix

### 19.1 Dependencies utama (`package.json`)
```
dependencies: nuxt, vue, pinia, @pinia/nuxt, firebase, axios, zod,
              vee-validate, @vee-validate/zod, dompurify,
              md-editor-v3, vuedraggable, reka-ui, tailwindcss, @tailwindcss/vite

devDependencies: typescript, eslint, @nuxt/eslint, prettier,
                 vitest, @vue/test-utils, @playwright/test (opsional)
```

### 19.2 `.env.example`
```
NUXT_PUBLIC_FIREBASE_API_KEY=
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NUXT_PUBLIC_FIREBASE_PROJECT_ID=
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NUXT_PUBLIC_FIREBASE_APP_ID=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
```

### 19.3 Referensi versi (dicek September 2026)
- Nuxt 4 — versi aktif (Nuxt 3 EOL 31 Juli 2026)
- Tailwind CSS v4.3 — CSS-first config, tanpa `tailwind.config.js`
- Vercel Hobby — free untuk personal/non-commercial, 100GB bandwidth/bulan

---
*Dokumen ini living document — update terus tiap ada keputusan baru sebelum dieksekusi.*
