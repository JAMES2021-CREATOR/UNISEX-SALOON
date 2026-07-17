import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import contactHero from "../assets/images/BLOCK8.jpg";

const ContactHero = () => {
  return (
    <>
    <section className="relative min-h-screen overflow-hidden py-14">

      {/* Background Image */}
      <img
        src={contactHero}
        alt="Luxury Salon Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="uppercase tracking-[6px] text-[#C9A227] text-sm mb-6"
            >
              Home / Contact
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              Let's Create
              <span className="block text-[#C9A227]">
                Your Perfect Look
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl"
            >
              Whether you have a question, need beauty advice, or want
              to schedule an appointment, our friendly team is ready
              to help you enjoy a premium salon experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5 }}
              className="flex flex-wrap gap-5 mt-12"
            >

              <Link
                to="/booking"
                className="bg-[#C9A227] hover:bg-yellow-600 transition duration-300 px-8 py-4 rounded-full text-black font-semibold flex items-center gap-3"
              >
                Book Appointment
                <FaArrowRight />
              </Link>

              <a
                href="tel:+2348001234567"
                className="border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-full text-white font-semibold flex items-center gap-3"
              >
                <FaPhone />
                Call Us
              </a>

            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="flex flex-wrap gap-8 mt-16"
            >

              <div>
                <p className="text-[#C9A227] font-semibold">
                  Email
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <FaEnvelope className="text-[#C9A227]" />
                  <span className="text-gray-300">
                    info@luxurysalon.com
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[#C9A227] font-semibold">
                  Opening Hours
                </p>

                <p className="text-gray-300 mt-2">
                  Mon – Sat • 9:00 AM – 8:00 PM
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-2 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>

    </section>
    </>
  );
};

export default ContactHero;