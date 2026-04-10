# Freelapage Site

Landing page one-page para captação de clientes do Renan, com foco em conversão via WhatsApp.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP
- React Hook Form + Zod

## Como rodar

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run start`: execução da build
- `npm run lint`: lint com ESLint

## Estrutura principal

- `app/page.tsx`: composição das seções da landing
- `content/site.ts`: copy, dados de oferta e configurações globais (URL e WhatsApp)
- `components/sections/contact-form.tsx`: formulário com validação e redirecionamento para WhatsApp
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`: SEO e metadados

## Boas práticas adotadas

- Conteúdo desacoplado dos componentes
- Configurações globais centralizadas em `content/site.ts`
- Validação de formulário no cliente com Zod
- SEO técnico básico com `sitemap` e `robots`
