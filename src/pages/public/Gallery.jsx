const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80",
];

function Gallery() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <span className="eyebrow">
          OUR GALLERY
        </span>

        <h1>
          Taste the
          <span> experience.</span>
        </h1>

        <p>
          A visual preview of food, atmosphere and memorable moments.
        </p>

      </section>

      <section className="section">

        <div className="gallery-grid">

          {images.map((image, index) => (
            <div className="gallery-item" key={image}>
              <img
                src={image}
                alt={`Bukhari gallery ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Gallery;