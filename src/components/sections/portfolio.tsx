import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  { src: "/images/portfolio/project-1.jpg", alt: "Tree removal project" },
  { src: "/images/portfolio/project-2.jpg", alt: "Tree pruning work" },
  { src: "/images/portfolio/project-3.jpg", alt: "Storm damage cleanup" },
  { src: "/images/portfolio/project-4.jpg", alt: "Stump grinding completed" },
  { src: "/images/portfolio/project-5.jpg", alt: "Hazard tree removal" },
  { src: "/images/portfolio/project-6.jpg", alt: "Professional tree service" },
];

const beforeAfter = [
  { before: "/images/before-after/before-1.png", after: "/images/before-after/after-1.png", label: "Full Tree Removal" },
  { before: "/images/before-after/before-2.png", after: "/images/before-after/after-2.png", label: "Storm Damage Cleanup" },
  { before: "/images/before-after/before-3.png", after: "/images/before-after/after-3.png", label: "Overgrown Yard Clearing" },
  { before: "/images/before-after/before-4.png", after: "/images/before-after/after-4.png", label: "Stump Grinding" },
];

export function Portfolio() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
            See the <span className="text-primary">Difference</span> We Make
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Real results from real jobs across the Sierra Foothills and Central Valley. We believe in showing, not just telling.
          </p>
        </div>

        {/* Before / After Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {beforeAfter.map((pair) => (
            <div key={pair.label} className="overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={pair.before}
                    alt={`Before - ${pair.label}`}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover sm:h-56"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src={pair.after}
                    alt={`After - ${pair.label}`}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover sm:h-56"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-brand-dark">{pair.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-14">
          <h3 className="font-heading text-center text-2xl text-brand-dark sm:text-3xl">
            Recent <span className="text-primary">Projects</span>
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.src}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={500}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
