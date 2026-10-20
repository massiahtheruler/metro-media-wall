export type BuilderModelId = "bp1" | "bp2" | "bp4";

export type BuilderOptionId =
  | "soundbar"
  | "mantel"
  | "sideShelves"
  | "lowerCabinets"
  | "ledLighting"
  | "premiumFinish";

export interface BuilderModel {
  id: BuilderModelId;
  name: string;
  description: string;
  basePrice: number;
  widthInches: number;
  heightInches: number;
  tvLabel: string;
  fireplaceLabel: string;
  included: string[];
}

export interface BuilderOption {
  id: BuilderOptionId;
  label: string;
  group: "Layout" | "Finish" | "Electrical";
  price: number;
  description: string;
  defaultSelected?: boolean;
}

export type BuilderEstimateLine = {
  label: string;
  amount: number;
  kind: "base" | "upgrade" | "total";
};

export type BuilderProofProject = {
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  description: string;
};

export const builderModels: BuilderModel[] = [
  {
    id: "bp1",
    name: "Metro Apex",
    description: "A simple media wall with TV mount preparation and a centered fireplace opening.",
    basePrice: 3500,
    widthInches: 96,
    heightInches: 96,
    tvLabel: "55-65 inch TV",
    fireplaceLabel: "60 inch fireplace",
    included: ["Paint-ready finish", "TV mount prep", "Fireplace opening"],
  },
  {
    id: "bp2",
    name: "Metro Summit",
    description: "A taller fireplace wall for rooms with higher ceilings.",
    basePrice: 4000,
    widthInches: 108,
    heightInches: 108,
    tvLabel: "65-75 inch TV",
    fireplaceLabel: "60 inch fireplace",
    included: ["Tall wall face", "TV mount prep", "Fireplace opening"],
  },
  {
    id: "bp4",
    name: "Metro Gallery",
    description: "A wider media wall with space for optional shelving and cabinets.",
    basePrice: 5000,
    widthInches: 120,
    heightInches: 96,
    tvLabel: "65-86 inch TV",
    fireplaceLabel: "72 inch fireplace",
    included: ["Wide wall face", "TV mount prep", "Fireplace opening"],
  },
];

export const builderOptions: BuilderOption[] = [
  {
    id: "soundbar",
    label: "Soundbar niche",
    group: "Layout",
    price: 350,
    description: "Adds a narrow cutout below the TV for a soundbar.",
  },
  {
    id: "mantel",
    label: "Floating mantel",
    group: "Layout",
    price: 650,
    description: "Adds a floating shelf between the TV and fireplace.",
  },
  {
    id: "sideShelves",
    label: "Side shelves",
    group: "Layout",
    price: 900,
    description: "Adds open shelving on both sides of the media wall.",
  },
  {
    id: "lowerCabinets",
    label: "Lower cabinets",
    group: "Layout",
    price: 1200,
    description: "Adds storage cabinets along the base of the wall.",
  },
  {
    id: "ledLighting",
    label: "LED lighting",
    group: "Electrical",
    price: 450,
    description: "Adds accent lighting for the shelves or wall.",
  },
  {
    id: "premiumFinish",
    label: "Premium finish",
    group: "Finish",
    price: 750,
    description: "Allows for upgraded paint, texture, or finish consultation.",
  },
];

const builderProofProjects: Record<"basic" | "mantel" | "shelves", BuilderProofProject> = {
  basic: {
    title: "Stone fireplace wall",
    eyebrow: "Design inspiration",
    image: "/great-wall/models/bp2-main.jpg",
    alt: "Completed stone media wall with fireplace and TV recess",
    description:
      "A stone fireplace wall showing a simple layout without side shelving.",
  },
  mantel: {
    title: "Mantel feature wall",
    eyebrow: "Mantel selected",
    image: "/great-wall/models/bp1-mantel.png",
    alt: "Completed media wall with mantel and fireplace detail",
    description:
      "A mantel adds definition between the TV and fireplace, with space for display.",
  },
  shelves: {
    title: "Built-in shelving layout",
    eyebrow: "Shelving selected",
    image: "/great-wall/models/bp4-s2.jpg",
    alt: "Completed media wall with side shelves and a fireplace",
    description:
      "Side shelving creates space for books, artwork, and everyday storage.",
  },
};

export function getBuilderProofProject(
  selectedOptionIds: BuilderOptionId[],
): BuilderProofProject {
  if (selectedOptionIds.includes("sideShelves")) {
    return builderProofProjects.shelves;
  }

  if (selectedOptionIds.includes("mantel")) {
    return builderProofProjects.mantel;
  }

  return builderProofProjects.basic;
}

export function calculateBuilderTotal(
  model: BuilderModel,
  selectedOptionIds: BuilderOptionId[],
) {
  return selectedOptionIds.reduce((total, optionId) => {
    const option = builderOptions.find((entry) => entry.id === optionId);
    return total + (option?.price ?? 0);
  }, model.basePrice);
}

export function buildBuilderEstimateLines(
  model: BuilderModel,
  selectedOptionIds: BuilderOptionId[],
): BuilderEstimateLine[] {
  const selectedOptions = builderOptions.filter((option) =>
    selectedOptionIds.includes(option.id),
  );
  const total = calculateBuilderTotal(model, selectedOptionIds);

  return [
    {
      label: `${model.name} base wall`,
      amount: model.basePrice,
      kind: "base",
    },
    ...selectedOptions.map((option) => ({
      label: option.label,
      amount: option.price,
      kind: "upgrade" as const,
    })),
    {
      label: "Estimated starting price",
      amount: total,
      kind: "total",
    },
  ];
}

export function formatEstimatePrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
