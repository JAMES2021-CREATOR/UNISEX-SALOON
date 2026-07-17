import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarCheck } from "react-icons/fa6";

import ctaImage from "../assets/images/team-hero.jpeg";

const JoinTeam = () => {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <img
          src={ctaImage}
          alt="Luxury Salon"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-12 md:p-20 text-center"
          >
            <p className="uppercase tracking-[6px] text-[#C9A227] text-sm mb-5">
              Luxury Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready For Your
              <span className="block text-[#C9A227]">Next Stunning Look?</span>
            </h2>

            <p className="text-gray-300 text-lg mt-8 max-w-3xl mx-auto leading-8">
              Whether you're looking for a fresh haircut, luxury hair treatment,
              makeup, facial care, or professional grooming, our experienced
              beauty experts are here to help you look and feel your best.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/booking"
                className="bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300 px-8 py-4 rounded-full text-black font-semibold flex items-center justify-center gap-3"
              >
                <FaCalendarCheck />
                Book Appointment
              </Link>

              <Link
                to="/contact"
                className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-3"
              >
                Contact Us
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default JoinTeam;
