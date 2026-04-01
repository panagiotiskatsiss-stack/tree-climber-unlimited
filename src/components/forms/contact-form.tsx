"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const { services } = siteConfig;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Basic validation
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
          service,
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error || "Something went wrong. Please call us directly or try again."
        );
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please call us directly or try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 size-12 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-gray-600">
          We&apos;ll get back to you as soon as possible. If you need immediate
          help, call us at{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.phone}
          </a>
          .
        </p>
        <Button
          className="mt-6 cursor-pointer"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && errorMessage && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="contact-name"
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-11 focus-visible:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Phone <span className="text-red-500">*</span>
        </label>
        <Input
          id="contact-phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="h-11 focus-visible:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11 focus-visible:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-service"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Service Needed
        </label>
        <Select value={service} onValueChange={(val) => setService(val ?? "")}>
          <SelectTrigger id="contact-service" className="h-11 w-full focus-visible:ring-primary">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <Textarea
          id="contact-message"
          placeholder="Tell us about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="min-h-[100px] focus-visible:ring-primary"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full cursor-pointer text-base font-semibold"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
