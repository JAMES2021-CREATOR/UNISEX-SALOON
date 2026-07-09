import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const stylists = [
  {
    name: "Sophia Williams",
    role: "Senior Hair Stylist",
    experience: "10 Years Experience",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Daniel Johnson",
    role: "Master Barber",
    experience: "8 Years Experience",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Olivia Brown",
    role: "Makeup Artist",
    experience: "7 Years Experience",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80",
  },
];

function FeaturedStylists() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Meet Our Experts
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Our Professional Stylists
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Our talented beauty professionals are passionate about
            creating stunning looks that make every client feel
            confident and beautiful.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-[#1A1A1A] border border-yellow-500/20"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="h-96 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-semibold text-white">
                  {stylist.name}
                </h3>

                <p className="mt-2 text-yellow-500">
                  {stylist.role}
                </p>

                <p className="mt-4 text-gray-400">
                  {stylist.experience}
                </p>

                {/* Social Icons */}
                <div className="mt-8 flex gap-4">

                  <button className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">
                    <FaFacebook  size={18} />
                  </button>

                  <button className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">
                    <FaInstagram size={18} />
                  </button>

                  <button className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">
                    <FaTwitter size={18} />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedStylists;