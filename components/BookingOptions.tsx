import { bookingOptions } from "@/lib/bookingOptions";

export default function BookingOptions() {
  return (
    <fieldset className="booking-options">
      <legend>Consultation & design services</legend>
      {bookingOptions.map((option) => (
        <label className="booking-options__option" key={option.id}>
          <input type="radio" name="booking_service" value={`${option.title} — ${option.price}. ${option.details}`} />
          <span><strong>{option.title} · {option.price}</strong><span>{option.details}</span></span>
        </label>
      ))}
    </fieldset>
  );
}
