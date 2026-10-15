export const email = "sumeyra.erylmz@gmail.com";
export const github = "https://github.com/Smyraa";

export const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Next.js Server Actions", "MongoDB", "SQLite"] },
  { title: "Araçlar", items: ["Git", "GitHub"] },
  { title: "Okulda kullandıklarım", items: ["Java", "Python", "C"] },
];

export const tauraFeatures = [
  "Ürün kataloğu, kategori sayfaları, filtreleme ve canlı arama",
  "Sepet, kupon kodu ve iyzico ile ödeme (sandbox)",
  "Müşteri hesabı: sipariş geçmişi, adresler, favoriler, değerlendirmeler",
  "Yönetim paneli: ürün, stok, sipariş, kampanya ve yorum yönetimi",
];

export const tauraTechnical = [
  "Next.js App Router, Server Components ve Server Actions",
  "MongoDB veri modeli; siparişte stok düşümü ve sipariş durum akışı",
  "iyzico ödeme sayfası entegrasyonu ve imza doğrulaması",
  "Güvenlik: CSP, oturum çerezleri, istek sınırlama",
  "Görsel yükleme ve işleme (sharp), sipariş e-postaları",
  "Ayrı test veritabanında otomatik HTTP ve birim testleri",
];

export const sereniteFeatures = [
  "Mağaza vitrini, üyelik ve sepet",
  "iyzico Checkout Form ile ödeme (kart bilgisi sunucuya gelmez)",
  "Sipariş takibi, kupon kodu ve e-posta bildirimleri",
  "Yönetim paneli: ürün, sipariş ve stok yönetimi",
];

export const sereniteTech = ["Node.js", "Express", "SQLite", "HTML", "CSS", "JavaScript", "iyzico"];

export const tauraTech = ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "iyzico", "sharp"];

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export const portfolioFeatures = [
  "Masaüstü ve mobil uyumlu tek sayfalık tasarım",
  "Next.js statik derleme (static export); sunucu gerektirmez",
  "GitHub Actions ile her güncellemede GitHub Pages'e otomatik yayın",
  "Aynı içerikten üretilen A4 PDF sürümü (bu belge)",
];

export const portfolioTech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Actions", "GitHub Pages"];

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
