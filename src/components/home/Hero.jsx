import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90')",
      }}
    >

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >

          <span className="hero-label">
            ✦ WELCOME TO BUKHARI RESTAURANT
          </span>

          <h1>
            Authentic Taste.
            <br />
            <span>Modern Experience.</span>
          </h1>

          <p>
            Discover delicious meals, unforgettable flavours and warm
            hospitality in the heart of Tanga.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <Link
              to="/menu"
              className="primary-button"
            >
              Explore Menu
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/order"
              className="secondary-button"
            >
              <Play size={17} />
              Order Online
            </Link>

          </div>

          {/* Restaurant information */}
          <div className="hero-details">

            <div className="hero-detail">
              <MapPin size={18} />
              <span>Street Number 6, Tanga</span>
            </div>

            <div className="hero-detail">
              <Clock size={18} />
              <span>Open Daily</span>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;