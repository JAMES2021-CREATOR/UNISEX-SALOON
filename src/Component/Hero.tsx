import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, Users } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-160vh  overflow-hidden bg-black py-40">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mb-5 text-sm uppercase tracking-[8px] text-yellow-500"
          >
            Welcome To Luxe Salon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Elevate Your
            <span className="block text-yellow-500">
              Style & Confidence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
          >
            Experience premium hair styling, beauty treatments,
            skincare, nails and luxury grooming services delivered
            by highly skilled professionals.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <button className="group flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400">

              <Calendar size={20} />

              Book Appointment

            </button>

            <button className="group flex items-center gap-3 rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black">

              Explore Services

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-2"
              />

            </button>

          </motion.div>

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="mt-16 grid grid-cols-3 gap-6"
          >

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <Users
                className="mb-3 text-yellow-500"
                size={30}
              />

              <h2 className="text-3xl font-bold text-white">
                10K+
              </h2>

              <p className="text-gray-400">
                Happy Clients
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <Star
                className="mb-3 text-yellow-500"
                size={30}
              />

              <h2 className="text-3xl font-bold text-white">
                4.9
              </h2>

              <p className="text-gray-400">
                Client Rating
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <Users
                className="mb-3 text-yellow-500"
                size={30}
              />

              <h2 className="text-3xl font-bold text-white">
                15+
              </h2>

              <p className="text-gray-400">
                Expert Stylists
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <div className="flex h-14 w-8 justify-center rounded-full border border-yellow-500">

          <div className="mt-2 h-3 w-3 rounded-full bg-yellow-500" />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;