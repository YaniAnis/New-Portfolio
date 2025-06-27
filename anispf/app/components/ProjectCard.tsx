"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

type ProjectCardProps = {
  photopath: string
  title: string
  description: string
}

export default function ProjectCard({ photopath, title, description }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group max-w-sm"
    >
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <motion.img
            src={photopath}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">React</span>
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Project
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
