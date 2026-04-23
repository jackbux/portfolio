import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSchool, FaStore, FaMobileAlt, FaGlobe } from 'react-icons/fa'
import { scaleBlur, stagger, float } from '../utils/animations'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  const projects = [
    {
      title: 'School Management & CBC Reporting System',
      desc: 'Digital platform for automating student management, grading, and CBC report generation.',
      icon: <FaSchool />,
      stack: ['Laravel', 'Vue', 'MySQL'],
      status: 'In Progress',
      details: [
        'Automates CBC grading and report generation for schools',
        'Reduces manual workload for teachers and administrators',
        'Supports multi-term academic tracking and performance analysis',
        'Designed scalable backend for student and results management'
      ]
    },
    {
      title: 'Jopur Store Ltd — Business Management System',
      desc: 'System for managing inventory, sales, and customer records for a retail Agribusiness.',
      icon: <FaStore />,
      stack: ['Laravel', 'Blade', 'MySQL'],
      status: 'Completed',
      details: [
        'Streamlined inventory tracking and stock control',
        'Implemented sales recording and reporting system',
        'Improved business data organization and accessibility',
        'Built backend logic for transactions and reporting'
      ]
    },
    {
      title: 'Jopur App — Digital AI Diagnostic Tool',
      desc: 'Web/mobile application supporting farmers and extension officers in disease diagnosis.',
      icon: <FaMobileAlt />,
      stack: ['Vue', 'API', 'UI Design'],
      status: 'Completed',
      details: [
        'Designed responsive UI for mobile and web users',
        'Integrated API-based data communication',
        'Improved accessibility of business operations',
        'Focused on usability and user experience design'
      ]
    },
    {
      title: 'consortium Website — Corporate Platform',
      desc: 'Modern corporate website where farmers can consult extension officers.',
      icon: <FaGlobe />,
      stack: ['HTML', 'CSS', 'JavaScript'],
      status: 'Completed',
      details: [
        'Built responsive UI for multiple screen sizes',
        'Improved brand presentation and online presence',
        'Focused on performance and clean layout structure',
        'Implemented modern frontend design practices'
      ]
    }
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={scaleBlur}
            whileHover={{
              scale: 1.06,
              rotateX: 5,
              rotateY: -5
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass glass-hover p-8 cursor-pointer flex flex-col items-center text-center min-h-[300px]"
            onClick={() => setSelected(p)}
          >

            {/* ICON */}
            <motion.div
              variants={float}
              animate="animate"
              className="text-5xl text-indigo-400 mb-4"
            >
              {p.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold leading-snug">
              {p.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-300 mt-3 max-w-xs">
              {p.desc}
            </p>

            {/* STACK */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {p.stack.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* STATUS */}
            <span
              className={`mt-4 text-xs font-medium ${
                p.status === 'Completed'
                  ? 'text-green-400'
                  : 'text-yellow-400'
              }`}
            >
              {p.status}
            </span>

          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass p-6 max-w-md w-full text-left"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="text-3xl text-indigo-400 mb-3">
                {selected.icon}
              </div>

              <h3 className="text-xl font-bold">
                {selected.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {selected.desc}
              </p>

              {/* DETAILS */}
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {selected.details.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {selected.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-500/20 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                className="mt-6 text-sm text-gray-400 hover:text-white transition"
                onClick={() => setSelected(null)}
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}