import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl p-10 md:p-14 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent border border-white/10 backdrop-blur-xl"
      >

        {/* GLOW */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/20 blur-[120px]"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let’s Build Something Impactful
          </h2>

          <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
            I’m open to opportunities in Agri-Tech, agricultural research systems,
            and software development. Let’s collaborate to create data-driven solutions
            that make a real difference.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg hover:shadow-indigo-500/40"
            >
              Get In Touch <FaArrowRight />
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  )
}