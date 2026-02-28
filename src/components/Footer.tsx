/*
  DESIGN: Troca Figurinhas — Footer
  Dark indigo background matching the app's theme-color (#312e81)
  Gold accents for headings
*/
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/logo-troca-figurinhas_49bbdbc2.png";

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={LOGO_URL}
                alt="Troca Figurinhas"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Troca Figurinhas
                </span>
                <span className="text-[10px] text-white/40 font-medium tracking-wide uppercase">
                  Copa do Mundo 2026
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              A plataforma digital para trocar figurinhas da Copa do Mundo. Gerencie seu álbum, encontre trocas e complete sua coleção.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Produto
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-white/50 hover:text-white transition-colors no-underline">Início</Link></li>
              <li><a href="https://trocafigurinhas.app" className="text-sm text-white/50 hover:text-white transition-colors no-underline" target="_blank" rel="noopener noreferrer">Abrir App</a></li>
              <li><Link href="/eventos" className="text-sm text-white/50 hover:text-white transition-colors no-underline">Eventos de Troca</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Para Empresas
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/eventos" className="text-sm text-white/50 hover:text-white transition-colors no-underline">Eventos Corporativos</Link></li>
              <li><Link href="/pontos-de-troca" className="text-sm text-white/50 hover:text-white transition-colors no-underline">Ponto de Troca Oficial</Link></li>
              <li><Link href="/revenda" className="text-sm text-white/50 hover:text-white transition-colors no-underline">Revenda de Figurinhas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li><a href="https://trocafigurinhas.app/termos" className="text-sm text-white/50 hover:text-white transition-colors no-underline" target="_blank" rel="noopener noreferrer">Termos de Uso</a></li>
              <li><a href="https://trocafigurinhas.app/privacidade" className="text-sm text-white/50 hover:text-white transition-colors no-underline" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Troca Figurinhas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Feito com paixão pelo futebol
          </p>
        </div>
      </div>
    </footer>
  );
}
