"use client"

import { motion, useInView } from "framer-motion"
import { Send, Mail, Phone, DollarSign, User } from "lucide-react"
import { useRef, useState } from "react"

export default function Message() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const inputVariants = {
    focused: { scale: 1.02, borderColor: "#8b5cf6" },
    unfocused: { scale: 1, borderColor: "#64748b" },
  }

  return (
    <div className="container mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-6"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <motion.form
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
          whileHover={{ boxShadow: "0 25px 50px rgba(139, 92, 246, 0.1)" }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"
                animate={{
                  scale: focusedField === "name" ? 1.2 : 1,
                  color: focusedField === "name" ? "#8b5cf6" : "#a855f7",
                }}
              >
                <User className="w-5 h-5" />
              </motion.div>
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                variants={inputVariants}
                animate={focusedField === "name" ? "focused" : "unfocused"}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"
                animate={{
                  scale: focusedField === "email" ? 1.2 : 1,
                  color: focusedField === "email" ? "#8b5cf6" : "#a855f7",
                }}
              >
                <Mail className="w-5 h-5" />
              </motion.div>
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                variants={inputVariants}
                animate={focusedField === "email" ? "focused" : "unfocused"}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"
                animate={{
                  scale: focusedField === "phone" ? 1.2 : 1,
                  color: focusedField === "phone" ? "#8b5cf6" : "#a855f7",
                }}
              >
                <Phone className="w-5 h-5" />
              </motion.div>
              <motion.input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                variants={inputVariants}
                animate={focusedField === "phone" ? "focused" : "unfocused"}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"
                animate={{
                  scale: focusedField === "budget" ? 1.2 : 1,
                  color: focusedField === "budget" ? "#8b5cf6" : "#a855f7",
                }}
              >
                <DollarSign className="w-5 h-5" />
              </motion.div>
              <motion.input
                type="text"
                placeholder="Budget Range"
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                variants={inputVariants}
                animate={focusedField === "budget" ? "focused" : "unfocused"}
                onFocus={() => setFocusedField("budget")}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>
          </div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <motion.textarea
              placeholder="Tell me about your project... What are your goals, timeline, and any specific requirements?"
              rows={6}
              className="w-full p-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none resize-none"
              variants={inputVariants}
              animate={focusedField === "message" ? "focused" : "unfocused"}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              background: "linear-gradient(45deg, #7c3aed, #0d9488)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
            Send Message
          </motion.button>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ⚡
              </motion.div>
              I'll get back to you within 24 hours
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  )
}
