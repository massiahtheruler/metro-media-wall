type FireplaceOfferProps = {
  compact?: boolean;
};

export default function FireplaceOffer({ compact = false }: FireplaceOfferProps) {
  return (
    <aside
      className={`fireplace-offer${compact ? " fireplace-offer--compact" : ""}`}
      aria-label="Fireplace promotion"
    >
      <p className="fine-label">Fireplace offer</p>
      <strong>Save 50% on select fireplaces</strong>
      <p>
        Available with the purchase of a media wall and installation. Offer
        applies to eligible fireplace units only; availability varies by model.
      </p>
    </aside>
  );
}
