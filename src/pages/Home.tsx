import BookingCTA from "../Component/BookingCTA";
import FeaturedStylists from "../Component/FeaturedStylists";
import GalleryPreview from "../Component/GalleryPreview";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Newsletter from "../Component/Newsletter";
import ServicesPreview from "../Component/ServicesPreview";
import Testimonials from "../Component/Testimonials";
import WhyChooseUs from "../Component/WhyChooseUs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesPreview/>
      <WhyChooseUs />
      <FeaturedStylists />
      <Testimonials />
      <GalleryPreview />
      <BookingCTA />
      <Newsletter />
    </>
  );
}

export default Home;