import { ProductGallery } from "@/components/GreatWallExperience";
import RevealSection from "@/components/RevealSection";
import { featuredItems } from "@/lib/catalog";

export default function FeaturedPage() {
  return (
    <main className="subpage">
      <RevealSection className="subpage-hero">
        <p className="fine-label">Featured models</p>
        <h1>Find the right starting point for your room.</h1>
        <p>
          Compare media wall styles and starting prices. Explore each model
          to see what’s included and which details you can customize.
        </p>
      </RevealSection>
      <RevealSection className="section-shell">
        <ProductGallery items={featuredItems} showFilters />
      </RevealSection>
    </main>
  );
}
