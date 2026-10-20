import Image from "next/image";
import { ProductGallery } from "@/components/GreatWallExperience";
import RevealSection from "@/components/RevealSection";
import { discoveryItems } from "@/lib/catalog";

export default function DiscoverPage() {
  return (
    <main className="subpage">
      <RevealSection className="subpage-hero subpage-hero--split">
        <div>
          <p className="fine-label">Discovery</p>
          <h1>A custom design starts with your room.</h1>
          <p>
            Explore ideas for your space, then share the styles and details
            you like. We’ll use your references, room measurements, and
            finish choices to help plan the project.
          </p>
        </div>
        <div className="subpage-hero__image">
          <Image
            src="/great-wall/editorial/installer-boots.png"
            alt="Installer boots in a finished luxury room"
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        </div>
      </RevealSection>
      <RevealSection className="section-shell">
        <ProductGallery items={discoveryItems} />
      </RevealSection>
    </main>
  );
}
