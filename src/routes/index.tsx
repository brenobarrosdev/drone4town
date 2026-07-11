import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import droneAsset from "@/assets/drone-hero.jpg.asset.json";
import {
  ArrowUpRight,
  Building2,
  Camera,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Play,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const services = [
  {
    tag: "01 · Obras",
    title: "Acompanhamento de Obras",
    desc: "Registros aéreos periódicos que documentam cada fase do canteiro.",
    media: "video" as const,
    cover: "/image/ac_obra.jpg", //image do card
    content: "/videos/acompanhamento_obra.mp4", // vídeo do modal
    accent: "primary" as const,
  },
  {
    tag: "02 · Fachada",
    title: "Fachada Comercial",
    desc: "Fotos e filmagens de fachadas, telhados e estruturas de difícil acesso.",
    media: "photo" as const,
    cover: "/image/fachada00.jpg", //image do card
    content: "/image/fachada01.jpg", //image do modal
    accent: "neon" as const,
  },
  {
    tag: "03 · Cinema",
    title: "Vídeos Cinematográficos",
    desc: "Direção aérea para imóveis, eventos e marcas em padrão de estúdio.",
    media: "video" as const,
    cover: "/image/cinematografica_drone.jpg", //image do card
    content: "/videos/cinema.MOV", // vídeo do modal
    accent: "primary" as const,
  },
  {
    icon: Camera,
    tag: "04· Eventos",
    title: "Eventos",
    desc: "Vídeos curtos de alto impacto para anúncios e redes sociais.",
    media: "video" as const,
    cover: "/image/eventos.jpg", //image do card
    content: "/videos/eventos.MOV", // vídeo do modal
    accent: "neon" as const,
  },
  {
    tag: "05 · Mapeamento",
    title: "Mapeamento & 360°",
    desc: "Ortomosaicos, medições e tours imersivos para engenharia.",
    media: "photo" as const,
    cover: "/image/obras.jpg", //image do card
    content: "/image/obras.jpg", //image do modal
    accent: "neon" as const,
  },
];

type Service = (typeof services)[number];

const projects = [
  { tag: "Fachada", 
    title: "Fachada Corporativa ", 
    meta: "4K • 30fps",
    image: "/image/fachada00.jpg", 
  },
  { tag: "Eventos", 
    title: "Quadrilha Junina", 
    meta: "FESTIVAL",
    image: "/image/quadrilha.jpg",
  },
  { tag: "Cinema", 
    title: "Campanha Ceará Litoral", 
    meta: "4K • 30fps",
    image: "/image/litoral.jpg",
  },
  { tag: "Mapeamento", 
    title: "Loteamento", 
    meta: "4K • 30fps",
    image: "/image/loteamento.jpg",
  },
  { tag: "Evento", 
    title: "Kite Surf",
    meta: "4K • 30fps",
    image: "/image/kite_scholl.jpg",
  },
  { tag: "Inspeção",
    title: "Em Construção",
    meta: "4K • 30fps",
    image: "/image/obras.jpg",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-md border border-border bg-surface">
        <img
            src="/image/logo.png"
            alt="Drone 4Town"
            className="h-full w-full object-cover scale-400"
            />
        </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wider">DRONE 4TOWN</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                @drone4town
              </div>
            </div>
          </a>
          <div className="hidden items-center gap-10 md:flex">
            <a href="#servicos" className="text-sm text-muted-foreground transition hover:text-foreground">Serviços</a>
            <a href="#portfolio" className="text-sm text-muted-foreground transition hover:text-foreground">Portfólio</a>
            <a href="#sobre" className="text-sm text-muted-foreground transition hover:text-foreground">Sobre</a>
            <a href="#contato" className="text-sm text-muted-foreground transition hover:text-foreground">Contato</a>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Solicitar orçamento <span aria-hidden>→</span>
          </a>
        </nav>
      </header>

      {/* HERO — fits in first viewport */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, var(--neon) 0%, transparent 60%)", opacity: 0.12 }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 pb-10 pt-8 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:pb-16 lg:pt-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-primary" /> Pilotagem Profissional
            </div>
            <h1 className="text-display text-5xl text-foreground sm:text-6xl lg:text-[6.5rem]">
              Sua obra <br />
              vista do <br />
              <span className="text-primary">alto<span className="text-neon">.</span></span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Serviços de drone em Fortaleza/CE — Acompanhamento de obras e vídeos cinematográficos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-primary transition hover:brightness-110"
              >
                Solicitar orçamento <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-neon hover:text-neon"
              >
                Ver portfólio
              </a>
            </div>
          </div>

          <div className="relative">
            <img
               src="/image/drone-landpage.png"
              alt="Drone"
              width={1536}
              height={1024}
              className="relative z-10 w-full max-h-[60vh] object-contain"
            />
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 rounded border border-primary/60 bg-background/70 px-3 py-1.5 font-mono text-xs text-primary backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> REC · 30FPS
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="relative border-y border-border">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
            {[
              ["+100", "Voos realizados"],
              ["+20", "Obras acompanhadas"],
              ["4K", "Resolução padrão"],
              ["ANAC", "Piloto certificado"],
            ].map(([n, l]) => (
              <div key={l} className="px-6 py-6 lg:px-10">
                <div className="font-display text-3xl text-neon lg:text-4xl">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground lg:text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS — carousel with photo/video cards */}
      <ServicesCarousel />
      

      {/* PORTFÓLIO */}
      <section id="portfolio" className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">/ 02 · Portfólio</div>
              <h2 className="text-display max-w-2xl text-5xl lg:text-7xl">
                Trabalhos <span className="text-neon">recentes</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-background"
              >
                <img
                src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />    
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                      {p.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{p.title}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">{p.meta}</span>
                      <ArrowUpRight className="h-5 w-5 text-neon transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE — clean, no gallery */}
      <section id="sobre" className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">/ 03 · Sobre</div>
        <h2 className="text-display text-5xl lg:text-7xl">
          Por trás <br /> do <span className="text-primary">controle</span>.
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Piloto certificado ANAC, com base em Fortaleza/CE. Equipamento DJI Mini 4 Pro.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            "Homologação ANATEL & registro ANAC",
            "Sensor Hasselblad 4/3 CMOS · 5.1K",
            "Cobertura em toda a Região Metropolitana",
            "Entrega em até 5 dias úteis",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-md border border-border bg-surface/40 p-4">
              <Sparkles className="h-4 w-4 shrink-0 text-neon" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTATO */}
      <section id="contato" className="border-t border-border">
        <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-10">
          <div
            className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)", opacity: 0.12 }}
          />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">/ 04 · Contato</div>
              <h2 className="text-display text-5xl lg:text-7xl">
                Vamos <br /> <span className="text-neon">decolar</span>?
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Conte sobre o projeto — obra, imóvel, campanha ou evento. Retornamos com escopo e orçamento em até 24h.
              </p>

              <div className="mt-10 space-y-5 text-sm">
                <a href="tel:+5585989148842" className="group flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-border transition group-hover:border-neon group-hover:text-neon">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Fone</div>
                    <div className="font-medium">(85) 98914-8842</div>
                  </div>
                </a>
                <a href="mailto:contato@drone4town.com.br" className="group flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-border transition group-hover:border-neon group-hover:text-neon">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-medium">drone4town@gmail.com</div>
                  </div>
                </a>
                <div className="group flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-border">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Base</div>
                    <div className="font-medium">Fortaleza · CE</div>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/drone4town/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-border transition group-hover:border-neon group-hover:text-neon">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Social</div>
                    <div className="font-medium">@drone4town</div>
                  </div>
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl border border-border bg-surface p-8 lg:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Nome</label>
                  <input className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
                  <input type="email" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="voce@email.com" />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Tipo de serviço</label>
                  <select className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary">
                    <option>Acompanhamento de obra</option>
                    <option>Fachada</option>
                    <option>Vídeo cinematográfico</option>
                    <option>Mapeamento / 360°</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Mensagem</label>
                  <textarea rows={4} className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Conte sobre o projeto…" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                  Enviar solicitação <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center lg:px-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-md border border-border bg-surface">
              <img
                src="/image/logo.png"
                alt="Drone"
                className="h-full w-full object-cover scale-400"
                />
        </div>
            <div className="font-display text-sm tracking-wider">DRONE 4TOWN</div>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Fortaleza/CE · Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServicesCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedService, setSelectedService] =
  useState<Service | null>(null);

  useEffect(() => {
    if (!embla) return;
    const update = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    update();
    embla.on("select", update);
    embla.on("reInit", update);
  }, [embla]);

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">/ 01 · Serviços</div>
          <h2 className="text-display max-w-2xl text-5xl lg:text-7xl">
            O que <span className="text-primary">entregamos</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => embla?.scrollPrev()}
            disabled={!canPrev && !embla?.canScrollPrev()}
            aria-label="Anterior"
            className="grid h-11 w-11 place-items-center rounded-md border border-border transition hover:border-neon hover:text-neon disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            disabled={!canNext && !embla?.canScrollNext()}
            aria-label="Próximo"
            className="grid h-11 w-11 place-items-center rounded-md border border-border transition hover:border-neon hover:text-neon disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {services.map((s, i) => {
            const Icon = s.icon;
            const isPrimary = s.accent === "primary";
            return (
              <article
  key={s.title}
  onClick={() => setSelectedService(s)}
  className="group relative aspect-[4/5] w-[85%] shrink-0 overflow-hidden rounded-lg border border-border bg-background sm:w-[60%] md:w-[45%] lg:w-[32%] cursor-pointer transition hover:scale-[1.02]"
>
                <img
                   src={s.cover}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* media indicator */}
                <div className="absolute left-6 top-6 z-10 flex items-center gap-2">
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                    {s.tag}
                  </span>
                </div>
                <div className="absolute right-6 top-6 z-10">
                  {s.media === "video" ? (
                    <div className="flex items-center gap-1.5 rounded-full border border-primary/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                      <Play className="h-3 w-3 fill-current" /> Vídeo
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 rounded-full border border-neon/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-neon backdrop-blur">
                      <Camera className="h-3 w-3" /> Foto
                    </div>
                  )}
                </div>

                

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">Ver mais</span>
                    <ArrowUpRight
                      className={`h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1 ${isPrimary ? "text-primary" : "text-neon"
                        }`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    {selectedService && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="relative w-full max-w-3xl rounded-xl overflow-hidden bg-background shadow-2xl"
    onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-4 top-4 z-10 rounded bg-black/70 px-3 py-2 text-white"
      >
        ✕
      </button>

      {selectedService.media === "video" ? (
        <video
          src={selectedService.content}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[70vh] object-contain bg-black"
        />
      ) : (
        <img
          src={selectedService.content}
          alt={selectedService.title}
          className="w-full max-h-[70vh] object-contain bg-black"
        />
      )}

      <div className="p-6">
        <h2 className="text-3xl font-bold">
          {selectedService.title}
        </h2>

        <p className="mt-2 text-muted-foreground">
          {selectedService.desc}
        </p>
      </div>
    </div>
  </div>
)}
 
    </section>
  );
}
