import { Phone, ClipboardList, FileText, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call or Request a Quote",
    description: "Reach out by phone or fill out our quick form. We respond fast.",
  },
  {
    icon: ClipboardList,
    title: "Free On-Site Assessment",
    description: "We come out, evaluate your trees, and explain exactly what's needed.",
  },
  {
    icon: FileText,
    title: "Receive Your Estimate",
    description: "Clear, upfront pricing — no hidden fees, no surprises.",
  },
  {
    icon: Hammer,
    title: "Our Crew Gets to Work",
    description: "Professional execution with safety-first protocols on every job.",
  },
  {
    icon: CheckCircle,
    title: "Walkthrough & Satisfaction",
    description: "We walk you through the completed work. Not happy? We make it right.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Our Process: <span className="text-primary">Simple & Stress-Free</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            We make tree care easy. From your first call to final cleanup, here&apos;s how it works.
          </p>
        </div>

        <div className="mt-14">
          {/* Steps with connecting line */}
          <div className="relative mx-auto max-w-3xl">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-0 hidden h-full w-[3px] bg-primary/30 sm:block" />

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex gap-6">
                  {/* Step number + icon */}
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25">
                    <step.icon className="size-6" />
                  </div>

                  {/* Content */}
                  <div className="rounded-xl bg-brand-card p-6 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-2xl text-primary">
                        0{index + 1}
                      </span>
                      <h3 className="font-heading text-lg text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
