import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ProblemSection from './sections/ProblemSection'
import SolusiSection from './sections/SolusiSection'
import DemoSection from './sections/DemoSection'
import FeaturesSection from './sections/FeaturesSection'
import VisiSection from './sections/VisiSection'
import BenefitSection from './sections/BenefitSection'
import FOMOSection from './sections/FOMOSection'
import ComparisonSection from './sections/ComparisonSection'
import FutureDevSection from './sections/FutureDevSection'
import LimitationsSection from './sections/LimitationsSection'
import PricingSection from './sections/PricingSection'
import RiskScenarioSection from './sections/RiskScenarioSection'
import CaraKerjaSection from './sections/CaraKerjaSection'
import FAQSection from './sections/FAQSection'
import FinalCTASection from './sections/FinalCTASection'

export default function App() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolusiSection />
        <DemoSection />
        <FeaturesSection />
        <VisiSection />
        <BenefitSection />
        <FOMOSection />
        <ComparisonSection />
        <FutureDevSection />
        <LimitationsSection />
        <PricingSection />
        <RiskScenarioSection />
        <CaraKerjaSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  )
}
