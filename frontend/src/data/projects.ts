export type ProjectImage = { label: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  serviceSlug: string;
  location: string;
  summary: string;
  description: string;
  scope: string[];
  featured: boolean;
  beforeImages: ProjectImage[];
  duringImages: ProjectImage[];
  afterImages: ProjectImage[];
};

const images = (stage: string): ProjectImage[] => [
  { label: `${stage} view 1` },
  { label: `${stage} view 2` },
];

export const projects: Project[] = [
  { slug: "willowdale-full-home-refresh", title: "Willowdale Full Home Refresh", category: "Full Home / General Contracting", categorySlug: "general-contracting", serviceSlug: "general-contracting", location: "Willowdale, Toronto", summary: "A mock whole-home renovation prototype with connected main-floor updates.", description: "This fictional project demonstrates how a broader renovation can connect several rooms and trades through one coordinated scope.", scope: ["Planning", "Demolition", "Trade coordination", "Flooring", "Painting", "Finish carpentry"], featured: true, beforeImages: images("Before"), duringImages: images("During"), afterImages: images("After") },
  { slug: "modern-basement-richmond-hill", title: "Modern Basement Retreat", category: "Basement", categorySlug: "basement-renovation", serviceSlug: "basement-renovation", location: "Richmond Hill, ON", summary: "A mock lower-level renovation designed for flexible family use.", description: "This fictional basement project illustrates a finished recreation space with a coordinated construction sequence.", scope: ["Framing", "Insulation", "Drywall", "Flooring", "Painting", "Carpentry"], featured: true, beforeImages: images("Before"), duringImages: images("During"), afterImages: images("After") },
  { slug: "calm-ensuite-markham", title: "Calm Ensuite Update", category: "Bathroom", categorySlug: "bathroom-renovation", serviceSlug: "bathroom-renovation", location: "Markham, ON", summary: "A mock ensuite renovation focused on layout, tile, and durable finishes.", description: "This fictional project gives the portfolio a bathroom example and shows the relationship back to its primary service.", scope: ["Demolition", "Waterproofing", "Tile", "Fixture installation", "Vanity", "Painting"], featured: true, beforeImages: images("Before"), duringImages: images("During"), afterImages: images("After") },
  { slug: "family-kitchen-north-york", title: "Family Kitchen Renewal", category: "Kitchen", categorySlug: "kitchen-renovation", serviceSlug: "kitchen-renovation", location: "North York, Toronto", summary: "A mock kitchen renewal that brings work zones and gathering space together.", description: "This fictional kitchen project represents a coordinated renovation across cabinetry, surfaces, flooring, and finishing details.", scope: ["Demolition", "Cabinetry coordination", "Tile", "Flooring", "Lighting coordination", "Finish carpentry"], featured: true, beforeImages: images("Before"), duringImages: images("During"), afterImages: images("After") },
  { slug: "bright-main-floor-vaughan", title: "Bright Main Floor Update", category: "Interior", categorySlug: "interior-renovation", serviceSlug: "interior-renovation", location: "Vaughan, ON", summary: "A mock interior update spanning connected everyday living areas.", description: "This fictional interior renovation shows how an updated main floor can be delivered as a connected scope of work.", scope: ["Framing", "Drywall", "Flooring", "Painting", "Trim", "Carpentry"], featured: false, beforeImages: images("Before"), duringImages: images("During"), afterImages: images("After") },
  { slug: "cedar-deck-aurora", title: "Cedar Deck Addition", category: "Exterior / Decks", categorySlug: "exterior-decks", serviceSlug: "exterior-decks", location: "Aurora, ON", summary: "A mock outdoor living project with a durable new deck and access details.", description: "This fictional exterior project offers a simple example of an outdoor construction scope and its related service.", scope: ["Site preparation", "Deck framing", "Decking", "Railings", "Stairs", "Final details"], featured: false, beforeImages: images("Before"), duringImages: images("During"), afterImages: images("After") },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsForService(serviceSlug: string) {
  return projects.filter((project) => project.serviceSlug === serviceSlug);
}
