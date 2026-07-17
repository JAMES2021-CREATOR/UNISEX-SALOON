import BeautyTips from "../Component/BeautyTips";
import BlogCategories from "../Component/BlogCategories";
import BlogGrid from "../Component/BlogGrid";
import BlogHero from "../Component/BlogHero";
import FeaturedPost from "../Component/FeaturedPost";
import Newsletter2 from "../Component/Newsletter2";

function Blog() {
  return (
    <>
      <BlogHero />
      <FeaturedPost />
      <BlogGrid />
      <BlogCategories />
      <BeautyTips />
      <Newsletter2 />
    
    </>
  );
}

export default Blog;