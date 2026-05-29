"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/forms/quote-form";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface QuotePopupProps {
  triggerLabel?: string;
  triggerClassName?: string;
  triggerVariant?: "default" | "outline" | "secondary" | "ghost";
}

/**
 * CTA button that opens a slide-in quote form. Use anywhere a popup
 * conversion path is wanted (header, sections). The hero uses the
 * inline <QuoteForm variant="hero" /> directly instead.
 */
export function QuotePopup({
  triggerLabel,
  triggerClassName,
  triggerVariant = "default",
}: QuotePopupProps) {
  const { ctaText, businessName } = siteConfig;

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant={triggerVariant}
            className={cn("font-bold", triggerClassName)}
          />
        }
      >
        {triggerLabel ?? ctaText}
      </SheetTrigger>
      <SheetContent side="right" className="w-full overflow-y-auto p-6 sm:max-w-md">
        <SheetHeader className="p-0">
          <SheetTitle className="font-heading text-2xl tracking-tight">
            {ctaText}
          </SheetTitle>
          <SheetDescription>
            Tell us about your project and {businessName} will get right back to you.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-5">
          <QuoteForm variant="popup" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
