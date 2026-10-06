export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "general-contracting",
    title: "General Contracting / Full Home Renovation",
    shortDescription: "Coordinated, whole-home renovation planning and delivery.",
    description: "TORENOVATE coordinates the people, sequencing, and site work required to carry a larger home renovation from early planning through completion.",
    includes: ["Project planning", "Trade coordination", "Interior updates", "Finish selections", "Site supervision"],
    capabilities: ["Full-home renovations", "Phased renovations", "Permit coordination", "Quality control"],
  },
  {
    slug: "basement-renovation",
    title: "Basement Renovation",
    shortDescription: "Comfortable, functional lower-level living spaces.",
    description: "A basement renovation can turn underused square footage into a practical extension of your home, managed as one coordinated project.",
    includes: ["Framing", "Insulation", "Drywall", "Flooring", "Painting", "Carpentry"],
    capabilities: ["Family rooms", "Home offices", "Guest spaces", "Entertainment areas"],
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    shortDescription: "Thoughtful bathroom updates from layout to finishing details.",
    description: "TORENOVATE plans and delivers bathroom renovations with the right sequence of demolition, trade coordination, waterproofing, tile, and finishing work.",
    includes: ["Layout planning", "Tile", "Waterproofing", "Fixtures", "Vanities", "Painting"],
    capabilities: ["Primary bathrooms", "Ensuites", "Powder rooms", "Accessible updates"],
  },
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    shortDescription: "A well-organized renovation for the centre of the home.",
    description: "Kitchen projects bring together cabinetry, surfaces, lighting, appliances, and multiple trades. We help keep the scope organized from planning to the final details.",
    includes: ["Demolition", "Cabinetry coordination", "Tile", "Flooring", "Lighting coordination", "Finish carpentry"],
    capabilities: ["Kitchen layouts", "Open-concept updates", "Cabinet installation", "Surface coordination"],
  },
  {
    slug: "interior-renovation",
    title: "Interior Renovation",
    shortDescription: "Connected interior improvements tailored to the way you live.",
    description: "Interior renovation work can refresh individual rooms or connect several areas into a more cohesive home. Each scope is planned around the desired outcome.",
    includes: ["Framing", "Drywall", "Flooring", "Painting", "Trim", "Carpentry"],
    capabilities: ["Main-floor updates", "Room reconfigurations", "Finishing work", "Interior refreshes"],
  },
  {
    slug: "exterior-decks",
    title: "Exterior / Decks",
    shortDescription: "Outdoor projects that extend the way you use your home.",
    description: "Exterior improvements and deck projects are approached with clear scope, durable materials, and careful construction coordination.",
    includes: ["Deck construction", "Exterior finishes", "Railings", "Stairs", "Outdoor carpentry"],
    capabilities: ["Deck replacements", "Outdoor living areas", "Entry updates", "Exterior carpentry"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
