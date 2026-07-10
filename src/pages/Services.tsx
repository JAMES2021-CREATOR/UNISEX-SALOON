import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gold Glow */}
        <div className="absolute top-20 left-20 h-60 w-60 rounded-full bg-[#C9A227]/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-60 w-60 rounded-full bg-[#C9A227]/20 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[6px] text-[#C9A227] text-sm"
          >
            Home / Services
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Luxury Salon
            <br />
            <span className="text-[#C9A227]">
              Services
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-8"
          >
            From luxury hair styling and barbering to skincare,
            makeup and nail care, our professional team delivers
            exceptional beauty services tailored to your style.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/booking"
              className="rounded-full bg-[#C9A227] px-10 py-4 text-black font-semibold hover:bg-white transition duration-300"
            >
              Book Appointment
            </Link>

            <Link
              to="/contact"
              className="rounded-full border-2 border-white px-10 py-4 text-white font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "50+", title: "Premium Services" },
              { number: "5K+", title: "Happy Clients" },
              { number: "25+", title: "Expert Stylists" },
              { number: "100%", title: "Satisfaction" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <h2 className="text-4xl font-bold text-[#C9A227]">
                  {item.number}
                </h2>

                <p className="mt-2 text-gray-300">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
      {/* ================= SERVICE CATEGORIES ================= */}

   <section className="bg-[#0B0B0B] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[5px] text-[#C9A227]"
      >
        Our Services
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Premium Salon Services
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Discover our complete range of luxury beauty and grooming services,
        carefully designed to help you look confident and feel your absolute
        best.
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      {[
        {
          title: "Hair Services",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
          description:
            "Haircuts, styling, coloring, treatments, braiding and wig installation.",
        },
        {
          title: "Beauty Services",
          image:
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
          description:
            "Professional makeup, facials, manicures, pedicures, nails and eyelash services.",
        },
        {
          title: "Men's Grooming",
          image:
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
          description:
            "Luxury barbering, beard trimming, shaving and premium grooming experiences.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group overflow-hidden rounded-3xl bg-[#1B1B1B] shadow-xl"
        >
          <div className="overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-8">

            <h3 className="text-3xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {service.description}
            </p>

            <Link
              to="/booking"
              className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-3 font-semibold text-black transition hover:bg-white"
            >
              Book Now
            </Link>

          </div>
        </motion.div>
      ))}

    </div>

  </div>

  </section>
  {/* ================= FEATURED SERVICES ================= */}

<section className="bg-[#111111] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[5px] text-[#C9A227]"
      >
        Featured Services
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Luxury Beauty Experience
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400">
        Experience world-class beauty treatments performed by our professional
        stylists using premium products and modern techniques.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          image:
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
          title: "Luxury Hair Styling",
          duration: "90 Minutes",
          price: "$80",
          rating: "★★★★★",
          description:
            "Professional styling tailored to your personality and lifestyle."
        },
        {
          image:
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
          title: "Professional Makeup",
          duration: "60 Minutes",
          price: "$60",
          rating: "★★★★★",
          description:
            "Elegant makeup for weddings, parties and special occasions."
        },
        {
          image:
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
          title: "Premium Barbering",
          duration: "45 Minutes",
          price: "$35",
          rating: "★★★★★",
          description:
            "Luxury haircut, beard grooming and hot towel treatment."
        },
        {
          image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
          title: "Facial Treatment",
          duration: "70 Minutes",
          price: "$55",
          rating: "★★★★★",
          description:
            "Refresh and rejuvenate your skin with our luxury facial care."
        },
        {
          image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
          title: "Luxury Nails",
          duration: "75 Minutes",
          price: "$45",
          rating: "★★★★★",
          description:
            "Beautiful manicures and pedicures with premium nail products."
        },
        {
          image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
          title: "Hair Coloring",
          duration: "120 Minutes",
          price: "$120",
          rating: "★★★★★",
          description:
            "Premium coloring techniques for vibrant and long-lasting results."
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="overflow-hidden rounded-3xl bg-[#1B1B1B] shadow-xl group"
        >
          <div className="overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-7">

            <div className="flex justify-between items-center">
              <span className="text-[#C9A227] font-semibold">
                {service.duration}
              </span>

              <span className="text-white font-bold text-xl">
                {service.price}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {service.description}
            </p>

            <p className="mt-5 text-[#C9A227] text-xl">
              {service.rating}
            </p>

            <Link
              to="/booking"
              className="mt-7 inline-block rounded-full bg-[#C9A227] px-7 py-3 font-semibold text-black transition hover:bg-white"
            >
              Book Now
            </Link>

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* ================= WHY OUR SERVICES STAND OUT ================= */}

