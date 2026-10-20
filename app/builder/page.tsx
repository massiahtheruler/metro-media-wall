import MediaWallBuilder from "@/components/MediaWallBuilder";
import RevealSection from "@/components/RevealSection";

export default function BuilderPage() {
  return (
    <main className="subpage builder-page">
      <RevealSection className="subpage-hero builder-hero">
        <p className="fine-label">Model estimator</p>
        <h1>Plan your media wall. See your estimate.</h1>
        <p>
          Choose a model and add upgrades to see how they affect the layout
          and estimated price. Share your selections with us for a quote
          based on your room and installation needs.
        </p>
      </RevealSection>

      <RevealSection className="section-shell" delay={120}>
        <MediaWallBuilder />
      </RevealSection>
    </main>
  );
}
