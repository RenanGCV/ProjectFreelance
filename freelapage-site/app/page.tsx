"use client";

import { ContactForm } from "@/components/sections/contact-form";
import { Accordion } from "@/components/ui/accordion";
import { AnimatedWaveBg } from "@/components/ui/animated-wave-bg";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { PhotoCarousel } from "@/components/ui/photo-carousel";
import { StatsCounter } from "@/components/ui/stats-counter";
import { Cascade, CascadeItem, Float, Reveal } from "@/components/ui/reveal";
import { contactLinks, siteContent } from "@/content/site";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Zap,
  Target,
  MessageSquare,
  Code2,
  Lightbulb,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const differentialIcons = [Zap, Target, MessageSquare, Code2, Lightbulb, Star];

/* ── Section wrapper ── */
function Section({
  id,
  label,
  title,
  titleHighlight,
  subtitle,
  children,
  center = false,
}: {
  id?: string;
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className={`mb-10 sm:mb-14 ${center ? "text-center" : ""}`}>
          {label && (
            <Reveal>
              <span className="glass-border mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
                {label}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.04}>
            <h2 className="text-contrast-strong text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="gradient-text">{titleHighlight}</span>
                </>
              )}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className={`text-contrast-medium mt-4 text-lg ${center ? "mx-auto max-w-2xl" : "max-w-3xl"}`}>
                {subtitle}
              </p>
            </Reveal>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

/* ── Header animation variants ── */
const headerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.22, ease: "easeIn", staggerChildren: 0.06, staggerDirection: -1 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.18, ease: "easeIn" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
};

