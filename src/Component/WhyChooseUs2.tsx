import { motion } from "framer-motion";
import {
  FaAward,
  FaUserTie,
  FaGem,
  FaHeart,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaGem />,
    title: "Luxury Experience",
    description:
      "Step into a relaxing and elegant environment designed to provide comfort, style, and a first-class salon experience.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Stylists",
    description:
      "Our certified professionals are passionate about creating hairstyles and beauty treatments tailored to your personality.",
  },
  {
    icon: <FaAward />,
    title: "Premium Products",
    description:
      "We use trusted international beauty brands to protect your hair, skin, and overall wellness.",
  },
  {
    icon: <FaHeart />,
    title: "Customer Satisfaction",
    description:
      "Thousands of satisfied clients continue to trust us because we consistently deliver exceptional beauty services.",
  },
];

const WhyChooseUs2 = () => {
  return (
    <>
    <section className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold mt-5">
            Experience Beauty
            <span className="block text-[#C9A227]">
              Like Never Before
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            We combine creativity, professionalism, and luxury to deliver
            exceptional salon experiences that leave every client looking
            and feeling their absolute best.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#C9A227] rounded-3xl p-8 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] text-4xl mb-8">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-8">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-white text-3xl font-bold">
            Ready for Your Next Salon Experience?
          </h3>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Let our experienced team transform your style with premium
            beauty services in a luxurious and welcoming environment.
          </p>

          <a
            href="/booking"
            className="inline-block mt-10 bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300 text-black font-semibold px-10 py-4 rounded-full"
          >
            Book Your Appointment
          </a>
        </motion.div>

      </div>
    </section>
    </>
  );
};

export default WhyChooseUs2;