"use client";

import { contactLinks } from "@/content/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  contato: z.string().min(5, "Informe um contato válido"),
  mensagem: z.string().min(10, "Descreva melhor seu projeto"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      contato: "",
      mensagem: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    const text = `Nome: ${values.nome}\nContato: ${values.contato}\nMensagem: ${values.mensagem}`;
    window.open(contactLinks.whatsappWithText(text), "_blank");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="depth-3d grid gap-4 rounded-2xl border border-white/15 bg-black/10 p-6">
      <label className="grid gap-1">
        <span className="text-sm text-slate-200">Nome</span>
        <input
          {...register("nome")}
          className="rounded-xl border border-white/20 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-primary focus:outline-none"
          placeholder="Seu nome"
        />
        {errors.nome ? <span className="text-xs text-red-300">{errors.nome.message}</span> : null}
      </label>

      <label className="grid gap-1">
        <span className="text-sm text-slate-200">Contato</span>
        <input
          {...register("contato")}
          className="rounded-xl border border-white/20 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-primary focus:outline-none"
          placeholder="WhatsApp ou e-mail"
        />
        {errors.contato ? <span className="text-xs text-red-300">{errors.contato.message}</span> : null}
      </label>

      <label className="grid gap-1">
        <span className="text-sm text-slate-200">Mensagem</span>
        <textarea
          {...register("mensagem")}
          rows={4}
          className="rounded-xl border border-white/20 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-primary focus:outline-none"
          placeholder="Me conte seu objetivo e o que você precisa"
        />
        {errors.mensagem ? <span className="text-xs text-red-300">{errors.mensagem.message}</span> : null}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="attention-hover neon-cta cta-highlight depth-3d rounded-xl bg-brand-primary px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Enviar e falar no WhatsApp"}
      </button>

      {isSubmitSuccessful ? (
        <p className="text-sm text-emerald-300">Perfeito. Agora só confirmar os detalhes no WhatsApp.</p>
      ) : null}
    </form>
  );
}
