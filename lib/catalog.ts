export type ProductStatus = "standard" | "custom" | "future";

export type ProductCategory =
  | "media-walls"
  | "fireplaces"
  | "centerpieces"
  | "tables"
  | "outdoor"
  | "accessories";

export interface GalleryItem {
  slug: string;
  title: string;
  category: ProductCategory;
  status: ProductStatus;
  label: string;
  price: string;
  image: string;
  gallery?: string[];
  summary: string;
  description: string;
  included: string[];
  addOns: string[];
  pairings: string[];
  specs?: string[];
}

export interface OptionCategory {
  title: string;
  category: ProductCategory;
  status: "active" | "soon";
  summary: string;
  availability: string;
  image: string;
}

export const navItems = [
  { label: "Featured", href: "/featured" },
  { label: "Builder", href: "/builder" },
  { label: "Discover", href: "/discover" },
  { label: "Options", href: "/options" },
  { label: "Estimate", href: "#estimate" },
];

export const standardIncludes = [
  "Delivery and installation included in service areas",
  "Built from birch plywood with finished trim details",
  "Painted Sherwin-Williams Pure White unless noted",
  "60-inch electric fireplace included on core media wall models",
  "1-year labor and materials warranty",
  "TV and TV mount are not included",
];

export const addOnLibrary = [
  "Mantel upgrade",
  "Soundbar fitting",
  "Side shelving",
  "Extended width",
  "Premium finish",
  "Concealed cable planning",
];

