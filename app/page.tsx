/* eslint-disable @next/next/no-img-element -- screenshots are static files, no optimizer needed */

import {
  email,
  github,
  skillGroups,
  tauraFeatures,
  tauraTechnical,
  tauraTech,
  sereniteFeatures,
  sereniteTech,
  MailIcon,
  GithubIcon,
} from "./content";

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

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className="rounded-full bg-espresso px-3 py-1 text-xs text-cream">
          {t}
        </span>
      ))}
    </div>
  );
}

// Screenshot inside a small browser window frame
function Browser({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <a
      href={src}
      target="_blank"
      className={`group block overflow-hidden rounded-xl border border-line bg-white shadow-[0_10px_40px_-12px_rgb(36_26_21/0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgb(36_26_21/0.45)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-cream px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e3b4a4]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8d29a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#b9cba3]" />
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </a>
  );
}

const nav = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

type Project = {
  no: string;
  title: string;
  kind: string;
  text: string;
  shots: { src: string; alt: string }[];
  features: string[];
  technical?: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    no: "01",
    title: "TAURA Tesbihçilik",
    kind: "Full-stack e-ticaret uygulaması · Next.js, TypeScript, MongoDB",
    text: "Bir tesbih dükkânı için uçtan uca geliştirdiğim e-ticaret uygulaması. Müşterinin kullandığı mağaza ile ürün, stok ve siparişlerin yönetildiği panel aynı Next.js uygulamasında çalışıyor; veriler MongoDB'de tutuluyor.",
    shots: [
      { src: "/taura/anasayfa.png", alt: "TAURA ana sayfası" },
      { src: "/taura/urun.png", alt: "TAURA ürün sayfası" },
      { src: "/taura/yonetim.png", alt: "TAURA yönetim paneli" },
    ],
    features: tauraFeatures,
    technical: tauraTechnical,
    tech: tauraTech,
  },
  {
    no: "02",
    title: "SÉRÉNITÉ",
    kind: "Ev giyimi e-ticaret sitesi · Node.js, Express, SQLite",
    text: "Bir ev giyimi ve pijama markası için geliştirdiğim e-ticaret sitesi. Ön yüz saf HTML, CSS ve JavaScript ile yazıldı; Express sunucusu ve tek dosyalık SQLite veritabanı ile ek bir veritabanı sunucusu gerektirmeden çalışıyor.",
    shots: [
      { src: "/serenite/anasayfa.png", alt: "SÉRÉNITÉ ana sayfası" },
      { src: "/serenite/urun.png", alt: "SÉRÉNITÉ ürün sayfası" },
      { src: "/serenite/yonetim.png", alt: "SÉRÉNITÉ yönetim paneli" },
    ],
    features: sereniteFeatures,
    tech: sereniteTech,
  },
];

function ProjectBlock({ p }: { p: Project }) {
  return (
    <article className="reveal rounded-3xl border border-line bg-cream/60 p-5 sm:p-8 lg:p-10">
      <div className="flex items-start gap-5">
        <span className="font-display text-5xl leading-none text-gold/70 sm:text-6xl">{p.no}</span>
        <div>
          <h3 className="font-display text-3xl leading-tight font-medium sm:text-4xl">{p.title}</h3>
          <p className="mt-1 text-sm text-muted">{p.kind}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Browser src={p.shots[0].src} alt={p.shots[0].alt} className="sm:col-span-2" />
        {p.shots.slice(1).map((s) => (
          <Browser key={s.src} src={s.src} alt={s.alt} />
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-base leading-relaxed">{p.text}</p>

      <div className={`mt-8 grid gap-8 ${p.technical ? "md:grid-cols-2" : ""}`}>
        <div>
          <p className="font-semibold">Özellikler</p>
          <ul className={`mt-3 grid gap-2 ${p.technical ? "" : "md:grid-cols-2"}`}>
            {p.features.map((f) => (
              <Bullet key={f}>{f}</Bullet>
            ))}
          </ul>
        </div>
        {p.technical && (
          <div>
            <p className="font-semibold">Teknik ayrıntılar</p>
            <ul className="mt-3 space-y-2">
              {p.technical.map((f) => (
                <Bullet key={f}>{f}</Bullet>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Tags items={p.tech} />
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="hero-bg relative overflow-hidden text-cream">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-8">
          <a href="#" className="enter flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 font-display text-lg text-gold-light">
            SE
          </a>
          <div className="enter flex gap-5 text-sm text-cream/75 sm:gap-8" style={{ "--d": "0.1s" } as React.CSSProperties}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-gold-light">
                {n.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-8 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-14 lg:pb-24">
          <div>
            <p className="enter inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs text-gold-light" style={{ "--d": "0.15s" } as React.CSSProperties}>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              Yazılım Mühendisliği 4. Sınıf Öğrencisi · Web Geliştirme
            </p>
            <h1 className="enter mt-6 font-display text-5xl leading-[1.02] font-medium sm:text-7xl" style={{ "--d": "0.25s" } as React.CSSProperties}>
              Sümeyra
              <br />
              <span className="text-gold-light italic">Eryılmaz</span>
            </h1>
            <div className="enter mt-8 flex flex-wrap gap-3" style={{ "--d": "0.45s" } as React.CSSProperties}>
              <a href="#projeler" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-gold-light">
                Projelerimi gör
              </a>
              <a href="#iletisim" className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold transition hover:border-gold-light hover:text-gold-light">
                İletişime geç
              </a>
            </div>
            <div className="enter mt-8 flex gap-4 text-cream/70" style={{ "--d": "0.55s" } as React.CSSProperties}>
              <a href={`mailto:${email}`} aria-label="E-posta" className="transition hover:text-gold-light"><MailIcon /></a>
              <a href={github} target="_blank" aria-label="GitHub" className="transition hover:text-gold-light"><GithubIcon /></a>
            </div>
          </div>

          {/* Collage of the two projects */}
          <div className="enter relative mx-auto aspect-[5/4] w-full max-w-xl" style={{ "--d": "0.4s" } as React.CSSProperties}>
            <div className="float absolute top-0 right-0 w-[78%] rotate-2">
              <div className="overflow-hidden rounded-xl border border-gold/30 shadow-2xl shadow-black/50">
                <img src="/taura/anasayfa.png" alt="TAURA ana sayfası" className="aspect-[16/10] w-full object-cover object-top" />
              </div>
            </div>
            <div className="float absolute bottom-0 left-0 w-[70%] -rotate-3" style={{ "--d": "-3.5s" } as React.CSSProperties}>
              <div className="overflow-hidden rounded-xl border border-gold/30 shadow-2xl shadow-black/50">
                <img src="/serenite/anasayfa.png" alt="SÉRÉNITÉ ana sayfası" className="aspect-[16/10] w-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        <section id="hakkimda" className="reveal grid scroll-mt-6 gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-start md:gap-16">
          <div>
            <Label>Hakkımda</Label>
            <p className="mt-4 text-lg leading-relaxed">
              Web uygulamaları geliştirmeye odaklanıyorum. Next.js ve TypeScript ile arayüzü ve sunucu tarafını
              birlikte geliştiriyor, verileri MongoDB&apos;de modelliyorum. Bir uygulamayı fikir aşamasından
              çalışan, test edilmiş bir ürüne kadar götürmeyi önemsiyorum.
            </p>
          </div>
          <div className="md:pt-8">
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-cream/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-espresso font-display text-xl text-gold-light">
                4
              </span>
              <div>
                <p className="font-semibold">Yazılım Mühendisliği</p>
                <p className="text-sm text-muted">Lisans · 4. sınıf öğrencisi</p>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal pb-20">
          <Label>Yetenekler</Label>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
              >
                <p className="font-display text-xl font-medium">{g.title}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs text-espresso-soft">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projeler" className="scroll-mt-6 border-t border-line pt-20 pb-20">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>Projelerim</Label>
            </div>
            <p className="max-w-sm text-sm text-muted">Kaynak kodları talep üzerine paylaşılabilir.</p>
          </div>
          <div className="mt-12 space-y-10">
            {projects.map((p) => (
              <ProjectBlock key={p.no} p={p} />
            ))}
          </div>
        </section>
      </main>

      <section id="iletisim" className="hero-bg scroll-mt-6 text-cream">
        <div className="reveal mx-auto max-w-6xl px-4 py-20 text-center sm:px-8">
          <Label>İletişim</Label>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-gold-light"
            >
              <MailIcon />
              {email}
            </a>
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold transition hover:border-gold-light hover:text-gold-light"
            >
              <GithubIcon />
              github.com/Smyraa
            </a>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-cream/50 sm:px-8">© 2026 Sümeyra Eryılmaz</div>
        </div>
      </section>
    </>
  );
}
