import { ContactForm } from "@/components/sections/contact-form";
import { HeroOrbs } from "@/components/ui/hero-orbs";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/content/site";
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

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
    <section id={id} className={`py-18 sm:py-24 ${surface === "alt" ? "bg-brand-surface/35" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 max-w-3xl text-slate-200/90">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const whatsappLink = "https://wa.me/5511999999999";

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#034159]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-primary">Renan</p>
            <p className="text-sm text-slate-200">Solucoes digitais funcionais</p>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-slate-200/90 md:flex">
            <Link href="#servicos" className="hover:text-brand-primary">
              Servicos
            </Link>
            <Link href="#diferenciais" className="hover:text-brand-primary">
              Diferenciais
            </Link>
            <Link href="#projetos" className="hover:text-brand-primary">
              Projetos
            </Link>
            <Link href="#faq" className="hover:text-brand-primary">
              FAQ
            </Link>
          </nav>

          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-accent"
          >
            WhatsApp
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-20 sm:py-28">
          <HeroOrbs />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage: "radial-gradient(circle at 30% 25%, black, transparent 75%)",
            }}
          />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:grid-cols-12 sm:px-8">
            <Reveal className="sm:col-span-7">
              <div className="space-y-7">
                <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-slate-100">
                  {siteContent.brand.role}
                </p>
                <h1 className="text-4xl font-extrabold leading-[1.04] text-slate-50 sm:text-6xl">
                  {siteContent.hero.title}
                </h1>
                <p className="max-w-2xl text-lg text-slate-200/90">{siteContent.hero.subtitle}</p>
                <p className="text-sm font-medium text-brand-primary">{siteContent.hero.support}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
                  >
                    {siteContent.hero.primaryCta}
                    <ArrowUpRight size={18} />
                  </Link>
                  <Link
                    href="#projetos"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
                  >
                    {siteContent.hero.secondaryCta}
                  </Link>
                </div>

                <div className="grid max-w-xl grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-slate-300">Entrega</p>
                    <p className="text-xl font-bold text-brand-primary">~7 dias</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-slate-300">Entrada</p>
                    <p className="text-xl font-bold text-brand-primary">R$497+</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-slate-300">Foco</p>
                    <p className="text-xl font-bold text-brand-primary">Resultado</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="sm:col-span-5">
              <div className="relative rounded-[28px] border border-white/10 bg-black/20 p-7 shadow-2xl shadow-black/25 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-primary">Direcao</p>
                <h2 className="mt-2 text-2xl font-bold">Tecnologia acessivel, com impacto de negocio</h2>
                <p className="mt-3 text-slate-200/90">
                  O cliente final nao quer um site bonito. Ele quer mais contatos, validacao rapida
                  e operacao mais simples. E isso que guia cada decisao desta pagina.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-200">
                  {siteContent.differentials.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-6">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                "Menos enrolacao, mais entrega funcional",
                "Tecnologia com objetivo de negocio",
                "Escopo claro e comunicacao direta",
                "Conversao acima de vaidade visual",
              ].map((line) => (
                <p
                  key={line}
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
          title="Se voce ja passou por isso, voce nao esta sozinho"
          subtitle="Problemas comuns de quem quer tirar uma ideia do papel sem complicacao tecnica."
          surface="alt"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {siteContent.problems.map((problem) => (
              <article key={problem} className="rounded-2xl border border-white/15 bg-[#034159]/70 p-5">
                <p className="text-slate-100">{problem}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="solucao"
          title="Eu transformo sua ideia em algo real"
          subtitle="Meu foco nao e apenas desenvolver, e entregar algo funcional e pronto para uso."
        >
          <div className="rounded-2xl border border-white/15 bg-brand-card/70 p-7">
            <p className="max-w-3xl text-lg text-slate-100">
              Clareza de escopo, entrega enxuta e aplicacao pratica desde o primeiro dia. Sem
              enrolacao e sem excesso de complexidade para quem precisa de resultado rapido.
            </p>
          </div>
        </Section>

        <Section id="como-funciona" title="Como funciona" subtitle="Processo simples em quatro etapas." surface="alt">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.process.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/15 bg-black/15 p-5">
                <p className="text-sm font-semibold text-brand-primary">Etapa {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-50">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-200/90">{step.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="servicos" title="Servicos" subtitle="Oferta orientada a resultado, nao a tecnicismo.">
          <div className="grid gap-4 sm:grid-cols-6">
            {siteContent.services.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-2xl border border-white/15 bg-brand-surface/70 p-6 ${index === 1 ? "sm:col-span-6 lg:col-span-3" : "sm:col-span-3 lg:col-span-3"}`}
              >
                <h3 className="text-xl font-bold text-slate-50">{service.title}</h3>
                <p className="mt-2 text-slate-100/90">{service.description}</p>
                <p className="mt-4 text-sm font-semibold text-brand-primary">{service.price}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="valor" title={siteContent.value.title} subtitle={siteContent.value.description} surface="alt">
          <div className="grid gap-4 sm:grid-cols-3">
            {siteContent.value.bullets.map((item) => (
              <article key={item} className="rounded-2xl border border-white/15 bg-black/20 p-5">
                <p className="text-slate-100">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="precos"
          title="Oferta e precificacao estrategica"
          subtitle="Sem tabela fria: cada faixa representa um estagio de resultado para o seu momento."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {siteContent.pricing.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-white/15 bg-brand-surface/65 p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-300">{plan.name}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-50">{plan.label}</h3>
                <p className="mt-4 text-2xl font-extrabold text-brand-primary">{plan.price}</p>
                <p className="mt-3 text-sm text-slate-200/90">{plan.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="diferenciais" title="Diferenciais" subtitle="O que muda na pratica ao trabalhar comigo." surface="alt">
          <div className="grid gap-4 sm:grid-cols-2">
            {siteContent.differentials.map((item) => (
              <article key={item} className="rounded-2xl border border-white/15 bg-black/20 p-5">
                <p className="flex items-start gap-2 text-slate-100">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                  <span>{item}</span>
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projetos"
          title="Projetos conceituais"
          subtitle="Exemplos de como o trabalho e pensado com foco no problema e na solucao."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {siteContent.projects.map((project, index) => (
              <article key={project.name} className="rounded-2xl border border-white/15 bg-black/15 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">Caso 0{index + 1}</p>
                <h3 className="text-xl font-bold text-slate-50">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-200/90">
                  <span className="font-semibold text-slate-50">Problema:</span> {project.problem}
                </p>
                <p className="mt-2 text-sm text-slate-200/90">
                  <span className="font-semibold text-slate-50">Solucao:</span> {project.solution}
                </p>
                <div className="mt-4 border-t border-white/15 pt-4 text-xs text-slate-300">
                  Estrategia: clareza da oferta + caminho de acao imediato
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="rounded-3xl border border-brand-primary/40 bg-brand-primary/10 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-primary">CTA intermediario</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-50">{siteContent.ctas.mid}</h3>
              <p className="mt-3 max-w-2xl text-slate-200/90">{siteContent.ctas.midSupport}</p>
              <Link
                href={whatsappLink}
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
              >
                Quero conversar agora
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Section id="faq" title="FAQ" subtitle="Respostas rapidas para acelerar sua decisao." surface="alt">
          <div className="grid gap-4">
            {siteContent.faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/15 bg-[#034159]/70 p-6">
                <h3 className="text-lg font-bold text-slate-50">{item.question}</h3>
                <p className="mt-2 text-slate-200/90">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contato"
          title={siteContent.ctas.final}
          subtitle="Me explique em poucas linhas o que voce precisa e eu te respondo com o melhor caminho para tirar sua ideia do papel."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-black/15 p-6">
              <h3 className="text-2xl font-bold text-slate-50">{siteContent.ctas.mid}</h3>
              <p className="mt-3 text-slate-200/90">
                Projetos iniciando em R$497, com escopo claro e entrega objetiva para gerar
                resultado mais rapido.
              </p>
              <Link
                href={whatsappLink}
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
              >
                {siteContent.ctas.action}
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/15 py-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <p className="text-sm text-slate-200/90">
            {siteContent.brand.name} • {siteContent.brand.location}
          </p>
          <Link href={whatsappLink} target="_blank" className="text-sm font-semibold text-brand-primary">
            WhatsApp
          </Link>
        </div>
      </footer>

      <Link
        href={whatsappLink}
        target="_blank"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-slate-950 shadow-lg shadow-black/30 transition hover:bg-brand-accent"
      >
        <MessageCircle size={24} />
      </Link>
    </div>
  );
}
