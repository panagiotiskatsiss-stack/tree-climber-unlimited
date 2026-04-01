import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  businessName: "Tree Climber Unlimited",
  tagline: "Trusted Tree Care",
  phone: "(209) 660-3450",
  email: "",
  domain: "treeclimberunlimited.com",

  primaryCity: "San Andreas",
  primaryState: "CA",
  address: {
    street: "23 W St Charles St",
    city: "San Andreas",
    state: "CA",
    zip: "95249",
  },

  businessHours: {
    days: "Monday - Saturday",
    hours: "7:00 AM - 6:00 PM",
  },

  yearsInBusiness: 15,
  ctaText: "Get a Free Estimate",
  showPricing: true,

  googleBusinessProfileUrl: "https://share.google/Oju4vbLcn0E5CyfJf",

  ownerPhoto: "/images/about/owner.jpg",
  logo: "/images/logo.webp",
  videoUrl: "",

  beforeAfterPhotos: [
    { before: "/images/before-after/before-1.png", after: "/images/before-after/after-1.png", caption: "Full Tree Removal in San Andreas, CA" },
    { before: "/images/before-after/before-2.png", after: "/images/before-after/after-2.png", caption: "Storm Damage Cleanup in Calaveras County" },
    { before: "/images/before-after/before-3.png", after: "/images/before-after/after-3.png", caption: "Overgrown Yard Clearing in Central California" },
    { before: "/images/before-after/before-4.png", after: "/images/before-after/after-4.png", caption: "Stump Grinding in San Andreas, CA" },
  ],

  colors: {
    primary: "#228B22",
    secondary: "#FF6B00",
  },

  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61582509064703",
  },

  targetCustomer: "Homeowners and property managers across Central California seeking trustworthy, responsive tree care",

  guarantees: [
    "Safety guaranteed on every job",
    "Quality workmanship you can count on",
    "Productive, efficient service — no wasted time or money",
  ],

  usps: [
    "15 years of hands-on experience — trained and qualified in all aspects of tree work",
    "Safety-first approach on every single job, because our crew goes home safe every day",
    "Free estimates with honest, upfront pricing — removal starts at $500",
    "Serving the greater Central California region — from Calaveras County to Stockton and Modesto",
  ],

  whyChooseUs: [
    "We are passionate, hard-working professionals with great work ethic and moral character. At Tree Climber Unlimited, we appreciate every person and every job we take on.",
    "With 15 years of expertise, dependability, and a commitment to the highest safety standards, we bring qualified, professional tree care to every property.",
    "Safe work practices are not optional — they are who we are. Our crew is trained and qualified in all aspects of tree work, from routine trimming to hazardous removals.",
    "We value trustworthiness and responsiveness above all else. When you call, we answer. When we give you a quote, we honor it. When we do the work, we do it right.",
    "From the Sierra Foothills to the Central Valley, we serve the greater Central California region with the same level of care and professionalism on every job.",
  ],

  services: [
    {
      name: "Tree Removal",
      slug: "tree-removal",
      shortDescription:
        "Complete tree removal with hauling and disposal. From small backyard trees to the biggest hardwoods — we take them down safely.",
      image: "/images/services/tree-removal.png",
      description:
        "Need a tree taken down? Whether it is dead, dying, too close to your home, or just in the way of a new project, Tree Climber Unlimited handles tree removals of all sizes across Central California. With 15 years of experience and a crew trained in safe work practices, we bring the right equipment and know-how to get the job done right. We handle the full process — falling, hauling, and disposal — so your property is left clean when we are done. Removal starts at $500 and goes up depending on the size, location, and conditions of the job.",
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
            "Tree removal starts at $500 and goes up depending on the size, location, and condition of the tree. Every job is different, so we provide free on-site estimates so you know exactly what to expect. Call us at (209) 660-3450 to schedule yours.",
        },
        {
          question: "Do I need a permit to remove a tree in Calaveras County?",
          answer:
            "Some areas in Calaveras County have oak tree protection ordinances that may require permits for certain tree removals. We are familiar with local regulations and can help guide you through the process.",
        },
        {
          question: "How long does a typical tree removal take?",
          answer:
            "Most residential tree removals are completed in a single day. Larger or more complex trees may take longer, but we will give you a clear timeline during your free estimate.",
        },
        {
          question: "What happens to the tree after removal?",
          answer:
            "We handle the full process — falling, hauling, and disposal. All branches, trunk sections, and debris are removed from your property. If you want to keep firewood, just let us know and we will cut it for you.",
        },
        {
          question: "Is Tree Climber Unlimited licensed and insured?",
          answer:
            "Yes. We are fully licensed and insured so you can have complete peace of mind on every job.",
        },
      ],
    },
    {
      name: "Tree Trimming",
      slug: "tree-trimming",
      shortDescription:
        "Expert trimming and pruning to keep your trees healthy, safe, and looking their best all year long.",
      image: "/images/services/tree-trimming.png",
      description:
        "Keeping your trees healthy and looking great starts with proper trimming. Tree Climber Unlimited does not just cut branches — we carefully trim and prune to promote strong growth, improve your tree's structure, and keep your property safe. Whether you have overgrown limbs hanging over your roof, dead branches that need to come down, or trees that need shaping, our experienced crew handles it with care and precision. With 15 years of experience and training in all aspects of tree work, we deliver safe, quality results every time.",
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
            "Most trees benefit from trimming every 3 to 5 years. Trees near your home, driveway, or power lines may need attention more often. We will assess your trees and recommend the right schedule.",
        },
        {
          question: "What is the difference between trimming and pruning?",
          answer:
            "Trimming is about shaping and cleaning up overgrowth for appearance. Pruning is more targeted — removing specific branches to improve health, structure, and safety. Our crew does both and will explain what your trees need.",
        },
        {
          question: "Can trimming help save a tree that looks sick?",
          answer:
            "In many cases, yes. Removing dead or diseased branches can stop problems from spreading and help the tree recover. We will assess the situation and give you an honest recommendation.",
        },
        {
          question: "When is the best time to trim trees in California?",
          answer:
            "Late fall to early spring while trees are dormant is generally best. However, dead or hazardous branches should be removed immediately regardless of the season. Call us anytime for advice.",
        },
        {
          question: "Will trimming damage my tree?",
          answer:
            "Not when done by trained professionals. Our crew follows proper techniques to ensure every cut promotes healthy growth. Bad trimming by untrained workers can harm a tree — that is why it is worth calling a qualified crew.",
        },
      ],
    },
    {
      name: "Stump Grinding",
      slug: "stump-grinding",
      shortDescription:
        "Fast, affordable stump grinding that clears your yard and eliminates tripping hazards for good.",
      image: "/images/services/stump-grinding.png",
      description:
        "Got an old stump sitting in your yard? Stumps are more than just an eyesore — they attract pests, create tripping hazards, and get in the way of your landscaping plans. Tree Climber Unlimited offers fast, affordable stump grinding throughout the Sierra Foothills and Central Valley. Our professional-grade equipment grinds stumps well below ground level so you can reclaim that space and use it however you want. One call and the stump is gone.",
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
            "We grind stumps 6 to 12 inches below ground level, deep enough to cover with topsoil and plant grass or landscaping over the area. Your yard will look like the stump was never there.",
        },
        {
          question: "What do you do with the wood chips from grinding?",
          answer:
            "The grinding process produces wood chips that make great mulch for garden beds. We can leave them for you or haul them away — whatever works best.",
        },
        {
          question: "Will the tree grow back after the stump is ground?",
          answer:
            "Grinding below ground level prevents most regrowth. Some species may send up small sprouts temporarily, but these are easy to manage and will die off.",
        },
        {
          question: "Can you grind stumps in tight or hard-to-reach areas?",
          answer:
            "Yes. We carry different sizes of grinding equipment, including compact machines that fit through gates and tight spaces. If you can see the stump, we can get to it.",
        },
        {
          question: "How much does stump grinding cost?",
          answer:
            "Pricing depends on the size and number of stumps. We keep prices affordable and provide free estimates. Call us at (209) 660-3450 for a quote.",
        },
      ],
    },
    {
      name: "Hazardous Tree Removal",
      slug: "hazardous-tree-removal",
      shortDescription:
        "Dangerous tree threatening your property? We safely remove hazard trees — even in the toughest spots.",
      image: "/images/services/hazard-tree-removal.png",
      description:
        "A hazardous tree is not something to wait on. Whether a tree is leaning dangerously, has a cracked trunk, dead limbs hanging overhead, or root damage that has made it unstable, Tree Climber Unlimited is the call you need to make. We specialize in safely removing hazard trees throughout Central California — even in difficult situations near homes, driveways, and power lines. With 15 years of experience and a crew trained in safe work practices, we have the skills and equipment to handle the toughest removals. Safety is not just a word to us — it is how we do business.",
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
            "Warning signs include a noticeable lean, large dead branches, cracks or splits in the trunk, visible root damage, and fungal growth at the base. If something about a tree looks off, it is worth having us take a look. We offer free assessments.",
        },
        {
          question: "Is hazardous tree removal more expensive than regular removal?",
          answer:
            "It can be, depending on the situation — a tree leaning toward a house or tangled in power lines requires extra care and specialized techniques. We always provide a clear estimate upfront.",
        },
        {
          question: "How quickly can you remove a hazardous tree?",
          answer:
            "We prioritize hazard tree removals because safety comes first. In most cases we can schedule quickly, and for true emergencies we do our best to respond the same day. Call (209) 660-3450.",
        },
        {
          question: "Will my homeowner's insurance cover hazard tree removal?",
          answer:
            "In many cases, yes — especially if the tree has caused damage or poses an imminent threat. We can provide documentation and photos to support your insurance claim.",
        },
        {
          question: "Can you remove a hazard tree without damaging my property?",
          answer:
            "That is exactly what we specialize in. Our crew uses controlled removal techniques — including rigging and sectional dismantling — to bring down hazardous trees piece by piece, keeping your property safe throughout.",
        },
      ],
    },
    {
      name: "Emergency Tree Services",
      slug: "emergency-tree-services",
      shortDescription:
        "Storm damage or fallen tree? We respond fast to make your property safe again.",
      image: "/images/services/emergency-tree-services.png",
      description:
        "When a storm rolls through and a tree comes crashing down, you need help fast — not tomorrow, not next week, now. Tree Climber Unlimited provides emergency tree removal and cleanup from the Sierra Foothills to the Central Valley. Whether a tree has fallen on your house, is blocking your driveway, or is leaning dangerously after a storm, our crew responds quickly to make your property safe again. We bring the equipment, the 15 years of experience, and the urgency the situation demands. We appreciate every job and every person — and in an emergency, that means getting to you as fast as possible.",
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
            "We prioritize emergency calls and respond as quickly as possible — often the same day. During major storm events, we work extended hours to help as many people as we can. Call (209) 660-3450.",
        },
        {
          question: "Can you remove a tree that has fallen on my house?",
          answer:
            "Yes. Our crew is trained and equipped to safely remove trees from roofs and structures. We take every precaution to prevent additional damage during removal.",
        },
        {
          question: "Do you work with insurance companies on storm damage?",
          answer:
            "Yes. We provide detailed documentation, photos, and estimates to support your insurance claim. We work with insurance companies regularly.",
        },
        {
          question: "What should I do after a tree falls on my property?",
          answer:
            "Stay away from the tree, especially near power lines. Do not try to remove it yourself. Call us for emergency assessment. If there is structural damage, also contact your insurance company.",
        },
        {
          question: "Do you charge extra for emergency service?",
          answer:
            "Our emergency rates are fair and competitive. We give you a clear price before starting any work. We never take advantage of emergency situations.",
        },
      ],
    },
  ],

  serviceAreas: [
    // Calaveras County (home base)
    { city: "San Andreas", state: "CA", zipCode: "95249", slug: "san-andreas-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Angels Camp", state: "CA", zipCode: "95222", slug: "angels-camp-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Valley Springs", state: "CA", zipCode: "95252", slug: "valley-springs-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Murphys", state: "CA", zipCode: "95247", slug: "murphys-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Arnold", state: "CA", zipCode: "95223", slug: "arnold-ca", image: "/images/areas/suburban-5.jpg" },
    { city: "Copperopolis", state: "CA", zipCode: "95228", slug: "copperopolis-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Mokelumne Hill", state: "CA", zipCode: "95245", slug: "mokelumne-hill-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "West Point", state: "CA", zipCode: "95255", slug: "west-point-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Mountain Ranch", state: "CA", zipCode: "95246", slug: "mountain-ranch-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Rancho Calaveras", state: "CA", zipCode: "95252", slug: "rancho-calaveras-ca", image: "/images/areas/suburban-5.jpg" },
    { city: "Jenny Lind", state: "CA", zipCode: "95252", slug: "jenny-lind-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Hathaway Pines", state: "CA", zipCode: "95233", slug: "hathaway-pines-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Avery", state: "CA", zipCode: "95224", slug: "avery-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Dorrington", state: "CA", zipCode: "95223", slug: "dorrington-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Camp Connell", state: "CA", zipCode: "95223", slug: "camp-connell-ca", image: "/images/areas/suburban-5.jpg" },
    // Amador County
    { city: "Jackson", state: "CA", zipCode: "95642", slug: "jackson-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Ione", state: "CA", zipCode: "95640", slug: "ione-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Sutter Creek", state: "CA", zipCode: "95685", slug: "sutter-creek-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Pine Grove", state: "CA", zipCode: "95665", slug: "pine-grove-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Pioneer", state: "CA", zipCode: "95666", slug: "pioneer-ca", image: "/images/areas/suburban-5.jpg" },
    { city: "Plymouth", state: "CA", zipCode: "95669", slug: "plymouth-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Amador City", state: "CA", zipCode: "95601", slug: "amador-city-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Volcano", state: "CA", zipCode: "95689", slug: "volcano-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Drytown", state: "CA", zipCode: "95699", slug: "drytown-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Fiddletown", state: "CA", zipCode: "95629", slug: "fiddletown-ca", image: "/images/areas/suburban-5.jpg" },
    // Tuolumne County
    { city: "Sonora", state: "CA", zipCode: "95370", slug: "sonora-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Jamestown", state: "CA", zipCode: "95327", slug: "jamestown-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Columbia", state: "CA", zipCode: "95310", slug: "columbia-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Twain Harte", state: "CA", zipCode: "95383", slug: "twain-harte-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Mi-Wuk Village", state: "CA", zipCode: "95346", slug: "mi-wuk-village-ca", image: "/images/areas/suburban-5.jpg" },
    { city: "Long Barn", state: "CA", zipCode: "95335", slug: "long-barn-ca", image: "/images/areas/suburban-1.jpg" },
    // San Joaquin County
    { city: "Stockton", state: "CA", zipCode: "95202", slug: "stockton-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Lodi", state: "CA", zipCode: "95240", slug: "lodi-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Tracy", state: "CA", zipCode: "95376", slug: "tracy-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Manteca", state: "CA", zipCode: "95336", slug: "manteca-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Lathrop", state: "CA", zipCode: "95330", slug: "lathrop-ca", image: "/images/areas/suburban-5.jpg" },
    { city: "Ripon", state: "CA", zipCode: "95366", slug: "ripon-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Escalon", state: "CA", zipCode: "95320", slug: "escalon-ca", image: "/images/areas/suburban-2.jpg" },
    // Stanislaus County
    { city: "Modesto", state: "CA", zipCode: "95350", slug: "modesto-ca", image: "/images/areas/suburban-3.jpg" },
    { city: "Turlock", state: "CA", zipCode: "95380", slug: "turlock-ca", image: "/images/areas/suburban-4.jpg" },
    { city: "Ceres", state: "CA", zipCode: "95307", slug: "ceres-ca", image: "/images/areas/suburban-5.jpg" },
    { city: "Oakdale", state: "CA", zipCode: "95361", slug: "oakdale-ca", image: "/images/areas/suburban-1.jpg" },
    { city: "Riverbank", state: "CA", zipCode: "95367", slug: "riverbank-ca", image: "/images/areas/suburban-2.jpg" },
    { city: "Patterson", state: "CA", zipCode: "95363", slug: "patterson-ca", image: "/images/areas/suburban-3.jpg" },
  ],

  testimonials: [
    {
      name: "Robert H.",
      city: "San Andreas, CA",
      text: "Michael and his crew removed two large oaks that were threatening our roof. They showed up on time, worked safely, and left our yard spotless. Fair price too. Highly recommend Tree Climber Unlimited.",
    },
    {
      name: "Karen M.",
      city: "Angels Camp, CA",
      text: "Had a massive pine come down in the storm and these guys were out the next morning. Professional, fast, and careful around our fence and garden. Couldn't ask for better emergency service.",
    },
    {
      name: "David P.",
      city: "Valley Springs, CA",
      text: "Used Tree Climber Unlimited for stump grinding after another company left three stumps in our front yard. Ground them all down below grade in under two hours. Great work and great people.",
    },
  ],
};