<section className="bg-[#0B0B0B] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Why Choose Us
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Why Our Services Stand Out
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Every treatment is delivered with precision, luxury and care to ensure
        you enjoy a first-class salon experience from the moment you arrive.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icon: "✂️",
          title: "Certified Stylists",
          desc: "Our experienced professionals stay updated with the latest beauty trends and techniques."
        },
        {
          icon: "🌿",
          title: "Premium Products",
          desc: "We use trusted international brands to deliver healthy, long-lasting results."
        },
        {
          icon: "💎",
          title: "Luxury Experience",
          desc: "Enjoy a calm, elegant and welcoming salon designed for your comfort."
        },
        {
          icon: "🧴",
          title: "Clean & Hygienic",
          desc: "Every tool and workstation is cleaned and sanitized to the highest standards."
        },
        {
          icon: "🎯",
          title: "Personal Consultation",
          desc: "We listen to your needs and recommend services that suit your style."
        },
        {
          icon: "❤️",
          title: "Customer Satisfaction",
          desc: "Your happiness is our priority, and we strive to exceed expectations every visit."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="rounded-3xl border border-[#C9A227]/20 bg-[#1B1B1B] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C9A227]"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A227] text-3xl">
            {item.icon}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* ================= PRICING PACKAGES ================= */}

<section className="bg-[#0B0B0B] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Pricing Plans
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Choose Your Beauty Package
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Select the package that best suits your beauty and grooming needs.
        Every package is designed to give you exceptional value and a luxury experience.
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      {[
        {
          name: "Silver",
          price: "#10,000",
          services: [
            "Haircut",
            "Hair Wash",
            "Basic Styling",
            "Free Consultation"
          ],
          featured: false,
        },
        {
          name: "Gold",
          price: "#20,000",
          services: [
            "Luxury Hair Styling",
            "Facial Treatment",
            "Manicure",
            "Premium Products",
            "Free Drink"
          ],
          featured: true,
        },
        {
          name: "VIP Luxury",
          price: "#50,000",
          services: [
            "Complete Makeover",
            "Hair Coloring",
            "Luxury Facial",
            "Manicure & Pedicure",
            "VIP Lounge Access",
            "Personal Stylist"
          ],
          featured: false,
        },
      ].map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
            plan.featured
              ? "border-[#C9A227] bg-[#1B1B1B] scale-105"
              : "border-white/10 bg-[#161616]"
          }`}
        >

          {plan.featured && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#C9A227] px-5 py-2 text-sm font-bold text-black">
              MOST POPULAR
            </span>
          )}

          <h3 className="text-3xl font-bold text-white text-center">
            {plan.name}
          </h3>

          <p className="mt-6 text-center text-5xl font-bold text-[#C9A227]">
            {plan.price}
          </p>

          <ul className="mt-10 space-y-4">
            {plan.services.map((service, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-300"
              >
                <span className="text-[#C9A227]">✔</span>
                {service}
              </li>
            ))}
          </ul>

          <Link
            to="/booking"
            className={`mt-10 block rounded-full py-4 text-center font-semibold transition ${
              plan.featured
                ? "bg-[#C9A227] text-black hover:bg-white"
                : "border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black"
            }`}
          >
            Book This Package
          </Link>

        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* ================= FAQ SECTION ================= */}

<section className="bg-[#111111] py-24">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Frequently Asked Questions
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Frequently Asked Questions
      </motion.h2>

      <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
        Here are some common questions our clients ask before visiting our salon.
      </p>

    </div>

    <div className="space-y-6">

      {[
        {
          question: "Do I need to book an appointment?",
          answer:
            "Appointments are recommended to guarantee your preferred stylist and time, but we also welcome walk-in clients when space is available."
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, debit cards, bank transfers and other supported digital payment options."
        },
        {
          question: "Can I reschedule my appointment?",
          answer:
            "Yes. Please notify us at least 24 hours before your appointment so we can arrange another convenient time."
        },
        {
          question: "What products do you use?",
          answer:
            "We use high-quality professional beauty products from trusted international brands to ensure excellent results."
        },
        {
          question: "Do you offer bridal packages?",
          answer:
            "Yes. We provide complete bridal beauty packages including hair styling, makeup, nails and skincare treatments."
        },
      ].map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="rounded-3xl bg-[#1B1B1B] border border-[#C9A227]/20 p-8"
        >

          <h3 className="text-2xl font-semibold text-white">
            {faq.question}
          </h3>

          <p className="mt-4 text-gray-400 leading-8">
            {faq.answer}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
</section>

    </>
  );
};

export default Services;