export const featuredItems: GalleryItem[] = [
  {
    slug: "metro-apex",
    title: "Metro Apex",
    category: "media-walls",
    status: "standard",
    label: "Classic media wall",
    price: "$3,500-$4,000",
    image: "/great-wall/models/bp1-main.jpg",
    gallery: ["/great-wall/models/bp1-main.jpg", "/great-wall/models/bp1-mantel.png"],
    summary: "A balanced media wall that brings the TV and fireplace into one simple design.",
    description:
      "Metro Apex pairs a centered fireplace with a clean TV wall. Choose your height and explore mantel, soundbar, and finish options to suit your room.",
    included: standardIncludes,
    addOns: ["Mantel upgrade +$300", "Soundbar fitting", "Extended height", "Finish consultation"],
    pairings: ["Pure White finish", "Warm gray stone floor", "Low-profile sofa grouping"],
    specs: ["8ft: $3,500", "9ft: $3,800", "10ft: $4,000"],
  },
  {
    slug: "metro-summit",
    title: "Metro Summit",
    category: "media-walls",
    status: "standard",
    label: "Tall fireplace wall",
    price: "$4,000-$4,500",
    image: "/great-wall/models/bp2-main.jpg",
    gallery: ["/great-wall/models/bp2-main.jpg", "/great-wall/models/bp2-mantel.jpg"],
    summary: "A taller fireplace wall that makes the most of rooms with higher ceilings.",
    description:
      "Metro Summit brings height and definition to the fireplace wall. Add a mantel, soundbar fitting, or side shelving to complete the layout.",
    included: standardIncludes,
    addOns: ["Mantel upgrade", "Soundbar fitting", "Side shelving", "Height extension"],
    pairings: ["Large sectional", "Framed television", "Warm white lighting"],
    specs: ["8ft: $4,000", "9ft: $4,300", "10ft: $4,500"],
  },
  {
    slug: "metro-heritage",
    title: "Metro Heritage",
    category: "media-walls",
    status: "standard",
    label: "Beadboard texture",
    price: "$4,750-$5,700",
    image: "/great-wall/models/bp3-beadboard.png",
    gallery: ["/great-wall/models/bp3-beadboard.png", "/great-wall/models/bp3-custom.jpg"],
    summary: "Beadboard texture adds classic detail to a clean media wall layout.",
    description:
      "Metro Heritage combines beadboard texture with a modern fireplace layout. Customize the paint color, mantel, and shelving details to complement your room.",
    included: standardIncludes,
    addOns: ["Beadboard finish", "Mantel upgrade", "Shelf returns", "Custom paint color"],
    pairings: ["Traditional trim", "Stone accessories", "Soft linen seating"],
    specs: ["Starting at $4,750", "Custom examples shown from $5,225"],
  },
  {
    slug: "metro-gallery",
    title: "Metro Gallery",
    category: "media-walls",
    status: "standard",
    label: "Shelving and display",
    price: "$5,000-$5,750",
    image: "/great-wall/models/bp4-s3.jpg",
    gallery: ["/great-wall/models/bp4-s3.jpg", "/great-wall/models/bp4-s2.jpg"],
    summary: "A substantial media wall with room for shelving, storage, and display.",
    description:
      "Metro Gallery frames the fireplace with space for display and storage. Explore two- and three-section layouts, side shelving, and lighting options.",
    included: standardIncludes,
    addOns: ["Three-section layout", "Two-section layout", "Side shelving", "Lighting prep"],
    pairings: ["Built-in decor", "Dark wood coffee table", "Warm spotlighting"],
    specs: ["S3 starting at $5,000", "S2 shown at $5,750"],
  },
  {
    slug: "metro-legacy",
    title: "Metro Legacy",
    category: "media-walls",
    status: "custom",
    label: "Handcrafted example",
    price: "Custom quote",
    image: "/great-wall/models/bp5-main.jpg",
    summary: "A tailored fireplace wall to inspire your own layout and finish choices.",
    description:
      "Use Metro Legacy as a reference for your custom project. We’ll review the proportions, finishes, and fireplace placement with you to develop a quote.",
    included: ["Custom layout review", "Finish planning", "Fireplace integration", "Installation quoted by scope"],
    addOns: addOnLibrary,
    pairings: ["Stone hearth", "Artwork above fireplace", "Ambient wall lighting"],
  },
  {
    slug: "metro-axis",
    title: "Metro Axis",
    category: "media-walls",
    status: "custom",
    label: "Modern mantel-free design",
    price: "Starting around $5,700",
    image: "/great-wall/models/bp6-main.jpg",
    summary: "A modern media wall with a smooth profile and no mantel.",
    description:
      "Metro Axis keeps the profile simple with minimal trim and no mantel. Explore custom finishes, a floating base, and concealed cable planning.",
    included: ["Modern mantel-free profile", "Fireplace integration", "Custom finish review", "Installation quoted by scope"],
    addOns: ["Soundbar fitting", "Floating base", "Custom wall finish", "Concealed cable planning"],
    pairings: ["Minimal furniture", "Large-format stone", "Warm linear lighting"],
  },
  {
    slug: "metro-haven",
    title: "Metro Haven",
    category: "media-walls",
    status: "standard",
    label: "Family room media wall",
    price: "Starting at $5,250",
    image: "/great-wall/models/bp7-main.png",
    summary: "A fireplace media wall with flexible options for a busy family room.",
    description:
      "Metro Haven brings the fireplace and TV together in a finished feature wall. Add shelving, adjust the width, or choose a paint upgrade to suit your space.",
    included: standardIncludes,
    addOns: ["Mantel upgrade", "Shelving", "Extended width", "Premium paint"],
    pairings: ["Family room seating", "Artwork ledge", "Copper-toned accessories"],
  },
  {
    slug: "metro-horizon",
    title: "Metro Horizon",
    category: "media-walls",
    status: "standard",
    label: "Wide media wall",
    price: "Starting at $6,000",
    image: "/great-wall/models/ws2-main.jpg",
    gallery: ["/great-wall/models/ws2-main.jpg", "/great-wall/models/ws1-gallery.jpg"],
    summary: "A wider media wall for larger living rooms and TV setups.",
    description:
      "Metro Horizon brings the TV, fireplace, and trim into a wider layout. Explore shelf extensions, finishes, and lighting to complete your media room.",
    included: standardIncludes,
    addOns: ["Space for a 65–86-inch TV", "Shelf extensions", "Premium finish", "Lighting consultation"],
    pairings: ["Large media room", "Stone coffee table", "Layered warm lighting"],
    specs: ["Related gallery examples: $7,500–$8,600"],
  },
];

