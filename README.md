# Troca Figurinhas — Landing Pages

Landing pages para o app **Troca Figurinhas** (Copa do Mundo 2026).

## Páginas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Landing principal — SEO e marketing do app |
| `/eventos` | Eventos | B2B — Eventos de troca (construtoras, concessionárias) |
| `/pontos-de-troca` | Pontos de Troca | B2B — Assinatura para lojas parceiras |
| `/revenda` | Revenda | Cadastro gratuito de pontos de venda |

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Wouter (roteamento)

## Deploy no Cloudflare Pages

1. Conecte este repositório ao Cloudflare Pages
2. **Build command:** `pnpm build`
3. **Build output directory:** `dist`
4. **Node.js version:** 22 (adicionar variável `NODE_VERSION=22`)

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

## Domínio

Configurado para `site.trocafigurinhas.app` via CNAME no Cloudflare DNS.
