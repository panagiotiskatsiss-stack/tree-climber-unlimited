import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Users, Shield, DollarSign, Star, Clock, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "15+ Years Experience",
    description: "Over a decade and a half of hands-on tree care expertise you can count on.",
  },
  {
    icon: Shield,
    title: "Safe Work Practices",
    description: "Safety is our top priority on every job — for our crew and your property.",
  },
  {
    icon: DollarSign,
    title: "Honest, Affordable Pricing",
    description: "Free estimates with no hidden fees — you know the cost before we start.",
  },
  {
    icon: Star,
    title: "Trained & Qualified",
    description: "Our team is professionally trained and qualified to handle any tree situation.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Same-day estimates and quick scheduling throughout Central California.",
  },
  {
    icon: HeartHandshake,
    title: "Relationships, Not Transactions",
    description: "We build lasting relationships so you never search for another tree service.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text + Benefits Grid */}
          <div>
            <h2 className="font-heading text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
              Why Homeowners <span className="text-primary">Choose Us</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Not all tree services are created equal. We go above and beyond with professional
              service backed by decades of experience and the kind of personal care you only get
              from a local business.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <benefit.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-brand-dark">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/services/tree-removal.png"
                alt="Professional tree service team at work"
                width={700}
                height={800}
                className="h-[500px] w-full object-cover lg:h-[600px]"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-primary p-6 text-center shadow-xl lg:-left-8">
              <p className="font-heading text-5xl text-white">
                {siteConfig.yearsInBusiness}+
              </p>
              <p className="mt-1 text-sm font-semibold text-white/90">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
