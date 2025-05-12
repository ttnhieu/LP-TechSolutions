import AboutSection from './(components)/about'
import HeroSection from './(components)/hero'
import PortfolioSection from './(components)/portfolio'
import OptimazationsSection from './(components)/optimazations'
import ServicesSection from './(components)/services'
import TestimonialsSection from './(components)/testimonials'
import PricingSection from './(components)/pricing'
import WorkflowSection from './(components)/workflow'
import ContactSection from './(components)/contact'
import FaqsSection from './(components)/faqs'

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OptimazationsSection />
      <PortfolioSection />
      <WorkflowSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
