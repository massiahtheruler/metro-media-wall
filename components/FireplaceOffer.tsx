type FireplaceOfferProps = {
  compact?: boolean;
};

export default function FireplaceOffer({ compact = false }: FireplaceOfferProps) {
  return (
    <aside
      className={`fireplace-offer${compact ? " fireplace-offer--compact" : ""}`}
      aria-label="Fireplace promotion"
    >
      <p className="fine-label">Limited fireplace offer</p>
      <strong>Get 50% off select fireplace units</strong>
      <p>
        Available with the purchase of a media wall and installation. Offer
        applies to eligible fireplace units only; availability varies by model.
      </p>
    </aside>
  );
}
