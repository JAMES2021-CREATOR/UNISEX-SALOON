import { motion } from "framer-motion";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
    category: "Hair Styling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    category: "Makeup",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    category: "Nails",
  },
  {
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800",
    category: "Barbing",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
    category: "Facial",
  },
];

function GalleryPreview() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Our Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Beauty in Every Style
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Discover some of our finest transformations and luxury salon
            experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.category}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.category}
                  </h3>

                  <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
                    View More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;