# Renan | Soluções Digitais Funcionais

## Visão Geral
Este repositório contém o código-fonte da landing page promocional e portfólio para captação de clientes de desenvolvimento web. O foco do projeto é oferecer soluções digitais, como landing pages de alta conversão, MVPs e sistemas enxutos, com uma comunicação direta e focada em negócios.

O site foi redesenhado sob uma visão moderna e premium (estética "dark purple" e glassmorphism) visando transmitir sofisticação, agilidade tecnológica e compromisso com o resultado.

## Stack Tecnológico
O projeto foi desenvolvido no ecossistema moderno do React, priorizando performance estática e animações ricas em detalhes.

- **Framework:** Next.js (App Router)
- **Biblioteca Base:** React 19
- **Estilização:** Tailwind CSS v4
- **Animações e Micro-interações:** Framer Motion e GSAP
- **Tipagem Estrita:** TypeScript

## Identidade Visual e UI/UX
A direção de arte prioriza uma experiência premium contínua:
- **Dark Mode Nativo:** Fundos profundos e escuros (`#05010f`) com glows radiais roxos.
- **Micro-interações:** Componentes com responsividade quase orgânica. Flutuações (floating badges), expansões suaves (accordion) e elevações perceptivas no hover.
- **Glass-borders:** Utilização de técnicas de máscaras de gradientes complexas no CSS para demarcações refinadas nos cards de serviço.
- O manual oficial e as diretrizes estritas de marca estão documentados em `/Contexts/manualdemarca.md`.

## Arquitetura de Conteúdo
A aplicação separa expressamente o design da informação. Todo o conteúdo textual, copys de conversão, links (WhatsApp), métricas de impacto e valores se encontram centralizados no arquivo `/freelapage-site/content/site.ts`. 

Essa decisão técnica facilita testes, alterações de ofertas recorrentes e atualizações das SEO tags sem a necessidade de intervenção direta nos componentes de React da interface estrutural.

## Como Executar Localmente

### Pré-requisitos
- Node.js (v18 ou superior recomendado)
- npm (ou correspondente como pnpm/yarn)

### Passos de Instalação
1. Clone o repositório:
```bash
git clone https://github.com/SeuUsuario/ProjectFreelance.git
```

2. Acesse a pasta da aplicação web:
```bash
cd ProjectFreelance/freelapage-site
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível através de `http://localhost:3000`.

## Build para Produção
O projeto está configurado para a geração otimizada estática (SSG) padrão do Next.js.
Para realizar a compilação:

```bash
npm run build
```
O build valida tipagens com TypeScript e gera arquivos estáticos ultra-leves na pasta `.next/`.

## Licença
Este projeto é de uso privado para fins de portfólio comercial de prestação de serviços enxutos e desenvolvimento independente. Todo o seu conteúdo de branding, textos de autoria ("copy") e layouts conceituais pertencem exclusivamente aos negócios ali representados.
