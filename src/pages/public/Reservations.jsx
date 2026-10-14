import { useState } from "react";
import { CalendarDays } from "lucide-react";

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="inner-page">

      <section className="page-hero">

        <span className="eyebrow">
          RESERVATIONS
        </span>

        <h1>
          Reserve your
          <span> table.</span>
        </h1>

        <p>
          Plan your next dining experience with Bukhari.
        </p>

      </section>

      <section className="section form-section">

        <div className="form-intro">

          <CalendarDays size={40} />

          <h2>
            Make a Reservation
          </h2>

          <p>
            Submit your preferred date, time and number of guests.
            Reservations will be subject to confirmation.
          </p>

        </div>

        {!submitted ? (
          <form
            className="restaurant-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <input
              type="date"
              required
            />

            <input
              type="time"
              required
            />

            <select required defaultValue="">
              <option value="" disabled>
                Number of Guests
              </option>

              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6+ Guests</option>
            </select>

            <textarea
              placeholder="Special request (optional)"
              rows="5"
            />

            <button className="primary-button" type="submit">
              Request Reservation
            </button>

          </form>
        ) : (
          <div className="success-message">

            <h2>
              Reservation Request Received
            </h2>

            <p>
              Thank you. Your request has been recorded for demonstration.
              The final system will connect this form to the restaurant
              reservation backend.
            </p>

          </div>
        )}

      </section>

    </div>
  );
}

export default Reservations;