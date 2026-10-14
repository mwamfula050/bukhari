const testimonials = [
  {
    name: "Happy Guest",
    text:
      "A beautiful dining experience with delicious food and welcoming service.",
  },
  {
    name: "Local Customer",
    text:
      "The food and atmosphere make it a place worth visiting again.",
  },
  {
    name: "Restaurant Guest",
    text:
      "Great place to enjoy a meal with friends and family.",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials-section">

      <div className="section-heading centered">

        <div>
          <span className="eyebrow">GUEST EXPERIENCES</span>

          <h2>
            What our guests
            <span> say.</span>
          </h2>
        </div>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>

            <div className="stars">
              ★★★★★
            </div>

            <p>“{item.text}”</p>

            <strong>{item.name}</strong>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;