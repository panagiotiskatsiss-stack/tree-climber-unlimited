"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  autoplayDelay?: number;
  showArrows?: boolean;
  /** Tailwind classes for the container (gap etc.) */
  containerClassName?: string;
  className?: string;
  arrowOnDark?: boolean;
}

export function Carousel({
  children,
  options,
  autoplayDelay = 4000,
  showArrows = true,
  containerClassName,
  className,
  arrowOnDark = false,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", ...options },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi]);

  const arrowCls = cn(
    "flex size-11 items-center justify-center rounded-full border transition-colors disabled:opacity-40",
    arrowOnDark
      ? "border-white/25 bg-white/10 text-white hover:bg-primary hover:border-primary"
      : "border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-primary hover:text-white hover:border-primary"
  );

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={cn("flex", containerClassName)}>{children}</div>
      </div>

      {showArrows && (
        <div className="mt-7 flex items-center justify-center gap-3">
          <button type="button" onClick={scrollPrev} disabled={!canScrollPrev} aria-label="Previous" className={arrowCls}>
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" onClick={scrollNext} disabled={!canScrollNext} aria-label="Next" className={arrowCls}>
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}
