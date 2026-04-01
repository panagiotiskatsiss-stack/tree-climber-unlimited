import Image from "next/image";

interface GalleryImage {
  before: string;
  after: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}

export function Gallery({ images, title = "Our Work" }: GalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={image.before}
                    alt={`Before - ${image.alt}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-gray-900/70 px-2 py-1 text-xs font-medium text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={image.after}
                    alt={`After - ${image.alt}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-primary/80 px-2 py-1 text-xs font-medium text-white">
                    After
                  </span>
                </div>
              </div>
              <p className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
