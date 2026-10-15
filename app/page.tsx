/* eslint-disable @next/next/no-img-element -- screenshots are static files, no optimizer needed */

import { email, github, skillGroups, tauraFeatures, tauraTechnical, sereniteFeatures, sereniteTech, tauraTech, MailIcon, GithubIcon } from "./content";

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
            <Shot src="/taura/anasayfa.png" alt="TAURA ana sayfası" className="aspect-[16/10] sm:col-span-2" />
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

        <section className="border-t border-line py-14">
          <h2 className="font-display text-4xl leading-none font-medium">SÉRÉNITÉ</h2>
          <p className="mt-2 text-sm text-muted">Ev giyimi e-ticaret sitesi · Node.js, Express, SQLite</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Shot src="/serenite/anasayfa.png" alt="SÉRÉNITÉ ana sayfası" className="aspect-[16/10] sm:col-span-2" />
            <Shot src="/serenite/urun.png" alt="SÉRÉNITÉ ürün sayfası" className="aspect-[16/9]" />
            <Shot src="/serenite/yonetim.png" alt="SÉRÉNITÉ yönetim paneli" className="aspect-[16/9]" />
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed">
            Bir ev giyimi ve pijama markası için geliştirdiğim e-ticaret sitesi. Ön yüz saf HTML, CSS ve JavaScript ile
            yazıldı; Express sunucusu ve tek dosyalık SQLite veritabanı ile ek bir veritabanı sunucusu gerektirmeden çalışıyor.
          </p>
          <ul className="mt-6 grid gap-2 md:grid-cols-2">
            {sereniteFeatures.map((f) => (
              <Bullet key={f}>{f}</Bullet>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {sereniteTech.map((t) => (
              <span key={t} className="rounded bg-espresso px-2 py-0.5 text-xs text-cream">
                {t}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-muted sm:px-8">© 2026 Sümeyra Eryılmaz</div>
      </footer>
    </>
  );
}
