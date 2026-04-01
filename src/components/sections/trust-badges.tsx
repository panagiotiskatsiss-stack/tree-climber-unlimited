import { Shield, Award, Clock, CheckCircle, Star, Leaf } from "lucide-react";

interface TrustBadgesProps {
  variant?: "dark" | "light";
  className?: string;
}

const badges = [
  { icon: Shield, label: "Safety Guarantee" },
  { icon: Award, label: "Quality Guarantee" },
  { icon: Clock, label: "Production Guarantee" },
  { icon: CheckCircle, label: "15+ Years Experience" },
  { icon: Star, label: "Trained & Qualified" },
  { icon: Leaf, label: "Safe Work Practices" },
];

export function TrustBadges({ variant = "light", className }: TrustBadgesProps) {
  const isDark = variant === "dark";

  return (
    <section className={`${isDark ? "bg-brand-dark py-10" : "bg-white py-10 border-y border-gray-100"} ${className || ""}`}>
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-2.5 text-center">
              <div className={`flex size-14 items-center justify-center rounded-full ${isDark ? "bg-primary/15" : "bg-primary/10"}`}>
                <badge.icon className="size-6 text-primary" />
              </div>
              <span className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
