import { useState } from "react";
import { menuCategories, menuItems } from "../../data/menuData";
import MenuCard from "../../components/menu/MenuCard";

function Menu() {
  const [category, setCategory] = useState("All");

  const filteredItems =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <div className="inner-page">

      <section className="page-hero">

        <span className="eyebrow">
          EXPLORE OUR MENU
        </span>

        <h1>
          Made for your
          <span> appetite.</span>
        </h1>

        <p>
          Browse our selection of delicious meals and refreshing drinks.
        </p>

      </section>

      <section className="section">

        <div className="category-filter">

          {menuCategories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="menu-grid">

          {filteredItems.map((dish) => (
            <MenuCard
              key={dish.id}
              dish={dish}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Menu;