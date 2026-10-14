import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Clock3,
  Star,
  Utensils,
  Heart,
  Award,
  Truck,
  ShoppingBag,
  CalendarDays,
  Phone,
  ChevronRight,
} from "lucide-react";

function Home() {
  return (
    <main className="bukhari-home">

      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90')",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              Delicious food, warm hospitality and memorable moments
              served in the heart of Tanga.
            </p>

            <div className="hero-buttons">

              <Link to="/menu" className="primary-button">
                Explore Menu
                <ArrowRight size={18} />
              </Link>

              <Link to="/reservations" className="secondary-button">
                <CalendarDays size={17} />
                Reserve a Table
              </Link>

            </div>

            <div className="hero-details">

              <div className="hero-detail">
                <MapPin size={17} />
                <span>Street Number 6, Tanga</span>
              </div>

              <div className="hero-detail">
                <Clock3 size={17} />
                <span>Open Daily</span>
              </div>

              <div className="hero-detail">
                <Phone size={17} />
                <span>+255 713 560 759</span>
              </div>

            </div>

          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span>TONIGHT AT BUKHARI</span>

            <h3>
              Good Food.
              <br />
              Good Moments.
            </h3>

            <p>
              Enjoy carefully prepared meals in a welcoming
              atmosphere.
            </p>

            <Link to="/order">
              Order Your Favourite
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

      </section>

      {/* ================= QUICK SERVICES ================= */}
      <section className="quick-services">

        <Link to="/menu" className="quick-service">
          <div className="quick-service-icon">
            <Utensils size={22} />
          </div>

          <div>
            <strong>Explore Menu</strong>
            <span>Discover our dishes</span>
          </div>

          <ChevronRight size={18} />
        </Link>

        <Link to="/order" className="quick-service">
          <div className="quick-service-icon">
            <ShoppingBag size={22} />
          </div>

          <div>
            <strong>Order Online</strong>
            <span>Fresh meals, your way</span>
          </div>

          <ChevronRight size={18} />
        </Link>

        <Link to="/reservations" className="quick-service">
          <div className="quick-service-icon">
            <CalendarDays size={22} />
          </div>

          <div>
            <strong>Reserve Table</strong>
            <span>Plan your experience</span>
          </div>

          <ChevronRight size={18} />
        </Link>

        <a href="tel:+255713560759" className="quick-service">
          <div className="quick-service-icon">
            <Phone size={22} />
          </div>

          <div>
            <strong>Call Bukhari</strong>
            <span>+255 713 560 759</span>
          </div>

          <ChevronRight size={18} />
        </a>

      </section>

      {/* ================= SIGNATURE DISHES ================= */}
      <section className="home-section signature-section">

        <div className="section-heading">
          <span className="section-eyebrow">
            A TASTE OF BUKHARI
          </span>

          <h2>
            Signature <span>Favourites</span>
          </h2>

          <p>
            A selection of dishes created to bring bold flavour,
            beautiful presentation and a memorable dining experience.
          </p>
        </div>

        <div className="featured-dishes">

          <article className="dish-card">

            <div className="menu-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90"
                alt="Grilled restaurant meal"
              />

              <span className="dish-badge">
                Chef's Choice
              </span>
            </div>

            <div className="dish-content">

              <span className="dish-category">
                SIGNATURE
              </span>

              <h3>Grilled Special Platter</h3>

              <p>
                Richly seasoned grilled meat served with fresh
                accompaniments and signature sauces.
              </p>

              <div className="dish-bottom">
                <span className="dish-price">
                  TZS 18,000
                </span>

                <Link to="/order">
                  Order <ArrowRight size={15} />
                </Link>
              </div>

            </div>
          </article>

          <article className="dish-card">

            <div className="menu-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=90"
                alt="Fresh pizza"
              />

              <span className="dish-badge">
                Popular
              </span>
            </div>

            <div className="dish-content">

              <span className="dish-category">
                CUSTOMER FAVOURITE
              </span>

              <h3>Premium Pizza</h3>

              <p>
                Freshly baked crust, rich tomato sauce and
                generously layered toppings.
              </p>

              <div className="dish-bottom">
                <span className="dish-price">
                  TZS 15,000
                </span>

                <Link to="/order">
                  Order <ArrowRight size={15} />
                </Link>
              </div>

            </div>
          </article>

          <article className="dish-card">

            <div className="menu-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=90"
                alt="Rice dish"
              />

              <span className="dish-badge">
                Favourite
              </span>
            </div>

            <div className="dish-content">

              <span className="dish-category">
                BUKHARI CLASSIC
              </span>

              <h3>Special Rice Bowl</h3>

              <p>
                Fragrant rice paired with tender meat and delicious
                fresh accompaniments.
              </p>

              <div className="dish-bottom">
                <span className="dish-price">
                  TZS 12,000
                </span>

                <Link to="/order">
                  Order <ArrowRight size={15} />
                </Link>
              </div>

            </div>
          </article>

        </div>

        <div className="section-action">
          <Link to="/menu" className="outline-button">
            View Full Menu
            <ArrowRight size={17} />
          </Link>
        </div>

      </section>

      {/* ================= STATS ================= */}
      <section className="restaurant-stats">

        <div>
          <strong>100%</strong>
          <span>Fresh Ingredients</span>
        </div>

        <div>
          <strong>Daily</strong>
          <span>Freshly Prepared</span>
        </div>

        <div>
          <strong>6+</strong>
          <span>Signature Dishes</span>
        </div>

        <div>
          <strong>5★</strong>
          <span>Guest Experience</span>
        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="home-section story-section">

        <div className="section-heading">
          <span className="section-eyebrow">
            OUR STORY
          </span>

          <h2>
            More Than <span>A Meal</span>
          </h2>
        </div>

        <div className="about-preview">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1500&q=90"
              alt="Restaurant interior"
            />

            <div className="about-image-card">
              <span>BUKHARI</span>
              <strong>TANGA</strong>
            </div>
          </div>

          <div className="about-content">

            <span className="section-eyebrow">
              BUKHARI RESTAURANT
            </span>

            <h3>
              Where Great Food Meets
              <span> Genuine Hospitality.</span>
            </h3>

            <p>
              We believe every meal should create a moment worth
              remembering. From carefully selected ingredients to
              beautiful presentation, every detail matters.
            </p>

            <p>
              Located at Street Number 6 in Tanga, Bukhari brings
              together flavour, comfort and welcoming service.
            </p>

            <div className="about-points">

              <span>
                <Award size={17} />
                Quality Ingredients
              </span>

              <span>
                <Heart size={17} />
                Warm Hospitality
              </span>

              <span>
                <Utensils size={17} />
                Freshly Prepared
              </span>

            </div>

            <Link to="/about" className="primary-button">
              Discover Our Story
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* ================= WHY BUKHARI ================= */}
      <section className="home-section features-section">

        <div className="section-heading">
          <span className="section-eyebrow">
            THE BUKHARI EXPERIENCE
          </span>

          <h2>
            Why Guests <span>Choose Us</span>
          </h2>
        </div>

        <div className="restaurant-features">

          <div className="feature-card">
            <div className="feature-icon">
              <Utensils />
            </div>

            <h3>Authentic Flavour</h3>

            <p>
              Carefully prepared dishes with rich and memorable
              flavours.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Award />
            </div>

            <h3>Quality First</h3>

            <p>
              We focus on ingredients, presentation and consistency.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart />
            </div>

            <h3>Warm Hospitality</h3>

            <p>
              Friendly service designed to make every guest feel welcome.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Truck />
            </div>

            <h3>Order With Ease</h3>

            <p>
              Enjoy convenient ordering for your favourite meals.
            </p>
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE CTA ================= */}
      <section
        className="experience-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90')",
        }}
      >

        <div className="experience-overlay"></div>

        <div className="experience-content">

          <span className="section-eyebrow">
            YOUR TABLE IS WAITING
          </span>

          <h2>
            Come Hungry.
            <br />
            Leave <span>Happy.</span>
          </h2>

          <p>
            Join us at Bukhari Restaurant and make your next
            dining experience memorable.
          </p>

          <div className="cta-actions">

            <Link to="/reservations" className="cta-primary">
              Reserve Your Table
            </Link>

            <Link to="/order" className="cta-secondary">
              Order Online
            </Link>

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="home-section testimonials-section">

        <div className="section-heading">
          <span className="section-eyebrow">
            GUEST EXPERIENCES
          </span>

          <h2>
            Loved by Our <span>Guests</span>
          </h2>
        </div>

        <div className="testimonials">

          <article className="testimonial-card">

            <div className="stars">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </div>

            <p>
              "Beautiful atmosphere, delicious food and excellent
              service. A very memorable experience."
            </p>

            <strong>— Bukhari Guest</strong>

          </article>

          <article className="testimonial-card">

            <div className="stars">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </div>

            <p>
              "Fresh food, beautiful presentation and a welcoming
              environment for family and friends."
            </p>

            <strong>— Happy Customer</strong>

          </article>

          <article className="testimonial-card">

            <div className="stars">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </div>

            <p>
              "A great place in Tanga to enjoy good food and
              genuine hospitality."
            </p>

            <strong>— Restaurant Guest</strong>

          </article>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="home-final-cta">

        <div>
          <span className="section-eyebrow">
            BUKHARI RESTAURANT • TANGA
          </span>

          <h2>
            Ready for Something
            <span> Delicious?</span>
          </h2>

          <p>
            Your next favourite meal is waiting for you.
          </p>
        </div>

        <div className="cta-actions">

          <Link to="/menu" className="outline-button light">
            View Menu
            <ArrowRight size={17} />
          </Link>

          <Link to="/order" className="cta-primary">
            Order Now
            <ShoppingBag size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;