/* ══════════════════════════════════════════════ */
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
      if (isScrollingDown && currentScrollY > 96) setIsHeaderHidden(true);
      else if (isScrollingUp) setIsHeaderHidden(false);
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

      {/* ── Header flutuante ── */}
      <motion.header
        variants={headerContainerVariants}
        initial="visible"
        animate={isHeaderHidden ? "hidden" : "visible"}
        style={{ pointerEvents: isHeaderHidden ? "none" : "auto" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 will-change-transform"
      >
        <div className="glass-border pointer-events-auto mx-auto w-full max-w-6xl rounded-2xl bg-[#08001e]/80 shadow-xl shadow-black/30 backdrop-blur-md">
          <div className="flex items-center justify-between px-5 py-3.5 sm:px-8">
            <motion.div variants={headerItemVariants}>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-primary">Renan</p>
              <p className="text-sm text-slate-300">Soluções digitais funcionais</p>
            </motion.div>

            <motion.nav
              variants={headerItemVariants}
              className="hidden items-center gap-5 text-sm text-slate-300/90 md:flex"
            >
              {[
                ["Serviços", "#servicos"],
                ["Preços", "#precos"],
                ["Processo", "#como-funciona"],
                ["Projetos", "#projetos"],
                ["FAQ", "#faq"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="transition-colors hover:text-brand-primary">
                  {label}
                </Link>
              ))}
            </motion.nav>

            <motion.div variants={headerItemVariants}>
              <Link
                href={whatsappLink}
                target="_blank"
                className="attention-hover neon-cta cta-highlight depth-3d inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-accent"
              >
                WhatsApp
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="interactive-zone relative z-10 pt-24">

        {/* ══ HERO ══ */}
        <section className="relative min-h-[88vh] py-20 sm:py-28 flex items-center">
          {/* Radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(139,92,246,0.28) 0%, transparent 70%)",
            }}
          />

          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-12 sm:px-8">
            {/* Left col */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Reveal>
                <div className="space-y-7">
                  <motion.span
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-border inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary"
                  >
                    {siteContent.brand.role}
                  </motion.span>

                  <h1 className="text-contrast-strong text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
                    {siteContent.hero.title}{" "}
                    <span className="gradient-text">{siteContent.hero.titleHighlight}</span>
                  </h1>

                  <p className="text-contrast-medium max-w-xl text-lg leading-relaxed">
                    {siteContent.hero.subtitle}
                  </p>

                  <p className="text-sm font-medium text-brand-primary">{siteContent.hero.support}</p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      className="attention-hover neon-cta cta-highlight depth-3d inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-accent"
                    >
                      {siteContent.hero.primaryCta}
                      <ArrowUpRight size={18} />
                    </Link>
                    <Link
                      href="#projetos"
                      className="attention-hover depth-3d inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
                    >
                      {siteContent.hero.secondaryCta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right col — carousel and floating badges */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-8 lg:gap-10">
              <Reveal delay={0.2}>
                <div className="w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
                  <PhotoCarousel />
                </div>
              </Reveal>
              
              <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-end justify-center lg:justify-end gap-3 sm:gap-4">
                {siteContent.hero.badges.map((badge, i) => (
                  <FloatingBadge
                    key={badge.text}
                    icon={badge.icon}
                    text={badge.text}
                    delay={0.3 + i * 0.18}
                    side="right"
                    yOffset={i % 2 === 0 ? -4 : 4}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="py-4 sm:py-6">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <StatsCounter stats={siteContent.stats} />
          </div>
        </section>

        {/* ══ PROBLEMAS ══ */}
        <Section
          id="problemas"
          label="Realidade"
          title="Se você já passou por isso,"
          titleHighlight="você não está sozinho"
          subtitle="Problemas comuns de quem quer tirar uma ideia do papel sem complicação técnica."
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
            {siteContent.problems.map((problem) => (
              <CascadeItem key={problem}>
                <article className="glass-border rounded-2xl bg-brand-surface/50 p-5 backdrop-blur-sm">
                  <p className="text-slate-100">{problem}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        {/* ══ SERVIÇOS ══ */}
        <Section
          id="servicos"
          label="Serviços"
          title="O que eu"
          titleHighlight="entrego para você"
          subtitle="Soluções orientadas a resultado, não a tecnicismo."
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]" stagger={0.1}>
            {siteContent.services.map((service) => (
              <CascadeItem key={service.title}>
                <article className="attention-hover neon-surface depth-3d glass-border rounded-2xl bg-brand-surface/60 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-slate-50">{service.title}</h3>
                  <p className="mt-2 text-slate-300/90">{service.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-primary">{service.price}</p>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        {/* ══ COMO FUNCIONA — Timeline vertical ══ */}
        <Section
          id="como-funciona"
          label="Processo"
          title="Seu caminho do"
          titleHighlight="primeiro contato à entrega"
          subtitle="Processo simples e transparente em quatro etapas."
        >
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="timeline-line absolute left-6 top-0 hidden w-px sm:block"
              style={{ height: "calc(100% - 48px)", top: "24px" }}
            />

            <div className="flex flex-col gap-6 sm:gap-8">
              {siteContent.process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-5 sm:gap-7"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-surface text-sm font-bold text-brand-primary shadow-lg shadow-brand-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <article className="glass-border flex-1 rounded-2xl bg-white/[0.03] p-5 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-slate-50">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══ DIFERENCIAIS com Impact ══ */}
        <Section
          id="diferenciais"
          label="Diferenciais"
          title="O que muda na prática"
          titleHighlight="ao trabalhar comigo"
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]" stagger={0.08}>
            {siteContent.differentials.map((item, i) => {
              const Icon = differentialIcons[i % differentialIcons.length];
              return (
                <CascadeItem key={item.title}>
                  <article className="attention-hover neon-surface depth-3d glass-border flex flex-col rounded-2xl bg-brand-surface/50 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10">
                      <Icon size={20} className="text-brand-primary" />
                    </div>
                    <h3 className="text-base font-bold text-slate-50">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-slate-300">{item.description}</p>
                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                        <CheckCircle2 size={13} className="shrink-0" />
                        {item.impact}
                      </p>
                    </div>
                  </article>
                </CascadeItem>
              );
            })}
          </Cascade>
        </Section>

        {/* ══ PRICING — 3 colunas com featured ══ */}
        <Section
          id="precos"
          label="Investimento"
          title="Simples e"
          titleHighlight="sem pegadinhas"
          subtitle="Cada faixa representa um estágio de resultado para o seu momento."
          center
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]" stagger={0.1}>
            {siteContent.pricing.map((plan) => (
              <CascadeItem key={plan.name}>
                <article
                  className={`depth-3d relative flex flex-col rounded-2xl p-6 transition ${
                    plan.featured
                      ? "glass-border neon-surface bg-brand-primary/10 ring-2 ring-brand-primary/40"
                      : "glass-border bg-white/[0.03]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-4 py-0.5 text-xs font-bold text-white shadow-lg shadow-brand-primary/30">
                      Recomendado
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{plan.name}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-50">{plan.label}</h3>
                  <p className={`mt-4 text-3xl font-extrabold ${plan.featured ? "gradient-text" : "text-brand-primary"}`}>
                    {plan.price}
                  </p>
                  <p className="mt-3 text-sm text-slate-300/90">{plan.detail}</p>

                  <ul className="mt-5 flex flex-col gap-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className={`attention-hover mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? "neon-cta cta-highlight bg-brand-primary text-white hover:bg-brand-accent"
                        : "border border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
                    }`}
                  >
                    Quero este plano
                    <ArrowRight size={15} />
                  </Link>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        {/* ══ PROJETOS ══ */}
        <Section
          id="projetos"
          label="Casos"
          title="Projetos"
          titleHighlight="conceituais"
          subtitle="Exemplos de como o trabalho é pensado com foco no problema e na solução."
        >
          <Cascade className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(270px,1fr))]" stagger={0.11}>
            {siteContent.projects.map((project, index) => (
              <CascadeItem key={project.name}>
                <article className="glass-border flex h-full flex-col rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">
                    Caso 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-50">{project.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                    <span className="font-semibold text-slate-100">Problema:</span> {project.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    <span className="font-semibold text-slate-100">Solução:</span> {project.solution}
                  </p>
                  <div className="mt-4 border-t border-white/10 pt-4 text-xs text-slate-400">
                    Estratégia: clareza da oferta + caminho de ação imediato
                  </div>
                </article>
              </CascadeItem>
            ))}
          </Cascade>
        </Section>

        {/* ══ CTA intermediário ══ */}
        <section className="py-8 sm:py-10">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="attention-hover neon-surface depth-3d glass-border rounded-3xl bg-brand-primary/10 p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-primary">
                  Próximo passo
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-50 sm:text-3xl">
                  {siteContent.ctas.mid}
                </h3>
                <p className="mt-3 max-w-2xl text-slate-300">{siteContent.ctas.midSupport}</p>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="attention-hover neon-cta cta-highlight depth-3d mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-accent"
                >
                  Quero conversar agora
                  <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ FAQ — Accordion ══ */}
        <Section
          id="faq"
          label="FAQ"
          title="Perguntas"
          titleHighlight="frequentes"
          subtitle="Respostas rápidas para acelerar sua decisão."
        >
          <Reveal>
            <Accordion items={siteContent.faq} />
          </Reveal>
        </Section>

        {/* ══ CONTATO ══ */}
        <Section
          id="contato"
          title={siteContent.ctas.final}
          titleHighlight=""
          subtitle="Me explique em poucas linhas o que você precisa e eu te respondo com o melhor caminho para tirar sua ideia do papel."
        >
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(290px,1fr))]">
            <Reveal>
              <div
                data-interactive="true"
                className="glass-border rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-slate-50">{siteContent.ctas.mid}</h3>
                <p className="mt-3 text-slate-300">
                  Projetos iniciando em R$497, com escopo claro e entrega objetiva para gerar
                  resultado mais rápido.
                </p>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="attention-hover neon-cta cta-highlight depth-3d mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-accent"
                >
                  {siteContent.ctas.action}
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <p className="text-sm text-slate-400">
            {siteContent.brand.name} • {siteContent.brand.location}
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            className="text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
          >
            WhatsApp
          </Link>
        </div>
      </footer>

      {/* ── Floating WhatsApp button ── */}
      <Float className="fixed bottom-5 right-5 z-40" duration={3.6} distance={9}>
        <Link
          href={whatsappLink}
          target="_blank"
          aria-label="Abrir WhatsApp"
          className="attention-hover neon-cta cta-highlight depth-3d inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg shadow-black/30 transition hover:bg-brand-accent"
        >
          <MessageCircle size={24} />
        </Link>
      </Float>
    </div>
  );
}
