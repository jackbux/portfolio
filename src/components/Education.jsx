import { motion } from 'framer-motion'
import { scaleBlur, stagger } from '../utils/animations'

export default function Education() {
  const education = [
    {
      status: 'Completed',
      degree: 'Bachelor of Science in Agricultural Education & Extension',
      school: 'Meru University of Science and Technology',
      desc: 'Strong foundation in agronomy, soil science, plant pathology, and agricultural extension with hands-on experience in field research and data-driven systems.'
    },
    {
      status: 'Certified',
      degree: 'Computer Packages',
      school: 'Ahero Widows Center',
      desc: 'Developed advanced skills in web development, Microsoft Office suite, and digital tools, with hands-on experience in creating web applications and leveraging technology for efficient data and administrative workflows.'
    }
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-14 text-center"
      >
        Education
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >
        {education.map((item, i) => (
          <motion.div
            key={i}
            variants={scaleBlur}
            whileHover={{ scale: 1.05 }}
            className="glass glass-hover p-8 flex flex-col items-center text-center"
          >

            {/* STATUS */}
            <span className="text-xs px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-400 mb-5">
              {item.status}
            </span>

            {/* DEGREE */}
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              {item.degree}
            </h3>

            {/* SCHOOL */}
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              {item.school}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed max-w-sm">
              {item.desc}
            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}