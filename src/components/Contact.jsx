import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { fadeUp, stagger } from '../utils/animations'

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'jkouma@proton.me'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '0727 837 330'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Address',
      value: 'P.O Box 8, 40106 Kisumu'
    }
  ]

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Let’s Work Together
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >

        {/* LEFT SIDE */}
        <motion.div variants={fadeUp} className="space-y-6">

          <p className="text-gray-300 leading-relaxed max-w-md">
            I’m open to research collaborations, agricultural projects,
            and system development opportunities. Feel free to reach out.
          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-4">
            {contacts.map((item, i) => (
              <div
                key={i}
                className="glass glass-hover flex items-center gap-4 p-4"
              >
                <div className="text-indigo-400 text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          variants={fadeUp}
          onSubmit={(e) => {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value
            const message = e.target.message.value

            window.location.href =
              `mailto:jkouma@proton.me?subject=Portfolio Contact from ${name}&body=${message} (Email: ${email})`
          }}
          className="glass p-6 space-y-4"
        >

          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-indigo-400 transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-indigo-400 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-indigo-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-semibold shadow-lg hover:shadow-indigo-500/30"
          >
            Send Message
          </button>

        </motion.form>

      </motion.div>
    </section>
  )
}