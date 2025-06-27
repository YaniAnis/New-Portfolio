"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Mail, Award } from "lucide-react"

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Journey", icon: Award, href: "#journey" },
  { name: "Contact", icon: Mail, href: "#contact" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name.toLowerCase())
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          onClick={toggleSidebar}
          className="fixed top-6 left-6 z-50 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <motion.div
            initial={isMobile ? { x: -300 } : { x: 0 }}
            animate={{ x: 0 }}
            exit={isMobile ? { x: -300 } : { x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed left-0 top-0 h-full w-80 bg-white/5 backdrop-blur-xl border-r border-white/10 z-40 ${
              isMobile ? "shadow-2xl" : ""
            }`}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative h-full flex flex-col p-8">
              {/* Logo/Brand */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">Portfolio</h1>
                    <p className="text-sm text-gray-400">Creative Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item.href, item.name)}
                        className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          activeSection === item.name.toLowerCase()
                            ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-white/20"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {/* Active indicator */}
                        {activeSection === item.name.toLowerCase() && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-r-full"
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                          />
                        )}

                        <div
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            activeSection === item.name.toLowerCase()
                              ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                              : "bg-white/5 group-hover:bg-white/10"
                          }`}
                        >
                          <item.icon size={18} />
                        </div>
                        <span className="font-medium">{item.name}</span>

                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.02 }}
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Let's connect</p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                    Get In Touch
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar spacer */}
      {!isMobile && <div className="w-80 flex-shrink-0" />}
    </>
  )
}
