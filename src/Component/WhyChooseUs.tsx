import { motion } from "framer-motion";
import {
  Award,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Clock,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "Our experienced stylists are trained to deliver exceptional beauty and grooming services.",
  },
  {
    icon: Sparkles,
    title: "Premium Beauty Products",
    description:
      "We use only high-quality products that protect and nourish your hair and skin.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Safe Environment",
    description:
      "Your comfort and hygiene are our priority with modern equipment and strict cleanliness standards.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "Thousands of happy clients trust us for consistent quality and outstanding service.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description:
      "Book appointments easily and enjoy timely services without unnecessary waiting.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#111111] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
              alt="Luxury Salon"
              className="rounded-3xl shadow-2xl object-cover h-[650px] w-full"
            />

            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-yellow-500">
              <h3 className="text-4xl font-bold text-yellow-500">
                10+
              </h3>

              <p className="text-white">
                Years of Excellence
              </p>
            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Your Beauty,
              <span className="block text-yellow-500">
                Our Passion.
              </span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              At Luxe Salon, we combine creativity, premium beauty
              products, and expert professionals to deliver an
              unforgettable salon experience that leaves you looking
              and feeling your absolute best.
            </p>

            <div className="mt-12 space-y-8">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * .15 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >

                    <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">

                      <Icon
                        size={26}
                        className="text-black"
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 mt-2 leading-7">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            <button className="mt-12 flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition">

              Learn More

              <ArrowRight size={20} />

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;