import type { BlogPost } from "@/types";
import { siteConfig } from "@/lib/site-config";

const BIZ = siteConfig.businessName;
const PHONE = siteConfig.phone;

const covers = [
  "/images/blog/blog-1.png",
  "/images/blog/blog-2.png",
  "/images/blog/blog-3.png",
  "/images/blog/blog-4.png",
  "/images/blog/blog-5.png",
  "/images/blog/blog-6.png",
];
const cover = (i: number) => covers[i % covers.length];

const cta = (label: string) =>
  `<p><a href="/contact">${label}</a> or call <strong>${PHONE}</strong> for a free, no-obligation estimate.</p>`;

// 20 launch posts localized to Central California (Sierra Foothills + Central Valley).
const rawPosts: BlogPost[] = [
  {
    title: "5 Warning Signs You Need Tree Removal in San Andreas, CA",
    slug: "signs-you-need-tree-removal-san-andreas-ca",
    category: "Tree Removal",
    date: "2026-05-20",
    excerpt:
      "Not sure if that tree needs to come down? Here are five clear signs a tree on your San Andreas property has become a hazard.",
    content: `
      <p>In the Sierra Foothills, a failing tree rarely waits for a convenient moment — it tends to come down in the first big winter storm or under summer drought stress, often onto a roof, fence, or vehicle. Knowing the warning signs early lets you act first. Here are the five we tell every San Andreas homeowner to watch for.</p>
      <h2>1. Large Dead or Hanging Branches</h2>
      <p>Bare limbs during the growing season or branches clearly cracked and hanging are a falling hazard. A few dead twigs can be pruned, but widespread deadwood usually means a tree in decline — common in drought-stressed foothill pines and oaks.</p>
      <h2>2. A New Lean</h2>
      <p>Trees that have always leaned are often fine. A tree that has <strong>recently started to lean</strong> — especially with soil heaving or roots lifting on the opposite side — is a serious red flag, particularly on our steep foothill lots.</p>
      <h2>3. Cracks, Cavities, or Fungus</h2>
      <p>Deep vertical cracks, large cavities, or mushroom-like fungus at the base point to internal decay. These trees can fail suddenly even when the canopy still looks green.</p>
      <h2>4. Bark Beetle Damage on Pines</h2>
      <p>Reddish-brown needles, pitch tubes, and bark falling away signal bark beetle infestation — a widespread problem in Calaveras County pines. Infested trees die fast and become dangerous.</p>
      <h2>5. Storm or Drought Stress</h2>
      <p>After a storm, split trunks and torn limbs leave a tree weakened and unpredictable. Our <a href="/services/emergency-tree-services">emergency tree crew</a> can assess whether it can be saved or needs to come down.</p>
      <p>If any of these sound familiar, don't wait for the next storm. ${BIZ} provides safe, professional <a href="/services/tree-removal">tree removal in San Andreas</a> — removal starts at $500.</p>
      ${cta("Request a free tree inspection")}
    `,
  },
  {
    title: "How Much Does Tree Removal Cost in Calaveras County?",
    slug: "tree-removal-cost-calaveras-county",
    category: "Tree Removal",
    date: "2026-05-14",
    excerpt:
      "Tree removal pricing isn't one-size-fits-all. Here's what drives the cost of removing a tree in Calaveras County — and why ours starts at $500.",
    content: `
      <p>The most common question we get is also the hardest to answer in one number: "What will it cost to remove my tree?" At ${BIZ}, <strong>removal starts at $500</strong> — and here's what determines where a given job lands.</p>
      <h2>Size of the Tree</h2>
      <p>Height and trunk diameter are the biggest factors. A small backyard tree is quick; a towering foothill pine or valley oak near power lines is a multi-hour, equipment-heavy operation.</p>
      <h2>Location and Access</h2>
      <p>A tree in an open yard is straightforward. One on a steep foothill lot, wedged between a house and fence, or hanging over a roof requires careful rigging and sometimes a crane — which affects the price.</p>
      <h2>Condition</h2>
      <p>Dead, drought-stressed, beetle-killed, or storm-damaged trees are less predictable and require extra safety precautions compared to a healthy tree.</p>
      <h2>Stump and Cleanup Included</h2>
      <p>Complete hauling and disposal come standard, and we offer <a href="/services/stump-grinding">stump grinding</a> to finish the job — so there are no surprise add-ons.</p>
      <h2>Why We Quote On-Site</h2>
      <p>Because these factors vary so much, we provide a <strong>free, no-obligation on-site estimate</strong> for every job, with a clear price before any work begins. Be wary of anyone who quotes a flat price sight-unseen.</p>
      ${cta("Get your free tree removal estimate")}
    `,
  },
  {
    title: "What to Do When a Storm Damages Your Trees in Angels Camp, CA",
    slug: "storm-damage-trees-angels-camp-ca",
    category: "Emergency Tree Services",
    date: "2026-05-08",
    excerpt:
      "A storm just tore through the foothills and left branches — or whole trees — down. Here's exactly what to do, and in what order.",
    content: `
      <p>Foothill storms move fast and leave a mess. When the wind dies down and you're staring at a fallen tree, it's hard to know where to start. Follow these steps to stay safe and get your Angels Camp property back to normal quickly.</p>
      <h2>1. Stay Away From Downed Lines</h2>
      <p>Treat <strong>every downed wire as live</strong>. Keep family and pets clear and call PG&amp;E immediately. Never approach a tree tangled in power lines.</p>
      <h2>2. Assess From a Distance</h2>
      <p>Don't climb on or under damaged trees. Split trunks and hanging limbs are unstable and can shift without warning. Take photos from a safe distance for your records.</p>
      <h2>3. Document for Insurance</h2>
      <p>Photograph all damage before anything is moved. ${BIZ} works with homeowner's insurance and provides the detailed estimates and documentation your claim needs.</p>
      <h2>4. Call for Emergency Cleanup</h2>
      <p>Our <a href="/services/emergency-tree-services">emergency tree crew</a> responds fast to secure the scene and safely remove fallen trees — even those resting on your home.</p>
      <h2>5. Plan for Prevention</h2>
      <p>Once the emergency is handled, ask about <a href="/services/tree-trimming">trimming weak or overhanging limbs</a> before the next storm. A little prevention saves a lot of damage.</p>
      ${cta("Call now for emergency storm cleanup")}
    `,
  },
  {
    title: "When Is the Best Time to Trim Trees in the Sierra Foothills?",
    slug: "best-time-to-trim-trees-sierra-foothills",
    category: "Tree Trimming",
    date: "2026-04-30",
    excerpt:
      "Timing your tree trimming right keeps your foothill trees healthy and safe. Here's the seasonal breakdown for Central California.",
    content: `
      <p>Trees can be trimmed any time for safety, but to maximize health and growth, timing matters — especially in our foothill climate. Here's how the seasons play out for Central California homeowners.</p>
      <h2>Late Fall to Early Spring (Best for Most Trees)</h2>
      <p>While trees are dormant, before new growth starts, is the ideal window for most species. Cuts heal fast as the tree wakes up, and with less foliage our crew can clearly see the structure.</p>
      <h2>Summer (Light & Corrective Only)</h2>
      <p>In our hot, dry summers, heavy pruning stresses trees. Summer is best limited to removing dead or hazardous limbs and light shaping — and clearing limbs for <strong>defensible space</strong> ahead of fire season.</p>
      <h2>Avoid Heavy Pruning in Extreme Heat</h2>
      <p>Big cuts during a heat wave invite stress and sunscald, especially on thin-barked species. We plan major work around the weather.</p>
      <h2>Anytime: Safety First</h2>
      <p>A branch threatening your roof or power lines should come down regardless of season. Safety always overrides the calendar.</p>
      <p>${BIZ}'s crew knows the right approach for every species and season. Learn more about our <a href="/services/tree-trimming">tree trimming and pruning</a>.</p>
      ${cta("Schedule a free trimming assessment")}
    `,
  },
  {
    title: "Stump Grinding vs. Stump Removal: What Valley Springs Homeowners Should Know",
    slug: "stump-grinding-vs-removal-valley-springs-ca",
    category: "Stump Grinding",
    date: "2026-04-22",
    excerpt:
      "Left with an ugly stump? Here's the difference between grinding and full removal, and which is right for your Valley Springs yard.",
    content: `
      <p>Once a tree is gone, the stump is the last obstacle to reclaiming your yard. You have two options: grinding or full removal. Here's how they compare for Valley Springs properties.</p>
      <h2>Stump Grinding</h2>
      <p>Grinding chips the stump down to <strong>6 to 12 inches below ground level</strong>. It's fast (often under an hour), affordable, and leaves the area ready to cover with soil and plant over. The roots stay in the ground and decompose naturally.</p>
      <h2>Full Stump Removal</h2>
      <p>Removal extracts the entire stump and root ball. It's far more invasive — a large hole and disturbed soil — and significantly more expensive. It's only necessary in specific cases, like building directly over the spot.</p>
      <h2>Which Should You Choose?</h2>
      <p>For most homeowners, <a href="/services/stump-grinding">grinding</a> is the clear winner: cheaper, faster, and less disruptive. The leftover roots rarely cause problems and the grindings make great mulch.</p>
      <h2>Don't Leave Stumps in Fire Country</h2>
      <p>Old stumps and roots can harbor pests and add fuel. Grinding them out is one more small step toward a cleaner, safer property.</p>
      ${cta("Get a free stump grinding quote")}
    `,
  },
  {
    title: "Preparing Your Murphys, CA Property for Wildfire Season",
    slug: "wildfire-defensible-space-murphys-ca",
    category: "Tree Care",
    date: "2026-04-15",
    excerpt:
      "In the foothills, smart tree care is wildfire protection. Here's how to create defensible space around your Murphys home.",
    content: `
      <p>Living in the Sierra Foothills means living with wildfire risk. The good news: thoughtful tree care dramatically reduces that risk. Cal Fire recommends <strong>100 feet of defensible space</strong> around your home, and trees are a big part of the equation. Here's how to prepare your Murphys property.</p>
      <h2>Zone 1 (0–30 ft): Lean and Clean</h2>
      <p>Remove dead trees, dead branches, and ladder fuels close to the house. Keep tree limbs at least 10 feet from your roof and chimney, and well clear of other trees.</p>
      <h2>Zone 2 (30–100 ft): Reduce and Space</h2>
      <p>Thin crowded trees so canopies don't touch, and remove lower limbs so fire can't climb from the ground into the crown. This is where professional <a href="/services/tree-trimming">trimming</a> makes a real difference.</p>
      <h2>Remove Hazard and Dead Trees</h2>
      <p>Drought- and beetle-killed pines are prime fuel. Our <a href="/services/hazardous-tree-removal">hazardous tree removal</a> crew safely takes them down before they become a liability.</p>
      <h2>Keep It Maintained</h2>
      <p>Defensible space isn't one-and-done. Annual trimming and cleanup keep your property compliant and protected year after year.</p>
      <p>${BIZ} helps foothill homeowners create and maintain defensible space with safe, professional crews.</p>
      ${cta("Book a free defensible-space assessment")}
    `,
  },
  {
    title: "Oak Tree Protection Rules in Calaveras County: What to Know",
    slug: "oak-tree-protection-calaveras-county",
    category: "Tree Removal",
    date: "2026-04-08",
    excerpt:
      "Thinking of removing an oak in the foothills? California oak protections can apply. Here's what to check first.",
    content: `
      <p>Native oaks are a defining feature of Gold Country — and in many California jurisdictions, including parts of Calaveras and Amador counties, certain oaks are protected. Before you remove one, it pays to understand the rules.</p>
      <h2>Why Oaks Are Protected</h2>
      <p>Blue oaks, valley oaks, and other natives are slow-growing and ecologically important, so local ordinances may regulate removal of healthy oaks above a certain trunk diameter.</p>
      <h2>When a Permit May Be Required</h2>
      <p>Rules vary by jurisdiction and whether the property is residential, agricultural, or part of a development. Dead, dying, or hazardous oaks are often exempt — but documentation usually matters.</p>
      <h2>Hazardous Oaks Are Different</h2>
      <p>If an oak is a genuine safety hazard, removal is typically allowed, sometimes with an arborist assessment. Our crew can evaluate the tree and document its condition.</p>
      <h2>We Help You Navigate It</h2>
      <p>${BIZ} knows the local landscape and can guide you through what's required before we perform any <a href="/services/tree-removal">tree removal</a> — so the job is done right and by the book.</p>
      ${cta("Ask us about oak removal in your area")}
    `,
  },
  {
    title: "How to Spot a Hazardous Tree in Your Yard",
    slug: "how-to-spot-a-hazardous-tree",
    category: "Hazardous Tree Removal",
    date: "2026-03-31",
    excerpt:
      "Most homeowners can't tell a healthy tree from a dangerous one until it's too late. Here's how the pros assess risk.",
    content: `
      <p>Trees rarely fail without warning — the signs are just easy to miss. Here's the same quick risk assessment our crew runs on every foothill and valley property.</p>
      <h2>Start at the Base</h2>
      <p>Look for mushrooms or fungus (root or trunk decay), and lifting soil or exposed roots on one side — a sign the tree may be losing its anchor.</p>
      <h2>Examine the Trunk</h2>
      <p>Deep vertical cracks, large cavities, missing bark, and soft or hollow-sounding wood all point to structural weakness. A tight, V-shaped fork is also prone to failure.</p>
      <h2>Look Up at the Canopy</h2>
      <p>Dead branches, a thinning crown, or a section that never leafs out are warning signs — as are large limbs hanging over your home or driveway. On pines, watch for the red needles of beetle kill.</p>
      <h2>Check the Lean</h2>
      <p>A long-standing lean is usually fine. A <strong>sudden new lean</strong> is an emergency.</p>
      <h2>When in Doubt, Get an Inspection</h2>
      <p>A trained eye catches what an untrained one misses. ${BIZ} provides honest hazard assessments — and if a tree can be saved with <a href="/services/tree-trimming">trimming</a> rather than <a href="/services/hazardous-tree-removal">removal</a>, we'll tell you.</p>
      ${cta("Schedule a free tree hazard inspection")}
    `,
  },
  {
    title: "Why Hire a Local, Insured Tree Service in the Sierra Foothills",
    slug: "why-hire-local-insured-tree-service",
    category: "Tree Care",
    date: "2026-03-24",
    excerpt:
      "That cheap quote from a guy with a chainsaw could cost you everything. Here's why licensing and insurance matter.",
    content: `
      <p>Tree work is one of the most dangerous jobs there is — and on steep foothill lots, the stakes are even higher. When you hire someone to do it on your property, who they are matters as much as what they charge.</p>
      <h2>Insurance Protects You</h2>
      <p>If an uninsured worker is hurt on your property, or drops a limb through your roof, <strong>you can be held liable</strong>. A fully insured company carries liability coverage so you're never on the hook. Always ask for proof.</p>
      <h2>Experience Means Safety</h2>
      <p>Foothill terrain, tall pines, and trees near power lines demand skill. ${BIZ} brings <strong>15 years of experience</strong> and a crew trained in safe work practices on every job.</p>
      <h2>Local Means Knowledge and Speed</h2>
      <p>A local company knows the species, fire rules, oak ordinances, and storm patterns of our region — and can reach you fast in an emergency.</p>
      <h2>The Real Cost of "Cheap"</h2>
      <p>A lowball quote often means cut corners, no insurance, and property damage. Quality work done safely is always the better value.</p>
      <p>${BIZ} is licensed, insured, and safety-first. <a href="/about">Learn more about us</a>.</p>
      ${cta("Get a quote from a trusted local crew")}
    `,
  },
  {
    title: "The Best Time of Year for Tree Removal in California",
    slug: "best-time-of-year-tree-removal-california",
    category: "Tree Removal",
    date: "2026-03-17",
    excerpt:
      "Tree removal can happen any season, but some times of year are easier and safer. Here's the breakdown for Central California.",
    content: `
      <p>If your tree isn't an immediate hazard, timing the removal can make the job smoother. Here's how the seasons stack up in Central California.</p>
      <h2>Late Fall to Winter: Often Ideal</h2>
      <p>Dormant deciduous trees are lighter and their structure is fully visible, making removal faster and safer. Cooler weather is easier on the crew and your landscaping, and demand is lower.</p>
      <h2>Spring: Great Window</h2>
      <p>Before the summer heat sets in, conditions are mild and access is good — a smart time to clear trees you've been putting off.</p>
      <h2>Summer: Plan Around the Heat (and Fire Season)</h2>
      <p>Removals happen year-round, but extreme heat and fire restrictions can affect scheduling. Clearing dead and hazard trees before peak fire season is always wise.</p>
      <h2>The Exception</h2>
      <p>A hazardous tree should come down <strong>immediately</strong>, regardless of season. Safety always wins.</p>
      <p>Whatever the season, ${BIZ} provides safe, clean <a href="/services/tree-removal">tree removal</a> starting at $500.</p>
      ${cta("Schedule your tree removal")}
    `,
  },
  {
    title: "Defensible Space: Tree Care That Protects Your Foothill Home",
    slug: "defensible-space-tree-care",
    category: "Tree Care",
    date: "2026-03-10",
    excerpt:
      "Wildfire defense starts with your trees. Here's how strategic trimming and removal harden your property against fire.",
    content: `
      <p>For Sierra Foothill homeowners, defensible space is one of the most important investments you can make — and trees are central to it. Here's how professional tree care reduces your wildfire risk.</p>
      <h2>Break the Fuel Ladder</h2>
      <p>Fire climbs from grass to shrubs to low limbs to the canopy. Removing lower branches (limbing up) and clearing brush beneath trees breaks that ladder so a ground fire can't reach the crown.</p>
      <h2>Space the Canopy</h2>
      <p>Trees whose canopies touch let fire jump tree to tree. Thinning and spacing crowns — especially on slopes — slows fire spread dramatically.</p>
      <h2>Remove Dead and Dying Trees</h2>
      <p>Beetle-killed pines and drought-stressed trees are pure fuel. Our <a href="/services/hazardous-tree-removal">hazardous tree removal</a> crew clears them safely.</p>
      <h2>Keep Limbs Off the House</h2>
      <p>Branches overhanging the roof or near the chimney are a direct ignition risk. Regular <a href="/services/tree-trimming">trimming</a> keeps them clear.</p>
      <p>${BIZ} helps foothill families protect their homes with fire-smart tree care, done safely and to code.</p>
      ${cta("Book a defensible-space assessment")}
    `,
  },
  {
    title: "Drought-Stressed Trees in Central California: Signs & Solutions",
    slug: "drought-stressed-trees-central-california",
    category: "Tree Care",
    date: "2026-03-03",
    excerpt:
      "California's dry years take a toll on trees. Here's how to spot drought stress and what you can do about it.",
    content: `
      <p>After repeated dry years, many Central California trees are struggling — and a stressed tree is a more dangerous tree. Here's what to look for and how to respond.</p>
      <h2>Signs of Drought Stress</h2>
      <p>Watch for wilting or scorched leaves, early fall color, thinning canopy, premature leaf drop, and dieback at the branch tips. On conifers, fading or browning needles are a warning.</p>
      <h2>Why It Matters</h2>
      <p>Drought-weakened trees are far more vulnerable to <strong>bark beetles and disease</strong>, and they're more likely to drop limbs or fail entirely — a real hazard near homes.</p>
      <h2>What Helps</h2>
      <p>Deep, infrequent watering at the drip line, a layer of mulch, and removing dead or competing growth all reduce stress. Proper <a href="/services/tree-trimming">pruning</a> helps a tree focus its limited resources.</p>
      <h2>When It's Too Far Gone</h2>
      <p>A tree that's mostly dead is a hazard, not a fixer-upper. We'll assess honestly and recommend <a href="/services/tree-removal">removal</a> only when it's truly warranted.</p>
      ${cta("Request a free tree health assessment")}
    `,
  },
  {
    title: "Technical Tree Removal on Steep Foothill Lots",
    slug: "technical-tree-removal-steep-lots",
    category: "Tree Removal",
    date: "2026-02-24",
    excerpt:
      "Steep terrain and tight access make foothill removals tricky. Here's how the pros bring trees down safely.",
    content: `
      <p>Not every tree can be felled the traditional way — especially on the steep, wooded lots common across the Sierra Foothills. When a tree is too big, too close to a structure, or on difficult terrain, technical removal is the safe answer.</p>
      <h2>Rigging and Sectional Dismantling</h2>
      <p>Instead of dropping a tree in one piece, our climbers remove it section by section, lowering each piece with ropes. This protects structures, landscaping, and the crew.</p>
      <h2>When a Crane Helps</h2>
      <p>For very large or compromised trees with no safe fall path, a crane lifts sections out over obstacles — faster and far safer on tight or sloped lots.</p>
      <h2>Protecting Your Property</h2>
      <p>Controlled techniques mean pieces are lowered, not dropped — minimizing impact on your home, fences, and gardens.</p>
      <h2>Experience Is Everything</h2>
      <p>Technical removals are no place for amateurs. ${BIZ} brings 15 years of experience and a safety-first crew to the toughest <a href="/services/hazardous-tree-removal">hazardous removals</a>.</p>
      ${cta("Ask about technical tree removal")}
    `,
  },
  {
    title: "Tree Trimming for Curb Appeal in Sonora, CA",
    slug: "tree-trimming-curb-appeal-sonora-ca",
    category: "Tree Trimming",
    date: "2026-02-17",
    excerpt:
      "Well-shaped trees transform a property's appearance — and value. Here's how trimming boosts curb appeal in Sonora.",
    content: `
      <p>Few things make a property look cared-for like healthy, well-shaped trees — and few things make it look neglected like overgrown, lopsided ones. If you're selling or just want your Sonora home to shine, trimming is one of the highest-impact, lowest-cost improvements you can make.</p>
      <h2>Shape and Symmetry</h2>
      <p>Professional shaping balances a tree's canopy, framing your home instead of hiding it. The difference from the curb is immediate.</p>
      <h2>Light and Views</h2>
      <p>Thinning an overgrown canopy lets more light reach your yard and can open up the foothill and mountain views that overgrowth had blocked.</p>
      <h2>Health Equals Beauty</h2>
      <p>Removing dead and crossing branches keeps a tree healthier and greener for years. A healthy tree is an attractive tree.</p>
      <h2>Clearance and Safety</h2>
      <p>Trimming branches off your roof, gutters, and walkways protects your home and keeps the property tidy.</p>
      <p>${BIZ}'s crew delivers clean, professional <a href="/services/tree-trimming">tree trimming</a> across Tuolumne County.</p>
      ${cta("Get a free trimming estimate")}
    `,
  },
  {
    title: "How Often Should You Trim Your Trees?",
    slug: "how-often-should-you-trim-trees",
    category: "Tree Trimming",
    date: "2026-02-10",
    excerpt:
      "Trim too often and you stress the tree; too rarely and it becomes a hazard. Here's the right schedule.",
    content: `
      <p>Trimming is essential, but more isn't always better — especially in our dry climate, where over-pruning adds stress. Here's a sensible schedule.</p>
      <h2>Most Mature Trees: Every 3–5 Years</h2>
      <p>For established shade and ornamental trees, a professional trim every <strong>three to five years</strong> keeps them healthy, safe, and well-shaped.</p>
      <h2>Young Trees: Every 2–3 Years</h2>
      <p>Young trees benefit from more frequent structural pruning to build strong, well-spaced branches for the decades ahead.</p>
      <h2>Fast-Growing or At-Risk Trees: More Often</h2>
      <p>Fast growers, and trees near structures, power lines, or in the defensible-space zone, may need attention every year or two.</p>
      <h2>As-Needed: Safety</h2>
      <p>Dead, broken, or hazardous limbs should be removed whenever they appear, regardless of schedule.</p>
      <p>${BIZ}'s crew will assess your trees and recommend the right interval during a free visit. See our <a href="/services/tree-trimming">trimming services</a>.</p>
      ${cta("Schedule a trimming assessment")}
    `,
  },
  {
    title: "Tree Trimming vs. Pruning: What's the Difference?",
    slug: "tree-trimming-vs-pruning-difference",
    category: "Tree Trimming",
    date: "2026-02-03",
    excerpt:
      "People use the terms interchangeably, but trimming and pruning aren't quite the same. Here's the distinction.",
    content: `
      <p>"Trimming" and "pruning" get used as if they mean the same thing — and in casual conversation, that's fine. But to a tree professional, they describe different goals.</p>
      <h2>Trimming: Appearance and Clearance</h2>
      <p>Trimming means cutting back overgrowth — for shape, for clearance from your house or power lines, and for a tidy appearance. It's about managing size and form.</p>
      <h2>Pruning: Health and Structure</h2>
      <p>Pruning is more selective and health-focused. It targets specific branches — dead, diseased, crossing, or poorly placed — to improve the tree's structure and long-term vigor.</p>
      <h2>Why It Matters</h2>
      <p>Both are valuable, and most visits involve some of each. But the goal shapes the cuts — and <strong>proper technique matters</strong> either way. Bad cuts cause lasting damage, especially on drought-stressed trees.</p>
      <h2>Leave It to the Pros</h2>
      <p>${BIZ}'s experienced crew knows exactly which cuts a tree needs and why. Our <a href="/services/tree-trimming">trimming and pruning</a> service covers both.</p>
      ${cta("Book a free assessment")}
    `,
  },
  {
    title: "What to Do Immediately After a Tree Falls on Your House",
    slug: "tree-fell-on-house-what-to-do",
    category: "Emergency Tree Services",
    date: "2026-01-27",
    excerpt:
      "A tree through the roof is frightening — but the right steps in the first hour protect your safety and your insurance claim.",
    content: `
      <p>It's one of the worst sounds a homeowner can hear: the crash of a tree hitting the house. Once it happens, what you do next matters. Here's the right order of operations.</p>
      <h2>1. Get Everyone Out Safely</h2>
      <p>If the structure is compromised, <strong>leave the house</strong> and account for everyone. Watch for sagging ceilings, gas smells, and electrical hazards.</p>
      <h2>2. Call 911 if Needed</h2>
      <p>For injuries, gas leaks, or active electrical danger, call emergency services first.</p>
      <h2>3. Report Downed Power Lines</h2>
      <p>If the tree took down wires, call PG&amp;E immediately and stay far clear.</p>
      <h2>4. Document Everything</h2>
      <p>Once it's safe, photograph the damage thoroughly before anything is moved — this is critical for your insurance claim.</p>
      <h2>5. Call a Professional Crew</h2>
      <p>Removing a tree from a structure is dangerous, technical work. ${BIZ}'s <a href="/services/emergency-tree-services">emergency crew</a> safely removes the tree, prevents further damage, and documents it for your insurer.</p>
      ${cta("Call now for emergency tree removal")}
    `,
  },
  {
    title: "How to Tell If a Tree Is Dead or Just Dormant",
    slug: "is-my-tree-dead-or-dormant",
    category: "Tree Care",
    date: "2026-01-20",
    excerpt:
      "A bare tree in winter isn't necessarily dead. Here's how to tell the difference before you decide to remove it.",
    content: `
      <p>Every winter, homeowners worry that a leafless tree has died — when often it's simply dormant. Before you decide on removal, run these simple checks.</p>
      <h2>The Scratch Test</h2>
      <p>Scratch a small spot of bark on a twig. If it's <strong>green and moist</strong> underneath, the tree is alive. Brown, dry, and brittle means that branch is dead — check a few spots around the tree.</p>
      <h2>The Bend Test</h2>
      <p>Living twigs are flexible and bend before snapping. Dead ones are brittle and snap cleanly with no give.</p>
      <h2>Look for Buds</h2>
      <p>Healthy dormant trees form buds for next season. A complete absence of buds is a warning sign.</p>
      <h2>Watch for Drought and Beetle Signs</h2>
      <p>In our region, a tree that looks "dormant" may actually be drought- or beetle-stressed. Red needles on pines are a red flag, not dormancy.</p>
      <h2>When You're Not Sure</h2>
      <p>${BIZ} can give you a definitive answer — and if it can be saved with <a href="/services/tree-trimming">trimming</a> rather than <a href="/services/tree-removal">removal</a>, we'll tell you.</p>
      ${cta("Request a free tree health assessment")}
    `,
  },
  {
    title: "Bark Beetles & Dying Pines in the Sierra Foothills",
    slug: "bark-beetles-dying-pines-sierra-foothills",
    category: "Tree Care",
    date: "2026-01-13",
    excerpt:
      "Bark beetles have killed millions of California pines. Here's how to spot an infestation and what to do.",
    content: `
      <p>Years of drought have left Sierra Foothill pines vulnerable to bark beetles, which have killed millions of trees across California. If you have pines, knowing the signs can mean the difference between early action and a dangerous dead tree.</p>
      <h2>What's Happening</h2>
      <p>Bark beetles bore into stressed pines and disrupt the tree's ability to move water and nutrients. A weakened, drought-stressed tree can't push the beetles out, and it dies — often within a single season.</p>
      <h2>The Warning Signs</h2>
      <p>Watch for <strong>reddish-brown or fading needles</strong>, popcorn-sized pitch tubes on the trunk, fine sawdust ("frass") in bark crevices, and bark flaking off to reveal winding galleries underneath.</p>
      <h2>Why Act Fast</h2>
      <p>Beetle-killed pines dry out and become brittle quickly, making them a serious fire and falling hazard — and harder, more dangerous, and more expensive to remove the longer you wait.</p>
      <h2>What to Do</h2>
      <p>Healthy trees can sometimes be protected by reducing stress, but once a pine is infested and fading, prompt <a href="/services/tree-removal">removal</a> is the safe choice. ${BIZ} can assess your pines and act fast.</p>
      ${cta("Have your pines inspected")}
    `,
  },
  {
    title: "Dealing With Trees Near Power Lines in San Andreas, CA",
    slug: "trees-near-power-lines-san-andreas-ca",
    category: "Hazardous Tree Removal",
    date: "2026-01-06",
    excerpt:
      "Branches near power lines are a serious hazard — and not a DIY job. Here's how it should be handled in the foothills.",
    content: `
      <p>Tree limbs growing into power lines are one of the most dangerous tree problems foothill homeowners face. They cause outages, spark wildfires, and pose a serious injury risk. Here's what every San Andreas homeowner should know.</p>
      <h2>Never DIY Near Lines</h2>
      <p>Trimming branches near power lines is <strong>extremely dangerous</strong> and should never be attempted by a homeowner. Electricity can arc, and a misstep can be fatal.</p>
      <h2>Who's Responsible?</h2>
      <p>PG&amp;E maintains clearance around their main lines, but the service line to your house — and trees on your property — are typically your responsibility. It's worth confirming.</p>
      <h2>The Fire Connection</h2>
      <p>In fire country, limbs contacting lines are a known ignition source. Keeping trees clear isn't just about outages — it's wildfire prevention.</p>
      <h2>The Professional Approach</h2>
      <p>Our crew is trained and equipped to work safely near energized lines, using proper techniques and clearances. Regular <a href="/services/tree-trimming">trimming</a> keeps limbs well clear so they never become an emergency.</p>
      <p>If you have branches near your lines, don't wait and don't DIY — call ${BIZ}.</p>
      ${cta("Schedule safe power-line clearance trimming")}
    `,
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((p, i) => ({
  ...p,
  coverImage: p.coverImage ?? cover(i),
}));

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))].sort();
}

export function getRelatedPosts(post: BlogPost, n = 3): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(getAllPosts().filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, n);
}
