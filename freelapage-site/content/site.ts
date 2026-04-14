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
    title: "Transformo sua ideia em uma solução digital real, funcional e pronta para uso",
    subtitle:
      "Seja uma landing page, um sistema simples ou um MVP, eu desenvolvo soluções rápidas, modernas e pensadas para gerar resultado.",
    support: "Projetos a partir de R$497 • Entrega rápida",
    primaryCta: "Falar no WhatsApp",
    secondaryCta: "Ver projetos",
  },
  problems: [
    "Você tem uma ideia, mas não sabe como tirar do papel",
    "Seu negócio ainda não tem uma presença digital profissional",
    "Você depende de processos manuais que tomam tempo",
    "Já tentou contratar e não recebeu algo funcional",
    "Precisa de algo rápido, com clareza e resultado",
  ],
  process: [
    {
      title: "Entendimento",
      description: "Mapeio seu objetivo e o problema que precisa ser resolvido.",
    },
    {
      title: "Plano simples",
      description: "Defino um escopo enxuto para entregar valor rápido.",
    },
    {
      title: "Desenvolvimento",
      description: "Construo a solução com foco em usabilidade e performance.",
    },
    {
      title: "Entrega e ajustes",
      description: "Ajustamos os detalhes finais e colocamos no ar.",
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
      name: "Entrada",
      label: "Landing essencial",
      price: "A partir de R$497",
      detail: "Para quem precisa começar rápido com presença digital profissional.",
    },
    {
      name: "Principal",
      label: "Landing estruturada",
      price: "R$897 a R$1.497",
      detail: "Para quem quer uma página mais robusta com narrativa de conversão completa.",
    },
    {
      name: "Expansão",
      label: "MVP ou sistema enxuto",
      price: "A partir de R$1.200",
      detail: "Para validar ideias e reduzir operação manual com fluxo funcional.",
    },
  ],
  differentials: [
    "Rapidez para tirar ideias do papel",
    "Foco em resultado prático, não só visual",
    "Comunicação clara do início ao fim",
    "Código organizado e fácil de evoluir",
    "Visão de negócio além da implementação técnica",
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
      answer: "Projetos simples costumam ser entregues em cerca de 1 semana.",
    },
    {
      question: "Você faz ajustes após a entrega?",
      answer: "Sim. Definimos juntos um período de ajustes para refinamentos finais.",
    },
    {
      question: "Quais tipos de projeto você atende?",
      answer: "Landing pages, MVPs e sistemas enxutos para necessidades específicas.",
    },
  ],
  ctas: {
    mid: "Vamos conversar sobre a sua ideia",
    midSupport: "Em poucos minutos eu te digo o melhor caminho para começar sem complicar.",
    final: "Sua ideia não precisa ficar só no papel",
    action: "Falar no WhatsApp agora",
  },
};
