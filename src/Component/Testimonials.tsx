import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    review:
      "Absolutely amazing service! The atmosphere was luxurious, the staff were welcoming, and my hairstyle exceeded my expectations.",
  },
  {
    name: "David Wilson",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    review:
      "The best grooming experience I've ever had. Professional barbers and premium customer service.",
  },
  {
    name: "Sophia Brown",
    role: "Bride",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    review:
      "My bridal makeup was flawless. Everyone complimented my look. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Thousands of satisfied clients trust us for premium beauty,
            grooming, and luxury salon experiences.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="rounded-3xl bg-[#1A1A1A] p-8 border border-yellow-500/20 h-full">

                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
                />

                <h3 className="text-white text-xl font-semibold mt-6">
                  {client.name}
                </h3>

                <p className="text-yellow-500 text-sm mt-1">
                  {client.role}
                </p>

                <div className="flex gap-1 mt-5 text-yellow-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-400 mt-6 leading-8">
                  "{client.review}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Testimonials;