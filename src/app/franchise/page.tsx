"use client";

import * as React from "react";
import {
  ArrowRight,
  CheckCircle,
  Sparkle,
  Truck,
  SealCheck,
  MoonStars,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { InnerHero } from "@/components/roosterx/inner-hero";
import { Reveal, Kicker, StaggerGroup, StaggerItem } from "@/components/roosterx/reveal";
import { BRAND, FRANCHISE_PROOF, FRANCHISE_MODEL } from "@/data/site";
import { cn } from "@/lib/utils";

const MODEL_ICONS = [Truck, SealCheck, MoonStars];

type FieldKey = "name" | "phone" | "email" | "investment";
type FormState = {
  name: string;
  phone: string;
  email: string;
  investment: string;
  message: string;
};
type Errors = Partial<Record<FieldKey, string>>;

export default function FranchisePage() {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    phone: "",
    email: "",
    investment: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (form.phone.trim().length < 7) e.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    const inv = Number(form.investment);
    if (!Number.isFinite(inv) || inv <= 0)
      e.investment = "Please enter your overall investment in Lakhs.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setServerError(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    try {
      const resp = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          investment: Number(form.investment),
          message: form.message.trim() || undefined,
        }),
      });
      const data = await resp.json();
      if (data.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", investment: "", message: "" });
      } else {
        if (data.field && data.message) {
          setErrors({ [data.field]: data.message } as Errors);
        } else {
          setServerError(data.message || "Something went wrong. Please try again.");
        }
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          kicker="Franchise opportunity"
          title={<>Own a RoosterX</>}
          subtitle={
            <>
              Franchise opportunities across India. Minimum investment{" "}
              <span className="font-extrabold text-gold">{BRAND.franchiseMinInvestment} Lakhs.</span>
            </>
          }
        />

        {/* Proof band */}
        <section className="bg-smoke py-14">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <StaggerGroup
              className="grid grid-cols-2 gap-4 lg:grid-cols-4"
              stagger={0.07}
            >
              {FRANCHISE_PROOF.map((p) => (
                <StaggerItem key={p.label}>
                  <div className="flex h-full flex-col items-center gap-1 rounded-[18px] bg-char hairline p-6 text-center">
                    <span className="font-sans font-extrabold text-gold text-3xl sm:text-4xl tabular-nums leading-none">
                      {p.value}
                    </span>
                    <span className="mt-2 text-muted-text text-xs leading-tight">{p.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Model block */}
        <section className="bg-ember py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="mb-10 text-center">
                <Kicker className="block mb-3">Why it works</Kicker>
                <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                  A model built for the city
                </h2>
              </div>
            </Reveal>
            <StaggerGroup className="grid gap-4 md:grid-cols-3" stagger={0.08}>
              {FRANCHISE_MODEL.map((m, i) => {
                const Icon = MODEL_ICONS[i];
                return (
                  <StaggerItem key={m.title}>
                    <div className="flex h-full flex-col rounded-[18px] bg-char hairline p-7">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-flame/15 text-flame">
                        <Icon size={24} weight="regular" />
                      </span>
                      <h3 className="mt-5 font-sans font-bold text-cream text-lg leading-snug">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-muted-text text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

        {/* Enquiry form */}
        <section className="bg-smoke py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div>
                  <Kicker className="block mb-3">Start the conversation</Kicker>
                  <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                    Enquire to open a branch
                  </h2>
                  <p className="mt-5 text-cream/80 leading-relaxed">
                    Tell us about yourself and your budget. Our franchise team reads every enquiry
                    and gets back personally.
                  </p>
                  <ul className="mt-8 space-y-3 text-sm text-cream/85">
                    {[
                      "Minimum investment 30 Lakhs.",
                      "Halal kitchen standard, non-negotiable.",
                      "We help with site, fit-out and launch.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5">
                        <Sparkle size={18} weight="fill" className="mt-0.5 text-gold shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-[18px] bg-char hairline p-6 sm:p-8">
                  {success ? (
                    <div className="flex flex-col items-center gap-4 py-10 text-center">
                      <CheckCircle size={48} weight="fill" className="text-veg" />
                      <h3 className="font-display text-cream text-3xl">Enquiry received</h3>
                      <p className="max-w-sm text-muted-text text-sm">
                        Our franchise team will be in touch shortly. Check your phone and email.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSuccess(false)}
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-char px-6 py-3 font-semibold text-cream hairline hover:bg-[#33220f] transition-colors"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} noValidate className="space-y-5">
                      {/* Name */}
                      <Field label="Name" error={errors.name} htmlFor="f-name">
                        <input
                          id="f-name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "f-name-err" : undefined}
                          className={inputClass(!!errors.name)}
                          placeholder="Your full name"
                        />
                      </Field>

                      {/* Phone */}
                      <Field label="Phone" error={errors.phone} htmlFor="f-phone">
                        <input
                          id="f-phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "f-phone-err" : undefined}
                          className={inputClass(!!errors.phone)}
                          placeholder="e.g. +91 90000 00000"
                        />
                      </Field>

                      {/* Email */}
                      <Field label="Email" error={errors.email} htmlFor="f-email">
                        <input
                          id="f-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "f-email-err" : undefined}
                          className={inputClass(!!errors.email)}
                          placeholder="you@example.com"
                        />
                      </Field>

                      {/* Investment */}
                      <Field
                        label="Overall Investment (in Lakhs)"
                        error={errors.investment}
                        htmlFor="f-investment"
                      >
                        <input
                          id="f-investment"
                          type="number"
                          inputMode="numeric"
                          min={0}
                          step={1}
                          value={form.investment}
                          onChange={(e) => update("investment", e.target.value)}
                          aria-invalid={!!errors.investment}
                          aria-describedby={errors.investment ? "f-investment-err" : undefined}
                          className={inputClass(!!errors.investment)}
                          placeholder="e.g. 35"
                        />
                      </Field>

                      {/* Message (optional) */}
                      <Field label="Message (optional)" htmlFor="f-message">
                        <textarea
                          id="f-message"
                          rows={3}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className={cn(inputClass(false), "resize-none")}
                          placeholder="Preferred city, timeline, any questions..."
                        />
                      </Field>

                      {serverError && (
                        <p className="flex items-start gap-2 rounded-[12px] bg-flame/10 p-3 text-sm text-flame">
                          <Warning size={16} weight="fill" className="mt-0.5 shrink-0" />
                          {serverError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-7 py-4 font-bold text-white transition-[transform,background-color,opacity] duration-200 hover:bg-flame-deep hover:-translate-y-[3px] active:translate-y-0 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-smoke disabled:opacity-60 disabled:pointer-events-none"
                      >
                        {submitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Enquire
                            <ArrowRight size={18} weight="bold" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-muted-text">
                        We only use your details to reply to this enquiry.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-cream"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${htmlFor}-err`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-flame"
        >
          <Warning size={13} weight="fill" />
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-[12px] bg-ember px-4 py-3.5 text-cream placeholder:text-muted-text/60",
    "border transition-[border-color,box-shadow] duration-200",
    "focus:outline-none focus:ring-2 focus:ring-flame focus:ring-offset-2 focus:ring-offset-smoke",
    hasError ? "border-flame" : "border-cream/15",
  );
}
