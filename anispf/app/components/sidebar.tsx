"use client"

import { User, Folder, Menu, Briefcase, Mail, Home } from "lucide-react"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

const SIDEBAR_ITEMS = [
	{ name: "Home", icon: Home, color: "#8B5CF6", href: "#hero" },
		{
		name: "Experience",
		icon: Briefcase,
		color: "#10B981",
		href: "#experience",
	},
	{ name: "About", icon: User, color: "#EC4899", href: "#about" },

	{ name: "Projects", icon: Folder, color: "#14B8A6", href: "#projects" },
	{ name: "Contact", icon: Mail, color: "#F59E0B", href: "#contact" },
]

function useIsDesktop() {
	const [isDesktop, setIsDesktop] = useState(false)
	useEffect(() => {
		const check = () => setIsDesktop(window.innerWidth >= 768)
		check()
		window.addEventListener("resize", check)
		return () => window.removeEventListener("resize", check)
	}, [])
	return isDesktop
}

export default function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const isDesktop = useIsDesktop()

	// Smooth scroll handler
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const el = document.querySelector(href);
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
			}
			if (!isDesktop) setIsSidebarOpen(false);
		}
	};

	return (
		<>
			{/* Mobile sidebar overlay */}
			{!isDesktop && isSidebarOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}
			{/* Sidebar: always open on desktop, slide-in on mobile */}
			<motion.div
				className="fixed top-0 left-0 h-screen z-50 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-r border-slate-700/50"
				animate={{
					width: isDesktop ? 256 : (isSidebarOpen ? 256 : 0),
					x: isDesktop ? 0 : (isSidebarOpen ? 0 : -256)
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{ maxWidth: "100vw" }}
			>
				<div className="h-full flex flex-col sticky top-0 overflow-hidden">
					{/* Header: only show menu button on mobile */}
					<div className="p-4 border-b border-slate-700/50 flex justify-between items-center">
						{!isDesktop && (
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => setIsSidebarOpen(prev => !prev)}
								className="p-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 text-purple-300 hover:from-purple-500/30 hover:to-teal-500/30 transition-all duration-300"
							>
								<Menu size={24} />
							</motion.button>
						)}
						<span className="text-lg font-bold text-purple-300 hidden md:block">Menu</span>
					</div>
					{/* Navigation */}
					<nav className="flex-1 p-4 space-y-2">
						{SIDEBAR_ITEMS.map((item, index) => (
							<motion.a
								key={item.href}
								href={item.href}
								onClick={e => handleNavClick(e, item.href)}
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
										{(isSidebarOpen || isDesktop) && (
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
							{(isSidebarOpen || isDesktop) && (
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
			{/* Mobile menu button (outside sidebar) */}
			{!isDesktop && !isSidebarOpen && (
				<button
					className="fixed top-4 left-4 z-60 p-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 text-purple-300 md:hidden"
					onClick={() => setIsSidebarOpen(true)}
					aria-label="Open sidebar"
				>
					<Menu size={24} />
				</button>
			)}
		</>
	)
}
