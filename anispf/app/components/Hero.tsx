"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"

function SocialIcon({
  href,
  label,
  color,
  icon,
}: {
  href: string
  label: string
  color: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group bg-white hover:${color} shadow-lg`}
      style={{ color: "#4d4d4d" }}
    >
      <span className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${color}`}></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{icon}</span>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        {label}
      </span>
    </a>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900"></div>
        
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Welcome to my digital space</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Creative
          </span>
          <br />
          <span className="text-white">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge technology. Let's build
          something extraordinary together.
        </motion.p>

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <SocialIcon
            href="https://www.instagram.com/"
            label="Instagram"
            color="bg-[#E1306C]"
            icon={
              // Instagram SVG
              <svg viewBox="0 0 448 512" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="512" rx="100" fill="#E1306C" />
                <path d="M224 144c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm88-80c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm76 16c-1.7-35.3-9.9-66.7-36.2-92.9C370.7 73.9 339.3 65.7 304 64c-35.3-1.7-141.3-1.7-176.6 0C73.9 65.7 42.5 73.9 16.2 100.1 9.9 133.3 1.7 164.7 0 200c-1.7 35.3-1.7 141.3 0 176.6 1.7 35.3 9.9 66.7 36.2 92.9C77.3 438.1 108.7 446.3 144 448c35.3 1.7 141.3 1.7 176.6 0 35.3-1.7 66.7-9.9 92.9-36.2 26.3-26.2 34.5-57.6 36.2-92.9 1.7-35.3 1.7-141.3 0-176.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z" fill="#fff"/>
              </svg>
            }
          />
          <SocialIcon
            href="https://www.linkedin.com/"
            label="LinkedIn"
            color="bg-[#0077B5]"
            icon={
              // LinkedIn SVG
              <svg viewBox="0 0 448 512" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="512" rx="100" fill="#0077B5" />
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.8 13.4-2.8 21.3V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z" fill="#fff"/>
              </svg>
            }
          />
          <SocialIcon
            href="https://discord.com/"
            label="Discord"
            color="bg-[#5865F2]"
            icon={
              // Discord SVG
              <svg viewBox="0 0 448 512" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="512" rx="100" fill="#5865F2" />
                <path d="M297.2 243.2c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24zm-98.4 0c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24zm242.2-99.7C420.2 85.4 375.4 40.6 320.7 24.5c-6.6-1.8-13.5 2.1-15.3 8.7-1.8 6.6 2.1 13.5 8.7 15.3 46.2 12.7 85.1 51.6 97.8 97.8 1.8 6.6 8.7 10.5 15.3 8.7 6.6-1.8 10.5-8.7 8.7-15.3zM127.3 33.2c-6.6-1.8-13.5 2.1-15.3 8.7-1.8 6.6 2.1 13.5 8.7 15.3 46.2 12.7 85.1 51.6 97.8 97.8 1.8 6.6 8.7 10.5 15.3 8.7 6.6-1.8 10.5-8.7 8.7-15.3C320.7 40.6 275.9-4.2 221.2-20.3c-6.6-1.8-13.5 2.1-15.3 8.7-1.8 6.6 2.1 13.5 8.7 15.3z" fill="#fff"/>
              </svg>
            }
          />
          <SocialIcon
            href="https://telegram.org/"
            label="Telegram"
            color="bg-[#229ED9]"
            icon={
              // Telegram SVG
              <svg viewBox="0 0 448 512" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="512" rx="100" fill="#229ED9" />
                <path d="M446.7 68.6c-5.7-7.1-15.2-9.6-23.7-6.2L25.7 210.7c-8.7 3.5-13.7 13.1-11.2 22.1 2.5 9 11.2 14.7 20.2 13.2l104.2-17.2 39.7 119.2c2.7 8.1 10.2 13.5 18.7 13.5 8.5 0 16-5.4 18.7-13.5l39.7-119.2 104.2 17.2c9 1.5 17.7-4.2 20.2-13.2 2.5-9-2.5-18.6-11.2-22.1L470.4 62.4c-8.5-3.4-18-0.9-23.7 6.2z" fill="#fff"/>
              </svg>
            }
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-purple-400"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
