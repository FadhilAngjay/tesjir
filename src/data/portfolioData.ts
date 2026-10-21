import { Project } from '../utils/portfolioLogic';

export interface ExpertiseItem {
  id: string;
  title: string;
  titleEn: string;
  iconName: 'Compass' | 'Tag' | 'Feather' | 'Code2';
  description: string;
  descriptionEn: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  contentEn: string;
}

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'strategy',
    title: 'Strategy & Direction',
    titleEn: 'Strategy & Direction',
    iconName: 'Compass',
    description: 'Menyusun strategi produk holistik dari user research mendalam, pemetaan persona, audit kompetitor, hingga roadmap eksekusi terukur.',
    descriptionEn: 'Formulating end-to-end product strategy through user research, empathy mapping, competitive benchmarking, and roadmap execution.',
    highlights: ['Product Discovery', 'User Journey Mapping', 'KPI Benchmarking'],
  },
  {
    id: 'branding',
    title: 'Branding & Logo',
    titleEn: 'Branding & Logo',
    iconName: 'Tag',
    description: 'Membangun identitas visual yang otentik dan berkarakter, lengkap dengan sistem tipografi, panduan warna, dan aset desain kohesif.',
    descriptionEn: 'Crafting memorable visual identities, bespoke typographic hierarchies, color systems, and comprehensive brand guidelines.',
    highlights: ['Brand Identity', 'Typography System', 'Design Tokens'],
  },
  {
    id: 'uiux',
    title: 'UI & UX Design',
    titleEn: 'UI & UX Design',
    iconName: 'Feather',
    description: 'Mendesain antarmuka responsif dengan hierarki visual terarah, interaksi mikro halus, flow intuitif, dan kepatuhan standar aksesibilitas.',
    descriptionEn: 'Designing high-converting responsive interfaces with intuitive user flows, micro-interactions, and accessible design patterns.',
    highlights: ['Wireframing & Prototypes', 'Design Systems', 'Micro-Interactions'],
  },
  {
    id: 'webflow',
    title: 'Webflow Development',
    titleEn: 'Webflow & Web Dev',
    iconName: 'Code2',
    description: 'Pengembangan web modern berbasis komponen dengan performa ultra cepat, animasi transisi mulus, dan optimasi SEO terintegrasi.',
    descriptionEn: 'Building blazing-fast modern web experiences with fluid motion transitions, modular architecture, and SEO best practices.',
    highlights: ['Modern Front-End', 'Smooth Motion', 'Ultra-Fast Performance'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'app-dashboard',
    title: 'App Dashboard',
    category: 'uiux',
    categoryLabel: { id: 'UI & UX Design', en: 'UI & UX Design' },
    description: {
      id: 'Sistem analitik multi-tenant SaaS dengan visualisasi real-time dan manajemen hierarki tim terpusat.',
      en: 'Multi-tenant enterprise analytics dashboard featuring real-time telemetry and centralized team controls.',
    },
    longDescription: {
      id: 'Proyek perombakan dashboard SaaS skala enterprise untuk menyederhanakan data analitik kompleks menjadi ringkasan actionable. Dilengkapi modul custom drag-and-drop widget, visualisasi performa interaktif, dan sistem perizinan berbasis role (RBAC). Berhasil meningkatkan efisiensi tugas tim sebesar 58%.',
      en: 'A comprehensive overhaul of an enterprise SaaS operations suite to turn complex telemetry into clean actionable insights. Features modular widget grids, interactive data visualizers, and role-based permissions.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Figma', 'Design System', 'Data Visualization', 'SaaS UX'],
    metrics: [
      { label: 'Efisiensi Alur Kerja', value: '+58%' },
      { label: 'Retensi Pengguna', value: '94%' },
      { label: 'CSAT Score', value: '4.8/5' },
    ],
    client: 'AcrobatIQ Technologies',
    year: '2025',
  },
  {
    id: 'easy-rent',
    title: 'Easy Rent',
    category: 'web',
    categoryLabel: { id: 'Webflow Development', en: 'Webflow Development' },
    description: {
      id: 'Platform persewaan properti modern dengan pencarian filter instan, denah interaktif, dan sistem reservasi mulus.',
      en: 'Modern real-estate portal with instant faceted search, interactive floorplans, and seamless booking.',
    },
    longDescription: {
      id: 'Website direktori dan reservasi properti perkotaan dengan navigasi berbasis peta instan. Mengutamakan kecepatan muat sub-detik, kalkulator estimasi sewa dinamis, dan form verifikasi penyewa dengan UX ramah pengguna.',
      en: 'Urban rental marketplace designed for speed and clarity. Features live map exploration, interactive rent calculators, and automated tenant identity verification.',
    },
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Webflow', 'Tailwind CSS', 'Framer Motion', 'Interactive Map'],
    metrics: [
      { label: 'Tingkat Konversi', value: '+42%' },
      { label: 'Google Lighthouse', value: '99/100' },
      { label: 'Listing Terverifikasi', value: '3,400+' },
    ],
    client: 'Urban Living Real Estate',
    year: '2024',
  },
  {
    id: 'finflow-mobile',
    title: 'FinFlow Mobile',
    category: 'mobile',
    categoryLabel: { id: 'Mobile Apps', en: 'Mobile Apps' },
    description: {
      id: 'Aplikasi perbankan pintar generasi baru dengan kategorisasi pengeluaran otomatis dan fitur micro-investing.',
      en: 'Next-generation smart finance app with automated expenditure categorization and micro-investment loops.',
    },
    longDescription: {
      id: 'FinFlow dirancang untuk generasi muda yang menginginkan kontrol finansial tanpa friksi. Antarmuka mengusung kartu transaksi swipeable, ringkasan saldo dinamis, perlindungan biometrik cepat, dan mode privasi cerdas.',
      en: 'FinFlow was built to empower effortless personal budgeting. Features swipeable statement cards, dynamic wealth tracking, biometric security, and a discrete privacy blur mode.',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Mobile UI', 'iOS & Android', 'FinTech', 'Micro-Interactions'],
    metrics: [
      { label: 'Rating App Store', value: '4.9 ★' },
      { label: 'Pengguna Aktif', value: '180K+' },
      { label: 'Transaksi Bulanan', value: '$12M+' },
    ],
    client: 'FinFlow Global Inc.',
    year: '2024',
  },
  {
    id: 'aura-studios',
    title: 'Aura Studio Scandinavia',
    category: 'branding',
    categoryLabel: { id: 'Branding & Logo', en: 'Branding & Logo' },
    description: {
      id: 'Identitas brand elegan dan timeless untuk produsen furnitur minimalis Nordik dengan filosofi keberlanjutan.',
      en: 'Timeless visual identity and brand system for sustainable Nordic furniture artisans.',
    },
    longDescription: {
      id: 'Eksplorasi identitas menyeluruh mulai dari wordmark kustom terinspirasi geometri Bauhaus, pedoman palet bumi yang tenang, hingga desain kemasan ramah lingkungan dan editorial lookbook mewah.',
      en: 'Holistic brand architecture including bespoke geometric typography inspired by Bauhaus minimalism, earthy palettes, and eco-friendly packaging for international exhibitions.',
    },
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    linkText: 'View in Behance',
    url: 'https://behance.net',
    tags: ['Branding', 'Visual Identity', 'Typography', 'Packaging'],
    metrics: [
      { label: 'Peningkatan Brand Value', value: '+74%' },
      { label: 'Liputan Media Desain', value: '14 Publikasi' },
      { label: 'Penjualan Seri Perdana', value: 'Sold Out' },
    ],
    client: 'Aura Design Collective',
    year: '2024',
  },
  {
    id: 'healthsync-portal',
    title: 'HealthSync Telehealth',
    category: 'uiux',
    categoryLabel: { id: 'UI & UX Design', en: 'UI & UX Design' },
    description: {
      id: 'Platform konsultasi dokter spesialis online dengan integrasi resep digital dan riwayat medis terenkripsi.',
      en: 'Accessible digital health clinic connecting patients with licensed specialists and cloud prescriptions.',
    },
    longDescription: {
      id: 'Dirancang dengan kepatuhan aksesibilitas WCAG AAA, memastikan antarmuka dapat digunakan oleh semua kelompok usia. Alur pemesanan janji temu dapat diselesaikan hanya dalam 3 langkah singkat.',
      en: 'Crafted with strict WCAG AAA contrast and touch accessibility guidelines so older adults and diverse patients navigate appointment scheduling in under 60 seconds.',
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Healthcare UX', 'WCAG AAA', 'Design System', 'Telemedicine'],
    metrics: [
      { label: 'Waktu Booking', value: '-65%' },
      { label: 'Patient NPS', value: '+78' },
      { label: 'Aksesibilitas', value: '100%' },
    ],
    client: 'HealthSync Medical Group',
    year: '2023',
  },
  {
    id: 'nebula-workspace',
    title: 'Nebula Creative Studio',
    category: 'web',
    categoryLabel: { id: 'Webflow Development', en: 'Webflow Development' },
    description: {
      id: 'Situs web interaktif dan kanvas presentasi kreatif dengan animasi WebGL dan transisi halaman tanpa reload.',
      en: 'Interactive portfolio and generative studio showcase with WebGL background mesh and zero-latency transitions.',
    },
    longDescription: {
      id: 'Menggabungkan teknologi animasi terdepan untuk menghadirkan pengalaman visual yang memukau bagi agensi kreatif. Memperoleh penghargaan Site of the Day di berbagai kurasi desain ternama.',
      en: 'Pushes modern front-end motion boundaries with GPU-accelerated canvas backdrops, sound micro-effects, and bespoke typography layouts that earned multiple Site of the Day recognitions.',
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Front-End', 'Motion Design', 'Creative Dev', 'Award Winning'],
    metrics: [
      { label: 'Waitlist Pengguna', value: '25,000+' },
      { label: 'Rata-rata Durasi', value: '4m 12s' },
      { label: 'Award', value: 'Site of the Day' },
    ],
    client: 'Nebula Labs',
    year: '2025',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Dian Pratama',
    role: 'Head of Product',
    roleEn: 'Head of Product',
    company: 'FinVenture Nusantara',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Fadila membawa pemahaman luar biasa dalam menyederhanakan alur user experience kami yang sangat kompleks. Hasil akhirnya tidak cuma estetis dan modern, tapi langsung mendongkrak tingkat konversi pendaftaran sebesar 42%!',
    contentEn: 'Fadila has a remarkable knack for turning labyrinthine product flows into intuitive, elegant experiences. Our activation conversion rate jumped by 42% right after the rollout!',
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Design Director',
    roleEn: 'Design Director',
    company: 'Apex Media Studio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Kerja sama dengan Fadila sangat menyenangkan dan profesional. Kepekaannya terhadap ritme tipografi, animasi mikro yang halus, dan sistem komponen modular sangat istimewa. Tim engineer kami memuji betapa rapi dokumentasinya.',
    contentEn: 'Collaborating with Fadila was a breath of fresh air. His discipline in typography, tasteful micro-interactions, and pristine component design tokens saved our engineering sprint weeks of back-and-forth.',
  },
  {
    id: 't3',
    name: 'Reza Wijaya',
    role: 'Co-Founder & CEO',
    roleEn: 'Co-Founder & CEO',
    company: 'Urban Living Properti',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Transisi dan animasi yang dihadirkan Fadila membuat platform kami terasa sangat hidup, cepat, dan berkelas dunia. Investor dan klien kami berkali-kali memberikan apresiasi terhadap kualitas visual website kami.',
    contentEn: 'The buttery-smooth motion transitions and tactile UI brought our digital presence to life. Investors and customers alike continuously praise the craft and fluidity of our new platform.',
  },
];
