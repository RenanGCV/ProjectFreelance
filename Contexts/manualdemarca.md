# Manual de Marca - Landing Page Renan (Padrão 2026 — Rev. Purple)

## Objetivo da Marca
Transmitir uma identidade premium, moderna e confiável com foco em:
- profissionalismo
- clareza
- agilidade
- conversão

## Direção Visual
- Linguagem visual escura com acentos roxos/violeta vibrantes
- Contraste alto para leitura rápida
- Componentes com profundidade e glow neon controlado (roxo)
- Atmosfera tech premium com radial glows no fundo (sem grade visível)
- Fundo quase preto com toque roxo profundo

## Paleta de Cores

### Cores Principais
- `#05010f` — Deep Black Purple (fundo principal)
- `#120a2e` — Deep Violet (superfícies profundas / brand-surface)
- `#1a0a3d` — Dark Indigo (cards / brand-card)
- `#7c3aed` — Violet (accent / hover)
- `#a855f7` — Purple (CTA e destaque / brand-primary)
- `#f0eeff` — Lavender White (texto claro / foreground)

### Cores Secundárias
- `#08001a` — Midnight Purple (topo do gradiente)
- `#0a0320` — Dark Space (meio do gradiente)
- `#c084fc` — Light Purple (gradient-text highlight)
- `#e9d5ff` — Light Lavender (gradient-text start)
- `#9333ea` — Grape (wave layer intermediária)
- `#6d28d9` — Dark Violet (sombras e glows secundários)

### Gradiente de Texto (títulos em destaque)
```
linear-gradient(135deg, #e9d5ff 0%, #c084fc 50%, #a855f7 100%)
```

## Regras de Uso
- CTA principal sempre em `#a855f7` (roxo vibrante) com texto branco
- Fundo base sempre escuro (`#05010f`) com radial glows roxos
- Glass border via CSS mask-composite — gradiente roxo nas bordas
- Glow neon apenas em pontos de atenção (CTA, oferta, pricing featured)
- Cards: `bg-brand-surface/50` ou `bg-white/[0.03]` com `backdrop-blur`
- Títulos de seção: palavra em destaque com `.gradient-text` (roxo gradiente)
- Badge/label de seção: pill pequeno em `bg-brand-primary/10` com texto roxo

## Tipografia
- Família de referência: Sora + Manrope (web app)
  - Título: **Sora** (600, 700, 800)
  - Corpo: **Manrope** (400, 500, 600)
- Títulos de hero: `text-4xl` → `text-6xl`, `font-extrabold`, `leading-[1.06]`
- Título de seção: `text-3xl` → `text-5xl`, `font-extrabold`
- Body: `text-base` → `text-lg`, `leading-relaxed`

## Componentes

### Botões
- Primário: `rounded-full`, fundo `#a855f7`, texto branco, `neon-cta` + `cta-highlight`
- Secundário: `rounded-full`, borda `border-white/20`, fundo `bg-white/5`
- Hover: `translateY(-2px)` + glow roxo mais intenso

### Cards
- Borda: `.glass-border` (CSS mask — gradiente roxo no contorno)
- Fundo: `bg-white/[0.03]` ou `bg-brand-surface/50` + `backdrop-blur-sm`
- Hover: `.neon-surface` — `border-purple-500/40` + glow roxo 32px
- Efeito 3D: `.depth-3d` — `perspective(1000px) translateY(-5px) rotateX(3deg)`

### Badges/Labels
- Pill de seção: `rounded-full`, `bg-brand-primary/10`, borda `.glass-border`
- Floating badges (hero): fundo `bg-white/5`, `.glass-border`, texto `text-slate-100`
- Badge "Recomendado" (pricing): fundo `#a855f7`, texto branco, posição `-top-3`

### FAQ
- Accordion animado com `AnimatePresence` + height animation (framer-motion)
- Chevron rotaciona 180° ao expandir
- Expansão suave com `cubic-bezier(0.22, 1, 0.36, 1)`

### Formulário
- Visual limpo, foco de campo com acento roxo

## Background

### Body
```css
radial-gradient(80% 55% at 50% -10%, rgba(139,92,246,0.38) 0%, transparent 65%),
radial-gradient(55% 40% at 85% 55%, rgba(168,85,247,0.16) 0%, transparent 55%),
radial-gradient(45% 35% at 15% 70%, rgba(109,40,217,0.12) 0%, transparent 50%),
linear-gradient(180deg, #08001a 0%, #0a0320 40%, #06010f 100%)
```

### Waves animadas (canvas)
- Camada 1: `#7c3aed` (Violet) — alpha 0.22
- Camada 2: `#a855f7` (Purple) — alpha 0.18
- Camada 3: `#9333ea` (Grape) — alpha 0.12
- Posição: base entre 68%–79% da altura
- Blur: 8px + scale 105% para suavizar

## Animações
- usar `framer-motion` com foco em fluidez
- Movimentos curtos e suaves: `duration: 0.45–0.6s`, `ease: [0.22, 1, 0.36, 1]`
- Scroll reveal: `whileInView` + `once: true` + stagger em cascata
- Float infinito: `y: [0, -8, 0]`, `repeat: Infinity`, `repeatType: "mirror"`
- Respeitar `prefers-reduced-motion`

## Stats (KPIs)
- Contador animado com `useSpring` + `useInView`
- Gradiente de texto (`stat-number`): `#e9d5ff → #c084fc → #a855f7`
- Grid 2×2 mobile / 4×1 desktop, fundo `bg-background/60 backdrop-blur`

## Timeline "Como Funciona"
- Linha vertical conectora: gradiente roxo `rgba(168,85,247,0.6) → transparent`
- Numeração circular: borda `border-brand-primary/40`, glow `shadow-brand-primary/20`
- Cards alternados: slide-left (par) / slide-right (ímpar) via `whileInView`

## Percepção Desejada
O usuário deve perceber:
- confiança e sofisticação tech
- clareza comercial e objetividade
- tecnologia premium aplicada ao resultado
- identidade visual coerente e memorável

Evitar:
- excesso de brilho ou cores saturadas concorrentes
- excesso de elementos concorrendo por atenção
- visual genérico ou verde (paleta antiga)
- seções com fundo sólido muito diferente do fundo global

## Resumo de Posicionamento
"Soluções digitais com linguagem premium purple-dark, foco em resultado e experiência tech moderna"
