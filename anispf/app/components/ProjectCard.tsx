"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, Star, Eye } from "lucide-react"
import { useState } from "react"

type ProjectCardProps = {
  photopath: string
  title: string
  description: string
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ photopath, title, description, liveUrl, githubUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group max-w-sm perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl transform-gpu">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <motion.img
            src={photopath}
            alt={title}
            className="w-full h-48 object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating stats */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-white">4.9</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
              <Eye className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-white">1.2k</span>
            </div>
          </motion.div>

          {/* Hover overlay with buttons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Remove the ExternalLink button */}
            {/* 
            <motion.button ...>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => {
                if (githubUrl) window.open(githubUrl, "_blank");
              }}
              disabled={!githubUrl}
              style={{ opacity: githubUrl ? 1 : 0.5, cursor: githubUrl ? "pointer" : "not-allowed" }}
              aria-label="View GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>

          {/* Tech stack tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ delay: 0.2 }}
          >
            {["React", "Next.js", "TypeScript"].map((tech, index) => (
              <motion.span
                key={tech}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-purple-500/20 text-purple-300"
                    : index === 1
                      ? "bg-teal-500/20 text-teal-300"
                      : "bg-blue-500/20 text-blue-300"
                }`}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            animate={{ y: isHovered ? -2 : 0 }}
            onClick={() => {
              if (githubUrl) window.open(githubUrl, "_blank");
            }}
            disabled={!githubUrl}
            style={{ opacity: githubUrl ? 1 : 0.5, cursor: githubUrl ? "pointer" : "not-allowed" }}
          >
            View Project
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

