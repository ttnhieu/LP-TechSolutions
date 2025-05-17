import AboutSection from './(components)/about'
import HeroSection from './(components)/hero'
import PortfolioSection from './(components)/portfolio'
import OptimizationsSection from './(components)/optimizations'
import ServicesSection from './(components)/services'
import TestimonialsSection from './(components)/testimonials'
import PricingSection from './(components)/pricing'
import WorkflowSection from './(components)/workflow'
import ContactSection from './(components)/contact'
import FaqsSection from './(components)/faqs'
import TechnologiesSection from './(components)/technologies'

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TechnologiesSection />
      <OptimizationsSection />
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
