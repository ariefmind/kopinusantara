import type { Core } from '@strapi/strapi';

const PRODUCTS = [
  {
    name: 'Gayo',
    slug: 'gayo',
    region: 'Aceh, Sumatra',
    note: 'Herbal, rempah, body tebal.',
    image: 'product-gayo.jpg',
    prices: { '100g': 45000, '250g': 95000, '500g': 175000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Toraja',
    slug: 'toraja',
    region: 'Sulawesi Selatan',
    note: 'Manis, karamel, low acid.',
    image: 'product-toraja.jpg',
    prices: { '100g': 48000, '250g': 105000, '500g': 195000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Kintamani',
    slug: 'kintamani',
    region: 'Bali',
    note: 'Citrus, cerah, floral.',
    image: 'product-kintamani.jpg',
    prices: { '100g': 46000, '250g': 98000, '500g': 180000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Bajawa',
    slug: 'bajawa',
    region: 'Flores',
    note: 'Cokelat, kacang, manis lembut.',
    image: 'product-bajawa.jpg',
    prices: { '100g': 46000, '250g': 98000, '500g': 180000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Mandailing',
    slug: 'mandailing',
    region: 'Sumatra Utara',
    note: 'Cokelat gelap, cedar, body berat.',
    image: 'product-mandailing.jpg',
    prices: { '100g': 42000, '250g': 88000, '500g': 165000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Lintong',
    slug: 'lintong',
    region: 'Danau Toba, Sumatra',
    note: 'Woody, herbal, finish syrupy.',
    image: 'product-lintong.jpg',
    prices: { '100g': 42000, '250g': 88000, '500g': 165000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Java Preanger',
    slug: 'java-preanger',
    region: 'Jawa Barat',
    note: 'Nutty, mellow, finish bersih.',
    image: 'product-java-preanger.jpg',
    prices: { '100g': 40000, '250g': 82000, '500g': 155000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
  {
    name: 'Wamena',
    slug: 'wamena',
    region: 'Lembah Baliem, Papua',
    note: 'Fruity, wine-like, acidity lembut.',
    image: 'product-wamena.jpg',
    prices: { '100g': 52000, '250g': 115000, '500g': 215000 },
    stock: { '100g': 60, '250g': 50, '500g': 40 },
  },
];

const ABOUT = {
  heroEyebrow: 'About ARSA',
  heroTitle: 'Coffee that carries a <em>place</em> with it.',
  heroSubtitle:
    'ARSA works directly with smallholder farmers and cooperatives across the Indonesian archipelago — from the wet-hulled highlands of Sumatra to the isolated valleys of Papua — to bring single-origin coffee to roasters and importers abroad, with the story of where it came from intact.',
  nameHeading: 'The name',
  nameBody1:
    '<em>Arsa</em> is an Old Javanese word meaning aspiration, or a deeply held wish — a fitting root for a coffee brand built on the aspirations of the farmers we work with.',
  nameBody2:
    "It's also come to stand for what we do: <strong>Archipelago Roots, Sourced Authentically</strong> — every bag traced back to a region, a cooperative, and the people who grew it.",
  storyHeading: 'How it started',
  storyBody1:
    'ARSA began with a simple observation: Indonesia grows some of the most distinct coffee in the world, yet much of it leaves the country as anonymous, blended cargo. Regional character — the wet-hulling of Sumatra, the citrus-bright cups of Bali, the fruit-forward beans of Papua — gets flattened long before it reaches a roaster\u2019s cupping table.',
  storyBody2:
    "We set out to change that by working origin-by-origin, cooperative-by-cooperative, keeping each region's beans separate, traceable, and honestly described — from elevation and processing method to the farmers who grew it.",
  valuesHeading: 'What we believe',
  values: [
    {
      title: 'Traceability first',
      body: 'Every lot is tracked back to its region and, where possible, its cooperative — no blending across origins.',
    },
    {
      title: 'Fair, direct partnerships',
      body: 'We work directly with farmer cooperatives rather than layers of middlemen, so more of the value reaches growers.',
    },
    {
      title: 'Small-batch, honest grading',
      body: 'Lots are cupped and graded transparently — we describe what a cup actually tastes like, not just a marketing note.',
    },
    {
      title: 'Sustainable by necessity',
      body: 'Many of our partner farms use shade-grown, low-input methods that predate any certification — we work to preserve that.',
    },
  ],
  regionsHeading: 'Where we source',
  regionsCaption: '8 regions across the archipelago',
  regions: [
    { name: 'Gayo', island: 'Aceh, Sumatra' },
    { name: 'Mandailing', island: 'North Sumatra' },
    { name: 'Lintong', island: 'Lake Toba, Sumatra' },
    { name: 'Java Preanger', island: 'West Java' },
    { name: 'Toraja', island: 'South Sulawesi' },
    { name: 'Kintamani', island: 'Bali' },
    { name: 'Bajawa', island: 'Flores' },
    { name: 'Wamena', island: 'Papua' },
  ],
  timelineHeading: 'Milestones',
  timeline: [
    {
      year: 'Year 1',
      title: 'First direct partnership',
      body: 'Started sourcing directly from a single cooperative in the Gayo highlands, Aceh.',
    },
    {
      year: 'Year 2',
      title: 'Expanded to four regions',
      body: 'Added partnerships in Toraja, Bali, and Flores, formalizing our origin-separated lot system.',
    },
    {
      year: 'Year 3',
      title: 'First export shipments',
      body: 'Began shipping directly to roasters in Europe, North America, and East Asia.',
    },
    {
      year: 'Today',
      title: 'Eight origins, one archipelago',
      body: 'Now sourcing from eight regions from Sumatra to Papua, with more cooperative partnerships in progress.',
    },
  ],
  ctaTitle: 'Interested in sourcing from us?',
};

const CONTACT = {
  heroEyebrow: 'Contact',
  heroTitle: "Let's talk <em>coffee</em>.",
  heroSubtitle:
    "Whether you're a roaster looking for a new single-origin lot, an importer exploring a first shipment, or just curious about a specific region — reach out and we'll get back to you within two business days.",
  officeLabel: 'Export office',
  officeAddress: 'Jl. Kopi Nusantara No. 12<br>South Jakarta, Indonesia 12190',
  emailLabel: 'Email',
  email: 'hello@arsacoffee.com',
  phoneLabel: 'Phone / WhatsApp',
  phone: '+62 21 1234 5678',
  responseLabel: 'Response time',
  response: 'Within 2 business days, WIB (UTC+7)',
  wholesaleLabel: 'For wholesale buyers',
  wholesaleNote:
    'See our <a href="shipping.html" style="border-bottom:1px solid var(--gold);">shipping &amp; export terms</a> for MOQ, Incoterms, and lead times before reaching out.',
};

const ORIGINS = [
  {
    slug: 'gayo', name: 'Gayo', region: 'Aceh Highlands, Sumatra', menuRegion: 'Aceh, Sumatra',
    elevation: '1,200–1,700 masl', coords: '4.6°N, 96.8°E', process: 'Wet-hulled (Giling Basah)', harvest: 'Oct – Feb',
    character: 'Herbal, spiced, heavy body',
    shortNote: 'Wet-hulled Sumatra process. Herbal, spiced, full body, low acidity.',
    panelNote: "Grown in volcanic soil around Lake Laut Tawar and processed with Sumatra's traditional wet-hulling method, giving these beans their earthy tone and low acidity.",
    lede: 'Grown in volcanic soil around Lake Laut Tawar, Gayo is Sumatra\u2019s signature cup — heavy-bodied and low in acidity, shaped by a wet-hulling method found almost nowhere else in the world.',
    story: 'Farmed by smallholders across the Gayo highlands, cherries are pulped within a day of picking, then parchment is hulled while still damp — a process unique to Sumatra. The result is a bean that dries unevenly on the outside but develops a syrupy, low-acid character prized in dark and espresso roasts.',
    flavor: ['Herbal', 'Cedar', 'Dark spice', 'Heavy body', 'Low acidity'],
    price: '$19', glyph: 'M10 140 L60 40 L90 90 L120 20 L160 100 L190 140', panelId: 'panel-1',
  },
  {
    slug: 'toraja', name: 'Toraja', region: 'South Sulawesi', menuRegion: 'South Sulawesi',
    elevation: '1,400–2,100 masl', coords: '3.0°S, 119.8°E', process: 'Wet-hulled, hand-sorted', harvest: 'Jul – Sep',
    character: 'Sweet, caramel, low acid',
    shortNote: 'Hand-picked from limestone slopes. Sweet, caramel, low acidity.',
    panelNote: 'Grown on limestone mountain slopes and harvested by smallholder farmers who still hand-select ripe red cherries, one at a time.',
    lede: 'Grown on limestone mountain slopes in the highlands of Tana Toraja, this cup is defined by its sweetness — caramel and brown sugar carried on a full, low-acid body.',
    story: 'Toraja\u2019s terrain is steep and fragmented, so cherries are still picked and sorted almost entirely by hand by smallholder families. Careful red-cherry selection, followed by traditional wet-hulling, gives the coffee a rounded sweetness with almost no sharp edges.',
    flavor: ['Caramel', 'Brown sugar', 'Cedar', 'Low acidity', 'Full body'],
    price: '$21', glyph: 'M10 130 L45 60 L75 100 L110 15 L145 85 L190 130', panelId: 'panel-2',
  },
  {
    slug: 'kintamani', name: 'Kintamani', region: 'Bali', menuRegion: 'Bali',
    elevation: '900–1,550 masl', coords: '8.2°S, 115.4°E', process: 'Fully washed', harvest: 'Apr – Sep',
    character: 'Citrus, bright, floral',
    shortNote: 'Grown under the subak irrigation system. Citrus, bright, floral.',
    panelNote: "Interplanted with citrus and vegetables under Bali's subak irrigation tradition, which shapes a cup that's fresh and lightly tart.",
    lede: 'Interplanted with citrus under Bali\u2019s centuries-old subak irrigation system, Kintamani is the brightest cup in the collection — floral, citrus-forward, and lightly tart.',
    story: 'Subak, Bali\u2019s traditional water-sharing cooperative, governs how these highland farms are irrigated — a UNESCO-recognized system that also shapes what grows alongside the coffee. Interplanting with citrus and vegetables is thought to lend the cherries their fragrant, citrus-leaning profile. Beans are fully washed, unlike most Indonesian origins, for a cleaner, brighter cup.',
    flavor: ['Citrus', 'Floral', 'Light body', 'Bright acidity', 'Tea-like'],
    price: '$20', glyph: 'M10 135 L50 95 L80 110 L100 35 L130 95 L190 135', panelId: 'panel-3',
  },
  {
    slug: 'bajawa', name: 'Bajawa', region: 'Flores', menuRegion: 'Flores',
    elevation: '1,200–1,650 masl', coords: '8.8°S, 121.0°E', process: 'Semi-washed', harvest: 'May – Aug',
    character: 'Chocolate, nutty, soft sweetness',
    shortNote: 'Shaded by candlenut trees near Mount Inerie. Chocolate, nutty, soft sweetness.',
    panelNote: 'The easternmost stop on this journey — small gardens at the foot of Mount Inerie, shaded by candlenut trees, yielding a round, quiet cup.',
    lede: 'The easternmost origin in this collection — small gardens at the foot of Mount Inerie, shaded by candlenut trees, producing a round, quiet, chocolate-forward cup.',
    story: 'Bajawa\u2019s coffee gardens sit within a wider agroforestry system, shaded by candlenut and other native trees that moderate temperature and enrich the soil. Farms here are small and largely organic by necessity rather than certification, and cherries are semi-washed to preserve a soft, mellow sweetness.',
    flavor: ['Chocolate', 'Toasted nuts', 'Soft sweetness', 'Medium body', 'Low acidity'],
    price: '$20', glyph: 'M10 140 L55 70 L85 105 L115 25 L150 90 L190 140', panelId: 'panel-4',
  },
  {
    slug: 'mandailing', name: 'Mandailing', region: 'North Sumatra', menuRegion: 'North Sumatra',
    elevation: '1,100–1,600 masl', coords: '0.9°N, 99.4°E', process: 'Wet-hulled (Giling Basah)', harvest: 'Sep – Dec',
    character: '',
    shortNote: 'Full-bodied and syrupy with notes of dark chocolate and cedar, minimal acidity.',
    panelNote: '',
    lede: 'One of Sumatra\u2019s best-known names abroad, Mandailing is full-bodied and syrupy, with dark chocolate and cedar notes and almost no perceptible acidity.',
    story: 'Grown in the Mandailing Natal highlands, this coffee shares Sumatra\u2019s signature wet-hulling process, which strips parchment while beans are still moist. The result is a heavier, earthier profile that has made Mandailing a long-standing favorite for dark roast blends.',
    flavor: ['Dark chocolate', 'Cedar', 'Earthy', 'Heavy body', 'Minimal acidity'],
    price: '$18', glyph: 'M10 138 L48 78 L78 118 L108 48 L142 108 L190 138', panelId: null,
  },
  {
    slug: 'lintong', name: 'Lintong', region: 'Lake Toba, Sumatra', menuRegion: 'Lake Toba, Sumatra',
    elevation: '1,000–1,700 masl', coords: '2.3°N, 98.9°E', process: 'Wet-hulled (Giling Basah)', harvest: 'Sep – Dec',
    character: '',
    shortNote: 'Grown around Lake Toba. Woody, herbal, with a syrupy, low-acid finish.',
    panelNote: '',
    lede: 'Grown around the vast caldera of Lake Toba, Lintong offers a woody, herbal cup with a thick, syrupy finish and gentle acidity.',
    story: 'Farmed largely by Batak Toba families on the slopes surrounding Lake Toba, Southeast Asia\u2019s largest volcanic lake, Lintong coffee is processed the traditional Sumatran way. Cooperatives handle much of the sorting and drying, producing a cup with a tobacco-like depth that Sumatra origins are known for.',
    flavor: ['Woody', 'Herbal', 'Tobacco', 'Syrupy body', 'Low acidity'],
    price: '$18', glyph: 'M10 132 L52 92 L82 112 L112 42 L146 100 L190 132', panelId: null,
  },
  {
    slug: 'java-preanger', name: 'Java Preanger', region: 'West Java', menuRegion: 'West Java',
    elevation: '1,000–1,600 masl', coords: '7.0°S, 107.6°E', process: 'Fully washed', harvest: 'May – Sep',
    character: '',
    shortNote: 'Indonesia\u2019s oldest coffee region. Nutty and mellow with a clean, mild finish.',
    panelNote: '',
    lede: 'Grown on the volcanic slopes above Bandung, Preanger is Indonesia\u2019s oldest coffee-growing region — nutty, mellow, and cleaner than most island origins.',
    story: 'Coffee has been cultivated here since Dutch plantations were established in the region in the 18th century, and the terraced highland farms remain in use today. Fully washed processing gives Preanger a cleaner, milder cup than its wet-hulled Sumatran cousins — a gentle introduction to Indonesian coffee.',
    flavor: ['Nutty', 'Mellow', 'Clean finish', 'Medium body', 'Balanced acidity'],
    price: '$17', glyph: 'M10 136 L44 100 L74 120 L104 60 L138 112 L190 136', panelId: null,
  },
  {
    slug: 'wamena', name: 'Wamena', region: 'Baliem Valley, Papua', menuRegion: 'Baliem Valley, Papua',
    elevation: '1,400–1,800 masl', coords: '4.1°S, 138.9°E', process: 'Fully washed', harvest: 'Apr – Aug',
    character: '',
    shortNote: 'Organic by tradition, isolated highland gardens. Fruity, wine-like, delicate acidity.',
    panelNote: '',
    lede: 'Farmed in the remote Baliem Valley of the Papuan highlands, Wamena is organic by tradition and isolation — fruity, wine-like, with a delicate acidity rarely found elsewhere in the archipelago.',
    story: 'The Baliem Valley\u2019s geographic isolation means synthetic fertilizers and pesticides have never really reached local farms, making Wamena coffee organic in practice rather than by certification. Small-scale indigenous growers hand-pick and fully wash the cherries, producing one of the most distinct, fruit-forward cups in Indonesia.',
    flavor: ['Fruity', 'Wine-like', 'Delicate acidity', 'Light body', 'Floral finish'],
    price: '$23', glyph: 'M10 142 L58 88 L88 118 L118 42 L152 96 L190 142', panelId: null,
  },
];

const HOME = {
  heroEyebrow: 'Indonesian Coffee',
  heroTitle: 'From<br><em>peak</em><br>to cup',
  heroSubtitle: 'Four highland regions, one elevation line running from Aceh to Flores. Scroll sideways to trace where every bean begins.',
  menuHeading: 'Eight regions, one archipelago',
  menuCaption: 'Tap a region for tasting notes',
  closingEyebrow: 'End of the journey',
  closingTitle: 'Four highlands, one cup. Find the flavor that feels like home.',
  ctaText: 'Explore the ARSA collection →',
  ctaHref: 'retail.html',
};

const SHIPPING = {
  heroEyebrow: 'Wholesale & Export',
  heroTitle: 'Shipping & <em>export</em>, made straightforward.',
  heroSubtitle:
    'Everything a roaster or importer needs to know before placing a first order — Incoterms, minimum order quantities, packaging, and lead times.',
  termsHeading: 'Trade terms',
  terms: [
    { label: 'Incoterms', val: 'FOB / CIF', note: 'FOB Jakarta or Belawan as standard; CIF available on request for select destinations.' },
    { label: 'Minimum order', val: '1 x 19.2 MT FCL', note: 'Smaller trial orders (LCL, from 60kg) available for new roaster partners.' },
    { label: 'Lead time', val: '3–5 weeks', note: 'From confirmed order to vessel departure, depending on origin and season.' },
    { label: 'Payment terms', val: 'T/T or L/C', note: '30% deposit, 70% against shipping documents is standard for new accounts.' },
  ],
  packagingHeading: 'Packaging options',
  packaging: [
    { title: 'GrainPro-lined jute bags', image: 'pack-grainpro.jpg', body: '60kg jute sacks with a GrainPro barrier bag for moisture and freshness control on long ocean transit — our default for full-container orders.' },
    { title: 'Vacuum-sealed cartons', image: 'pack-vacuum.jpg', body: '1kg or 5kg vacuum-sealed units in cartons, suited to LCL and sample-volume orders for roasters.' },
    { title: 'Custom private label', image: 'pack-custom.jpg', body: 'Retail-ready bags with your branding, available for larger recurring orders — ask for lead time and minimums.' },
  ],
  processHeading: 'How ordering works',
  process: [
    { title: 'Inquiry &amp; sample', body: "Tell us the origin, volume, and timeline you're after. We'll send cupping samples for evaluation." },
    { title: 'Contract &amp; deposit', body: 'Once you confirm, we issue a proforma invoice and lock in the lot at agreed pricing and terms.' },
    { title: 'Prep &amp; documentation', body: 'We prepare Certificate of Origin, phytosanitary certificate, and other export documents required by your country.' },
    { title: 'Shipment &amp; tracking', body: 'Container is booked and shipped; you receive tracking details and full shipping documents before arrival.' },
  ],
  faqHeading: 'Frequently asked',
  faq: [
    { question: 'How long does shipping actually take?', answer: 'Ocean transit varies by destination — typically 2–5 weeks after departure. Combined with production lead time, most orders arrive 5–9 weeks after contract confirmation.' },
    { question: 'Can I order a trial quantity before committing to a full container?', answer: 'Yes — LCL orders from 60kg are available for new roaster partners to evaluate a lot before scaling up.' },
    { question: 'Do you provide organic or fair-trade certification?', answer: 'Several of our partner farms, including Wamena and Bajawa, are organic by traditional practice. Formal certification is available for select lots on request — ask us for current status per origin.' },
    { question: 'Which documents are included with a shipment?', answer: 'Every shipment includes a Certificate of Origin, phytosanitary certificate, commercial invoice, packing list, and bill of lading.' },
  ],
  ctaTitle: 'Ready to source your first lot?',
  ctaHref: 'contact.html',
  ctaText: 'Start an inquiry →',
};

async function seedProducts() {
  const existing = await strapi.documents('api::product.product').findMany({ limit: 1 });
  if (existing && existing.length > 0) return;
  for (const p of PRODUCTS) {
    await strapi.documents('api::product.product').create({
      data: p,
      status: 'published',
    });
  }
  strapi.log.info('Seeded products');
}

async function seedSingle(type: string, data: Record<string, unknown>) {
  const doctype = strapi.documents(`api::${type}.${type}` as never);
  const entry = await doctype.findFirst({});
  if (entry) return;
  await doctype.create({
    data,
    status: 'published',
  });
  strapi.log.info(`Seeded ${type}`);
}

async function seedOrigins() {
  const existing = await strapi.documents('api::origin.origin').findMany({ limit: 1 });
  if (existing && existing.length > 0) return;
  for (const o of ORIGINS) {
    await strapi.documents('api::origin.origin').create({
      data: o as never,
      status: 'published',
    });
  }
  strapi.log.info('Seeded origins');
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await seedProducts();
    await seedOrigins();
    await seedSingle('about-page', ABOUT);
    await seedSingle('contact-page', CONTACT);
    await seedSingle('home-page', HOME);
    await seedSingle('shipping-page', SHIPPING);
  },
};