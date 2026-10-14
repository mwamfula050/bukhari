```jsx
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>BUKHARI</h2>

          <p>
            Authentic taste, warm hospitality and a modern dining experience
            in Tanga.
          </p>

          <div className="social-links">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/255713560759"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

          </div>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reservations">Reservations</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>
            <MapPin size={17} />
            <span>Street Number 6, Tanga</span>
          </p>

          <p>
            <Phone size={17} />
            <span>+255 713 560 759</span>
          </p>

          <p>
            <Clock size={17} />
            <span>07:00 AM – 12:30 AM</span>
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bukhari Restaurant.
          All rights reserved.
        </p>

        <p>
          Powered by <strong>SALFA Digital Solutions</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
```
