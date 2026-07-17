import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarDays, FaUser, FaTag } from "react-icons/fa6";

import featuredImage from "../assets/images/1.jpg";

const FeaturedPost = () => {
  return (
    <>
      <section className="bg-[#0B0B0B] py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
              Featured Article
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Editor's Pick
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
              Discover our latest beauty insights, salon trends, and expert
              advice carefully selected by our professional stylists.
            </p>
          </motion.div>

          {/* Featured Card */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 bg-[#141414] rounded-[35px] overflow-hidden shadow-2xl"
          >
            {/* Image */}

            <div className="overflow-hidden">
              <img
                src={featuredImage}
                alt="Featured Blog"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}

            <div className="p-10 lg:p-14 flex flex-col justify-center">
              {/* Badge */}

              <span className="inline-block bg-[#C9A227] text-black px-5 py-2 rounded-full font-semibold text-sm w-fit">
                Featured Story
              </span>

              {/* Meta */}

              <div className="flex flex-wrap gap-6 mt-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCalendarDays className="text-[#C9A227]" />
                  June 2026
                </div>

                <div className="flex items-center gap-2">
                  <FaUser className="text-[#C9A227]" />
                  DJ TechCode Salon
                </div>

                <div className="flex items-center gap-2">
                  <FaTag className="text-[#C9A227]" />
                  Hair Care
                </div>
              </div>

              {/* Title */}

              <h2 className="text-white text-4xl font-bold leading-tight mt-8">
                10 Professional Hair Care Secrets Every Client Should Know
              </h2>

              {/* Description */}

              <p className="text-gray-400 mt-8 leading-8">
                Healthy, beautiful hair begins with the right care routine.
                Discover expert techniques, recommended products, and salon
                treatments that help keep your hair strong, shiny, and full of
                life.
              </p>

              {/* Button */}

              <Link
                to="/blog/hair-care-secrets"
                className="mt-10 inline-flex items-center gap-3 bg-[#C9A227] hover:bg-yellow-600 transition px-8 py-4 rounded-full text-black font-semibold w-fit"
              >
                Read Full Article
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedPost;
