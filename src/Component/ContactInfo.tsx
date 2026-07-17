import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaLocationDot />,
    title: "Visit Our Salon",
    text: "123 Admiralty Way, Lekki, Lagos, Nigeria",
  },
  {
    icon: <FaPhone />,
    title: "Call Us",
    text: "+234 800 123 4567",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    text: "info@luxurysalon.com",
  },
  {
    icon: <FaClock />,
    title: "Opening Hours",
    text: "Mon – Sat | 9:00 AM – 8:00 PM",
  },
];

const ContactInfo = () => {
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
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
              Contact Information
            </p>

            <h2 className="text-white text-5xl font-bold mt-4">
              We're Here to Help
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
              Reach out to us for appointments, beauty consultations, or any
              questions about our salon services.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8 text-center hover:border-[#C9A227] transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A227] text-black flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
