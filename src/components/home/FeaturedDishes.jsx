import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredDishes } from "../../data/menuData";
import MenuCard from "../menu/MenuCard";

function FeaturedDishes() {
  return (
    <section className="section featured-section">

      <div className="section-heading">

        <div>
          <span className="eyebrow">OUR SPECIALS</span>

          <h2>
            Signature
            <span> Flavours</span>
          </h2>
        </div>

        <Link to="/menu" className="text-link">
          View Full Menu
          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="menu-grid">
        {featuredDishes.map((dish) => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>

    </section>
  );
}

export default FeaturedDishes;