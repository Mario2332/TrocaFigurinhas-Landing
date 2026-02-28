/*
  DESIGN: Troca Figurinhas — B2B Events Landing Page
  Target: Construtoras, concessionárias, shoppings
  Indigo + Gold palette matching the app
*/
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Calendar,
  Heart,
  Building2,
  Car,
  ShoppingBag,
  CheckCircle2,
  Phone,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/hero-events-AqSEeBwRpzGhLtiWormNRy.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/logo-troca-figurinhas_49bbdbc2.png";

const benefits = [
  {
    icon: Users,
    title: "Atraia Famílias",
    desc: "Eventos de figurinhas atraem pais e filhos — o público ideal para construtoras e concessionárias.",
  },
  {
    icon: TrendingUp,
    title: "Aumente o Fluxo",
    desc: "Eventos geram até 3x mais visitantes no local. Mais pessoas = mais oportunidades de venda.",
  },
  {
    icon: Heart,
    title: "Engajamento Real",
    desc: "Diferente de promoções genéricas, figurinhas criam conexão emocional e memórias positivas com sua marca.",
  },
  {
    icon: Calendar,
    title: "Fácil de Organizar",
    desc: "Nós cuidamos de tudo: divulgação no app, material de apoio e suporte no dia do evento.",
  },
];

const segments = [
  {
    icon: Building2,
    title: "Construtoras",
    desc: "Atraia famílias para plantões de vendas e decorados com eventos de troca nos finais de semana.",
  },
  {
    icon: Car,
    title: "Concessionárias",
    desc: "Transforme showrooms em pontos de encontro familiares enquanto apresenta novos modelos.",
  },
  {
    icon: ShoppingBag,
    title: "Shoppings & Malls",
    desc: "Eventos em praças de alimentação ou áreas comuns aumentam o tempo de permanência e consumo.",
  },
];

const included = [
  "Divulgação do evento no app Troca Figurinhas para todos os usuários da região",
  "Material gráfico digital para suas redes sociais",
  "Página exclusiva do evento no app com mapa e detalhes",
  "Suporte da equipe Troca Figurinhas no planejamento",
  "Relatório pós-evento com métricas de participação",
  "Selo 'Parceiro Troca Figurinhas' para usar em materiais",
];

export default function Eventos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold/5 -z-10" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/5 text-indigo text-xs font-semibold mb-6 border border-indigo/10">
                  <Building2 size={14} />
                  Para Empresas
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-indigo-deep mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Eventos de troca que{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-indigo-light">
                    atraem famílias
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Organize eventos de troca de figurinhas no seu espaço comercial. Atraia centenas de famílias, gere mídia espontânea e crie uma experiência memorável para seus clientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-indigo hover:bg-indigo-light text-white font-semibold px-8 h-12 text-base"
                    onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quero Organizar um Evento
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-indigo/5 rounded-3xl blur-2xl -z-10" />
                <img
                  src={HERO_IMG}
                  alt="Evento de troca de figurinhas"
                  className="w-full rounded-2xl shadow-2xl shadow-indigo/10"
                  loading="eager"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Por que organizar um evento de troca?
              </h2>
              <p className="text-muted-foreground text-lg">
                Figurinhas são a febre do momento. Aproveite essa onda para gerar resultados reais.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 lg:p-8 rounded-xl bg-background border border-border/50 hover:border-indigo/20 hover:shadow-lg hover:shadow-indigo/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-indigo/5 flex items-center justify-center shrink-0">
                    <b.icon size={24} className="text-indigo" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-deep mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGMENTS ── */}
      <section className="py-20 lg:py-24 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(234,179,8,0.08),transparent_50%)]" />
        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Ideal para diversos segmentos
              </h2>
              <p className="text-white/40 text-lg">
                Qualquer espaço comercial pode se beneficiar de um evento de troca.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                    <s.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  O que está incluso
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Cuidamos de toda a parte digital para que você foque na experiência presencial.
                </p>
                <ul className="space-y-4">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-gold-dark shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-indigo-deep rounded-2xl p-8 lg:p-10 text-center">
                <img src={LOGO_URL} alt="" className="w-16 h-16 mx-auto mb-6 rounded-xl" />
                <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Resultado médio
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  300+
                </div>
                <div className="text-white/50 mb-8">visitantes por evento</div>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-gold" style={{ fontFamily: "var(--font-heading)" }}>85%</div>
                    <div className="text-xs text-white/40 mt-1">são famílias com crianças</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold" style={{ fontFamily: "var(--font-heading)" }}>4.8h</div>
                    <div className="text-xs text-white/40 mt-1">tempo médio de permanência</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 lg:py-28 bg-background" id="contato">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Vamos conversar?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Entre em contato e receba uma proposta personalizada para o seu evento de troca de figurinhas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-indigo hover:bg-indigo-light text-white font-semibold px-8 h-14 text-base"
                >
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Tenho interesse em organizar um evento de troca de figurinhas."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={18} className="mr-2" />
                    Falar pelo WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-indigo/20 text-indigo-deep hover:bg-indigo/5 font-semibold px-8 h-14 text-base"
                >
                  <a href="mailto:contato@trocafigurinhas.com.br">
                    Enviar Email
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
