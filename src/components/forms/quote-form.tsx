"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface QuoteFormProps {
  variant?: "hero" | "section";
}

export function QuoteForm({ variant = "hero" }: QuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: "",
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please call us directly.");
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us directly.");
    }
  }

  const isHero = variant === "hero";

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center justify-center rounded-2xl p-8 text-center ${isHero ? "bg-brand-dark/95 ring-1 ring-white/10 min-h-[400px]" : "border border-green-200 bg-green-50"}`}>
        <CheckCircle className={`mb-4 size-14 ${isHero ? "text-primary" : "text-green-600"}`} />
        <h3 className={`text-xl font-bold ${isHero ? "text-white" : "text-gray-900"}`}>
          Thank You!
        </h3>
        <p className={`mt-2 ${isHero ? "text-gray-200" : "text-gray-600"}`}>
          We&apos;ll get back to you shortly. For immediate help, call{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="font-bold text-primary hover:underline"
          >
            {siteConfig.phone}
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-primary underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className={isHero ? "rounded-2xl bg-brand-dark/95 p-6 shadow-2xl ring-1 ring-white/10 sm:p-8" : "rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"}>
      <h3 className={`font-heading text-2xl tracking-wide ${isHero ? "text-white" : "text-brand-dark"}`}>
        Get Your Free Quote
      </h3>
      <p className={`mt-1 text-sm ${isHero ? "text-gray-400" : "text-gray-500"}`}>
        No obligation. We&apos;ll get back to you fast.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        {status === "error" && errorMessage && (
          <div className="flex items-center gap-2 rounded-lg bg-red-500/20 p-2.5 text-sm text-red-200">
            <AlertCircle className="size-4 shrink-0" />
            {errorMessage}
          </div>
        )}

        <input
          type="text"
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary ${
            isHero
              ? "bg-white text-gray-900 placeholder:text-gray-400"
              : "border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400"
          }`}
        />

        <input
          type="tel"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary ${
            isHero
              ? "bg-white text-gray-900 placeholder:text-gray-400"
              : "border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400"
          }`}
        />

        <input
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary ${
            isHero
              ? "bg-white text-gray-900 placeholder:text-gray-400"
              : "border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400"
          }`}
        />

        <textarea
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className={`w-full resize-none rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 focus:ring-primary ${
            isHero
              ? "bg-white text-gray-900 placeholder:text-gray-400"
              : "border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400"
          }`}
        />

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full cursor-pointer rounded-xl text-base font-bold uppercase tracking-wide"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Get Free Estimate
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
