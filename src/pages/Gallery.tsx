import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const hairGallery = [
  {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    title: "Luxury Hair Styling",
    description: "Elegant hairstyles for every occasion.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    title: "Professional Hair Coloring",
    description: "Premium coloring with vibrant, lasting results.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
    title: "Silk Press",
    description: "Smooth, shiny and healthy-looking hair.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1200&q=80",
    title: "Hair Treatment",
    description: "Deep nourishment and repair for healthy hair.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    title: "Braiding",
    description: "Beautiful protective styles by expert stylists.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    title: "Luxury Blowout",
    description: "Professional finishing with volume and shine.",
  },
  
];
function Gallery() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gold Glow */}
        <div className="absolute top-20 left-20 h-60 w-60 rounded-full bg-[#C9A227]/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-60 w-60 rounded-full bg-[#C9A227]/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl px-6 text-center">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[6px] text-[#C9A227]"
          >
            Home / Gallery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-5xl md:text-7xl font-bold text-white"
          >
            Our Beauty
            <span className="text-[#C9A227]"> Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg text-gray-300 leading-8"
          >
            Discover our collection of luxury hairstyles, makeup artistry,
            barbering, nail designs, bridal transformations and unforgettable
            beauty experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <a
              href="#gallery"
              className="rounded-full bg-[#C9A227] px-8 py-4 font-semibold text-black hover:bg-white transition"
            >
              View Gallery
            </a>

            <Link
              to="/booking"
              className="rounded-full border-2 border-white px-8 py-4 text-white hover:bg-white hover:text-black transition"
            >
              Book Appointment
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= GALLERY CATEGORIES ================= */}

      <section
        id="gallery"
        className="bg-[#0B0B0B] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-[6px] text-[#C9A227]"
            >
              Browse Gallery
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-5xl font-bold text-white"
            >
              Explore Our Portfolio
            </motion.h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
              Browse our collection of luxury hairstyles, makeup,
              barbering, nails and bridal beauty.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-5">

            {[
              "All",
              "Hair",
              "Makeup",
              "Barbing",
              "Nails",
              "Bridal",
              "Before & After",
            ].map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-full px-8 py-3 font-semibold transition ${
                  index === 0
                    ? "bg-[#C9A227] text-black"
                    : "border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black"
                }`}
              >
                {category}
              </motion.button>
            ))}

          </div>

        </div>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {hairGallery.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group overflow-hidden rounded-3xl bg-[#1A1A1A]"
    >
      <div className="relative overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-3 text-gray-400 leading-7">
          {item.description}
        </p>

        <Link
          to="/booking"
          className="mt-6 inline-block rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-white"
        >
          Book This Style
        </Link>

      </div>
    </motion.div>
  ))}
</div>
      
    {/* ================= MAKEUP GALLERY ================= */}

<section id="makeup" className="bg-[#0B0B0B] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Makeup Collection
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Luxury Makeup Gallery
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        From bridal glam to everyday beauty, our professional makeup artists
        create flawless looks for every occasion.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Bridal Makeup",
          description: "Luxury bridal makeup for your unforgettable day.",
        },
        {
          image: "https://images.pexels.com/photos/3373747/pexels-photo-3373747.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Soft Glam",
          description: "Elegant makeup for birthdays and special occasions.",
        },
        {
          image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Luxury Glam",
          description: "Premium full-face makeup with a flawless finish.",
        },
        {
          image: "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Natural Beauty",
          description: "Fresh everyday makeup that enhances your beauty.",
        },
        {
          image: "https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Editorial Makeup",
          description: "Creative beauty looks for fashion and photoshoots.",
        },
        {
          image: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Evening Glam",
          description: "Bold luxury makeup for parties and evening events.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group overflow-hidden rounded-3xl bg-[#1A1A1A] shadow-xl"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              {item.description}
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              Book Makeup
            </Link>

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* ================= NAIL GALLERY ================= */}

<section id="nails" className="bg-[#111111] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Nail Collection
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Luxury Nail Studio
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Beautiful manicures, acrylic extensions, gel polish and elegant nail art
        designed by our professional nail technicians.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
       
  {
    image:
      "https://images.pexels.com/photos/16041438/pexels-photo-16041438.jpeg",
    title: "Luxury Manicure",
    description: "Elegant nude acrylic nails with a premium finish.",
  },
  {
    image:
      "https://images.pexels.com/photos/8481628/pexels-photo-8481628.jpeg",
    title: "French Manicure",
    description: "Classic French tips with modern elegance.",
  },
  {
    image:
      "https://images.pexels.com/photos/4467856/pexels-photo-4467856.jpeg",
    title: "Gel Polish",
    description: "Long-lasting glossy gel polish application.",
  },
  {
    image:
      "https://images.pexels.com/photos/16041438/pexels-photo-16041438.jpeg",
    title: "Bridal Nails",
    description: "Sophisticated nail designs for your wedding day.",
  },
  {
    image:
      "https://images.pexels.com/photos/8481628/pexels-photo-8481628.jpeg",
    title: "Acrylic Extensions",
    description: "Strong, stylish and beautifully crafted extensions.",
  },
  {
    image:
      "https://images.pexels.com/photos/4467856/pexels-photo-4467856.jpeg",
    title: "Luxury Nail Art",
    description: "Creative custom nail art for every occasion.",
  },

      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group overflow-hidden rounded-3xl bg-[#1A1A1A] shadow-xl"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              {item.description}
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              Book Nails
            </Link>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
{/* ================= BARBING GALLERY ================= */}

<section id="barbing" className="bg-[#0B0B0B] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Men's Grooming
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Premium Barbing Collection
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Experience precision haircuts, luxury beard grooming and modern
        hairstyles delivered by our professional barbers.
      </p>

    </div>

    {/* Cards */}

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          image:
            "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
          title: "Classic Haircut",
          description: "Timeless haircut with premium finishing.",
        },
        {
  image:
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=80",
  title: "Modern Skin Fade",
  description: "Precision skin fade crafted with modern barbering techniques.",
},
{
  image:
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
  title: "Premium Beard Styling",
  description: "Luxury beard trimming and styling tailored to your look.",
},
        {
          image:
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
          title: "Hair Wash & Spa",
          description: "Refreshing scalp treatment and hair care.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
          title: "Executive Grooming",
          description: "Complete luxury grooming experience.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
          title: "Modern Styling",
          description: "Trendy hairstyles for every gentleman.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group overflow-hidden rounded-3xl bg-[#1A1A1A] shadow-xl"
        >

          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              {item.description}
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              Book Now
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* ================= BRIDAL GALLERY ================= */}

<section id="bridal" className="bg-[#111111] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Bridal Collection
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Luxury Bridal Beauty
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Every bride deserves to feel extraordinary. From elegant hairstyles to
        flawless makeup, our bridal experts create timeless looks for your
        unforgettable day.
      </p>

    </div>

    {/* Gallery */}

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {
        
  [
  {
    image: "https://picsum.photos/600/800?random=31",
    title: "Bridal Makeup",
    description: "Elegant luxury makeup for your special day.",
  },
  {
    image: "https://picsum.photos/600/800?random=32",
    title: "Bridal Hairstyle",
    description: "Beautiful hairstyles designed for every bride.",
  },
  {
    image: "https://picsum.photos/600/800?random=33",
    title: "Wedding Glam",
    description: "Complete bridal beauty package with premium styling.",
  },
  {
    image: "https://picsum.photos/600/800?random=34",
    title: "Luxury Bridal Look",
    description: "Radiant beauty with a flawless luxury finish.",
  },
  {
    image: "https://picsum.photos/600/800?random=35",
    title: "Bridal Photoshoot",
    description: "Picture-perfect bridal styling for lasting memories.",
  },
  {
    image: "https://picsum.photos/600/800?random=36",
    title: "Wedding Preparation",
    description: "Professional beauty preparation before the ceremony.",
  },


      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group overflow-hidden rounded-3xl bg-[#1A1A1A] shadow-xl"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              {item.description}
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              Book Bridal Package
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* ================= BEFORE & AFTER ================= */}

<section id="before-after" className="bg-[#111111] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[6px] text-[#C9A227]"
      >
        Amazing Transformations
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-5xl font-bold text-white"
      >
        Before & After
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
        Every transformation tells a story. See how our expert stylists,
        barbers and beauty professionals create stunning results for our
        clients.
      </p>

    </div>

    {/* Gallery */}

    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">

      {[
         {
    before: "https://picsum.photos/id/64/600/700",
    after: "https://picsum.photos/id/65/600/700",
    title: "Hair Transformation",
  },
  {
    before: "https://picsum.photos/id/91/600/700",
    after: "https://picsum.photos/id/92/600/700",
    title: "Luxury Makeup",
  },
  {
    before: "https://picsum.photos/id/433/600/700",
    after: "https://picsum.photos/id/434/600/700",
    title: "Barber Fade",
  },

      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="rounded-3xl overflow-hidden bg-[#1A1A1A] shadow-xl"
        >

          <div className="grid grid-cols-2">

            <div className="relative">
              <img
                src={item.before}
                alt="Before"
                className="h-[350px] w-full object-cover"
              />

              <span className="absolute top-4 left-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                Before
              </span>
            </div>

            <div className="relative">
              <img
                src={item.after}
                alt="After"
                className="h-[350px] w-full object-cover"
              />

              <span className="absolute top-4 right-4 rounded-full bg-[#C9A227] px-4 py-2 text-sm font-semibold text-black">
                After
              </span>
            </div>

          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400">
              Experience a complete transformation with our premium salon
              services.
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block rounded-full bg-[#C9A227] px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              Get This Look
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>
    </>
  );
}

export default Gallery;