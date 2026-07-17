import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaScissors,
  FaCalendarCheck,
} from "react-icons/fa6";

import beautyBanner from "../assets/images/block7.jpg";

const BeautyTips = () => {
  return (
    <>
    <section className="relative py-32 overflow-hidden">

      {/* Background Image */}
      <img
        src={beautyBanner}
        alt="Luxury Salon"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="uppercase tracking-[6px] text-[#C9A227] text-sm mb-6"
        >
          Professional Beauty Advice
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Healthy Hair Starts
          <span className="block text-[#C9A227]">
            With Professional Care
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="text-gray-300 text-lg mt-8 max-w-3xl mx-auto leading-8"
        >
          From premium hair treatments to expert styling,
          our professional team is committed to helping
          you achieve a healthy, confident, and beautiful look.
        </motion.p>

        {/* Features */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-14"
        >

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <FaScissors className="text-[#C9A227] text-4xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl">
              Premium Styling
            </h3>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <FaCalendarCheck className="text-[#C9A227] text-4xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl">
              Easy Booking
            </h3>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <FaScissors className="text-[#C9A227] text-4xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl">
              Luxury Experience
            </h3>
          </div>

        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >

          <Link
            to="/booking"
            className="bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300 px-8 py-4 rounded-full text-black font-semibold inline-flex items-center gap-3"
          >
            Book Appointment
            <FaArrowRight />
          </Link>

          <Link
            to="/services"
            className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold"
          >
            Explore Services
          </Link>

        </motion.div>

      </div>

    </section>
    </>
  );
};

export default BeautyTips;