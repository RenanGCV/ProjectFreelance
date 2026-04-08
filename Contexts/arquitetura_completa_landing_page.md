# 🏗️ Arquitetura Completa — Landing Page Renan

## 🎯 Objetivo
Criar uma base técnica moderna, rápida, escalável e organizada para uma landing page de alta conversão.

---

# ⚙️ Stack Tecnológica

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP (uso pontual)
- React Hook Form + Zod
- next/font

---

# 🧠 Princípios da Arquitetura

## 1. Organização por domínio
Separar por seções da página, não apenas por tipo de arquivo.

## 2. Conteúdo desacoplado
Textos e dados devem ficar fora dos componentes.

## 3. Componentes equilibrados
Nem gigantes, nem microcomponentes excessivos.

## 4. Animação como camada
A página deve funcionar sem animações.

## 5. Mobile-first
Construção pensada primeiro para dispositivos móveis.

---

# 📁 Estrutura de Pastas

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts

  components/
    ui/
      button.tsx
      container.tsx
      section-header.tsx
      input.tsx
      textarea.tsx

    layout/
      header.tsx
      footer.tsx
      section.tsx

    sections/
      hero/
      problems/
      solution/
      process/
      services/
      pricing/
      differentials/
      projects/
      faq/
      cta/
      contact/

  content/
    site.ts
    services.ts
    faq.ts
    projects.ts

  lib/
    utils.ts
    seo.ts
    animations.ts

  hooks/
    use-scroll-section.ts

  types/
    service.ts
    project.ts
    faq.ts

  styles/
    tokens.ts

  assets/
    images/
```

---

# 🧱 Estrutura da Página

```
<Header />
<HeroSection />
<ProblemsSection />
<SolutionSection />
<ProcessSection />
<ServicesSection />
<PricingSection />
<DifferentialsSection />
<ProjectsSection />
<FaqSection />
<CtaSection />
<ContactForm />
<Footer />
<WhatsAppFloat />
```

---

# 🎨 Sistema de Design

## Cores

- background: #034159
- surface: #025951
- card: #02735E
- accent: #038C3E
- primary: #0CF25D

## Tipografia

- Títulos: Poppins
- Texto: Inter

---

# 📱 Responsividade

- Mobile-first
- Layout em grid simples
- CTA sempre visível
- Espaçamento consistente

---

# ⚡ Performance

- Evitar excesso de animações
- Usar next/image
- Usar next/font
- Evitar libs desnecessárias
- Lazy loading quando necessário

---

# 🔍 SEO

- Metadata no layout
- HTML semântico
- sitemap.ts
- robots.ts

---

# 🧾 Formulário

Campos:
- nome
- contato
- mensagem

Validação com Zod

---

# 🎬 Animações

## Framer Motion
- entrada de elementos
- hover

## GSAP
- hero
- efeitos especiais

---

# 🧠 Convenções

- PascalCase para componentes
- nomes claros
- evitar arquivos genéricos

---

# 🧩 Clean Code

## Fazer
- componentes organizados
- conteúdo separado
- reutilização inteligente

## Evitar
- abstração precoce
- duplicação
- lógica misturada

---

# 🚀 Escalabilidade

Permite evolução para:
- blog
- portfólio
- CMS

---

# 📌 Ordem de Desenvolvimento

1. Base (tema + layout)
2. Seções
3. Animações
4. Formulário + SEO
5. Refinamento

---

# 🧠 Regra Final

Construir sempre com foco em:
- clareza
- conversão
- performance
- simplicidade

