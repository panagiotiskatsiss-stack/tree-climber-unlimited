import { siteConfig } from "@/lib/site-config";
import { getIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/sections/section-heading";

/** Section 12 — special offers / discounts (removes price objections). */
export function SpecialOffers() {
  const { specialOffers, businessName } = siteConfig;
  if (specialOffers.length === 0) return null;

  return (
    <section className="bg-white pb-4 pt-2 lg:pb-8">
      <div className="container-site">
        <SectionHeading eyebrow="Offers" title={`Save With ${businessName}`} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialOffers.map((offer) => {
            const Icon = getIcon(offer.icon);
            return (
              <div
                key={offer.title}
                className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg tracking-tight text-gray-900">
                    {offer.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
