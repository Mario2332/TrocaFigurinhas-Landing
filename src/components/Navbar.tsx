/*
  DESIGN: Troca Figurinhas — Navigation
  Uses the real app logo (two sticker cards with swap arrows)
  Indigo primary color matching the app
*/
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161665215/UcLgPNbjbEtvrAdJ9SREq7/logo-troca-figurinhas_49bbdbc2.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/eventos", label: "Eventos" },
  { href: "/pontos-de-troca", label: "Pontos de Troca" },
  { href: "/revenda", label: "Revenda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <img
            src={LOGO_URL}
            alt="Troca Figurinhas"
            className="w-10 h-10 rounded-lg object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-lg font-bold tracking-tight text-indigo-deep"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Troca Figurinhas
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
              Copa do Mundo 2026
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors no-underline ${
                location === link.href
                  ? "text-indigo bg-indigo/5"
                  : "text-muted-foreground hover:text-indigo hover:bg-indigo/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-indigo hover:bg-indigo-light text-white font-semibold px-6"
          >
            <a href="https://trocafigurinhas.app" target="_blank" rel="noopener noreferrer">
              Abrir App
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-indigo-deep"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border/50 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors no-underline ${
                  location === link.href
                    ? "text-indigo bg-indigo/5"
                    : "text-muted-foreground hover:text-indigo"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border/50 mt-2">
              <Button
                asChild
                className="w-full bg-indigo hover:bg-indigo-light text-white font-semibold"
              >
                <a href="https://trocafigurinhas.app" target="_blank" rel="noopener noreferrer">
                  Abrir App
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
