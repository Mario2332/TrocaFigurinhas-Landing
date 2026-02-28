/*
  DESIGN: Troca Figurinhas — Main Landing Page
  - Indigo (#4f46e5) primary, Gold (#eab308) accent — matching the app
  - Real logo used in hero and throughout
  - References to the actual app interface
*/
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StatCounter from "@/components/StatCounter";
import {
  Repeat,
  BookOpen,
  MapPin,
  Trophy,
  Zap,
  Users,
  ArrowRight,
  Star,
  Shield,
  Smartphone,
  Download,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/hero-main-e8fLvppRRiYhjP84bzrTpV.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/logo-troca-figurinhas_49bbdbc2.png";

const features = [
  {
    icon: BookOpen,
    title: "Álbum Digital Completo",
    desc: "Gerencie todas as suas figurinhas em um só lugar. Marque as que tem, as repetidas e as que faltam. Acompanhe seu progresso em tempo real com porcentagem de conclusão por seção e geral.",
    highlight: "Progresso visual por seção",
  },
  {
    icon: Repeat,
    title: "Trocas Inteligentes",
    desc: "O algoritmo encontra automaticamente os melhores matches: quem tem o que você precisa e quer o que você tem sobrando. Proponha trocas com um toque e negocie pelo chat integrado.",
    highlight: "Match automático",
  },
  {
    icon: Users,
    title: "Squads de até 10 Amigos",
    desc: "Crie um grupo com seus amigos colecionadores. Vejam os álbuns uns dos outros, troquem com prioridade e completem a coleção juntos. Perfeito para família e escola!",
    highlight: "Trocas prioritárias",
  },
  {
    icon: MapPin,
    title: "Mapa de Trocas ao Vivo",
    desc: "Veja no mapa quem está perto de você e quer trocar presencialmente. Descubra lojas parceiras, pontos de troca oficiais e eventos de figurinhas na sua cidade.",
    highlight: "Geolocalização em tempo real",
  },
  {
    icon: Trophy,
    title: "Rankings, Missões & Sorteios",
    desc: "Complete missões diárias e semanais para ganhar moedas e XP. Suba de nível, desbloqueie conquistas exclusivas e concorra a prêmios reais nos sorteios semanais.",
    highlight: "Prêmios reais",
  },
  {
    icon: Zap,
    title: "Copa 2026 ao Vivo",
    desc: "Acompanhe todos os jogos da Copa em tempo real: placares, tabela de classificação, artilharia e simulador de resultados. Acerte palpites e ganhe moedas extras!",
    highlight: "Palpites com recompensas",
  },
  {
    icon: Shield,
    title: "Seguro & 100% Gratuito",
    desc: "Plataforma segura com autenticação Google. Sem anúncios invasivos, sem compras obrigatórias. Todas as funcionalidades são gratuitas para sempre.",
    highlight: "Sem custos escondidos",
  },
  {
    icon: Smartphone,
    title: "Funciona em Qualquer Dispositivo",
    desc: "Acesse pelo navegador do celular, tablet ou computador. Instale como app nativo (PWA) para acesso rápido com notificações push. Em breve também na Play Store.",
    highlight: "PWA + App Nativo",
  },
];

const steps = [
  {
    num: "01",
    title: "Crie sua conta",
    desc: "Cadastro rápido com Google ou email. Em 30 segundos você já está dentro.",
  },
  {
    num: "02",
    title: "Monte seu álbum",
    desc: "Marque as figurinhas que você tem e as repetidas. O app calcula tudo automaticamente.",
  },
  {
    num: "03",
    title: "Encontre trocas",
    desc: "O algoritmo encontra os melhores matches. Proponha trocas com um toque.",
  },
  {
    num: "04",
    title: "Complete a coleção",
    desc: "Troque presencialmente ou por correio. Acompanhe seu progresso até 100%.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-indigo/3 -z-10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo/5 blur-3xl -z-10" />

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <FadeIn direction="right">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/5 text-indigo text-xs font-semibold mb-6 border border-indigo/10">
                  <Star size={14} className="text-gold" />
                  Copa do Mundo 2026
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-indigo-deep mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Troque figurinhas{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-indigo-light">
                    de forma inteligente
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  O Troca Figurinhas conecta colecionadores de todo o Brasil. Gerencie seu álbum, encontre trocas perfeitas e complete sua coleção mais rápido.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-indigo hover:bg-indigo-light text-white font-semibold px-8 h-12 text-base"
                  >
                    <a href="https://trocafigurinhas.app" target="_blank" rel="noopener noreferrer">
                      Começar Grátis
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-indigo/20 text-indigo-deep hover:bg-indigo/5 font-semibold px-8 h-12 text-base"
                  >
                    <a href="#como-funciona">
                      Como Funciona
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Smartphone size={16} className="text-indigo" />
                    PWA + App Nativo
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Download size={16} className="text-indigo" />
                    100% Gratuito
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo/10 to-gold/10 rounded-3xl blur-2xl -z-10" />
                <img
                  src={HERO_IMG}
                  alt="Troca Figurinhas - App de troca de figurinhas da Copa"
                  className="w-full rounded-2xl shadow-2xl shadow-indigo/10"
                  loading="eager"
                />
                {/* App badge overlay */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-indigo/10 p-3 flex items-center gap-3 border border-border/50">
                  <img src={LOGO_URL} alt="" className="w-12 h-12 rounded-lg" />
                  <div>
                    <div className="text-sm font-bold text-indigo-deep" style={{ fontFamily: "var(--font-heading)" }}>Troca Figurinhas</div>
                    <div className="text-xs text-muted-foreground">Disponível agora</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 lg:py-28 bg-white" id="funcionalidades">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/5 text-indigo text-xs font-semibold mb-4 border border-indigo/10">
                <Zap size={14} className="text-gold" />
                Funcionalidades
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Tudo que você precisa para completar seu álbum
              </h2>
              <p className="text-muted-foreground text-lg">
                8 funcionalidades poderosas que transformam a experiência de colecionar figurinhas.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="group relative p-6 rounded-xl bg-background border border-border/50 hover:border-indigo/20 hover:shadow-lg hover:shadow-indigo/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-indigo/5 flex items-center justify-center mb-4 group-hover:bg-indigo/10 transition-colors">
                    <f.icon size={24} className="text-indigo group-hover:text-indigo-light transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-indigo-deep mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {f.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded-full">
                    <Star size={10} />
                    {f.highlight}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-4 border border-gold/20">
                  <Trophy size={14} />
                  Por que escolher o Troca Figurinhas?
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Mais do que um app — uma comunidade de colecionadores
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-deep mb-1">Complete mais rápido</h4>
                      <p className="text-sm text-muted-foreground">Nosso algoritmo de match encontra trocas perfeitas em segundos. Usuários completam o álbum 3x mais rápido que trocando sozinhos.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-deep mb-1">Troque com confiança</h4>
                      <p className="text-sm text-muted-foreground">Sistema de reputação, chat integrado e histórico de trocas. Você sabe com quem está negociando.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-deep mb-1">Diversão garantida</h4>
                      <p className="text-sm text-muted-foreground">Missões diárias, sorteios semanais, rankings e conquistas. Colecionar figurinhas nunca foi tão divertido.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-deep mb-1">Comunidade nacional</h4>
                      <p className="text-sm text-muted-foreground">Conecte-se com colecionadores de todo o Brasil. Troque presencialmente ou por correio — sem limites geográficos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-indigo/10 rounded-3xl blur-2xl -z-10" />
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-border/50">
                  <div className="text-center mb-6">
                    <img src={LOGO_URL} alt="" className="w-16 h-16 mx-auto rounded-2xl shadow-md mb-4" />
                    <h3 className="text-xl font-bold text-indigo-deep" style={{ fontFamily: "var(--font-heading)" }}>O que nossos usuários dizem</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-indigo/3 rounded-xl p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-gold fill-gold" />)}
                      </div>
                      <p className="text-sm text-gray-700 italic">"Completei meu álbum em 3 semanas! O sistema de trocas é genial."</p>
                      <p className="text-xs text-muted-foreground mt-2">— Lucas, São Paulo</p>
                    </div>
                    <div className="bg-indigo/3 rounded-xl p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-gold fill-gold" />)}
                      </div>
                      <p className="text-sm text-gray-700 italic">"Meus filhos adoram as missões e os sorteios. Virou programa de família!"</p>
                      <p className="text-xs text-muted-foreground mt-2">— Ana, Belo Horizonte</p>
                    </div>
                    <div className="bg-indigo/3 rounded-xl p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-gold fill-gold" />)}
                      </div>
                      <p className="text-sm text-gray-700 italic">"O mapa de trocas mudou tudo. Encontrei 5 colecionadores no meu bairro!"</p>
                      <p className="text-xs text-muted-foreground mt-2">— Rafael, Curitiba</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 lg:py-24 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Números que impressionam
              </h2>
              <p className="text-white/40 text-lg">
                A comunidade Troca Figurinhas cresce a cada dia.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <FadeIn delay={0}>
              <StatCounter end={5000} suffix="+" label="Colecionadores ativos" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <StatCounter end={25000} suffix="+" label="Trocas realizadas" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <StatCounter end={150} suffix="+" label="Cidades alcançadas" />
            </FadeIn>
            <FadeIn delay={0.3}>
              <StatCounter end={98} suffix="%" label="Satisfação dos usuários" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-28 bg-white" id="como-funciona">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Como funciona
              </h2>
              <p className="text-muted-foreground text-lg">
                Em 4 passos simples você já está trocando figurinhas.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15}>
                <div className="relative">
                  <span
                    className="text-7xl font-bold text-indigo/5 absolute -top-4 -left-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.num}
                  </span>
                  <div className="relative pt-8">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-indigo-deep font-bold text-sm mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                      {s.num}
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-deep mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B TEASER ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-indigo-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Para empresas
              </h2>
              <p className="text-muted-foreground text-lg">
                Atraia famílias e aumente o fluxo de clientes com eventos de troca de figurinhas.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <a
                href="/eventos"
                className="group block p-8 rounded-xl bg-white border border-border/50 hover:border-indigo/20 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-deep flex items-center justify-center mb-5">
                  <Users size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-indigo-deep mb-2 group-hover:text-indigo transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  Eventos de Troca
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Ideal para construtoras, concessionárias e shoppings que querem atrair famílias.
                </p>
                <span className="text-sm font-semibold text-indigo flex items-center gap-1">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <a
                href="/pontos-de-troca"
                className="group block p-8 rounded-xl bg-white border border-border/50 hover:border-indigo/20 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-deep flex items-center justify-center mb-5">
                  <MapPin size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-indigo-deep mb-2 group-hover:text-indigo transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  Ponto de Troca Oficial
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Sorveterias, papelarias e bancas podem se tornar pontos oficiais de troca.
                </p>
                <span className="text-sm font-semibold text-indigo flex items-center gap-1">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="/revenda"
                className="group block p-8 rounded-xl bg-white border border-border/50 hover:border-indigo/20 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-deep flex items-center justify-center mb-5">
                  <Zap size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-indigo-deep mb-2 group-hover:text-indigo transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  Revenda de Figurinhas
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Cadastre sua loja e venda álbuns e pacotes de figurinhas com visibilidade no app.
                </p>
                <span className="text-sm font-semibold text-indigo flex items-center gap-1">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 lg:py-28 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.1),transparent_50%)]" />
        <div className="container relative text-center">
          <FadeIn>
            <img src={LOGO_URL} alt="" className="w-20 h-20 mx-auto mb-8 rounded-2xl shadow-lg" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Pronto para completar seu álbum?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Junte-se a milhares de colecionadores que já estão trocando figurinhas de forma inteligente.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-indigo-deep font-bold px-10 h-14 text-lg"
            >
              <a href="https://trocafigurinhas.app" target="_blank" rel="noopener noreferrer">
                Começar Agora — É Grátis
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
