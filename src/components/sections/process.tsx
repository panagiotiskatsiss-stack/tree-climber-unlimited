import { siteConfig } from "@/lib/site-config";
import { getIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/sections/section-heading";

/** Section 10 — Our Process / How It Works (numbered steps). */
export function Process() {
  const { processSteps } = siteConfig;

  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple, Hassle-Free Process"
          subtitle="From your first call to the final cleanup, we make professional tree care easy."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                {/* Connecting line (desktop) */}
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-primary/20 lg:block"
                  />
                )}
                <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-primary text-white shadow-[var(--shadow-cta)]">
                  <Icon className="size-7" />
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-brand-gold text-sm font-extrabold text-brand-dark">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-heading text-base tracking-tight text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
