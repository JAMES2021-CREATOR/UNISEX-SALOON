import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa6";

import bookingHero from "../assets/images/team-hero.jpeg";

const BookingHero = () => {
  return (
    <section className="relative h-280 flex items-center overflow-hidden pt-20">

      {/* Background */}
      <img
        src={bookingHero}
        alt="Luxury Salon Booking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="max-w-3xl">

          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[5px] text-[#C9A227] text-sm mb-5"
          >
            Home / Booking
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold leading-tight text-5xl md:text-7xl lg:text-8xl"
          >
            Book Your
            <span className="block text-[#C9A227]">
              Luxury Salon Experience
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-gray-300 text-lg md:text-xl leading-8 max-w-2xl"
          >
            Experience premium beauty services from our award-winning
            hairstylists, barbers, makeup artists, and beauty therapists.
            Your transformation starts with one appointment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="#booking-form"
              className="inline-flex items-center gap-3 bg-[#C9A227] hover:bg-yellow-600 transition duration-300 px-8 py-4 rounded-full font-semibold text-black shadow-lg"
            >
              <FaCalendarCheck />
              Book Appointment
            </a>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-full font-semibold text-white"
            >
              Explore Services
              <FaArrowRight />
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur">
              Premium Products
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur">
              Certified Stylists
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur">
              Online Booking
            </span>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-xl"
          >
            <div>
              <h3 className="text-[#C9A227] text-4xl font-bold">
                10+
              </h3>

              <p className="text-gray-300 mt-2">
                Expert Stylists
              </p>
            </div>

            <div>
              <h3 className="text-[#C9A227] text-4xl font-bold">
                5K+
              </h3>

              <p className="text-gray-300 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-[#C9A227] text-4xl font-bold flex items-center gap-2">
                4.9
                <FaStar className="text-yellow-400 text-lg" />
              </h3>

              <p className="text-gray-300 mt-2">
                Client Rating
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2" />
        </div>
      </motion.div>

    </section>
  );
};

export default BookingHero;