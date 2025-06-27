"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Users } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in React, Next.js, Node.js, and modern web technologies",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love",
    color: "from-pink-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Building fast, scalable applications with optimal user experience",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Leading cross-functional teams to deliver exceptional results",
    color: "from-blue-500 to-purple-500",
  },
]

export default function About() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-6">
          About Me
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a
          difference. I specialize in modern web technologies and have a keen eye for design, always striving to bridge
          the gap between functionality and aesthetics.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
