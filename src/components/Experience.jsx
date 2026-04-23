import { motion } from 'framer-motion'
import { scaleBlur, stagger } from '../utils/animations'
import { FaLeaf, FaFlask, FaCheckCircle } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      icon: <FaLeaf />,
      role: "Agricultural Extension Officer / Field Technician",
      place: "Meru University",
      year: "2024 – Present",
      current: true,
      points: [
        "Provided field-based advisory services to farmers on crop management and best practices",
        "Monitored compliance with agricultural standards and food safety protocols",
        "Collected and analyzed agricultural data to support research and decision-making",
        "Supported implementation of field experiments and multi-season trials"
      ]
    },
    {
      icon: <FaCheckCircle />,
      role: "Compliance Officer",
      place: "Timaflor Farm",
      year: "2023 – 2024",
      points: [
        "Ensured adherence to agricultural compliance standards and regulatory requirements",
        "Conducted field inspections and audits to maintain quality and safety standards",
        "Maintained compliance documentation and reporting systems",
        "Trained staff on compliance procedures and best agricultural practices"
      ]
    },
    {
      icon: <FaFlask />,
      role: "Research Assistant & Technical Support",
      place: "Agitech Mwea",
      year: "2022 – 2023",
      points: [
        "Supported experimental design and field data collection",
        "Assisted in laboratory and field-based agricultural research",
        "Maintained research records and ensured data accuracy",
        "Analyzed field data to support research outcomes"
      ]
    }
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Experience & Research
      </motion.h2>

      {/* TIMELINE */}
      <div className="relative">

        {/* LINE */}
        <div className="absolute left-6 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-500/40 via-white/10 to-transparent"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={scaleBlur}
              className="relative pl-20"
            >

              {/* ICON NODE */}
              <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 text-indigo-400 shadow-lg backdrop-blur-md">
                {exp.icon}
              </div>

              {/* CARD */}
              <div className="glass glass-hover p-6 md:p-7 hover:scale-[1.02] transition">

                {/* TOP ROW */}
                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {exp.place}
                    </p>
                  </div>

                  {/* YEAR + CURRENT BADGE */}
                  <div className="text-right">
                    <p className="text-sm text-indigo-400 font-medium">
                      {exp.year}
                    </p>

                    {exp.current && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 mt-1 inline-block">
                        Current
                      </span>
                    )}
                  </div>

                </div>

                {/* DIVIDER */}
                <div className="h-[1px] w-full bg-white/10 my-4"></div>

                {/* POINTS */}
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DATA SKILLS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
          Data & Analytical Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {[
            "Agricultural Data Analysis",
            "Field Data Collection Systems",
            "Research Data Interpretation",
            "Excel",
            "SPSS",
            "SAS",
            "STATA"
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/10 hover:bg-indigo-500/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  )
}