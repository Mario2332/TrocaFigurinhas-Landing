/*
  DESIGN: Troca Figurinhas — Retail Points / Revenda Landing Page
  Target: Lojas que querem vender álbuns e pacotes de figurinhas
  Indigo + Gold palette matching the app
*/
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  Package,
  DollarSign,
  BarChart3,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Phone,
  Store,
  Star,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/hero-pdv-mJYFXrCNi43dLm32vdLT2m.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/logo-troca-figurinhas_49bbdbc2.png";

const benefits = [
  {
    icon: DollarSign,
    title: "Margem Atrativa",
    desc: "Margens de até 40% na revenda de pacotes de figurinhas e álbuns oficiais.",
  },
  {
    icon: BarChart3,
    title: "Painel de Gestão",
    desc: "Acompanhe vendas, estoque e faturamento em tempo real pelo painel do lojista no app.",
  },
  {
    icon: Truck,
    title: "Reposição Rápida",
    desc: "Estoque reposto automaticamente quando atinge o mínimo. Sem ruptura de gôndola.",
  },
  {
    icon: ShieldCheck,
    title: "Produtos Oficiais",
    desc: "Revenda apenas produtos licenciados e originais com garantia de procedência.",
  },
];

const products = [
  {
    name: "Álbum Oficial Copa 2026",
    price: "R$ 14,90",
    margin: "35%",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
  },
  {
    name: "Pacote com 5 Figurinhas",
    price: "R$ 4,00",
    margin: "40%",
    img: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400&h=400&fit=crop",
  },
  {
    name: "Caixa com 50 Pacotes",
    price: "R$ 160,00",
    margin: "38%",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
  },
];

const included = [
  "Cadastro gratuito como ponto de venda oficial",
  "Acesso ao painel de gestão do lojista no app",
  "Visibilidade no mapa do app Troca Figurinhas",
  "Material de PDV (display, banner, adesivo de vitrine)",
  "Suporte dedicado por WhatsApp",
  "Treinamento online para equipe de vendas",
];

export default function Revenda() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-indigo/3 -z-10" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/5 text-indigo text-xs font-semibold mb-6 border border-indigo/10">
                  <Package size={14} />
                  Programa de Revenda
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-indigo-deep mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Venda figurinhas e{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">
                    lucre com a febre
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cadastre sua loja no programa de revenda Troca Figurinhas. Receba produtos oficiais, tenha margens atrativas e apareça no mapa do app para milhares de colecionadores.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-indigo hover:bg-indigo-light text-white font-semibold px-8 h-12 text-base"
                    onClick={() => document.getElementById("cadastro")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quero Revender
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo/10 to-gold/5 rounded-3xl blur-2xl -z-10" />
                <img
                  src={HERO_IMG}
                  alt="Revenda de figurinhas Troca Figurinhas"
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
                Por que revender com o Troca Figurinhas?
              </h2>
              <p className="text-muted-foreground text-lg">
                Tudo que você precisa para lucrar com a febre das figurinhas.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 lg:p-8 rounded-xl bg-background border border-border/50 hover:border-indigo/20 hover:shadow-lg hover:shadow-indigo/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-indigo-deep flex items-center justify-center shrink-0">
                    <b.icon size={24} className="text-gold" />
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

      {/* ── PRODUCTS ── */}
      <section className="py-20 lg:py-24 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.08),transparent_50%)]" />
        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Catálogo de Produtos
              </h2>
              <p className="text-white/40 text-lg">
                Produtos oficiais com margens que valem a pena.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-square bg-white/5 flex items-center justify-center p-8">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {p.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                        {p.price}
                      </span>
                      <span className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded">
                        Margem: {p.margin}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-center text-white/30 text-sm mt-8">
              * Preços e margens sujeitos a alteração. Valores ilustrativos para demonstração.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  O que você recebe
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Suporte completo para você começar a vender rapidamente.
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
              <div className="bg-gradient-to-br from-indigo-deep to-indigo-dark rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <Star size={20} className="text-gold" />
                  <span className="text-gold font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                    Depoimento
                  </span>
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6 italic">
                  "Desde que me cadastrei como ponto de venda, meu faturamento com figurinhas já representa 15% da receita da loja. O suporte é excelente."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">RS</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Roberto Silva</div>
                    <div className="text-white/40 text-xs">Papelaria Central — São Paulo, SP</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-background" id="cadastro">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <img src={LOGO_URL} alt="" className="w-16 h-16 mx-auto mb-6 rounded-xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Comece a revender hoje
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Cadastro gratuito. Sem taxa de adesão. Comece a lucrar com a Copa do Mundo 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-indigo-deep font-bold px-8 h-14 text-base"
                >
                  <a
                    href="https://trocafigurinhas.app/lojas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Store size={18} className="mr-2" />
                    Cadastrar Minha Loja
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-indigo/20 text-indigo-deep hover:bg-indigo/5 font-semibold px-8 h-14 text-base"
                >
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Tenho interesse no programa de revenda de figurinhas."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={18} className="mr-2" />
                    Falar com Comercial
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
