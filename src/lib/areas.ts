import type { ServiceArea, SiteConfig, FAQ } from "@/types";

/**
 * County/region-grouped intro copy. Each group gets DIFFERENT prose so city
 * pages aren't thin boilerplate with the name swapped (SEO-lessons rule).
 * Add a new county key here when expanding into a new region.
 */
const countyIntros: Record<string, (area: ServiceArea, c: SiteConfig) => string> = {
  "Calaveras County": (area, c) =>
    `<p>${c.businessName} is based right here in the heart of Calaveras County, and we've spent over ${c.yearsInBusiness} years caring for the trees of <strong>${area.city}</strong> and the surrounding Sierra Foothills. From the blue oaks and gray pines on rural foothill lots to the towering ponderosas at higher elevations, our crew knows the species, terrain, and fire risk that define this region.</p>
    <p>Steep driveways, drought-stressed pines, bark-beetle damage, and trees crowding homes are everyday work for us in ${area.city}. Whether you need a hazardous tree removed, defensible-space clearing before fire season, routine trimming, or fast storm cleanup, we respond quickly and leave your property spotless — <strong>licensed, insured, and safety-first</strong> on every job.</p>`,
  "Amador County": (area, c) =>
    `<p>Homeowners across <strong>${area.city}</strong> and greater Amador County trust ${c.businessName} for safe, professional tree care. This is Gold Country — rolling oak woodland, historic Highway 49 towns, and wine-country properties where mature oaks and pines need an experienced, careful hand.</p>
    <p>Our ${c.yearsInBusiness}+ years of local experience means we understand the challenges unique to ${area.city}: oak protection considerations, fire-prone hillsides, and aging trees near older homes. We handle it all with the right equipment and a <strong>free, upfront estimate</strong> — removal starting at $500.</p>`,
  "Tuolumne County": (area, c) =>
    `<p>From Sonora to the high country, ${c.businessName} brings ${c.yearsInBusiness} years of professional tree care to <strong>${area.city}</strong> and all of Tuolumne County. The forested foothills and mountain communities here mean tall pines, dense canopy, and real wildfire exposure — conditions that demand a skilled, safety-focused crew.</p>
    <p>We handle hazardous removals on steep terrain, defensible-space thinning, storm and snow-load cleanup, and routine trimming throughout ${area.city}. Every job is fully insured, cleanly finished, and backed by an honest, <strong>free estimate</strong>.</p>`,
  "San Joaquin County": (area, c) =>
    `<p>${c.businessName} extends its trusted tree care down from the foothills into the Central Valley, serving <strong>${area.city}</strong> and San Joaquin County. From established Stockton and Lodi neighborhoods to valley-edge properties, we care for the shade trees, ornamentals, and mature hardwoods that valley homeowners rely on.</p>
    <p>Heat-stressed trees, fast-growing limbs crowding rooflines, and storm damage are common here. With ${c.yearsInBusiness} years of experience, we deliver safe, efficient trimming, removal, and stump grinding in ${area.city} — with upfront pricing and a <strong>free estimate</strong> every time.</p>`,
  "Stanislaus County": (area, c) =>
    `<p>Across <strong>${area.city}</strong> and Stanislaus County, ${c.businessName} is the call valley homeowners make for dependable tree care. From Modesto's tree-lined streets to surrounding ag and residential properties, we keep trees healthy, safe, and out of harm's way.</p>
    <p>Our ${c.yearsInBusiness}+ years of experience cover it all in ${area.city}: removals of large valley oaks and ornamentals, structural trimming, stump grinding, and rapid storm response. Fully licensed and insured, with a clean job site and a <strong>free, no-obligation estimate</strong> on every project.</p>`,
};

function fallbackIntro(area: ServiceArea, c: SiteConfig): string {
  return `<p>${c.businessName} proudly serves <strong>${area.city}, ${area.state}</strong> with professional, fully insured tree care. With over ${c.yearsInBusiness} years of local experience, our crews handle tree removal, trimming, stump grinding, and storm cleanup safely and cleanly.</p>
  <p>Every ${area.city} job starts with a <strong>free on-site estimate</strong> and an honest, upfront price. We treat your property like our own and don't consider the work done until you're completely satisfied.</p>`;
}

export function getAreaIntro(area: ServiceArea, config: SiteConfig): string {
  const fn = area.county ? countyIntros[area.county] : undefined;
  return (fn ?? fallbackIntro)(area, config);
}

/** Nearby cities in the same county/region — used for local internal context. */
export function getNearbyAreas(area: ServiceArea, config: SiteConfig): ServiceArea[] {
  return config.serviceAreas
    .filter((a) => a.slug !== area.slug && (!area.county || a.county === area.county))
    .slice(0, 4);
}

/** 5 city-specific FAQs with FAQ schema (SEO-lessons rule). */
export function getAreaFaqs(area: ServiceArea, config: SiteConfig): FAQ[] {
  const region = area.county ?? `${area.state}`;
  return [
    {
      question: `Do you offer tree service in ${area.city}, ${area.state}?`,
      answer: `Yes — ${area.city} is part of our core service area. ${config.businessName} provides <strong>tree removal, trimming, stump grinding, and storm cleanup</strong> throughout ${area.city} and the surrounding ${region} communities, with free estimates on every job.`,
    },
    {
      question: `How fast can you get to my ${area.city} property?`,
      answer: `For most ${area.city} jobs we can schedule within a few days, and we offer <strong>same-day emergency response</strong> for hazardous or storm-damaged trees. Call ${config.phone} and we'll find a time that works.`,
    },
    {
      question: `Is ${config.businessName} licensed and insured to work in ${area.city}?`,
      answer: `Absolutely. We are <strong>fully licensed and insured</strong>, carrying liability and workers' compensation coverage, so your ${area.city} property and our crew are protected on every job.`,
    },
    {
      question: `Do I need a permit to remove a tree in ${area.city}?`,
      answer: `Some ${region} municipalities require permits for trees over a certain size. We know the local rules and <strong>handle the permit process for you</strong> whenever one is needed in ${area.city}.`,
    },
    {
      question: `How much does tree removal cost in ${area.city}?`,
      answer: `It depends on the tree's size, location, and condition — so we provide a <strong>free, no-obligation on-site estimate</strong> for every ${area.city} job. You'll get a clear, upfront price with no hidden fees before any work starts.`,
    },
  ];
}
