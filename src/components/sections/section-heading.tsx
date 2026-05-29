import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  onDark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl tracking-tight sm:text-4xl lg:text-[2.75rem]",
          onDark ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-lg", onDark ? "text-gray-300" : "text-gray-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
