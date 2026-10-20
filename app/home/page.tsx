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
              Request an estimate
            </a>
            <Link href="/featured" className="ghost-button">
              Browse models
            </Link>
          </div>
          <p>
            Custom media walls, fireplace walls, and built-ins that bring your
            TV, storage, and finishes together. Explore a model or talk with
            us about a design for your room.
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
          <p className="fine-label">Featured models</p>
          <h2>Start with a model. Make it yours.</h2>
          <p>
            Compare styles and starting prices, then choose the finishes and
            add-ons that fit your space. Send us your selections for a quote.
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
          <h2>Have something different in mind?</h2>
          <p>
            Bring your ideas, reference photos, and room details. We’ll help
            you work through the layout, materials, and installation needs
            for a custom design.
          </p>
          <Link href="/discover" className="stone-button">
            Explore custom designs
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="section-shell options-preview" delay={140}>
        <div className="section-heading section-heading--wide">
          <p className="fine-label">More than media walls</p>
          <h2>
            Explore fireplaces, finishes, and more.
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
                <span className="soon-chip">Coming soon</span>
              ) : (
                <a href="#estimate" className="text-link">
                  Ask about options
                </a>
              )}
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section-shell investor-section" delay={150}>
        <div className="investor-section__heading">
          <p className="fine-label">Developers &amp; real estate investors</p>
          <h2>A finished focal point for your next property.</h2>
          <p>
            Give buyers and renters a room they can picture living in. Metro
            helps you plan media walls, choose finishes, and coordinate
            installation for one property or multiple units.
          </p>
          <a href="#developers" className="stone-button">
            Discuss your project
          </a>
        </div>
        <div className="investor-value-grid">
          <article>
            <span>01</span>
            <h3>Make the room stand out</h3>
            <p>
              Create a finished focal point that photographs well and helps a
              listing stand apart.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Define the scope early</h3>
            <p>
              Choose models, finishes, and upgrades before installation
              begins, with a scope built around your property.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Plan across properties</h3>
            <p>
              Coordinate design, materials, and installation for a single
              renovation or multiple units.
            </p>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="section-shell network-section" delay={160}>
        <div className="network-section__copy">
          <p className="fine-label">Installer network</p>
          <h2>Good work deserves to be seen.</h2>
          <p>
            We’re building a network of skilled installers who take pride in
            their finish and their service. Apply for partner pricing,
            installation opportunities, and recognition for standout work.
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
        <h2>Let’s plan your media wall.</h2>
        <p>
          Tell us about your room and what you have in mind. We’ll help you
          choose a design, review the details, and plan the installation.
        </p>
        <a href="#estimate" className="stone-button">
          Request an estimate
        </a>
      </RevealSection>

      <div id="estimate" className="anchor-target" />
    </main>
  );
}
