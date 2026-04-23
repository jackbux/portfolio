import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import CTA from './components/CTA'
import CursorGlow from './components/CursorGlow'

export default function App() {
  const [flash, setFlash] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >

      {/* 🔥 GLOBAL CURSOR */}
      <CursorGlow />

      {/* 🔥 THEME FLASH EFFECT */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="fixed inset-0 bg-white z-[999]"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      {/* 🔥 MAIN APP */}
      <div>
        <Navbar triggerFlash={() => {
          setFlash(true)
          setTimeout(() => setFlash(false), 300)
        }} />

        <Hero />
        <About />
        <CTA />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </motion.div>
  )
}