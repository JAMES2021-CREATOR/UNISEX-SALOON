import { motion } from "framer-motion";

const BookingForm = () => {
  return (
    <section className="bg-[#111111] py-20">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}

        <motion.img
          initial={{ opacity:0,x:-50 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
          src="/images/booking.jpg"
          alt="Salon Booking"
          className="rounded-3xl shadow-xl"
        />

        {/* Form */}

        <motion.form
          initial={{ opacity:0,x:50 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white"
          />

          <select className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white">
            <option>Select Service</option>
            <option>Haircut</option>
            <option>Hair Coloring</option>
            <option>Makeup</option>
            <option>Massage</option>
            <option>Facial</option>
          </select>

          <select className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white">
            <option>Select Stylist</option>
            <option>Sarah Johnson</option>
            <option>Michael Brown</option>
            <option>Emily Davis</option>
          </select>

          <input
            type="date"
            className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white"
          />

          <input
            type="time"
            className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white"
          />

          <textarea
            rows={4}
            placeholder="Special Requests"
            className="w-full p-4 rounded-xl bg-[#1d1d1d] text-white"
          />

          <button
            className="w-full bg-[#C9A227] hover:bg-yellow-600
            transition py-4 rounded-xl font-semibold"
          >
            Book Appointment
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default BookingForm;