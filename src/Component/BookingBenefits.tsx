import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Certified Professionals",
  "Luxury Experience",
  "Premium Beauty Products",
  "Affordable Pricing",
  "Online Booking",
  "Friendly Customer Service",
];

const BookingBenefits = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Book With Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div
              key={item}
              className="bg-[#1a1a1a] rounded-2xl p-6 flex items-center gap-4"
            >
              <FaCheckCircle className="text-[#C9A227] text-2xl" />
              <p className="text-white">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookingBenefits;