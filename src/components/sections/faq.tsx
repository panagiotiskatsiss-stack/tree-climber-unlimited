import type { FAQ as FAQType } from "@/types";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  faqs: FAQType[];
  title?: string;
  eyebrow?: string;
  subtitle?: string;
}

/**
 * Section 14 — FAQ accordion. Answers render HTML (AEO direct-answer +
 * <strong> keywords). FAQPage schema is injected separately at page level.
 */
export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  subtitle,
}: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-site max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <Accordion className="mt-10" defaultValue={[0]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={index} className="border-b border-gray-200">
              <AccordionTrigger className="py-5 text-left font-heading text-lg tracking-tight text-gray-900 normal-case aria-expanded:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="pb-5 text-[15px] leading-relaxed text-gray-600 [&_strong]:font-semibold [&_strong]:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
