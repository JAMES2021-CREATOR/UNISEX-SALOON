import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";

import stylist1 from "../assets/images/teammember1.jpeg";
import stylist2 from "../assets/images/teammember2.jpeg";
import barber1 from "../assets/images/teammember3.jpeg";
import makeup1 from "../assets/images/teammember4.jpeg";

const team = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Senior Hair Stylist",
    experience: "8 Years Experience",
    rating: "4.9",
    image: stylist1,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Master Barber",
    experience: "10 Years Experience",
    rating: "5.0",
    image: barber1,
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Makeup Artist",
    experience: "6 Years Experience",
    rating: "4.8",
    image: makeup1,
  },
  {
    id: 4,
    name: "Olivia Smith",
    role: "Hair Color Specialist",
    experience: "7 Years Experience",
    rating: "4.9",
    image: stylist2,
  },
];

const TeamMembers = () => {
  return (
    <>
      <section className="bg-[#111111] py-24">
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
              Our Professionals
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Meet Our Expert Stylists
            </h2>

            <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
              Our talented team combines creativity, experience, and passion to
              deliver exceptional beauty services tailored to your style.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-3xl overflow-hidden group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-96 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="text-[#C9A227] mt-2">{member.role}</p>

                  <p className="text-gray-400 mt-3">{member.experience}</p>

                  <div className="flex items-center gap-2 mt-4">
                    <FaStar className="text-yellow-500" />
                    <span className="text-white">{member.rating}</span>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 mt-6 text-white">
                    <FaFacebookF className="hover:text-[#C9A227] cursor-pointer transition" />
                    <FaInstagram className="hover:text-[#C9A227] cursor-pointer transition" />
                    <FaLinkedinIn className="hover:text-[#C9A227] cursor-pointer transition" />
                  </div>

                  {/* Button */}
                  <Link
                    to="/booking"
                    className="mt-8 inline-flex items-center gap-2 bg-[#C9A227] hover:bg-yellow-600 transition px-6 py-3 rounded-full font-semibold text-black"
                  >
                    Book Now
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

export default TeamMembers;
