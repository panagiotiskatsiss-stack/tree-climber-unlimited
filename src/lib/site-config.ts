import type { SiteConfig } from "@/types";

// =============================================================
// CLIENT: Tree Climber Unlimited — San Andreas, CA
// Single source of truth. NOTE: email is a placeholder
// (info@treeclimberunlimited.com) — confirm/set up the inbox.
// =============================================================

export const siteConfig: SiteConfig = {
  businessName: "Tree Climber Unlimited",
  tagline: "Trusted Tree Care",
  phone: "(209) 660-3450",
  email: "info@treeclimberunlimited.com",
  domain: "treeclimberunlimited.com",
  logo: "/images/logo.webp",
  ownerPhoto: "/images/owner.jpg",
  videoUrl: "",

  primaryCity: "San Andreas",
  primaryState: "CA",
  address: { street: "23 W St Charles St", city: "San Andreas", state: "CA", zip: "95249" },
  geo: { latitude: 38.196, longitude: -120.6805 },
  businessHours: { days: "Monday – Saturday", hours: "7:00 AM – 6:00 PM" },

  yearsInBusiness: 15,
  ctaText: "Get a Free Estimate",
  showPricing: true,
  guarantees: [
    "Safety guaranteed on every job",
    "Quality workmanship you can count on",
    "Productive, efficient service — no wasted time or money",
  ],
  usps: [
    "15 years of hands-on experience — trained and qualified in all aspects of tree work",
    "Safety-first approach on every single job",
    "Free estimates with honest, upfront pricing — removal starts at $500",
    "Serving greater Central California — from Calaveras County to Stockton and Modesto",
  ],
  whyChooseUs: [
    "Passionate, hard-working professionals who appreciate every person and every job we take on",
    "15 years of expertise, dependability, and a commitment to the highest safety standards",
    "Trained and qualified in all aspects of tree work, from routine trimming to hazardous removals",
    "Trustworthy and responsive — when you call, we answer; when we quote, we honor it",
  ],
  targetCustomer:
    "Homeowners and property managers across Central California seeking trustworthy, responsive tree care.",
  heroBadges: [
    { icon: "Clock", label: "Free Estimates" },
    { icon: "ShieldCheck", label: "Licensed & Insured" },
    { icon: "ThumbsUp", label: "Safety Guaranteed" },
  ],

  googleBusinessProfileUrl: "https://share.google/Oju4vbLcn0E5CyfJf",
  reviews: {
    google: { rating: "5.0", count: 3, url: "https://share.google/Oju4vbLcn0E5CyfJf" },
  },
  aggregateRating: { ratingValue: "5.0", reviewCount: 3 },

  services: [
    {
      name: "Tree Removal",
      slug: "tree-removal",
      shortDescription:
        "Complete tree removal with hauling and disposal — from small backyard trees to the biggest hardwoods, taken down safely. Removal starts at $500.",
      image: "/images/services/tree-removal.png",
      description:
        "Need a tree taken down? Whether it's dead, dying, too close to your home, or just in the way of a new project, Tree Climber Unlimited handles tree removals of all sizes across Central California. With <strong>15 years of experience</strong> and a crew trained in safe work practices, we bring the right equipment and know-how to get the job done right. We handle the full process — falling, hauling, and disposal — so your property is left clean when we're done. <strong>Removal starts at $500</strong> and goes up depending on the size, location, and conditions of the job, and every quote is a <strong>free, no-obligation estimate</strong>.",
      benefits: [
        "Safe, controlled removal of trees of any size — even in tight spaces near homes and power lines",
        "Complete hauling and disposal included so your property is left clean",
        "15 years of experience means the job gets done right the first time",
        "Transparent pricing starting at $500 — free estimates with no hidden fees",
        "Serving San Andreas, Stockton, Modesto, and communities throughout Central California",
      ],
      faqs: [
        {
          question: "How much does tree removal cost in San Andreas, CA?",
          answer:
            "Tree removal <strong>starts at $500</strong> and goes up depending on the size, location, and condition of the tree. Every job is different, so we provide <strong>free on-site estimates</strong>. Call (209) 660-3450 to schedule yours.",
        },
        {
          question: "Do I need a permit to remove a tree in Calaveras County?",
          answer:
            "Some areas in Calaveras County have <strong>oak tree protection ordinances</strong> that may require permits for certain removals. We know the local regulations and can guide you through the process.",
        },
        {
          question: "How long does a typical tree removal take?",
          answer:
            "Most residential tree removals are completed in a single day. Larger or more complex trees may take longer — we'll give you a clear timeline during your free estimate.",
        },
        {
          question: "What happens to the tree after removal?",
          answer:
            "We handle the full process — falling, hauling, and disposal. All debris is removed from your property. Want to keep the firewood? Just let us know and we'll cut it for you.",
        },
        {
          question: "Is Tree Climber Unlimited licensed and insured?",
          answer:
            "Yes. We are <strong>fully licensed and insured</strong> so you have complete peace of mind on every job.",
        },
      ],
      relatedServiceSlugs: ["hazardous-tree-removal", "stump-grinding"],
    },
    {
      name: "Tree Trimming",
      slug: "tree-trimming",
      shortDescription:
        "Expert trimming and pruning to keep your trees healthy, safe, and looking their best all year long.",
      image: "/images/services/tree-trimming.png",
      description:
        "Keeping your trees healthy and looking great starts with proper trimming. Tree Climber Unlimited doesn't just cut branches — we carefully trim and prune to promote strong growth, improve your tree's structure, and keep your property safe. Whether you have overgrown limbs hanging over your roof, dead branches that need to come down, or trees that need shaping, our experienced crew handles it with care and precision. With <strong>15 years of experience</strong> and training in all aspects of tree work, we deliver safe, quality results every time across the Sierra Foothills and Central Valley.",
      benefits: [
        "Promotes healthier growth and stronger tree structure for years to come",
        "Removes dead, diseased, or hazardous branches before they become a problem",
        "Improves your property's curb appeal and can increase home value",
        "Clears branches away from roofs, gutters, driveways, and power lines",
        "Expert crew with 15 years of experience in professional tree care",
      ],
      faqs: [
        {
          question: "How often should I have my trees trimmed?",
          answer:
            "Most trees benefit from trimming <strong>every 3 to 5 years</strong>. Trees near your home, driveway, or power lines may need attention more often. We'll assess your trees and recommend the right schedule.",
        },
        {
          question: "What is the difference between trimming and pruning?",
          answer:
            "Trimming shapes and cleans up overgrowth for appearance; pruning is more targeted — removing specific branches to improve health, structure, and safety. Our crew does both.",
        },
        {
          question: "When is the best time to trim trees in California?",
          answer:
            "Late fall to early spring while trees are dormant is generally best. However, <strong>dead or hazardous branches should be removed immediately</strong> regardless of season. Call us anytime for advice.",
        },
        {
          question: "Can trimming help save a tree that looks sick?",
          answer:
            "Often, yes. Removing dead or diseased branches can stop problems from spreading and help a tree recover. We'll assess it and give you an honest recommendation.",
        },
        {
          question: "Will trimming damage my tree?",
          answer:
            "Not when done by trained professionals. Our crew follows proper techniques so every cut promotes healthy growth. Bad trimming by untrained workers is what harms trees.",
        },
      ],
      relatedServiceSlugs: ["tree-removal", "stump-grinding"],
    },
    {
      name: "Stump Grinding",
      slug: "stump-grinding",
      shortDescription:
        "Fast, affordable stump grinding that clears your yard and eliminates tripping hazards for good.",
      image: "/images/services/stump-grinding.png",
      description:
        "Got an old stump sitting in your yard? Stumps are more than an eyesore — they attract pests, create tripping hazards, and get in the way of your landscaping plans. Tree Climber Unlimited offers <strong>fast, affordable stump grinding</strong> throughout the Sierra Foothills and Central Valley. Our professional-grade equipment grinds stumps well below ground level so you can reclaim that space and use it however you want. One call and the stump is gone.",
      benefits: [
        "Eliminates tripping hazards and unsightly stumps from your yard",
        "Grinds stumps 6 to 12 inches below ground level for a clean finish",
        "Prevents pest infestations and unwanted regrowth from old stumps",
        "Frees up yard space for new landscaping, planting, or outdoor projects",
        "Quick and affordable — most stumps are ground in under an hour",
      ],
      faqs: [
        {
          question: "How deep does stump grinding go?",
          answer:
            "We grind stumps <strong>6 to 12 inches below ground level</strong>, deep enough to cover with topsoil and plant grass or landscaping over the area.",
        },
        {
          question: "What do you do with the wood chips from grinding?",
          answer:
            "The grindings make great mulch for garden beds. We can leave them for you or haul them away — whatever works best.",
        },
        {
          question: "Will the tree grow back after the stump is ground?",
          answer:
            "Grinding below ground level prevents most regrowth. Some species may send up small sprouts temporarily, but these are easy to manage and die off.",
        },
        {
          question: "Can you grind stumps in tight or hard-to-reach areas?",
          answer:
            "Yes. We carry different sizes of grinding equipment, including compact machines that fit through gates and tight spaces. If you can see the stump, we can get to it.",
        },
        {
          question: "How much does stump grinding cost?",
          answer:
            "Pricing depends on the size and number of stumps. We keep prices affordable and provide <strong>free estimates</strong>. Call (209) 660-3450 for a quote.",
        },
      ],
      relatedServiceSlugs: ["tree-removal", "tree-trimming"],
    },
    {
      name: "Hazardous Tree Removal",
      slug: "hazardous-tree-removal",
      shortDescription:
        "Dangerous tree threatening your property? We safely remove hazard trees — even in the toughest spots.",
      image: "/images/services/hazardous-tree-removal.png",
      description:
        "A hazardous tree is not something to wait on. Whether a tree is leaning dangerously, has a cracked trunk, dead limbs hanging overhead, or root damage that's made it unstable, Tree Climber Unlimited is the call to make. We specialize in <strong>safely removing hazard trees</strong> throughout Central California — even in difficult situations near homes, driveways, and power lines. With 15 years of experience and a crew trained in safe work practices, we have the skills and equipment to handle the toughest removals. <strong>Safety isn't just a word to us — it's how we do business.</strong>",
      benefits: [
        "Protects your home, family, and property from the risk of a falling tree",
        "Crew trained in safe removal techniques for dangerous situations",
        "Equipped to handle trees near structures, power lines, and steep terrain",
        "Fast response times for urgent hazard situations across the foothills and valley",
        "Complete cleanup and debris removal included with every job",
      ],
      faqs: [
        {
          question: "How do I know if a tree on my property is hazardous?",
          answer:
            "Warning signs include a noticeable lean, large dead branches, cracks or splits in the trunk, visible root damage, and fungal growth at the base. If something looks off, we offer <strong>free assessments</strong>.",
        },
        {
          question: "How quickly can you remove a hazardous tree?",
          answer:
            "We prioritize hazard removals because safety comes first. In most cases we schedule quickly, and for true emergencies we do our best to respond the <strong>same day</strong>. Call (209) 660-3450.",
        },
        {
          question: "Will my homeowner's insurance cover hazard tree removal?",
          answer:
            "In many cases, yes — especially if the tree has caused damage or poses an imminent threat. We provide documentation and photos to support your claim.",
        },
        {
          question: "Can you remove a hazard tree without damaging my property?",
          answer:
            "That's exactly what we specialize in. Our crew uses controlled techniques — rigging and sectional dismantling — to bring hazardous trees down piece by piece, keeping your property safe throughout.",
        },
        {
          question: "Is hazardous tree removal more expensive than regular removal?",
          answer:
            "It can be, depending on the situation — a tree leaning toward a house or tangled in power lines requires extra care. We always provide a clear estimate upfront.",
        },
      ],
      relatedServiceSlugs: ["tree-removal", "emergency-tree-services"],
    },
    {
      name: "Emergency Tree Services",
      slug: "emergency-tree-services",
      shortDescription:
        "Storm damage or fallen tree? We respond fast to make your property safe again.",
      image: "/images/services/emergency-tree-services.png",
      description:
        "When a storm rolls through and a tree comes crashing down, you need help fast — not tomorrow, not next week, now. Tree Climber Unlimited provides <strong>emergency tree removal and cleanup</strong> from the Sierra Foothills to the Central Valley. Whether a tree has fallen on your house, is blocking your driveway, or is leaning dangerously after a storm, our crew responds quickly to make your property safe again. We bring the equipment, the 15 years of experience, and the urgency the situation demands.",
      benefits: [
        "Fast emergency response when you need it most — we prioritize urgent calls",
        "Safe removal of fallen trees from roofs, driveways, and power lines",
        "Complete storm debris cleanup and haul-away included",
        "Insurance documentation and photos provided to support your claim",
        "15 years of experience handling emergency tree situations safely",
      ],
      faqs: [
        {
          question: "How quickly can you respond to an emergency?",
          answer:
            "We prioritize emergency calls and respond as quickly as possible — <strong>often the same day</strong>. During major storms we work extended hours. Call (209) 660-3450.",
        },
        {
          question: "Can you remove a tree that has fallen on my house?",
          answer:
            "Yes. Our crew is trained and equipped to safely remove trees from roofs and structures, taking every precaution to prevent additional damage.",
        },
        {
          question: "Do you work with insurance companies on storm damage?",
          answer:
            "Yes. We provide detailed documentation, photos, and estimates to support your insurance claim, and we work with insurers regularly.",
        },
        {
          question: "What should I do after a tree falls on my property?",
          answer:
            "Stay away from the tree, especially near power lines, and don't try to remove it yourself. Call us for an emergency assessment. If there's structural damage, contact your insurer too.",
        },
        {
          question: "Do you charge extra for emergency service?",
          answer:
            "Our emergency rates are fair and competitive, and we give you a clear price before starting any work. We never take advantage of emergency situations.",
        },
      ],
      relatedServiceSlugs: ["hazardous-tree-removal", "tree-removal"],
    },
  ],

  serviceAreas: [
    { city: "San Andreas", state: "CA", zipCode: "95249", slug: "san-andreas-ca", county: "Calaveras County", image: "/images/areas/area-1.png" },
    { city: "Angels Camp", state: "CA", zipCode: "95222", slug: "angels-camp-ca", county: "Calaveras County", image: "/images/areas/area-2.png" },
    { city: "Valley Springs", state: "CA", zipCode: "95252", slug: "valley-springs-ca", county: "Calaveras County", image: "/images/areas/area-3.png" },
    { city: "Murphys", state: "CA", zipCode: "95247", slug: "murphys-ca", county: "Calaveras County", image: "/images/areas/area-4.png" },
    { city: "Arnold", state: "CA", zipCode: "95223", slug: "arnold-ca", county: "Calaveras County", image: "/images/areas/area-5.png" },
    { city: "Copperopolis", state: "CA", zipCode: "95228", slug: "copperopolis-ca", county: "Calaveras County", image: "/images/areas/area-1.png" },
    { city: "Mokelumne Hill", state: "CA", zipCode: "95245", slug: "mokelumne-hill-ca", county: "Calaveras County", image: "/images/areas/area-2.png" },
    { city: "West Point", state: "CA", zipCode: "95255", slug: "west-point-ca", county: "Calaveras County", image: "/images/areas/area-3.png" },
    { city: "Mountain Ranch", state: "CA", zipCode: "95246", slug: "mountain-ranch-ca", county: "Calaveras County", image: "/images/areas/area-4.png" },
    { city: "Rancho Calaveras", state: "CA", zipCode: "95252", slug: "rancho-calaveras-ca", county: "Calaveras County", image: "/images/areas/area-5.png" },
    { city: "Jenny Lind", state: "CA", zipCode: "95252", slug: "jenny-lind-ca", county: "Calaveras County", image: "/images/areas/area-1.png" },
    { city: "Hathaway Pines", state: "CA", zipCode: "95233", slug: "hathaway-pines-ca", county: "Calaveras County", image: "/images/areas/area-2.png" },
    { city: "Avery", state: "CA", zipCode: "95224", slug: "avery-ca", county: "Calaveras County", image: "/images/areas/area-3.png" },
    { city: "Dorrington", state: "CA", zipCode: "95223", slug: "dorrington-ca", county: "Calaveras County", image: "/images/areas/area-4.png" },
    { city: "Camp Connell", state: "CA", zipCode: "95223", slug: "camp-connell-ca", county: "Calaveras County", image: "/images/areas/area-5.png" },
    { city: "Jackson", state: "CA", zipCode: "95642", slug: "jackson-ca", county: "Amador County", image: "/images/areas/area-1.png" },
    { city: "Ione", state: "CA", zipCode: "95640", slug: "ione-ca", county: "Amador County", image: "/images/areas/area-2.png" },
    { city: "Sutter Creek", state: "CA", zipCode: "95685", slug: "sutter-creek-ca", county: "Amador County", image: "/images/areas/area-3.png" },
    { city: "Pine Grove", state: "CA", zipCode: "95665", slug: "pine-grove-ca", county: "Amador County", image: "/images/areas/area-4.png" },
    { city: "Pioneer", state: "CA", zipCode: "95666", slug: "pioneer-ca", county: "Amador County", image: "/images/areas/area-5.png" },
    { city: "Plymouth", state: "CA", zipCode: "95669", slug: "plymouth-ca", county: "Amador County", image: "/images/areas/area-1.png" },
    { city: "Amador City", state: "CA", zipCode: "95601", slug: "amador-city-ca", county: "Amador County", image: "/images/areas/area-2.png" },
    { city: "Volcano", state: "CA", zipCode: "95689", slug: "volcano-ca", county: "Amador County", image: "/images/areas/area-3.png" },
    { city: "Drytown", state: "CA", zipCode: "95699", slug: "drytown-ca", county: "Amador County", image: "/images/areas/area-4.png" },
    { city: "Fiddletown", state: "CA", zipCode: "95629", slug: "fiddletown-ca", county: "Amador County", image: "/images/areas/area-5.png" },
    { city: "Sonora", state: "CA", zipCode: "95370", slug: "sonora-ca", county: "Tuolumne County", image: "/images/areas/area-1.png" },
    { city: "Jamestown", state: "CA", zipCode: "95327", slug: "jamestown-ca", county: "Tuolumne County", image: "/images/areas/area-2.png" },
    { city: "Columbia", state: "CA", zipCode: "95310", slug: "columbia-ca", county: "Tuolumne County", image: "/images/areas/area-3.png" },
    { city: "Twain Harte", state: "CA", zipCode: "95383", slug: "twain-harte-ca", county: "Tuolumne County", image: "/images/areas/area-4.png" },
    { city: "Mi-Wuk Village", state: "CA", zipCode: "95346", slug: "mi-wuk-village-ca", county: "Tuolumne County", image: "/images/areas/area-5.png" },
    { city: "Long Barn", state: "CA", zipCode: "95335", slug: "long-barn-ca", county: "Tuolumne County", image: "/images/areas/area-1.png" },
    { city: "Stockton", state: "CA", zipCode: "95202", slug: "stockton-ca", county: "San Joaquin County", image: "/images/areas/area-2.png" },
    { city: "Lodi", state: "CA", zipCode: "95240", slug: "lodi-ca", county: "San Joaquin County", image: "/images/areas/area-3.png" },
    { city: "Tracy", state: "CA", zipCode: "95376", slug: "tracy-ca", county: "San Joaquin County", image: "/images/areas/area-4.png" },
    { city: "Manteca", state: "CA", zipCode: "95336", slug: "manteca-ca", county: "San Joaquin County", image: "/images/areas/area-5.png" },
    { city: "Lathrop", state: "CA", zipCode: "95330", slug: "lathrop-ca", county: "San Joaquin County", image: "/images/areas/area-1.png" },
    { city: "Ripon", state: "CA", zipCode: "95366", slug: "ripon-ca", county: "San Joaquin County", image: "/images/areas/area-2.png" },
    { city: "Escalon", state: "CA", zipCode: "95320", slug: "escalon-ca", county: "San Joaquin County", image: "/images/areas/area-3.png" },
    { city: "Modesto", state: "CA", zipCode: "95350", slug: "modesto-ca", county: "Stanislaus County", image: "/images/areas/area-4.png" },
    { city: "Turlock", state: "CA", zipCode: "95380", slug: "turlock-ca", county: "Stanislaus County", image: "/images/areas/area-5.png" },
    { city: "Ceres", state: "CA", zipCode: "95307", slug: "ceres-ca", county: "Stanislaus County", image: "/images/areas/area-1.png" },
    { city: "Oakdale", state: "CA", zipCode: "95361", slug: "oakdale-ca", county: "Stanislaus County", image: "/images/areas/area-2.png" },
    { city: "Riverbank", state: "CA", zipCode: "95367", slug: "riverbank-ca", county: "Stanislaus County", image: "/images/areas/area-3.png" },
    { city: "Patterson", state: "CA", zipCode: "95363", slug: "patterson-ca", county: "Stanislaus County", image: "/images/areas/area-4.png" },
  ],

  testimonials: [
    {
      name: "Robert H.",
      city: "San Andreas, CA",
      source: "Google",
      rating: 5,
      text: "Michael and his crew removed two large oaks that were threatening our roof. They showed up on time, worked safely, and left our yard spotless. Fair price too. Highly recommend Tree Climber Unlimited.",
    },
    {
      name: "Karen M.",
      city: "Angels Camp, CA",
      source: "Google",
      rating: 5,
      text: "Had a massive pine come down in the storm and these guys were out the next morning. Professional, fast, and careful around our fence and garden. Couldn't ask for better emergency service.",
    },
    {
      name: "David P.",
      city: "Valley Springs, CA",
      source: "Google",
      rating: 5,
      text: "Used Tree Climber Unlimited for stump grinding after another company left three stumps in our front yard. Ground them all down below grade in under two hours. Great work and great people.",
    },
  ],

  processSteps: [
    { title: "Call or Request a Quote", description: "Reach out by phone or fill out our quick form. We answer when you call.", icon: "PhoneCall" },
    { title: "Free On-Site Assessment", description: "We visit your property, evaluate the work, and answer your questions.", icon: "ClipboardCheck" },
    { title: "Honest, Upfront Estimate", description: "You get a clear price with no hidden fees — removal starts at $500.", icon: "FileText" },
    { title: "Safe, Skilled Tree Work", description: "Our trained crew completes the job safely, efficiently, and to spec.", icon: "Axe" },
    { title: "Complete Cleanup", description: "We haul everything away and leave your property spotless.", icon: "CircleCheckBig" },
  ],

  differentiators: [
    { title: "15 Years of Experience", description: "Trained and qualified in all aspects of tree work, from routine trims to hazardous removals.", icon: "BadgeCheck" },
    { title: "Safety-First Crew", description: "Safe work practices aren't optional — they're who we are. Our crew goes home safe every day.", icon: "ShieldCheck" },
    { title: "Honest Pricing", description: "Free estimates and upfront pricing — tree removal starts at just $500.", icon: "Tag" },
    { title: "Licensed & Insured", description: "Fully licensed and insured for complete peace of mind on every job.", icon: "CircleCheckBig" },
    { title: "Fast Emergency Response", description: "Storm damage and hazard trees can't wait — we prioritize urgent calls.", icon: "Siren" },
    { title: "Trustworthy & Responsive", description: "When you call, we answer. When we quote, we honor it. When we work, we do it right.", icon: "ThumbsUp" },
  ],

  specialOffers: [
    { title: "Free Estimates", description: "Every quote is free, honest, and comes with zero obligation.", icon: "Tag" },
    { title: "Removal From $500", description: "Transparent, upfront pricing on tree removals — no hidden fees.", icon: "Medal" },
    { title: "24/7 Emergency Service", description: "Storm damage doesn't wait — neither do we.", icon: "Siren" },
  ],

  certifications: [
    { name: "Licensed & Insured", logo: "/images/certifications/licensed.png" },
    { name: "15 Years Experience", logo: "/images/certifications/experience.png" },
    { name: "Free Estimates", logo: "/images/certifications/free-estimates.png" },
    { name: "Safety First", logo: "/images/certifications/safety.png" },
    { name: "Google Reviewed", logo: "/images/certifications/google.png" },
  ],

  portfolio: [
    { image: "/images/portfolio/project-1.png", alt: "Large oak tree removal in San Andreas CA residential yard", caption: "Oak removal — San Andreas, CA" },
    { image: "/images/portfolio/project-2.png", alt: "Storm-damaged pine cleanup in Angels Camp CA", caption: "Storm cleanup — Angels Camp, CA" },
    { image: "/images/portfolio/project-3.png", alt: "Professional tree trimming in Valley Springs CA", caption: "Tree trimming — Valley Springs, CA" },
    { image: "/images/portfolio/project-4.png", alt: "Hazardous tree removal near power lines in Murphys CA", caption: "Hazard removal — Murphys, CA" },
    { image: "/images/portfolio/project-5.png", alt: "Stump grinding and yard restoration in Sonora CA", caption: "Stump grinding — Sonora, CA" },
    { image: "/images/portfolio/project-6.png", alt: "Property and lot clearing in the Sierra Foothills near Arnold CA", caption: "Property clearing — Arnold, CA" },
  ],

  beforeAfterPhotos: [],

  faqs: [
    {
      question: "How much does tree service cost?",
      answer:
        "It depends on the job, so we provide <strong>free, no-obligation estimates</strong>. Tree removal starts at <strong>$500</strong>, with a clear, upfront price before any work begins.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Tree Climber Unlimited is <strong>fully licensed and insured</strong>, carrying liability coverage so you're completely protected on every job.",
    },
    {
      question: "Do you offer emergency tree service?",
      answer:
        "Yes — we offer <strong>fast emergency response</strong> for storm damage and hazardous trees, often the same day. Call (209) 660-3450 anytime.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve San Andreas and the greater Central California region — across <strong>Calaveras, Amador, Tuolumne, San Joaquin, and Stanislaus counties</strong>, from the Sierra Foothills to Stockton and Modesto.",
    },
    {
      question: "Do you clean up after the job?",
      answer:
        "Always. Complete cleanup and debris haul-away are <strong>included with every service</strong>. We leave your property spotless.",
    },
    {
      question: "How experienced is your crew?",
      answer:
        "We bring <strong>15 years of hands-on experience</strong> and are trained and qualified in all aspects of tree work, with a safety-first approach on every job.",
    },
  ],

  colors: { primary: "#228B22", secondary: "#FF6B00" },

  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61582509064703",
  },

  topBar: { announcement: "Serving Central California • Free Estimates • Removal from $500" },
};
