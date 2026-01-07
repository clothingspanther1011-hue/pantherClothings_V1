import Hero from "@/components/Hero";
import BannerSection from "@/components/BannerSections";
import { getHeroSlides, getBanners } from "@/lib/sanity";

// Remove export const revalidate = 0; if you have it

export default async function Home() {
  const [slides, banners] = await Promise.all([
    getHeroSlides(),
    getBanners(),
  ]);

  return (
    <main>
      <Hero 
        slides={slides.length > 0 ? slides : undefined} 
        whatsappNumber="7084721011" 
      />
      
      <BannerSection banners={banners} />
      
      {/* Rest of your homepage content */}
    </main>
  );
}
