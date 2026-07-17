import { motion } from "framer-motion";
import {
  FaUsers,
  FaScissors,
  FaAward,
  FaStar,
} from "react-icons/fa6";

const stats = [
  {
    icon: <FaUsers />,
    number: "5,000+",
    title: "Happy Clients",
  },
  {
    icon: <FaScissors />,
    number: "20+",
    title: "Expert Stylists",
  },
  {
    icon: <FaAward />,
    number: "15+",
    title: "Years Experience",
  },
  {
    icon: <FaStar />,
    number: "4.9",
    title: "Average Rating",
  },
];

const TeamStatistics = () => {
  return (
    <>
    <section className="relative py-28 bg-[#111111] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A227]/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
            Our Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Excellence In Every Service
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Our commitment to quality, creativity and customer satisfaction
            has made us one of the most trusted luxury salons.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-black border border-[#222] rounded-3xl p-10 text-center hover:border-[#C9A227] transition duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#C9A227] text-black flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-4 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
    </>
  );
};

export default TeamStatistics;