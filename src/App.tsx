import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import FeaturesSection from './components/FeaturesSection'
import AgendaSection from './components/AgendaSection'
import FinanceSection from './components/FinanceSection'
import AISection from './components/AISection'
import HydrationSection from './components/HydrationSection'
import ForWhoSection from './components/ForWhoSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <ParticleBackground />
      <main style={{ width: '100%', overflowX: 'hidden' }}>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <AgendaSection />
        <FinanceSection />
        <AISection />
        <HydrationSection />
        <ForWhoSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
