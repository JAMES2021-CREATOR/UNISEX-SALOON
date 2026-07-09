import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BookingCTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-[#0B0B0B] via-[#1F1F1F] to-[#0B0B0B]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-yellow-500/20 bg-black/60 p-16 text-center shadow-2xl"
        >
          <p className="uppercase tracking-[5px] text-yellow-500">
            Luxury Experience
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Ready For Your Next Look?
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-8">
            Whether you need a haircut, makeover, nails, bridal styling,
            or premium grooming, our experts are ready to transform
            your style.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/booking"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
            >
              View Services
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default BookingCTA;