import AboutSection from './(components)/about'
import BlogsSection from './(components)/blogs'
import HeroSection from './(components)/hero'
import LatestSection from './(components)/latest'
import SpecialOfferSection from './(components)/special-offer'
import TestimonialsSection from './(components)/testimonials'

function HomePage() {
  return (
    <>
      <HeroSection />
      <SpecialOfferSection />
      <AboutSection />
      <LatestSection />
      <TestimonialsSection />
      <BlogsSection />
    </>
  )
}

export default HomePage
