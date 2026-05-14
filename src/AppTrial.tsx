import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import FeaturesSection from './components/FeaturesSection'
import AgendaSection from './components/AgendaSection'
import FinanceSection from './components/FinanceSection'
import AISection from './components/AISection'
import HydrationSection from './components/HydrationSection'
import DuelSection from './components/DuelSection'
import ForWhoSection from './components/ForWhoSection'
import TrialSection from './components/TrialSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function AppTrial() {
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
        <DuelSection />
        <ForWhoSection />
        <TrialSection />
        <PricingSection checkoutUrl="https://buy.stripe.com/00w28k6jA4Qb5J20CQdIA01" isTrial />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
