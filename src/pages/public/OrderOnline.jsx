import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { menuItems } from "../../data/menuData";

function OrderOnline() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <span className="eyebrow">
          ONLINE ORDERING
        </span>

        <h1>
          Your favourites,
          <span> your way.</span>
        </h1>

        <p>
          Select your favourite meals and continue to checkout.
        </p>

      </section>

      <section className="section">

        <div className="order-notice">
          <ShoppingBag size={22} />

          <div>
            <strong>Online Ordering — Demo Version</strong>

            <p>
              The current interface uses sample menu data. In the next
              development phase, we'll add the real shopping cart,
              checkout, payment and order management system.
            </p>
          </div>
        </div>

        <div className="menu-grid">

          {menuItems.map((dish) => (
            <article
              className="menu-card"
              key={dish.id}
            >

              <div className="menu-image-wrapper">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="menu-image"
                />

              </div>

              <div className="menu-card-content">

                <span className="menu-category">
                  {dish.category}
                </span>

                <h3>{dish.name}</h3>

                <p>{dish.description}</p>

                <div className="order-card-footer">

                  <strong>
                    TZS{" "}
                    {new Intl.NumberFormat("en-TZ").format(
                      dish.price
                    )}
                  </strong>

                  <button className="add-order-button">
                    Add
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

    </div>
  );
}

export default OrderOnline;