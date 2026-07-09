import {
  Scissors,
  Sparkles,
  Hand,
  Brush,
  Gem,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Professional haircuts, styling and coloring tailored to your personality.",
  },
  {
    icon: Sparkles,
    title: "Facial & Skincare",
    description:
      "Luxury facial treatments that restore your skin's natural glow.",
  },
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    description:
      "Elegant nail care designed for beauty, comfort and confidence.",
  },
  {
    icon: Brush,
    title: "Professional Makeup",
    description:
      "Bridal, party and everyday makeup by experienced beauty artists.",
  },
  {
    icon: Gem,
    title: "Luxury Grooming",
    description:
      "Premium beard trimming, shaving and grooming for modern gentlemen.",
  },
  {
    icon: Crown,
    title: "VIP Experience",
    description:
      "Enjoy exclusive luxury treatments in our premium private lounge.",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-[#0B0B0B] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-yellow-500 uppercase tracking-[6px] text-center"
        >
          Premium Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl md:text-5xl font-bold text-center text-white"
        >
          Beauty Meets Luxury
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mt-6">
          We provide world-class beauty, grooming and wellness services
          designed to enhance your confidence and style.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#1A1A1A] rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 transition duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-black" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 text-yellow-500 font-semibold hover:underline">
                  Learn More →
                </button>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;