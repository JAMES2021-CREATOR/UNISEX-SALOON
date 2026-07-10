import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center pt-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[5px] text-[#C9A227]"
          >
            Home / About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-5xl md:text-7xl font-bold text-[#C9A227]"
          >
            Luxe Unisex Salon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            We combine creativity, elegance and premium beauty services to
            deliver unforgettable experiences for every client.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center gap-5 flex-wrap"
          >
            <Link
              to="/booking"
              className="bg-[#C9A227] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#0B0B0B] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80"
              alt="Luxury Salon"
              className="rounded-3xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[4px] text-[#C9A227]">
              Our Story
            </span>

            <h2 className="text-5xl font-bold text-white mt-5">
              Creating Beauty With Passion
            </h2>

            <p className="text-gray-400 leading-8 mt-8">
              Our salon is dedicated to helping clients express their confidence
              through exceptional hair styling, grooming, skincare and beauty
              treatments. Every visit is designed to be luxurious and relaxing.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-[#1F1F1F] rounded-2xl p-6">
                <h3 className="text-[#C9A227] text-4xl font-bold">10+</h3>
                <p className="text-gray-300 mt-2">Years Experience</p>
              </div>

              <div className="bg-[#1F1F1F] rounded-2xl p-6">
                <h3 className="text-[#C9A227] text-4xl font-bold">5000+</h3>
                <p className="text-gray-300 mt-2">Happy Clients</p>
              </div>

              <div className="bg-[#1F1F1F] rounded-2xl p-6">
                <h3 className="text-[#C9A227] text-4xl font-bold">25+</h3>
                <p className="text-gray-300 mt-2">Expert Stylists</p>
              </div>

              <div className="bg-[#1F1F1F] rounded-2xl p-6">
                <h3 className="text-[#C9A227] text-4xl font-bold">100%</h3>
                <p className="text-gray-300 mt-2">Client Satisfaction</p>
              </div>
            </div>

            <Link
              to="/team"
              className="inline-block mt-10 bg-[#C9A227] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition"
            >
              Meet Our Team
            </Link>
          </motion.div>

        </div>
      </section>
      {/* ================= Mission & Vision ================= */}

 <section className="bg-[#111111] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Our Mission & Vision
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
        We strive to redefine beauty by providing luxury salon experiences,
        exceptional customer service and professional grooming tailored to every client.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Mission Card */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1B1B1B] rounded-3xl p-10 border border-[#C9A227]/30 hover:border-[#C9A227] transition duration-300"
      >
        <div className="w-16 h-16 rounded-full bg-[#C9A227] flex items-center justify-center text-2xl mb-6">
          ✨
        </div>

        <h3 className="text-3xl font-bold text-white mb-5">
          Our Mission
        </h3>

        <p className="text-gray-400 leading-8">
          Our mission is to deliver premium beauty, haircare, skincare and
          grooming services that inspire confidence and self-expression.
          We focus on quality, innovation and personalized customer care.
        </p>

        <Link
          to="/services"
          className="inline-block mt-8 bg-[#C9A227] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
        >
          View Services
        </Link>

      </motion.div>

      {/* Vision Card */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1B1B1B] rounded-3xl p-10 border border-[#C9A227]/30 hover:border-[#C9A227] transition duration-300"
      >
        <div className="w-16 h-16 rounded-full bg-[#C9A227] flex items-center justify-center text-2xl mb-6">
          👑
        </div>

        <h3 className="text-3xl font-bold text-white mb-5">
          Our Vision
        </h3>

        <p className="text-gray-400 leading-8">
          Our vision is to become the leading luxury unisex salon known for
          creativity, professionalism, innovation and unforgettable customer
          experiences across the beauty industry.
        </p>

        <Link
          to="/booking"
          className="inline-block mt-8 border-2 border-[#C9A227] text-[#C9A227] px-6 py-3 rounded-full font-semibold hover:bg-[#C9A227] hover:text-black transition"
        >
          Book Appointment
        </Link>

      </motion.div>

    </div>

  </div>
</section>
{/* ================= CORE VALUES ================= */}

<section className="bg-[#0B0B0B] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white">
        Our Core Values
      </h2>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
        Everything we do is guided by professionalism, creativity and
        excellence to ensure every client enjoys a premium salon experience.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: "✨",
          title: "Excellence",
          desc: "We are committed to delivering outstanding salon services with attention to every detail."
        },
        {
          icon: "❤️",
          title: "Customer First",
          desc: "Our clients are at the center of every decision we make."
        },
        {
          icon: "🎨",
          title: "Creativity",
          desc: "Modern styles, fresh ideas and innovative beauty solutions."
        },
        {
          icon: "🏆",
          title: "Professionalism",
          desc: "Experienced stylists providing world-class beauty services."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="bg-[#1B1B1B] rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300 border border-transparent hover:border-[#C9A227]"
        >
          <div className="text-5xl mb-6">
            {item.icon}
          </div>

          <h3 className="text-2xl text-white font-bold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-7">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="bg-[#111111] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white">
        Why Choose Us
      </h2>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
        We combine luxury, innovation and expertise to create an unforgettable
        salon experience.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "Certified Professional Stylists",
        "Premium International Products",
        "Luxury & Comfortable Environment",
        "Affordable Beauty Packages",
        "Modern Equipment & Technology",
        "Personalized Beauty Consultation"
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * .15 }}
          className="bg-[#1B1B1B] rounded-3xl p-8 hover:bg-[#C9A227] hover:text-black transition duration-300 group"
        >

          <div className="w-16 h-16 rounded-full bg-[#C9A227] text-black flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-[#C9A227] transition">
            ✓
          </div>

          <h3 className="text-2xl font-bold mt-6">
            {item}
          </h3>

          <p className="mt-4 text-gray-400 group-hover:text-black">
            Experience premium beauty services delivered by skilled
            professionals using modern techniques and world-class products.
          </p>

        </motion.div>

      ))}

    </div>

    <div className="text-center mt-16">

      <Link
        to="/services"
        className="inline-block bg-[#C9A227] text-black px-10 py-4 rounded-full font-semibold hover:bg-white transition"
      >
        Explore Our Services
      </Link>

    </div>

  </div>

