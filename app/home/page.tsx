import Image from "next/image";
import Link from "next/link";
import { ProductGallery } from "@/components/GreatWallExperience";
import RevealSection from "@/components/RevealSection";
import { featuredItems, optionCategories } from "@/lib/catalog";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__spotlight" />
        <div className="hero__copy">
          <Image
            src="/metro/logo-transparent.png"
            alt=""
            width={98}
            height={65}
            className="hero__mark"
            style={{ width: "100%", height: "auto" }}
            priority
          />

          <div className="hero__actions">
            <a href="#estimate" className="stone-button">
              Start an Estimate
            </a>
            <Link href="/featured" className="ghost-button">
              View Featured Models
            </Link>
          </div>
          <p>
            Metro Media Walls creates media walls, fireplace walls, TV feature
            walls, built-ins, and custom gathering spaces with the kind of
            warmth that makes a house feel settled.
          </p>
        </div>
        <div className="hero__image">
          <Image
            src="/great-wall/editorial/showroom-row.png"
            alt="A Metro showroom row of fireplace wall options"
            fill
            sizes="(min-width: 900px) 58vw, 100vw"
            priority
          />
        </div>
      </section>

      <RevealSection className="section-shell featured-preview">
        <div className="section-heading">
          <p className="fine-label">Featured standard models</p>
          <h2>Clear starting points, custom-finished around your room.</h2>
          <p>
            These models give the quote conversation a real foundation. Choose a
            direction, add the details that matter, and send the idea list.
          </p>
        </div>
        <ProductGallery items={featuredItems.slice(0, 4)} />
      </RevealSection>

      <RevealSection className="section-shell discovery-band" delay={120}>
        <div className="discovery-band__media">
          <Image
            src="/great-wall/editorial/showroom-portrait.jpeg"
            alt="Metro showroom fireplace installation"
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
            priority
          />
        </div>
        <div className="discovery-band__copy">
          <p className="fine-label">Discovery</p>
          <h2>Not everything should be sold like a shelf item.</h2>
          <p>
            Some walls need a measured quote. Some pieces need material samples.
            Some rooms just need a grown conversation about how people gather
            there. That is where the custom lane lives.
          </p>
          <Link href="/discover" className="stone-button">
            Explore Custom Direction
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="section-shell options-preview" delay={140}>
        <div className="section-heading section-heading--wide">
          <p className="fine-label">More than media walls</p>
          <h2>
            Leave room for every fire-led centerpiece this brand can become.
          </h2>
        </div>
        <div className="option-grid">
          {optionCategories.map((option) => (
            <article
              key={option.title}
              className={`option-tile ${option.status === "soon" ? "option-tile--soon" : "option-tile--active"}`}
            >
              <div className="option-tile__media">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  sizes="33vw"
                  loading="eager"
                />
              </div>
              <p className="fine-label">{option.availability}</p>
              <h3>{option.title}</h3>
              <p>{option.summary}</p>
              {option.status === "soon" ? (
                <span className="soon-chip">Feature soon available</span>
              ) : (
                <a href="#estimate" className="text-link">
                  Request direction
                </a>
              )}
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section-shell network-section" delay={160}>
        <div className="network-section__copy">
          <p className="fine-label">Installer network</p>
          <h2>Best in show is not just a trophy. It is proof of craft.</h2>
          <p>
            As the team grows, Metro can route client work to trusted
            contractors and spotlight the best installs through Metro-powered
            social contests, reveal reels, and monthly recognition.
          </p>
        </div>
        <div className="network-card">
          <Image
            src="/great-wall/editorial/award-materials.png"
            alt="Trophy and stone material samples for contractor contest"
            fill
            sizes="(min-width: 900px) 40vw, 100vw"
            loading="eager"
          />
        </div>
        <div className="network-card network-card--phone">
          <Image
            src="/great-wall/editorial/litty-social-phone.png"
            alt="Metro social phone mockup"
            fill
            sizes="380px"
            loading="eager"
          />
        </div>
      </RevealSection>

      <RevealSection className="section-shell final-cta" delay={180}>
        <Image
          src="/metro/logo-transparent.png"
          alt=""
          width={180}
          height={101}
          style={{ width: "11.25rem", height: "auto" }}
        />
        <h2>Metro first, coordinated from design through installation.</h2>
        <p>
          The customer sees one clear Metro experience while the installation
          network, contractor notes, and project routing stay organized behind
          the scenes.
        </p>
        <a href="#estimate" className="stone-button">
          Start an Estimate
        </a>
      </RevealSection>

      <div id="estimate" className="anchor-target" />
    </main>
  );
}
