"use client";

import { useState } from "react";
import type { FAQ as FAQType } from "@/types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs: FAQType[];
  title?: string;
  variant?: "light" | "dark";
}

function FAQItem({ faq, isOpen, onToggle, variant }: { faq: FAQType; isOpen: boolean; onToggle: () => void; variant: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <div className={cn("overflow-hidden rounded-xl transition-all", isDark ? "bg-brand-card" : "bg-white shadow-sm")}>
      <button
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors",
          isOpen && (isDark ? "bg-primary" : "bg-primary"),
        )}
      >
        <span className={cn(
          "text-base font-semibold",
          isOpen ? "text-white" : (isDark ? "text-white" : "text-brand-dark")
        )}>
          {faq.question}
        </span>
        <ChevronDown className={cn(
          "size-5 shrink-0 transition-transform duration-300",
          isOpen ? "rotate-180 text-white" : (isDark ? "text-gray-400" : "text-gray-400")
        )} />
      </button>
      <div className={cn(
        "grid transition-all duration-300",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}>
        <div className="overflow-hidden">
          <div className={cn("px-6 py-5", isDark ? "border-t border-brand-border text-gray-300" : "border-t border-gray-100 text-gray-600")}>
            <p className="text-[15px] leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", variant = "dark" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = variant === "dark";

  if (faqs.length === 0) return null;

  return (
    <section className={cn("py-20 lg:py-28", isDark ? "bg-brand-dark" : "bg-gray-50")}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={cn("font-heading text-3xl sm:text-4xl lg:text-5xl", isDark ? "text-white" : "text-brand-dark")}>
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
