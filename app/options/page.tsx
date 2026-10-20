import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import { optionCategories } from "@/lib/catalog";

export default function OptionsPage() {
  return (
    <main className="subpage">
      <RevealSection className="subpage-hero">
        <p className="fine-label">Design options</p>
        <h1>The details that bring your room together.</h1>
        <p>
          Explore media walls, electric fireplaces, and finishing options
          available now, plus a preview of upcoming tables, centerpieces,
          and outdoor fire features.
        </p>
      </RevealSection>
      <RevealSection className="section-shell">
        <div className="option-grid option-grid--large">
          {optionCategories.map((option) => (
            <article
              key={option.title}
              className={`option-tile ${option.status === "soon" ? "option-tile--soon" : "option-tile--active"}`}
            >
              <div className="option-tile__media">
                <Image src={option.image} alt={option.title} fill sizes="33vw" />
              </div>
              <p className="fine-label">{option.availability}</p>
              <h2>{option.title}</h2>
              <p>{option.summary}</p>
              {option.status === "active" ? (
                <a href="#estimate" className="text-link">
                  Ask about options
                </a>
              ) : (
                <span className="text-link text-link--disabled" aria-disabled="true">
                  Coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}
