/*
  DESIGN: Troca Figurinhas — B2B Stores Landing Page
  Target: Sorveterias, papelarias, bancas de jornal
  Indigo + Gold palette matching the app
*/
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  MapPin,
  Store,
  BadgeCheck,
  TrendingUp,
  Clock,
  Gift,
  Phone,
  Sparkles,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/hero-stores-2KpXgpgnm63Lo48eZTeQa5.webp";

const benefits = [
  {
    icon: MapPin,
    title: "Visibilidade no App",
    desc: "Sua loja aparece no mapa do Troca Figurinhas para milhares de colecionadores da região.",
  },
  {
    icon: TrendingUp,
    title: "Mais Clientes",
    desc: "Colecionadores vêm até sua loja para trocar figurinhas — e acabam consumindo outros produtos.",
  },
  {
    icon: BadgeCheck,
    title: "Selo Oficial",
    desc: "Receba o selo 'Ponto de Troca Oficial' para usar na vitrine e redes sociais.",
  },
  {
    icon: Clock,
    title: "Zero Trabalho Extra",
    desc: "Basta disponibilizar um espaço para troca. Nós cuidamos da divulgação e do fluxo.",
  },
];

const steps = [
  {
    num: "1",
    title: "Cadastre sua loja",
    desc: "Preencha o formulário com dados básicos: nome, endereço, horário de funcionamento e CNPJ.",
  },
  {
    num: "2",
    title: "Receba o selo",
    desc: "Após aprovação, você recebe o selo digital e material para vitrine (PDF para impressão).",
  },
  {
    num: "3",
    title: "Apareça no mapa",
    desc: "Sua loja fica visível para todos os usuários do Troca Figurinhas na sua região.",
  },
  {
    num: "4",
    title: "Receba colecionadores",
    desc: "Colecionadores visitam sua loja para trocar figurinhas. Mais fluxo, mais vendas.",
  },
];

const idealFor = [
  { name: "Sorveterias", emoji: "🍦" },
  { name: "Papelarias", emoji: "📝" },
  { name: "Bancas de Jornal", emoji: "📰" },
  { name: "Cafeterias", emoji: "☕" },
  { name: "Livrarias", emoji: "📚" },
  { name: "Lojas de Brinquedos", emoji: "🧸" },
  { name: "Padarias", emoji: "🥐" },
  { name: "Petshops", emoji: "🐾" },
];

export default function PontosDeTroca() {
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold mb-6 border border-gold/20">
                  <Store size={14} />
                  Ponto de Troca Oficial
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-indigo-deep mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Transforme sua loja em um{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-indigo-light">
                    ponto de encontro
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cadastre sua loja como Ponto de Troca Oficial e receba colecionadores de figurinhas todos os dias. Mais fluxo, mais vendas, zero custo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-indigo-deep font-bold px-8 h-12 text-base"
                    onClick={() => document.getElementById("cadastro")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Cadastrar Minha Loja
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1.5">
                  <Gift size={14} className="text-gold-dark" />
                  Cadastro 100% gratuito — sem mensalidade
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-indigo/5 rounded-3xl blur-2xl -z-10" />
                <img
                  src={HERO_IMG}
                  alt="Ponto de Troca Oficial Troca Figurinhas"
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
                Vantagens de ser um Ponto de Troca
              </h2>
              <p className="text-muted-foreground text-lg">
                Benefícios reais para o seu negócio, sem nenhum custo.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 lg:p-8 rounded-xl bg-background border border-border/50 hover:border-indigo/20 hover:shadow-lg hover:shadow-indigo/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <b.icon size={24} className="text-gold-dark" />
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

      {/* ── IDEAL FOR ── */}
      <section className="py-20 lg:py-24 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.08),transparent_50%)]" />
        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Ideal para todo tipo de comércio
              </h2>
              <p className="text-white/40 text-lg">
                Se você tem um espaço e atende o público, pode ser um Ponto de Troca.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {idealFor.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.05}>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="text-sm font-medium text-white">{item.name}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Como funciona
              </h2>
              <p className="text-muted-foreground text-lg">
                Em 4 passos simples sua loja já está no mapa.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold mx-auto flex items-center justify-center text-indigo-deep font-bold text-xl mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.num}
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-deep mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-background" id="cadastro">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <Sparkles size={40} className="text-gold mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Cadastre sua loja agora
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                O cadastro é gratuito e leva menos de 2 minutos. Comece a receber colecionadores hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-indigo hover:bg-indigo-light text-white font-semibold px-8 h-14 text-base"
                >
                  <a
                    href="https://trocafigurinhas.app/lojas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Store size={18} className="mr-2" />
                    Cadastrar no App
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-indigo/20 text-indigo-deep hover:bg-indigo/5 font-semibold px-8 h-14 text-base"
                >
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Quero cadastrar minha loja como Ponto de Troca Oficial."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={18} className="mr-2" />
                    Tirar Dúvidas
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
