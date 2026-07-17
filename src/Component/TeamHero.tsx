import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import heroImage from "../assets/images/team-hero.jpeg";

const TeamHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Professional Salon Team"
        className="absolute inset-0 w-full object-cover height-[180vh]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <div className="max-w-4xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="uppercase tracking-[8px] text-[#C9A227] text-sm mb-5"
          >
            OUR PROFESSIONAL TEAM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="text-white font-bold leading-tight
            text-5xl md:text-7xl"
          >
            Meet The Experts Behind Your Perfect Look
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="text-gray-300 mt-8 text-lg max-w-2xl mx-auto"
          >
            Our award-winning hairstylists, barbers, beauty therapists,
            makeup artists and nail technicians are passionate about
            helping you look and feel your absolute best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          >

            <Link
              to="/booking"
              className="bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300
              px-8 py-4 rounded-full text-black font-semibold flex items-center
              justify-center gap-3"
            >
              Book Appointment
              <FaArrowRight />
            </Link>

            <Link
              to="/services"
              className="border border-white hover:bg-white hover:text-black
              transition-all duration-300
              px-8 py-4 rounded-full text-white font-semibold"
            >
              Explore Services
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default TeamHero;