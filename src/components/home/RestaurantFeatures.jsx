import {
  Utensils,
  ShoppingBag,
  CalendarDays,
  Bike,
} from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Dine In",
    text: "Enjoy your meal in a welcoming restaurant environment.",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    text: "Order your favourite meals and take them with you.",
  },
  {
    icon: CalendarDays,
    title: "Reservations",
    text: "Reserve a table for your next dining experience.",
  },
  {
    icon: Bike,
    title: "Delivery",
    text: "Delivery functionality can be enabled for supported areas.",
  },
];

function RestaurantFeatures() {
  return (
    <section className="features-section">

      <div className="section-heading centered">

        <div>
          <span className="eyebrow">WHY BUKHARI</span>

          <h2>
            More than just
            <span> a meal.</span>
          </h2>
        </div>

      </div>

      <div className="features-grid">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={feature.title}>

              <div className="feature-icon">
                <Icon size={25} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default RestaurantFeatures;