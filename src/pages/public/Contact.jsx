import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <span className="eyebrow">
          GET IN TOUCH
        </span>

        <h1>
          Visit
          <span> Bukhari.</span>
        </h1>

        <p>
          We'd love to welcome you.
        </p>

      </section>

      <section className="section contact-grid">

        <div className="contact-info">

          <div className="contact-card">
            <MapPin />
            <div>
              <h3>Location</h3>
              <p>Street Number 6, Tanga, Tanzania</p>
            </div>
          </div>

          <div className="contact-card">
            <Phone />
            <div>
              <h3>Phone</h3>
              <p>+255 713 560 759</p>
            </div>
          </div>

          <div className="contact-card">
            <Clock />
            <div>
              <h3>Opening Hours</h3>
              <p>07:00 AM – 12:30 AM</p>
            </div>
          </div>

          <a
            href="https://wa.me/255713560759"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            <MessageCircle />
            Chat on WhatsApp
          </a>

        </div>

        <div className="map-container">

          <iframe
            title="Bukhari Restaurant Tanga Map"
            src="https://www.google.com/maps?q=Bukhari%20Restaurant%20Tanga&output=embed"
            loading="lazy"
          />

        </div>

      </section>

    </div>
  );
}

export default Contact;