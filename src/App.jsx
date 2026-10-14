import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BUKHARI
          <span>RESTAURANT</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/order" className="navbar-order">
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>BUKHARI RESTAURANT</h3>

        <p>
          Street Number 6, Tanga, Tanzania
        </p>

        <p>
          +255 713 560 759
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Bukhari Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function BasicPage({ title, description }) {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px",
        textAlign: "center",
        background: "#080808",
        color: "#fff",
      }}
    >
      <div>
        <p
          style={{
            color: "#c9a227",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
        >
          Bukhari Restaurant
        </p>

        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
          {title}
        </h1>

        <p style={{ color: "#aaa", maxWidth: "600px" }}>
          {description}
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <BasicPage
              title="About Bukhari"
              description="Discover the story, values and hospitality behind Bukhari Restaurant."
            />
          }
        />

        <Route
          path="/menu"
          element={
            <BasicPage
              title="Our Menu"
              description="Explore delicious meals and signature dishes prepared at Bukhari Restaurant."
            />
          }
        />

        <Route
          path="/gallery"
          element={
            <BasicPage
              title="Gallery"
              description="Take a look at the Bukhari Restaurant experience."
            />
          }
        />

        <Route
          path="/reservations"
          element={
            <BasicPage
              title="Reserve a Table"
              description="Book your table at Bukhari Restaurant, Street Number 6, Tanga."
            />
          }
        />

        <Route
          path="/contact"
          element={
            <BasicPage
              title="Contact Us"
              description="Get in touch with Bukhari Restaurant."
            />
          }
        />

        <Route
          path="/order"
          element={
            <BasicPage
              title="Order Online"
              description="Order your favourite Bukhari meals online."
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;