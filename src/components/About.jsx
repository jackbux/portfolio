import { motion } from 'framer-motion'
import { scaleBlur, stagger } from '../utils/animations'

export default function About() {
  const agriSkills = [
    "Soil Science",
    "Pest & Disease Management",
    "Sustainable Agriculture",
    "Field Experimentation (RCBD, Split-Plot)",
    "Agricultural Extension",
    "Crop Productivity Optimization",
    "Research & Field Trials"
  ]

  const techSkills = [
    "Laravel",
    "MySQL",
    "Python (Basic)",
    "Git & GitHub",
    "Agri-System Development"
  ]

  const expertise = [
    "Agricultural Extension & Farmer Advisory",
    "Compliance Monitoring (Food Safety & Field Standards)",
    "Agricultural Data Collection & Analysis",
    "Research & Field Trials Management"
  ]

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-14"
      >
        About Me
      </motion.h2>

      {/* TOP GRID */}
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT */}
        <motion.div
          variants={scaleBlur}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* SUMMARY */}
          <p className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl font-light">
            Agricultural Extension Officer and Agri-Tech Developer with expertise in
            compliance monitoring, agricultural data analysis, and field-based research systems.
            I design data-driven solutions that improve crop productivity, ensure regulatory
            compliance, and support informed decision-making in modern agriculture.
          </p>

          {/* EXPERTISE */}
          <div className="mt-10 space-y-4">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm md:text-base text-gray-300"
              >
                <span className="text-indigo-400 mt-1 text-lg">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={scaleBlur}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="glass p-7"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-indigo-400">
            Professional Focus
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            I integrate agricultural expertise with software development to build systems
            for data collection, reporting, and agricultural profit optimization.
            My work connects research, field operations, and technology into scalable,
            real-world solutions.
          </p>
        </motion.div>

      </div>

      {/* SKILLS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mt-20"
      >

        {/* AGRI */}
        <motion.div
          variants={scaleBlur}
          className="glass glass-hover p-7"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-5 text-indigo-400">
            Agriculture & Research
          </h3>

          <div className="flex flex-wrap gap-3">
            {agriSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-white/10 px-4 py-2 rounded-full text-sm md:text-base hover:bg-indigo-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* TECH */}
        <motion.div
          variants={scaleBlur}
          className="glass glass-hover p-7"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-5 text-indigo-400">
            Technical & Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-white/10 px-4 py-2 rounded-full text-sm md:text-base hover:bg-indigo-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>

    </section>
  )
}