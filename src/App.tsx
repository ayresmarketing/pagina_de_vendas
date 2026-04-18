import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Zap, Brain, BarChart3, Target, Trophy, Shield, Droplets,
  ChevronDown, Star, CheckCircle2, ArrowRight, Sparkles,
  Clock, TrendingUp, Users, Lock, Menu, X, Play,
  Calendar, Coins, Bot, Activity
} from 'lucide-react'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
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
    <div className="relative min-h-screen" style={{ background: '#0a0a0a' }}>
      <ParticleBackground />
      <Navbar />
      <main>
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
