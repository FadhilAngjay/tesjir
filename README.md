# Portofolio Modern - Fadila Disaputro

Website portofolio interaktif dan responsif karya Product Designer & Web Developer, dibuat menggunakan **React 19**, **TypeScript**, **Tailwind CSS**, **Motion (Framer Motion)**, dan **Vite**.

---

## 🚀 Fitur Utama

- **Hero Section Dinamis**: Desain tipografi terarah, efek bintang mengambang (*floating sparkles*), dan tata letak modern.
- **Bidang Keahlian (My Expertise)**: 4 kartu keahlian (*Strategy & Direction, Branding & Logo, UI & UX Design, Webflow & Dev*) dengan dialog metodologi interaktif.
- **Tentang Saya (About Me)**: Cerita personal, filosofi desain, visual kuas artistik, dan fitur unduh CV.
- **Portofolio Proyek Terkurasi**: Filter kategori interaktif (*All, UI & UX, Webflow, Branding, Mobile*) dengan transisi halus dan modal studi kasus mendalam.
- **Formulir Kontak Cerdas**: Validasi form instan, opsi *1-click copy email* (`fadiladisaputro123@gmail.com`), dan kartu konfirmasi pengiriman animasi.
- **Dukungan Bilingual**: Tombol pengalih bahasa Indonesia (ID) & Inggris (EN).
- **Aksesibilitas & Kinerja**: Standar aksesibilitas tinggi, animasi berbasis *compositor*, dan kecepatan muat optimal.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi & Transisi**: [Motion](https://motion.dev/)
- **Ikon**: [Lucide React](https://lucide.dev/)

---

## 📦 Menjalankan Proyek Secara Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/<username-kamu>/<nama-repo>.git
   cd <nama-repo>
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```
   File hasil build akan berada di folder `dist/`.

---

## 🌐 Cara Publikasi ke GitHub & Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi dengan `base: './'` di `vite.config.ts` dan workflow otomatis di `.github/workflows/deploy.yml`.

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [GitHub](https://github.com/) dan login ke akun Anda.
2. Klik tombol **New** (Buat Repository baru).
3. Beri nama repository, misalnya `portofolio-modern` atau `<username>.github.io`.
4. Pilih **Public**, lalu klik **Create repository** (jangan centang Add README atau gitignore karena proyek ini sudah memilikinya).

### Langkah 2: Hubungkan & Push dari Komputer/Terminal
Jalankan perintah berikut di folder proyek:

```bash
git init
git add .
git commit -m "feat: initial commit modern portfolio"
git branch -M main
git remote add origin https://github.com/<username-kamu>/<nama-repo>.git
git push -u origin main
```

*(Ganti `<username-kamu>` dan `<nama-repo>` dengan username dan nama repository GitHub Anda).*

### Langkah 3: Aktifkan GitHub Pages (Otomatis)
1. Buka repository Anda di GitHub.
2. Masuk ke menu **Settings** > **Pages** (di sidebar kiri).
3. Di bagian **Build and deployment**:
   - Pilih **Source**: **GitHub Actions**.
4. GitHub Actions akan secara otomatis menjalankan workflow `.github/workflows/deploy.yml`, membangun proyek Vite, dan mempublikasikannya ke alamat:
   ```
   https://<username-kamu>.github.io/<nama-repo>/
   ```

### Alternatif Deploy Cepat (Vercel / Netlify):
Anda juga dapat menghubungkan repository GitHub ini langsung ke:
- **[Vercel](https://vercel.com)**: Import repository -> klik **Deploy** (otomatis mendeteksi Vite).
- **[Netlify](https://www.netlify.com)**: Import repository -> Build command: `npm run build` -> Publish directory: `dist`.

---

## 📄 Lisensi
Dilisensikan di bawah Apache-2.0. Bebas digunakan dan disesuaikan untuk portofolio pribadi Anda.