export const discoveryItems: GalleryItem[] = [
  {
    slug: "showroom-row",
    title: "Fireplace Wall Inspiration",
    category: "fireplaces",
    status: "custom",
    label: "Finish inspiration",
    price: "Quote by finish and layout",
    image: "/great-wall/editorial/showroom-row.png",
    summary: "Compare fireplace widths and finishes, from stone and wood to black metal.",
    description:
      "Use these examples to explore materials and proportions for your room. Your quote will depend on the fireplace, finish, and layout you choose.",
    included: ["Finish consultation", "Firebox sizing", "Wall treatment planning", "Quote by scope"],
    addOns: ["Stone face", "Wood slat panel", "Mantel beam", "Display shelves"],
    pairings: ["Showroom-style lighting", "Material samples", "Custom wall art"],
  },
  {
    slug: "installer-network",
    title: "Best in Show Network",
    category: "centerpieces",
    status: "future",
    label: "Contractor network",
    price: "Partner inquiries open",
    image: "/great-wall/editorial/award-materials.png",
    summary: "An installer network in development, with opportunities to showcase standout craftsmanship.",
    description:
      "We’re building a network for skilled installers to connect with Metro projects and share their work. Apply through the Contractors form to be considered.",
    included: ["Contractor applications", "Installation showcases", "Planned craftsmanship awards", "Portfolio reviews"],
    addOns: ["Contractor profiles", "Planned contest gallery", "Project submissions", "Planned monthly highlights"],
    pairings: ["Metro social campaigns", "Install reveal reels", "Client referrals"],
  },
  {
    slug: "outdoor-gathering",
    title: "Outdoor Gathering Fire",
    category: "outdoor",
    status: "future",
    label: "Coming soon",
    price: "Quote when available",
    image: "/great-wall/editorial/showroom-portrait.jpeg",
    summary: "A preview of outdoor fire features for patios and gathering spaces.",
    description:
      "Outdoor fire features are in development. Explore this concept for inspiration; product details and pricing will be available at launch.",
    included: ["Future outdoor consultation", "Material selection", "Gathering-space planning"],
    addOns: ["Stone firepit", "Outdoor seating plan", "Patio centerpiece", "Seasonal styling"],
    pairings: ["Family events", "Patio furniture", "Warm exterior lighting"],
  },
  {
    slug: "custom-commissions",
    title: "Custom Commissions",
    category: "centerpieces",
    status: "custom",
    label: "Custom design",
    price: "Quote by commission",
    image: "/great-wall/future/family-firepit.png",
    summary: "Custom fireplace displays, feature walls, and centerpieces designed for your space.",
    description:
      "Bring us your idea for a fireplace display, feature wall, or centerpiece. We’ll review the design, materials, and installation requirements to prepare a custom quote.",
    included: ["Creative direction", "Material planning", "Quote by scope", "Installation planning"],
    addOns: ["Brand mark integration", "Stone finish study", "Lighting planning", "Project reveal planning"],
    pairings: ["Showroom displays", "Branded interiors", "Premium material samples"],
  },
];

export const catalogItems = [...featuredItems, ...discoveryItems];

export const optionCategories: OptionCategory[] = [
  {
    title: "Media Walls",
    category: "media-walls",
    status: "active",
    summary: "Bring your TV, fireplace, trim, and storage together in one finished wall.",
    availability: "Featured now",
    image: "/great-wall/models/ws2-main.jpg",
  },
  {
    title: "Electric Fireplaces",
    category: "fireplaces",
    status: "active",
    summary: "Explore electric inserts and linear fireplaces for a full media wall or a standalone feature.",
    availability: "Available to quote",
    image: "/great-wall/future/legend-flame-insert.webp",
  },
  {
    title: "Centerpieces",
    category: "centerpieces",
    status: "soon",
    summary: "Decorative pieces designed to give your room a distinctive focal point.",
    availability: "Coming soon",
    image: "/great-wall/editorial/award-materials.png",
  },
  {
    title: "Tables",
    category: "tables",
    status: "soon",
    summary: "Coffee and dining table concepts featuring stone and wood finishes.",
    availability: "Coming soon",
    image: "/great-wall/editorial/installer-boots.png",
  },
  {
    title: "Outdoor Fire Features",
    category: "outdoor",
    status: "soon",
    summary: "Firepit and outdoor feature concepts for patios and shared spaces.",
    availability: "Coming soon",
    image: "/great-wall/future/family-firepit.png",
  },
  {
    title: "Accessories",
    category: "accessories",
    status: "active",
    summary: "Complete your wall with a mantel, soundbar fitting, shelving, or an upgraded finish.",
    availability: "Available upgrades",
    image: "/great-wall/models/bp1-mantel.png",
  },
];

export function getItemBySlug(slug: string) {
  return catalogItems.find((item) => item.slug === slug);
}

export function getItemsByCategory(category: ProductCategory) {
  return catalogItems.filter((item) => item.category === category);
}
