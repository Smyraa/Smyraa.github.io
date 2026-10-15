/* eslint-disable @next/next/no-img-element -- plain img loads eagerly, which the PDF print needs */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  email,
  github,
  skillGroups,
  tauraFeatures,
  tauraTechnical,
  tauraTech,
  sereniteFeatures,
  sereniteTech,
  portfolioFeatures,
  portfolioTech,
  MailIcon,
  GithubIcon,
  GlobeIcon,
} from "../content";
import "./sheet.css";

// A4 print layout used to make the PDF locally. It is not part of the published site.
export const metadata: Metadata = { title: "Portfolyo PDF", robots: { index: false } };

const TOTAL = 4;

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{children}</p>;
}

function Footer({ page }: { page: number }) {
  return (
    <div className="absolute inset-x-[16mm] bottom-[10mm] flex items-center justify-between border-t border-line pt-3 text-[11px] text-muted">
      <span>Sümeyra Eryılmaz · Portfolyo</span>
      <span>
        {page} / {TOTAL}
      </span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[12px] leading-snug">
      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
      {children}
    </li>
  );
}

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-cream ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className="rounded bg-espresso px-2 py-0.5 text-[11px] text-cream">
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectHead({ no, title, subtitle }: { no: string; title: string; subtitle: string }) {
  return (
    <>
      <Label>Proje {no}</Label>
      <h2 className="mt-2 font-display text-[38px] leading-none font-medium">{title}</h2>
      <p className="mt-2 text-[13px] text-muted">{subtitle}</p>
    </>
  );
}

const projects = [
  {
    no: "01",
    title: "TAURA Tesbihçilik",
    kind: "Full-stack e-ticaret · Next.js, MongoDB",
    text: "Mağaza, müşteri hesabı, yönetim paneli ve iyzico ödeme entegrasyonu içeren e-ticaret uygulaması.",
    img: "/taura/anasayfa.png",
  },
  {
    no: "02",
    title: "SÉRÉNITÉ",
    kind: "E-ticaret · Node.js, Express, SQLite",
    text: "Ev giyimi markası için saf HTML/CSS/JS ön yüzlü, Express sunuculu e-ticaret sitesi.",
    img: "/serenite/anasayfa.png",
  },
  {
    no: "03",
    title: "Kişisel Web Sitesi",
    kind: "Statik web sitesi · Next.js, GitHub Pages",
    text: "Bu portfolyonun web sürümü; GitHub Actions ile otomatik yayınlanıyor.",
    img: "/portfolyo/masaustu.png",
  },
];

