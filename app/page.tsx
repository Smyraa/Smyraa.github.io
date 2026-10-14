/* eslint-disable @next/next/no-img-element -- screenshots are static files, no optimizer needed */

const email = "sumeyra.erylmz@gmail.com";
const github = "https://github.com/Smyraa";

const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Next.js Server Actions", "MongoDB"] },
  { title: "Araçlar", items: ["Git", "GitHub"] },
  { title: "Okulda kullandıklarım", items: ["Java", "Python", "C"] },
];

const tauraFeatures = [
  "Ürün kataloğu, kategori sayfaları, filtreleme ve canlı arama",
  "Sepet, kupon kodu ve iyzico ile ödeme (sandbox)",
  "Müşteri hesabı: sipariş geçmişi, adresler, favoriler, değerlendirmeler",
  "Yönetim paneli: ürün, stok, sipariş, kampanya ve yorum yönetimi",
];

const tauraTechnical = [
  "Next.js App Router, Server Components ve Server Actions",
  "MongoDB veri modeli; siparişte stok düşümü ve sipariş durum akışı",
  "iyzico ödeme sayfası entegrasyonu ve imza doğrulaması",
  "Güvenlik: CSP, oturum çerezleri, istek sınırlama",
  "Görsel yükleme ve işleme (sharp), sipariş e-postaları",
  "Ayrı test veritabanında otomatik HTTP ve birim testleri",
];

const tauraTech = ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "iyzico", "sharp"];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{children}</p>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 text-sm leading-snug">
      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
      {children}
    </li>
  );
}

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <a href={src} target="_blank" className={`block overflow-hidden rounded-lg border border-line bg-cream ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover object-top transition hover:opacity-90" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="bg-espresso text-cream">
        <div className="mx-auto max-w-5xl px-4 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-14">
          <Label>Portfolyo</Label>
          <h1 className="mt-4 font-display text-5xl leading-none font-medium sm:text-6xl">Sümeyra Eryılmaz</h1>
          <p className="mt-4 text-base text-cream/75">Yazılım Mühendisliği 4. Sınıf Öğrencisi · Web Geliştirme</p>
          <div className="mt-8 h-px w-16 bg-gold" />
          <div className="mt-5 flex flex-col gap-3 text-sm text-cream/90 sm:flex-row sm:gap-8">
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-gold">
              <span className="text-gold"><MailIcon /></span>
              {email}
            </a>
            <a href={github} target="_blank" className="flex items-center gap-2 hover:text-gold">
              <span className="text-gold"><GithubIcon /></span>
              github.com/Smyraa
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-8">
        <section className="grid gap-10 pt-14 md:grid-cols-[1fr_240px] md:gap-14">
          <div>
            <Label>Hakkımda</Label>
            <p className="mt-4 text-lg leading-relaxed">
              Web uygulamaları geliştirmeye odaklanıyorum. Next.js ve TypeScript ile arayüzü ve sunucu tarafını
              birlikte geliştiriyor, verileri MongoDB&apos;de modelliyorum. Bir uygulamayı fikir aşamasından
              çalışan, test edilmiş bir ürüne kadar götürmeyi önemsiyorum.
            </p>
          </div>
          <div>
            <Label>Eğitim</Label>
            <p className="mt-4 text-sm font-semibold">Yazılım Mühendisliği</p>
            <p className="text-sm text-muted">Lisans · 4. sınıf</p>
          </div>
        </section>

        <section className="py-12">
          <Label>Yetenekler</Label>
          <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <p className="text-sm font-semibold">{g.title}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="rounded bg-gold-soft px-2 py-0.5 text-xs text-espresso-soft">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-14">
          <Label>Projelerim</Label>
          <h2 className="mt-3 font-display text-4xl leading-none font-medium">TAURA Tesbihçilik</h2>
          <p className="mt-2 text-sm text-muted">Full-stack e-ticaret uygulaması · Next.js, TypeScript, MongoDB</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Shot src="/taura/kategori.png" alt="TAURA kategori sayfası" className="aspect-[16/8] sm:col-span-2" />
            <Shot src="/taura/urun.png" alt="TAURA ürün sayfası" className="aspect-[16/9]" />
            <Shot src="/taura/yonetim.png" alt="TAURA yönetim paneli" className="aspect-[16/9]" />
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed">
            Bir tesbih dükkânı için uçtan uca geliştirdiğim e-ticaret uygulaması. Müşterinin kullandığı mağaza ile
            ürün, stok ve siparişlerin yönetildiği panel aynı Next.js uygulamasında çalışıyor; veriler MongoDB&apos;de
            tutuluyor.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-semibold">Özellikler</p>
              <ul className="mt-3 space-y-2">
                {tauraFeatures.map((f) => (
                  <Bullet key={f}>{f}</Bullet>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Teknik ayrıntılar</p>
              <ul className="mt-3 space-y-2">
                {tauraTechnical.map((f) => (
                  <Bullet key={f}>{f}</Bullet>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {tauraTech.map((t) => (
              <span key={t} className="rounded bg-espresso px-2 py-0.5 text-xs text-cream">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">Kaynak kodu talep üzerine paylaşılabilir.</p>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-muted sm:px-8">© 2026 Sümeyra Eryılmaz</div>
      </footer>
    </>
  );
}
