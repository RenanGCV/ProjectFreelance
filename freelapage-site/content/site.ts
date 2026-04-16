export const siteConfig = {
  // TODO: substituir pela URL real do site antes de publicar
  siteUrl: "https://renan-solutions.com",
  whatsappNumber: "5521972661951",
};

export const contactLinks = {
  whatsapp: `https://wa.me/${siteConfig.whatsappNumber}`,
  whatsappWithText: (text: string) =>
    `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
};

export const siteContent = {
  brand: {
    name: "Renan",
    role: "Especialista em transformar ideias em soluções digitais funcionais",
    location: "Atendimento remoto",
  },
  hero: {
    title: "Transformo sua ideia em uma solução digital real",
    titleHighlight: "funcional e pronta para uso",
    subtitle:
      "Seja uma landing page, um sistema simples ou um MVP, eu desenvolvo soluções rápidas, modernas e pensadas para gerar resultado.",
    support: "Projetos a partir de R$497 • Entrega rápida",
    primaryCta: "Falar no WhatsApp",
    secondaryCta: "Ver projetos",
    badges: [
      { icon: "✦", text: "Entrega em ~7 dias" },
      { icon: "✓", text: "Projetos com foco em resultado" },
      { icon: "↗", text: "Presença digital profissional" },
    ],
  },
  stats: [
    { value: 7, suffix: " dias", label: "Prazo médio de entrega" },
    { value: 100, suffix: "%", label: "Projetos entregues no prazo" },
    { value: 497, prefix: "R$", suffix: "+", label: "Entrada acessível" },
    { value: 10, suffix: "+", label: "Soluções construídas" },
  ],
  problems: [
    "Você tem uma ideia, mas não sabe como tirar do papel",
    "Seu negócio ainda não tem uma presença digital profissional",
    "Você depende de processos manuais que tomam tempo",
    "Já tentou contratar e não recebeu algo funcional",
    "Precisa de algo rápido, com clareza e resultado",
  ],
  process: [
    {
      title: "Conversa inicial",
      description: "Mapeio seu objetivo e o problema que precisa ser resolvido.",
    },
    {
      title: "Plano simples",
      description: "Defino um escopo enxuto para entregar valor rápido sem surpresas.",
    },
    {
      title: "Desenvolvimento",
      description: "Construo a solução com foco em usabilidade e performance real.",
    },
    {
      title: "Entrega e ajustes",
      description: "Ajustamos os detalhes finais e colocamos no ar juntos.",
    },
  ],
  value: {
    title: "Valor antes do preço",
    description:
      "Você recebe uma solução pensada para gerar ação: contato, validação e organização do seu fluxo.",
    bullets: [
      "Escopo direto ao ponto para não desperdiçar tempo",
      "Entrega funcional, não apenas visual",
      "Estrutura pronta para evoluir conforme seu negócio cresce",
    ],
  },
  services: [
    {
      title: "Landing pages",
      description: "Páginas focadas em conversão e presença digital profissional.",
      price: "A partir de R$497",
    },
    {
      title: "MVPs simples",
      description: "Protótipos funcionais para validar ideias com usuários reais.",
      price: "A partir de R$1.200",
    },
    {
      title: "Sistemas enxutos",
      description: "Automação de fluxos e organização de operações do dia a dia.",
      price: "Sob escopo",
    },
  ],
  pricing: [
    {
      name: "Básico",
      label: "Landing essencial",
      price: "A partir de R$497",
      detail: "Para quem precisa começar rápido com presença digital profissional.",
      featured: false,
      features: [
        "Landing page responsiva",
        "Formulário de contato",
        "Link para WhatsApp",
        "Entrega em ~7 dias",
      ],
    },
    {
      name: "Recomendado",
      label: "Landing estruturada",
      price: "R$897 a R$1.497",
      detail: "Para quem quer uma página mais robusta com narrativa de conversão completa.",
      featured: true,
      features: [
        "Tudo do Básico +",
        "Seções de conversão completas",
        "Animações premium",
        "SEO otimizado",
        "Ajustes pós-entrega",
      ],
    },
    {
      name: "Avançado",
      label: "MVP ou sistema enxuto",
      price: "A partir de R$1.200",
      detail: "Para validar ideias e reduzir operação manual com fluxo funcional.",
      featured: false,
      features: [
        "Sistema/MVP funcional",
        "Back-end simples",
        "Integrações necessárias",
        "Escopo personalizado",
      ],
    },
  ],
  differentials: [
    {
      title: "Entrega rápida",
      description: "Rapidez para tirar ideias do papel sem enrolação.",
      impact: "Resultado em semanas, não meses.",
    },
    {
      title: "Foco em resultado",
      description: "Objetivo de negócio acima de tecnicismo e vaidade visual.",
      impact: "Código que converte, não só que imprime.",
    },
    {
      title: "Comunicação clara",
      description: "Alinhamento direto do início ao fim, sem surpresas.",
      impact: "Sem ruído, sem ansiedade de cliente.",
    },
    {
      title: "Código organizado",
      description: "Estrutura limpa e fácil de evoluir com o tempo.",
      impact: "Fácil de manter e expandir depois.",
    },
    {
      title: "Visão de negócio",
      description: "Penso além da implementação técnica, no impacto real.",
      impact: "Solução certa para o problema certo.",
    },
    {
      title: "Presença profissional",
      description: "Design moderno que transmite credibilidade imediata.",
      impact: "Primeira impressão que converte.",
    },
  ],
  projects: [
    {
      name: "Validador de serviço local",
      problem: "Profissional autônomo sem presença digital e sem canal de captação.",
      solution: "Landing page com oferta clara, CTA para WhatsApp e formulário enxuto.",
    },
    {
      name: "Pré-agendamento para atendimento",
      problem: "Atendimento manual causando perda de leads e demora nas respostas.",
      solution: "Fluxo simples com formulário e mensagem automatizada de entrada.",
    },
    {
      name: "MVP para ideia de nicho",
      problem: "Ideia boa sem protótipo funcional para teste real com usuários.",
      solution: "MVP de baixa complexidade para validar adesão rapidamente.",
    },
  ],
  faq: [
    {
      question: "Qual o prazo médio de entrega?",
      answer:
        "Projetos simples costumam ser entregues em cerca de 1 semana. Projetos mais completos como MVPs ou sistemas levam de 2 a 4 semanas dependendo do escopo definido.",
    },
    {
      question: "Você faz ajustes após a entrega?",
      answer:
        "Sim. Definimos juntos um período de ajustes após a entrega para refinamentos finais. Bugs e problemas de funcionamento são corrigidos sem custo adicional.",
    },
    {
      question: "Quais tipos de projeto você atende?",
      answer:
        "Landing pages, MVPs e sistemas enxutos para necessidades específicas. Atendo tanto pessoas físicas quanto empresas que precisam de soluções digitais funcionais rápidas.",
    },
    {
      question: "Como é feito o pagamento?",
      answer:
        "50% na aprovação do escopo e 50% na entrega. Aceito Pix, transferência bancária e cartão de crédito. Para projetos maiores, parcelamentos podem ser negociados.",
    },
    {
      question: "Preciso ter algum conhecimento técnico?",
      answer:
        "Não. Minha comunicação é clara e sem jargão técnico. Você só precisa saber o que quer resolver — eu cuido do resto e explico tudo de forma simples durante o processo.",
    },
  ],
  ctas: {
    mid: "Vamos conversar sobre a sua ideia",
    midSupport: "Em poucos minutos eu te digo o melhor caminho para começar sem complicar.",
    final: "Sua ideia não precisa ficar só no papel",
    action: "Falar no WhatsApp agora",
  },
};
