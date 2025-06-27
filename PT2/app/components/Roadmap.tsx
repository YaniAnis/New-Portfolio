"use client"
import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const roadmapData = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started my journey in web development",
    details: [
      "Learned HTML, CSS, and JavaScript fundamentals",
      "Built my first responsive websites",
      "Discovered the power of modern web technologies",
      "Completed 5+ personal projects",
    ],
    icon: "🚀",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2021",
    title: "Framework Mastery",
    description: "Dove deep into React and modern frameworks",
    details: [
      "Mastered React.js and component-based architecture",
      "Learned state management with Redux and Context API",
      "Built 10+ React applications",
      "Started contributing to open-source projects",
      "Gained experience with TypeScript",
    ],
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    title: "Full-Stack Development",
    description: "Expanded to backend and database technologies",
    details: [
      "Learned Node.js and Express.js",
      "Worked with MongoDB and PostgreSQL",
      "Built RESTful APIs and GraphQL endpoints",
      "Deployed applications on AWS and Vercel",
      "Completed 3 full-stack projects",
    ],
    icon: "🔧",
    color: "from-green-500 to-teal-500",
  },
  {
    year: "2023",
    title: "Advanced Technologies",
    description: "Explored cutting-edge web technologies",
    details: [
      "Mastered Next.js and server-side rendering",
      "Learned Three.js for 3D web experiences",
      "Implemented advanced animations with Framer Motion",
      "Built progressive web applications",
      "Started mentoring junior developers",
    ],
    icon: "🎨",
    color: "from-orange-500 to-red-500",
  },
  {
    year: "2024",
    title: "Professional Growth",
    description: "Leading projects and expanding expertise",
    details: [
      "Leading development teams on complex projects",
      "Architecting scalable web applications",
      "Implementing AI/ML features in web apps",
      "Speaking at tech conferences and meetups",
      "Building innovative solutions for clients",
    ],
    icon: "👑",
    color: "from-purple-500 to-blue-500",
  },
]

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of growth, learning, and achievements in my development career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 rounded-full opacity-30"></div>

          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          ></motion.div>

          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`text-3xl mr-4 p-3 rounded-full bg-gradient-to-r ${item.color}`}>{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: activeIndex === index ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            className="text-gray-300 flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 z-10">
                <motion.div
                  className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} border-4 border-slate-900`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Year Badge */}
              <div className={`w-5/12 flex ${index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"}`}>
                <motion.div
                  className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.year}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-xl text-gray-300 mb-6">Ready to be part of the next chapter?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </div>
  )
}
