import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
//   FaScissors,
  FaSpa,
  FaPaintBrush,
  FaHandSparkles,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    title: "Hair Care",
    description: "Professional hair care routines and styling advice.",
    // icon: <FaScissors />,
    posts: "18 Articles",
  },
  {
    title: "Barbing",
    description: "Modern grooming tips and beard maintenance.",
    icon: <FaUserTie />,
    posts: "12 Articles",
  },
  {
    title: "Makeup",
    description: "Beauty inspiration from our makeup artists.",
    icon: <FaPaintBrush />,
    posts: "14 Articles",
  },
  {
    title: "Skincare",
    description: "Healthy skin starts with the right routine.",
    icon: <FaSpa />,
    posts: "10 Articles",
  },
  {
    title: "Nail Care",
    description: "Luxury manicure and nail care inspiration.",
    icon: <FaHandSparkles />,
    posts: "9 Articles",
  },
  {
    title: "Salon News",
    description: "Latest updates, promotions and events.",
    icon: <FaArrowRight />,
    posts: "6 Articles",
  },
];

const BlogCategories = () => {
  return (
    <>
      <section className="bg-[#0B0B0B] py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
              Explore
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Browse By Category
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
              Find articles tailored to your beauty interests and discover
              expert advice from our salon professionals.
            </p>
          </motion.div>

          {/* Categories */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-[#141414] border border-[#262626] rounded-3xl p-8 hover:border-[#C9A227] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C9A227] flex items-center justify-center text-3xl text-black mb-6 group-hover:rotate-6 transition">
                  {category.icon}
                </div>

                <h3 className="text-white text-2xl font-bold group-hover:text-[#C9A227] transition">
                  {category.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {category.description}
                </p>

                <div className="flex justify-between items-center mt-8">
                  <span className="text-[#C9A227] font-semibold">
                    {category.posts}
                  </span>

                  <Link
                    to="/blog"
                    className="text-white group-hover:text-[#C9A227] transition flex items-center gap-2"
                  >
                    Explore
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCategories;
