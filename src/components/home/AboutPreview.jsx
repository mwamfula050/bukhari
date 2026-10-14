import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function AboutPreview() {
  return (
    <section className="section about-preview">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
          alt="Restaurant interior"
        />
      </div>

      <div className="about-content">

        <span className="eyebrow">
          OUR STORY
        </span>

        <h2>
          A place where
          <span> food meets experience.</span>
        </h2>

        <p>
          Bukhari Restaurant is designed as a welcoming destination where
          guests can enjoy delicious meals, quality service and memorable
          moments.
        </p>

        <p>
          From traditional favourites to modern dining experiences, every
          visit should feel special.
        </p>

        <Link to="/about" className="outline-button">
          Discover Our Story
          <ArrowUpRight size={18} />
        </Link>

      </div>

    </section>
  );
}

export default AboutPreview;