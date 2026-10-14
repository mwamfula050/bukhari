import { ShoppingBag } from "lucide-react";

function MenuCard({ dish }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-TZ").format(price);

  return (
    <article className="menu-card">

      <div className="menu-image-wrapper">

        <img
          src={dish.image}
          alt={dish.name}
          className="menu-image"
        />

        {dish.popular && (
          <span className="popular-badge">
            Popular
          </span>
        )}

      </div>

      <div className="menu-card-content">

        <div className="menu-card-top">
          <span className="menu-category">
            {dish.category}
          </span>

          <span className="menu-price">
            TZS {formatPrice(dish.price)}
          </span>
        </div>

        <h3>{dish.name}</h3>

        <p>{dish.description}</p>

        <button className="add-order-button">
          <ShoppingBag size={16} />
          Add to Order
        </button>

      </div>

    </article>
  );
}

export default MenuCard;