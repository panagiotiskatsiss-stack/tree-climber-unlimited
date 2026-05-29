import { siteConfig } from "@/lib/site-config";
import { getIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/sections/section-heading";

/** Section 8 — Why Choose Us differentiators (objection removal). */
export function WhyChooseUs() {
  const { differentiators, businessName } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={`The ${businessName} Difference`}
          subtitle="We've built our reputation on safe work, fair prices, and treating every customer like a neighbor."
          onDark
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 transition-colors hover:border-primary/50"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/20">
                  <Icon className="size-6 text-primary" />
                </span>
                <h3 className="mt-4 font-heading text-lg tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
