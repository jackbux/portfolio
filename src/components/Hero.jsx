import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { scaleBlur } from '../utils/animations'

export default function Hero() {
  const { scrollY } = useScroll()

  // PARALLAX
  const ySlow = useTransform(scrollY, [0, 500], [0, -80])
  const yFast = useTransform(scrollY, [0, 500], [0, 120])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-24 overflow-hidden"
    >

      {/* 🌌 BASE BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-slate-900 via-black to-black" />

      {/* 🔥 RADIAL FOCUS GLOW */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

      {/* 🌊 PARALLAX BLOBS */}
      <div className="absolute inset-0 -z-10">

        <motion.div
          style={{ y: ySlow }}
          className="absolute w-[420px] h-[420px] bg-indigo-600/40 rounded-full blur-[140px] top-10 left-10"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute w-[380px] h-[380px] bg-purple-500/30 rounded-full blur-[140px] bottom-10 right-10"
        />

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[120px] top-1/2 left-1/3"
        />
      </div>

      {/* ✨ CONTENT */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-2xl"
      >

        {/* BADGE */}
        <motion.div
          variants={scaleBlur}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-sm text-gray-300"
        >
          👋 Available for opportunities
        </motion.div>

        {/* NAME */}
        <motion.h1
          variants={scaleBlur}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Jack Ouma{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Odoyo
          </span>
        </motion.h1>

        {/* TITLE */}
        <motion.p
          variants={scaleBlur}
          className="text-indigo-400 text-lg mt-4 font-medium"
        >
          Agricultural Scientist & Agri-Tech Developer
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          variants={scaleBlur}
          className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg"
        >
         Agricultural Extension Officer and Agri-Tech Developer with hands-on experience in compliance monitoring,
          agricultural data analysis, and field-based research systems.
          I design and implement data-driven solutions that
          improve crop productivity, ensure regulatory compliance,
            and support decision-making in modern agricultural systems.
        </motion.p>

        {/* STATS */}
        <motion.div
          variants={scaleBlur}
          className="flex gap-10 mt-10"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "100%", label: "Commitment" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="transition"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-400">
                {item.value}
              </h3>
              <p className="text-sm text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={scaleBlur}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >

          {/* PRIMARY */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.03]"
          >
            Get In Touch <FaArrowRight />
          </a>

          {/* SECONDARY */}
          <a
            href="/cv.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/10 transition"
          >
            <FaDownload /> Download CV
          </a>

        </motion.div>

      </motion.div>
    </section>
  )
}