import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reservations", path: "/reservations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span>BUKHARI</span>
          <small>RESTAURANT • TANGA</small>
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/order" className="order-button">
            <ShoppingBag size={18} />
            Order Now
          </Link>

          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;