export default function PdfPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main>
      {/* Page 1: introduction */}
      <section className="sheet">
        <header className="bg-espresso px-[16mm] pt-[16mm] pb-[11mm] text-cream">
          <Label>Portfolyo</Label>
          <h1 className="mt-4 font-display text-[52px] leading-none font-medium">Sümeyra Eryılmaz</h1>
          <p className="mt-3 text-[15px] text-cream/75">Yazılım Mühendisliği 4. Sınıf Öğrencisi · Web Geliştirme</p>
          <div className="mt-7 h-px w-16 bg-gold" />
          <div className="mt-5 flex gap-8 text-[13px] text-cream/90">
            <a href={`mailto:${email}`} className="flex items-center gap-2">
              <span className="text-gold"><MailIcon /></span>
              {email}
            </a>
            <a href={github} className="flex items-center gap-2">
              <span className="text-gold"><GithubIcon /></span>
              github.com/Smyraa
            </a>
            <a href="https://smyraa.github.io" className="flex items-center gap-2">
              <span className="text-gold"><GlobeIcon /></span>
              smyraa.github.io
            </a>
          </div>
        </header>

        <div className="grid grid-cols-[1fr_60mm] gap-[10mm] px-[16mm] pt-[10mm]">
          <div>
            <Label>Hakkımda</Label>
            <p className="mt-3 text-[13.5px] leading-relaxed">
              Web uygulamaları geliştirmeye odaklanıyorum. Next.js ve TypeScript ile arayüzü ve sunucu tarafını
              birlikte geliştiriyor, verileri MongoDB&apos;de modelliyorum. Bir uygulamayı fikir aşamasından
              çalışan, test edilmiş bir ürüne kadar götürmeyi önemsiyorum.
            </p>

            <div className="mt-[8mm]">
              <Label>Projeler</Label>
              <div className="mt-3 space-y-3">
                {projects.map((p) => (
                  <div key={p.no} className="grid grid-cols-[38mm_1fr] gap-4 rounded-xl border border-line bg-cream p-3">
                    <Shot src={p.img} alt={p.title} className="aspect-[16/10]" />
                    <div>
                      <p className="text-[11px] font-semibold text-gold">{p.no}</p>
                      <p className="font-display text-[19px] leading-tight font-medium">{p.title}</p>
                      <p className="text-[11px] text-muted">{p.kind}</p>
                      <p className="mt-1 text-[11.5px] leading-snug">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-[7mm]">
            <div>
              <Label>Eğitim</Label>
              <p className="mt-3 text-[13px] font-semibold">Yazılım Mühendisliği</p>
              <p className="text-[12px] text-muted">Lisans · 4. sınıf</p>
            </div>
            <div>
              <Label>Yetenekler</Label>
              <div className="mt-3 space-y-4">
                {skillGroups.map((g) => (
                  <div key={g.title}>
                    <p className="text-[12px] font-semibold">{g.title}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {g.items.map((s) => (
                        <span key={s} className="rounded bg-gold-soft px-2 py-0.5 text-[11px] text-espresso-soft">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <Footer page={1} />
      </section>

      {/* Page 2: TAURA */}
      <section className="sheet">
        <div className="px-[16mm] pt-[14mm]">
          <ProjectHead no="01" title="TAURA Tesbihçilik" subtitle="Full-stack e-ticaret uygulaması · Next.js, TypeScript, MongoDB" />
          <div className="mt-[6mm] grid grid-cols-2 gap-3">
            <Shot src="/taura/anasayfa.png" alt="TAURA ana sayfası" className="col-span-2 aspect-[16/8.4]" />
            <Shot src="/taura/urun.png" alt="TAURA ürün sayfası" className="aspect-[16/9]" />
            <Shot src="/taura/yonetim.png" alt="TAURA yönetim paneli" className="aspect-[16/9]" />
          </div>
          <p className="mt-[5mm] text-[13.5px] leading-relaxed">
            Bir tesbih dükkânı için uçtan uca geliştirdiğim e-ticaret uygulaması. Müşterinin kullandığı mağaza ile
            ürün, stok ve siparişlerin yönetildiği panel aynı Next.js uygulamasında çalışıyor; veriler MongoDB&apos;de
            tutuluyor.
          </p>
          <div className="mt-[5mm] grid grid-cols-2 gap-[8mm]">
            <div>
              <p className="text-[13px] font-semibold">Özellikler</p>
              <ul className="mt-2 space-y-1">
                {tauraFeatures.map((f) => (
                  <Bullet key={f}>{f}</Bullet>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-semibold">Teknik ayrıntılar</p>
              <ul className="mt-2 space-y-1">
                {tauraTechnical.map((f) => (
                  <Bullet key={f}>{f}</Bullet>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-[5mm]">
            <Tags items={tauraTech} />
          </div>
        </div>
        <Footer page={2} />
      </section>

      {/* Page 3: SÉRÉNITÉ */}
      <section className="sheet">
        <div className="px-[16mm] pt-[14mm]">
          <ProjectHead no="02" title="SÉRÉNITÉ" subtitle="Ev giyimi e-ticaret sitesi · Node.js, Express, SQLite" />
          <div className="mt-[6mm] grid grid-cols-2 gap-3">
            <Shot src="/serenite/anasayfa.png" alt="SÉRÉNITÉ ana sayfası" className="col-span-2 aspect-[16/8.4]" />
            <Shot src="/serenite/urun.png" alt="SÉRÉNITÉ ürün sayfası" className="aspect-[16/9]" />
            <Shot src="/serenite/yonetim.png" alt="SÉRÉNITÉ yönetim paneli" className="aspect-[16/9]" />
          </div>
          <p className="mt-[5mm] text-[13.5px] leading-relaxed">
            Bir ev giyimi ve pijama markası için geliştirdiğim e-ticaret sitesi. Ön yüz saf HTML, CSS ve JavaScript ile
            yazıldı; Express sunucusu ve tek dosyalık SQLite veritabanı ile ek bir veritabanı sunucusu gerektirmeden
            çalışıyor.
          </p>
          <div className="mt-[5mm]">
            <p className="text-[13px] font-semibold">Özellikler</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-[8mm] gap-y-1">
              {sereniteFeatures.map((f) => (
                <Bullet key={f}>{f}</Bullet>
              ))}
            </ul>
          </div>
          <div className="mt-[5mm]">
            <Tags items={sereniteTech} />
          </div>
        </div>
        <Footer page={3} />
      </section>

      {/* Page 4: the portfolio site itself */}
      <section className="sheet">
        <div className="px-[16mm] pt-[14mm]">
          <ProjectHead no="03" title="Kişisel Web Sitesi" subtitle="Statik web sitesi · Next.js, Tailwind CSS, GitHub Pages" />
          <div className="mt-[6mm] grid grid-cols-[1fr_44mm] items-start gap-4">
            <Shot src="/portfolyo/masaustu.png" alt="Kişisel web sitesi masaüstü görünümü" className="aspect-[1280/728]" />
            <Shot src="/portfolyo/mobil.png" alt="Kişisel web sitesi telefon görünümü" className="aspect-[390/800]" />
          </div>
          <p className="mt-[6mm] text-[13.5px] leading-relaxed">
            Bu portfolyonun web sürümü. Next.js ile statik dosyalar olarak derleniyor ve her güncellemede GitHub
            Actions ile GitHub Pages&apos;e otomatik yayınlanıyor. Bu PDF de aynı uygulamadaki içerikten üretiliyor.
          </p>
          <a href="https://smyraa.github.io" className="mt-2 inline-block text-[13px] font-semibold text-gold">
            smyraa.github.io
          </a>
          <div className="mt-[5mm]">
            <p className="text-[13px] font-semibold">Özellikler</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-[8mm] gap-y-1">
              {portfolioFeatures.map((f) => (
                <Bullet key={f}>{f}</Bullet>
              ))}
            </ul>
          </div>
          <div className="mt-[5mm]">
            <Tags items={portfolioTech} />
          </div>
        </div>
        <Footer page={4} />
      </section>
    </main>
  );
}
