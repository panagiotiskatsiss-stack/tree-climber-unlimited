"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Phone } from "lucide-react";

type Variant = "hero" | "section" | "popup";

interface QuoteFormProps {
  variant?: Variant;
  className?: string;
}

const MESSAGE_LIMIT = 300;

export function QuoteForm({ variant = "section", className }: QuoteFormProps) {
  const { services, ctaText, phone } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const onDark = variant === "hero";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields
    if (data.get("company")) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center",
          onDark ? "bg-white text-gray-900" : "bg-primary/5",
          className
        )}
      >
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="font-heading text-2xl text-gray-900">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your request and will get back to you shortly. Need help now?
        </p>
        <a href={phoneHref}>
          <Button className="mt-1 h-11 gap-2 rounded-full px-6 font-bold">
            <Phone className="size-4" />
            {phone}
          </Button>
        </a>
      </div>
    );
  }

  const labelCls = cn(
    "mb-1 block text-sm font-semibold",
    onDark ? "text-gray-800" : "text-gray-800"
  );
  const inputCls =
    "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div
      className={cn(
        variant === "hero" && "rounded-2xl bg-white p-6 shadow-[var(--shadow-deep)] sm:p-7",
        variant === "section" && "rounded-2xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-natural)] sm:p-8",
        variant === "popup" && "p-1",
        className
      )}
    >
      {variant !== "popup" && (
        <div className="mb-5">
          <h2 className="font-heading text-2xl tracking-tight text-gray-900 sm:text-3xl">
            {ctaText}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Fast response. No obligation. We&apos;ll be in touch shortly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
        {/* Honeypot — display:none keeps it out of the a11y tree AND the tab order */}
        <label className="hidden">
          Company (leave blank)
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>

        <div>
          <label htmlFor="qf-name" className={labelCls}>
            Full Name
          </label>
          <input id="qf-name" name="name" type="text" required placeholder="John Smith" className={inputCls} />
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <div>
            <label htmlFor="qf-phone" className={labelCls}>
              Phone
            </label>
            <input id="qf-phone" name="phone" type="tel" required placeholder="(908) 555-0123" className={inputCls} />
          </div>
          <div>
            <label htmlFor="qf-email" className={labelCls}>
              Email
            </label>
            <input id="qf-email" name="email" type="email" required placeholder="you@email.com" className={inputCls} />
          </div>
        </div>

        <div>
          <label htmlFor="qf-service" className={labelCls}>
            Service Needed
          </label>
          <select id="qf-service" name="service" defaultValue="" className={cn(inputCls, "cursor-pointer")}>
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="qf-message" className={labelCls}>
            How can we help? <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={3}
            maxLength={MESSAGE_LIMIT}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a bit about the job…"
            className={cn(inputCls, "resize-none")}
          />
          <p className="mt-1 text-right text-xs text-gray-400">
            {message.length}/{MESSAGE_LIMIT}
          </p>
        </div>

        {status === "error" && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errorMsg}</p>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 w-full rounded-full text-base font-bold uppercase tracking-wide"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending…
            </>
          ) : (
            ctaText
          )}
        </Button>

        <p className="text-center text-xs text-gray-500">
          Prefer to talk? Call{" "}
          <a href={phoneHref} className="font-semibold text-primary hover:underline">
            {phone}
          </a>
        </p>
      </form>
    </div>
  );
}