</section>
{/* ================= TEAM PREVIEW ================= */}

<section className="bg-[#0B0B0B] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white">
        Meet Our Expert Stylists
      </h2>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
        Our experienced beauty professionals are passionate about helping you
        look and feel your best. Every stylist brings creativity, expertise,
        and dedication to every appointment.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          name: "Sophia Johnson",
          role: "Creative Hair Stylist",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "David Brown",
          role: "Master Barber",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Emily Wilson",
          role: "Makeup Artist",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Michael Smith",
          role: "Beauty Specialist",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        },
      ].map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="overflow-hidden rounded-3xl bg-[#1B1B1B] hover:-translate-y-2 transition duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="h-80 w-full object-cover"
          />

          <div className="p-6 text-center">

            <h3 className="text-2xl font-bold text-white">
              {member.name}
            </h3>

            <p className="text-[#C9A227] mt-2">
              {member.role}
            </p>

            <Link
              to="/team"
              className="inline-block mt-6 rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black hover:bg-white transition"
            >
              View Profile
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

    <div className="text-center mt-16">

      <Link
        to="/team"
        className="inline-block border-2 border-[#C9A227] text-[#C9A227] px-10 py-4 rounded-full font-semibold hover:bg-[#C9A227] hover:text-black transition"
      >
        Meet Our Full Team
      </Link>

    </div>

  </div>

</section>
{/* ================= ACHIEVEMENTS ================= */}

<section className="bg-[#111111] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white">
        Our Achievements
      </h2>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
        Our journey has been defined by excellence, innovation and thousands of
        satisfied clients who trust us with their beauty and grooming needs.
      </p>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          number: "10+",
          title: "Years Experience",
          icon: "🏆",
        },
        {
          number: "5,000+",
          title: "Happy Clients",
          icon: "😊",
        },
        {
          number: "25+",
          title: "Expert Stylists",
          icon: "✂️",
        },
        {
          number: "15+",
          title: "Beauty Awards",
          icon: "🥇",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="rounded-3xl bg-[#1B1B1B] border border-[#C9A227]/20 p-8 text-center hover:border-[#C9A227] hover:-translate-y-2 transition duration-300"
        >
          <div className="text-5xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-5xl font-bold text-[#C9A227]">
            {item.number}
          </h3>

          <p className="mt-4 text-lg text-gray-300">
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

export default About;