import { motion } from "framer-motion";

function Newsletter() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-yellow-500 to-yellow-600 p-12 text-center shadow-xl"
        >
          <p className="uppercase tracking-[4px] text-black font-semibold">
            Stay Connected
          </p>

          <h2 className="mt-4 text-4xl font-bold text-black">
            Get Beauty Tips & Exclusive Offers
          </h2>

          <p className="mt-4 text-black/80 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about
            discounts, beauty tips, new services, and exclusive salon
            promotions.
          </p>

          <form className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-96 rounded-full px-6 py-4 outline-none bg-white text-black"
            />

            <button
              type="submit"
              className="rounded-full bg-black px-8 py-4 text-white font-semibold hover:bg-[#222] transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;