import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarDays,
} from "react-icons/fa6";

import blogHero from "../assets/images/bloghero.jpg";

const BlogHero = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden pt-15">

      {/* Background Image */}
      <img
        src={blogHero}
        alt="Luxury Salon Blog"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="max-w-3xl">

          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-[#C9A227] text-sm mb-6"
          >
            Home / Blog
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold leading-tight text-5xl md:text-7xl lg:text-8xl"
          >
            Beauty &
            <span className="block text-[#C9A227]">
              Style Journal
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-gray-300 text-lg md:text-xl leading-8 max-w-2xl"
          >
            Discover expert beauty tips, hair care advice, skincare routines,
            styling inspiration, and the latest salon trends from our
            professional team.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="#latest-posts"
              className="inline-flex items-center gap-3 bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300 px-8 py-4 rounded-full text-black font-semibold shadow-lg"
            >
              <FaBookOpen />
              Explore Articles
            </a>

            <Link
              to="/booking"
              className="inline-flex items-center gap-3 border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold"
            >
              Book Appointment
              <FaArrowRight />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-xl"
          >
            <div>
              <h3 className="text-[#C9A227] text-4xl font-bold">
                50+
              </h3>
              <p className="text-gray-300 mt-2">
                Beauty Articles
              </p>
            </div>

            <div>
              <h3 className="text-[#C9A227] text-4xl font-bold">
                Weekly
              </h3>
              <p className="text-gray-300 mt-2">
                New Tips
              </p>
            </div>

            <div>
              <h3 className="text-[#C9A227] text-4xl font-bold flex items-center gap-2">
                <FaCalendarDays className="text-2xl" />
              </h3>
              <p className="text-gray-300 mt-2">
                Latest Trends
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
    </>
  );
};

export default BlogHero;