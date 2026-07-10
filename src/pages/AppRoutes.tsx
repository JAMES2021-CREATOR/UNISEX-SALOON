import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Team from "./Team";
import Booking from "./Booking";
import Blog from "./Blog";
import Contact from "./Contact";

function AppRoutes() {
  return (
    <Routes>
      
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;