"use client"

import { User, Folder, Menu, Briefcase, Mail, Home } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const SIDEBAR_ITEMS = [
	{ name: "Home", icon: Home, color: "#8B5CF6", href: "#home" },
	{ name: "About", icon: User, color: "#EC4899", href: "#about" },
	{
		name: "Experience",
		icon: Briefcase,
		color: "#10B981",
		href: "#experience",
	},
	{ name: "Projects", icon: Folder, color: "#14B8A6", href: "#projects" },
	{ name: "Contact", icon: Mail, color: "#F59E0B", href: "#contact" },
]

export default function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	return (
		<motion.div
			className="fixed top-0 left-0 h-screen z-50 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-r border-slate-700/50"
			animate={{ width: isSidebarOpen ? 256 : 80 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="h-full flex flex-col sticky top-0 overflow-hidden">
				{/* Header */}
				<div className="p-4 border-b border-slate-700/50">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						className="p-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 text-purple-300 hover:from-purple-500/30 hover:to-teal-500/30 transition-all duration-300"
					>
						<Menu size={24} />
					</motion.button>
				</div>

				{/* Navigation */}
				<nav className="flex-1 p-4 space-y-2">
					{SIDEBAR_ITEMS.map((item, index) => (
						<motion.a
							key={item.href}
							href={item.href}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							className="block"
						>
							<motion.div
								whileHover={{ x: 5 }}
								className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-teal-500/10 hover:border-purple-500/30 border border-transparent transition-all duration-300 group"
							>
								<div
									className="p-2 rounded-lg"
									style={{
										background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
										border: `1px solid ${item.color}30`,
									}}
								>
									<item.icon
										size={20}
										style={{ color: item.color }}
										className="group-hover:scale-110 transition-transform duration-200"
									/>
								</div>
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2 }}
											className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200"
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</motion.a>
					))}
				</nav>

				{/* Footer */}
				<div className="p-4 border-t border-slate-700/50">
					<AnimatePresence>
						{isSidebarOpen && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="text-center"
							>
								<p className="text-sm text-gray-400">© 2024 Portfolio</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	)
}
