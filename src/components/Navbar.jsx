import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()

  /* ================= THEME ================= */
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') setDark(false)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  /* ================= SCROLL ================= */
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setScrolled(scrollY > 40)

          const sections = ['home', 'about', 'education', 'experience', 'projects', 'contact']

          sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) {
              const top = el.offsetTop - 120
              const height = el.offsetHeight

              if (scrollY >= top && scrollY < top + height) {
                setActive(id)
              }
            }
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  /* ================= MAGNETIC EFFECT ================= */
  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `translate(0px, 0px)`
  }

  return (
    <>
      {/* 🔥 SCROLL BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-500 origin-left z-[60]"
      />

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 px-6 py-4 transition ${
          scrolled
            ? 'bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <h1 className="text-indigo-400 font-bold text-xl">JO</h1>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-6 relative">
            {navLinks.map((link) => {
              const ref = useRef(null)

              return (
                <motion.a
                  key={link.id}
                  ref={ref}
                  href={`#${link.id}`}
                  onMouseMove={(e) => handleMouseMove(e, ref)}
                  onMouseLeave={() => handleMouseLeave(ref)}
                  className={`relative px-4 py-2 text-sm font-medium ${
                    active === link.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              )
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-xl text-white"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* 🔥 OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* 🔥 DRAWER */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-black/80 backdrop-blur-xl z-50 p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}

              /* 🔥 SWIPE TO CLOSE */
              drag="x"
              dragConstraints={{ left: 0, right: 300 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) setOpen(false)
              }}
            >

              {/* TOP BAR */}
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-indigo-400 font-bold text-xl">JO</h1>

                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-xl"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6">

                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-3 rounded-full text-lg ${
                      active === link.id
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}
                  >

                    {/* GLASS ACTIVE */}
                    {active === link.id && (
                      <motion.span
                        layoutId="pill-mobile"
                        className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                      />
                    )}

                    <span className="relative z-10">
                      {link.label}
                    </span>

                  </motion.a>
                ))}

              </div>

              {/* THEME TOGGLE */}
              <div
                onClick={() => {
                        setDark(prev => !prev)
                        triggerFlash && triggerFlash()
                      }}
                className="mt-auto w-16 h-8 bg-white/10 rounded-full flex items-center px-1 cursor-pointer"
              >
                <motion.div
                  layout
                  className={`w-6 h-6 rounded-full ${
                    dark
                      ? 'bg-indigo-400'
                      : 'bg-yellow-400 ml-auto'
                  }`}
                />
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}