import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Menu from "../pages/public/Menu";
import Gallery from "../pages/public/Gallery";
import Reservations from "../pages/public/Reservations";
import Contact from "../pages/public/Contact";
import OrderOnline from "../pages/public/OrderOnline";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<PublicLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/reservations"
          element={<Reservations />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/order"
          element={<OrderOnline />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;