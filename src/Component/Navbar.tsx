import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Team", path: "/team" },
  { name: "Booking", path: "/booking" },
  { name: "Blog", path: "/Blog" },
  { name: "Contact", path: "/Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-white"
        >
          <Scissors className="text-yellow-500" size={28} />
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Luxe Salon
            </h2>
            <p className="text-xs text-yellow-500 tracking-[4px] uppercase">
              Unisex Studio
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 hover:text-yellow-500 ${
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

        {/* CTA */}
        <NavLink
          to="/booking"
          className="hidden lg:inline-flex bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Book Appointment
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-yellow-600/20 px-6 py-6">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-yellow-500"
                      : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/booking"
              className="bg-yellow-500 text-black text-center py-3 rounded-full font-semibold"
            >
              Book Appointment
            </NavLink>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;