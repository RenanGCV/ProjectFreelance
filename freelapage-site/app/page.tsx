"use client";

import { ContactForm } from "@/components/sections/contact-form";
import { AnimatedWaveBg } from "@/components/ui/animated-wave-bg";
import { AvailabilityChip } from "@/components/ui/availability-chip";
import { HeroOrbs } from "@/components/ui/hero-orbs";
import { PhotoCarousel } from "@/components/ui/photo-carousel";
import { LottiePlayer } from "@/components/ui/lottie-player";
import { Cascade, CascadeItem, Float, Reveal } from "@/components/ui/reveal";
import { contactLinks, siteContent } from "@/content/site";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Section({
  id,
  title,
  subtitle,
  children,
  surface,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  surface?: "default" | "alt";
}) {
  return (
    <section id={id} className={`py-18 sm:py-24 ${surface === "alt" ? "" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-8 sm:mb-12">
          <Reveal>
            <h2 className="text-contrast-strong text-2xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          </Reveal>
          {subtitle ? (
            <Reveal delay={0.08}>
              <p className="text-contrast-medium mt-4 max-w-3xl">{subtitle}</p>
            </Reveal>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

const headerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.22,
      ease: "easeIn" as const,
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.18, ease: "easeIn" as const } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" as const } },
};

export default function Home() {
  const whatsappLink = contactLinks.whatsapp;
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeaderState = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 32) {
        setIsHeaderHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollY.current + 8;
      const isScrollingUp = currentScrollY < lastScrollY.current - 8;

      if (isScrollingDown && currentScrollY > 96) {
        setIsHeaderHidden(true);
      } else if (isScrollingUp) {
        setIsHeaderHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(updateHeaderState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative flex flex-col">
      <AnimatedWaveBg />
      {/* ── Header flutuante com bordas arredondadas e animação de cascata ── */}
      <motion.header
        variants={headerContainerVariants}
        initial="visible"
        animate={isHeaderHidden ? "hidden" : "visible"}
        style={{ pointerEvents: isHeaderHidden ? "none" : "auto" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 will-change-transform"
      >
        <div className="pointer-events-auto mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-[#022a3a]/80 shadow-lg shadow-black/20 backdrop-blur-md">
          <div className="flex items-center justify-between px-5 py-3.5 sm:px-8">

            {/* Logo */}
            <motion.div variants={headerItemVariants}>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-primary">Renan</p>
              <p className="text-sm text-slate-200">Soluções digitais funcionais</p>
            </motion.div>

            {/* Nav */}
            <motion.nav
              variants={headerItemVariants}
              className="hidden items-center gap-5 text-sm text-slate-200/90 md:flex"
            >
              <Link href="#servicos" className="transition-colors hover:text-brand-primary">
                Serviços
              </Link>
              <Link href="#precos" className="transition-colors hover:text-brand-primary">
                Preços
              </Link>
              <Link href="#diferenciais" className="transition-colors hover:text-brand-primary">
                Diferenciais
              </Link>
              <Link href="#projetos" className="transition-colors hover:text-brand-primary">
                Projetos
              </Link>
              <Link href="#faq" className="transition-colors hover:text-brand-primary">
                FAQ
              </Link>
              <Link href="#contato" className="transition-colors hover:text-brand-primary">
                Contato
              </Link>
            </motion.nav>

            {/* CTA */}
            <motion.div variants={headerItemVariants}>
              <Link
                href={whatsappLink}
                target="_blank"
                className="attention-hover neon-cta cta-highlight depth-3d inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-accent"
              >
                WhatsApp
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.header>

      <main className="interactive-zone relative z-10 pt-24">
        <section className="relative py-20 sm:py-28">
          <HeroOrbs />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-12 sm:px-8">
            <Reveal className="lg:col-span-7">
              <div className="space-y-7">
                <p
                  data-interactive="true"
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-slate-100"
                >
                  {siteContent.brand.role}
                </p>
                <h1 className="text-contrast-strong text-4xl font-extrabold leading-[1.04] sm:text-6xl">
                  {siteContent.hero.title}
                </h1>
                <p className="text-contrast-medium max-w-2xl text-lg">{siteContent.hero.subtitle}</p>
                <p className="text-contrast-medium text-sm font-medium text-brand-primary">{siteContent.hero.support}</p>
                <AvailabilityChip />

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="attention-hover neon-cta cta-highlight depth-3d inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
                  >
                    {siteContent.hero.primaryCta}
                    <ArrowUpRight size={18} />
                  </Link>
                  <Link
                    href="#projetos"
                    className="attention-hover depth-3d inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
                  >
                    {siteContent.hero.secondaryCta}
                  </Link>
                </div>

                <div className="grid max-w-xl grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 text-center">
                  <Float duration={4.4} delay={0.05} distance={6}>
                    <div className="depth-3d rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-slate-300">Entrega</p>
                      <p className="text-xl font-bold text-brand-primary">~7 dias</p>
                    </div>
                  </Float>
                  <Float duration={4.8} delay={0.15} distance={7}>
                    <div className="depth-3d rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-slate-300">Entrada</p>
                      <p className="text-xl font-bold text-brand-primary">R$497+</p>
                    </div>
                  </Float>
                  <Float duration={5.2} delay={0.25} distance={6}>
                    <div className="depth-3d rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-slate-300">Foco</p>
                      <p className="text-xl font-bold text-brand-primary">Resultado</p>
                    </div>
                  </Float>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="flex flex-col gap-16">
                <PhotoCarousel />
                <div className="-mx-6 sm:-mx-8 lg:-mx-10">
                  <LottiePlayer />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-6">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
              {[
                "Menos enrolação, mais entrega funcional",
                "Tecnologia com objetivo de negócio",
                "Escopo claro e comunicação direta",
                "Conversão acima de vaidade visual",
              ].map((line) => (
                <p
                  key={line}
                  data-interactive="true"
                  className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-xs uppercase tracking-[0.12em] text-slate-200"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="problemas"
          title="Se você já passou por isso, você não está sozinho"
          subtitle="Problemas comuns de quem quer tirar uma ideia do papel sem complicação técnica."
          surface="alt"
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
            {siteContent.problems.map((problem) => (
              <CascadeItem key={problem}>
                <article className="rounded-2xl border border-white/15 bg-[#034159]/70 p-5">
                  <p className="text-slate-100">{problem}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        <Section
          id="solucao"
          title="Eu transformo sua ideia em algo real"
          subtitle="Meu foco não é apenas desenvolver, é entregar algo funcional e pronto para uso."
        >
          <div data-interactive="true" className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-2xl border border-white/15 bg-brand-card/70 p-7">
            <p className="text-lg text-slate-100">
              Clareza de escopo, entrega enxuta e aplicação prática desde o primeiro dia. Sem
              enrolação e sem excesso de complexidade para quem precisa de resultado rápido.
            </p>
            <div className="flex justify-center -mx-4 md:mx-0">
               <LottiePlayer 
                 src="https://lottie.host/2c81dd2a-68d6-40d1-aa8e-5335d726789a/i6GIwMWC8e.lottie" 
                 className="w-full max-w-[300px]" 
               />
            </div>
          </div>
        </Section>

        <Section id="como-funciona" title="Como funciona" subtitle="Processo simples em quatro etapas." surface="alt">
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]" stagger={0.1}>
            {siteContent.process.map((step, index) => (
              <CascadeItem key={step.title}>
                <article className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-sm font-semibold text-brand-primary">Etapa {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-50">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-200/90">{step.description}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        <Section id="servicos" title="Serviços" subtitle="Oferta orientada a resultado, não a tecnicismo.">
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]" stagger={0.1}>
            {siteContent.services.map((service) => (
              <CascadeItem key={service.title}>
                <article
                  className="attention-hover neon-surface depth-3d rounded-2xl border border-white/15 bg-brand-surface/70 p-6"
                >
                  <h3 className="text-xl font-bold text-slate-50">{service.title}</h3>
                  <p className="mt-2 text-slate-100/90">{service.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-primary">{service.price}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        <Section id="valor" title={siteContent.value.title} subtitle={siteContent.value.description} surface="alt">
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {siteContent.value.bullets.map((item) => (
              <article key={item} className="rounded-2xl border border-white/15 bg-black/20 p-5">
                <p className="text-slate-100">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="precos"
          title="Oferta e precificação estratégica"
          subtitle="Sem tabela fria: cada faixa representa um estágio de resultado para o seu momento."
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]" stagger={0.11}>
            {siteContent.pricing.map((plan) => (
              <CascadeItem key={plan.name}>
                <article className="attention-hover neon-surface depth-3d rounded-2xl border border-white/15 bg-brand-surface/65 p-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">{plan.name}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-50">{plan.label}</h3>
                  <p className="mt-4 text-2xl font-extrabold text-brand-primary">{plan.price}</p>
                  <p className="mt-3 text-sm text-slate-200/90">{plan.detail}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        <Section id="diferenciais" title="Diferenciais" subtitle="O que muda na prática ao trabalhar comigo." surface="alt">
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]" stagger={0.1}>
            {siteContent.differentials.map((item) => (
              <CascadeItem key={item}>
                <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                  <p className="flex items-start gap-2 text-slate-100">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                    <span>{item}</span>
                  </p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>


        <Section
          id="projetos"
          title="Projetos conceituais"
          subtitle="Exemplos de como o trabalho é pensado com foco no problema e na solução."
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]" stagger={0.11}>
            {siteContent.projects.map((project, index) => (
              <CascadeItem key={project.name}>
                <article className="rounded-2xl border border-white/15 bg-black/15 p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">Caso 0{index + 1}</p>
                  <h3 className="text-xl font-bold text-slate-50">{project.name}</h3>
                  <p className="mt-3 text-sm text-slate-200/90">
                    <span className="font-semibold text-slate-50">Problema:</span> {project.problem}
                  </p>
                  <p className="mt-2 text-sm text-slate-200/90">
                    <span className="font-semibold text-slate-50">Solução:</span> {project.solution}
                  </p>
                  <div className="mt-4 border-t border-white/15 pt-4 text-xs text-slate-300">
                    Estratégia: clareza da oferta + caminho de ação imediato
                  </div>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="attention-hover neon-surface depth-3d rounded-3xl border border-brand-primary/40 bg-brand-primary/10 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-primary">CTA intermediário</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-50">{siteContent.ctas.mid}</h3>
              <p className="mt-3 max-w-2xl text-slate-200/90">{siteContent.ctas.midSupport}</p>
              <Link
                href={whatsappLink}
                target="_blank"
                className="attention-hover neon-cta cta-highlight depth-3d mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
              >
                Quero conversar agora
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Section id="faq" title="FAQ" subtitle="Respostas rápidas para acelerar sua decisão." surface="alt">
          <Cascade className="grid gap-4" stagger={0.1}>
            {siteContent.faq.map((item) => (
              <CascadeItem key={item.question}>
                <article className="rounded-2xl border border-white/15 bg-[#034159]/70 p-6">
                  <h3 className="text-lg font-bold text-slate-50">{item.question}</h3>
                  <p className="mt-2 text-slate-200/90">{item.answer}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        <Section
          id="contato"
          title={siteContent.ctas.final}
          subtitle="Me explique em poucas linhas o que você precisa e eu te respondo com o melhor caminho para tirar sua ideia do papel."
        >
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(290px,1fr))]">
            <div data-interactive="true" className="rounded-2xl border border-white/15 bg-black/15 p-6">
              <h3 className="text-2xl font-bold text-slate-50">{siteContent.ctas.mid}</h3>
              <p className="mt-3 text-slate-200/90">
                Projetos iniciando em R$497, com escopo claro e entrega objetiva para gerar
                resultado mais rápido.
              </p>
              <Link
                href={whatsappLink}
                target="_blank"
                className="attention-hover neon-cta cta-highlight depth-3d mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
              >
                {siteContent.ctas.action}
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/15 py-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <p className="text-sm text-slate-200/90">
            {siteContent.brand.name} • {siteContent.brand.location}
          </p>
          <Link href={whatsappLink} target="_blank" className="text-sm font-semibold text-brand-primary">
            WhatsApp
          </Link>
        </div>
      </footer>

      <Float className="fixed bottom-5 right-5 z-40" duration={3.6} distance={9}>
        <Link
          href={whatsappLink}
          target="_blank"
          aria-label="Abrir WhatsApp"
          className="attention-hover neon-cta cta-highlight depth-3d inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-slate-950 shadow-lg shadow-black/30 transition hover:bg-brand-accent"
        >
          <MessageCircle size={24} />
        </Link>
      </Float>
    </div>
  );
}
