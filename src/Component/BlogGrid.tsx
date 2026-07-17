import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarDays,
  FaUser,
  FaClock,
} from "react-icons/fa6";

import blog1 from "../assets/images/BLOCK1.jpg";
import blog2 from "../assets/images/BLOCK2.jpg";
import blog3 from "../assets/images/BLOCK3.jpg";
import blog4 from "../assets/images/BLOCK4.jpg";
import blog5 from "../assets/images/BLOCK5.jpg";
import blog6 from "../assets/images/BLOCK6.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "10 Hair Care Secrets for Healthy Hair",
    category: "Hair Care",
    date: "June 15, 2026",
    author: "Admin",
    read: "5 min",
  },
  {
    id: 2,
    image: blog2,
    title: "Luxury Beard Grooming Guide",
    category: "Barbing",
    date: "June 18, 2026",
    author: "Michael",
    read: "4 min",
  },
  {
    id: 3,
    image: blog3,
    title: "Bridal Makeup Trends You'll Love",
    category: "Makeup",
    date: "June 21, 2026",
    author: "Sophia",
    read: "6 min",
  },
  {
    id: 4,
    image: blog4,
    title: "The Importance of Monthly Facials",
    category: "Skincare",
    date: "June 25, 2026",
    author: "Grace",
    read: "4 min",
  },
  {
    id: 5,
    image: blog5,
    title: "Nail Care Tips for Every Season",
    category: "Nails",
    date: "June 27, 2026",
    author: "Bella",
    read: "5 min",
  },
  {
    id: 6,
    image: blog6,
    title: "Hair Coloring Trends for This Year",
    category: "Hair Color",
    date: "June 30, 2026",
    author: "Emma",
    read: "7 min",
  },
];

const BlogGrid = () => {
  return (
    <>
    <section
      id="latest-posts"
      className="bg-[#111111] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
            Latest Articles
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Beauty Inspiration
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Stay updated with professional beauty tips, salon news,
            grooming advice and the latest fashion trends.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="group bg-[#1A1A1A] rounded-3xl overflow-hidden border border-[#252525] hover:border-[#C9A227] transition duration-500"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <span className="bg-[#C9A227] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {blog.category}
                </span>

                <div className="flex flex-wrap gap-5 text-gray-400 text-sm mt-6">

                  <span className="flex items-center gap-2">
                    <FaCalendarDays />
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaUser />
                    {blog.author}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock />
                    {blog.read}
                  </span>

                </div>

                <h3 className="text-white text-2xl font-bold mt-6 group-hover:text-[#C9A227] transition">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  Learn expert techniques and practical beauty tips
                  that will help you look and feel your best every day.
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-3 mt-8 text-[#C9A227] font-semibold hover:gap-5 transition-all"
                >
                  Read More
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

export default BlogGrid;