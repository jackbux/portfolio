import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'

export default function Footer() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0
  })

  /* 🔥 FETCH GITHUB STATS */
  useEffect(() => {
    fetch('https://api.github.com/users/jackbux')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos,
          followers: data.followers
        })
      })
      .catch(() => {})
  }, [])

  return (
    <footer className="relative mt-32">

      {/* 🌊 WAVE SEPARATOR */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24"
        >
          <motion.path
            fill="rgba(99,102,241,0.15)"
            animate={{
              d: [
                "M0,160L60,170C120,180,240,200,360,192C480,180,600,140,720,138C840,140,960,180,1080,192C1200,200,1320,180,1380,170L1440,160L1440,0L0,0Z",
                "M0,140L60,150C120,160,240,200,360,210C480,220,600,180,720,170C840,160,960,180,1080,190C1200,200,1320,170,1380,160L1440,140L1440,0L0,0Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* 🔥 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pt-32 pb-10 px-6 border-t border-white/10 backdrop-blur-xl bg-black/40"
      >

        <div className="max-w-6xl mx-auto text-center">

          {/* CTA */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">
              Let’s build something impactful
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Open to agricultural research, data-driven projects, and system development opportunities.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium"
            >
              Contact Me <FaArrowRight />
            </a>
          </div>

          {/* 🔥 GITHUB STATS */}
          <div className="flex justify-center gap-10 mb-8">

            <div className="text-center">
              <h4 className="text-2xl font-bold text-indigo-400">
                {stats.repos}
              </h4>
              <p className="text-xs text-gray-400">Repositories</p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-bold text-indigo-400">
                {stats.followers}
              </h4>
              <p className="text-xs text-gray-400">Followers</p>
            </div>

          </div>

          {/* SOCIALS */}
          <div className="flex justify-center gap-6 mb-6">

            <motion.a
              href="https://github.com/jackbux"
              target="_blank"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xl"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jack-ouma-9727ab1a2/"
              target="_blank"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xl"
            >
              <FaLinkedin />
            </motion.a>

          </div>

          {/* USERNAME */}
          <p className="text-sm text-gray-400 mb-2">
            GitHub: <span className="text-indigo-400">jackbux</span>
          </p>

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Jack Ouma Odoyo. All rights reserved.
          </p>

        </div>
      </motion.div>
    </footer>
  )
}