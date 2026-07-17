import { motion } from "framer-motion";
import contactImage from "../assets/images/contact-form.jpg";

const ContactForm = () => {
  return (
    <>
      <section className="bg-[#0B0B0B] py-24" id="contact-form">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-[#C9A227] text-sm">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Send Us A Message
            </h2>

            <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions about our
              services, pricing, bookings, or partnerships, simply complete the
              form below and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.img
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={contactImage}
              alt="Luxury Salon"
              className="rounded-3xl shadow-2xl object-cover h-full"
            />

            {/* Right Form */}
            <motion.form
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              action="https://formspree.io/f/xqerpjyl"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-[#181818] border border-[#333] rounded-xl p-4 text-white focus:border-[#C9A227] outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#181818] border border-[#333] rounded-xl p-4 text-white focus:border-[#C9A227] outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-[#181818] border border-[#333] rounded-xl p-4 text-white focus:border-[#C9A227] outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-[#181818] border border-[#333] rounded-xl p-4 text-white focus:border-[#C9A227] outline-none"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full bg-[#181818] border border-[#333] rounded-xl p-4 text-white resize-none focus:border-[#C9A227] outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300 py-4 rounded-xl text-black font-bold text-lg"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
