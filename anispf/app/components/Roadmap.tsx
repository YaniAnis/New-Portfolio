"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const roadmapData = [
	{
		year: "2023",
		title: "Gradouation From High School",
		desc: "gradouate with a technical math degree with great montion.",
		side: "left",
	},
	{
		year: "2024",
		title: "First Year of University",
		desc: "Integrating into university life, exploring new horizons in computer science.",
		side: "right",
	},
	{
		year: "2024",
		title: "First Internship",
		desc: "Gained hands-on experience in software development at a local tech startup.",
		side: "left",
	},
	{
		year: "2025",
		title: "Launch of My First Project",
		desc: "Developed the second year football tickets website simulation to showcase my skills and projects.",
		side: "right",
	},

];

export default function Roadmap() {
	const scrollAreaRef = useRef<HTMLDivElement>(null);
	const scrollStep = 10;
	const scrollInterval = 10;

	const upInterval = useRef<NodeJS.Timeout | null>(null);
	const downInterval = useRef<NodeJS.Timeout | null>(null);

	const { scrollYProgress } = useScroll({
		container: scrollAreaRef,
	});
	const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

	// Fix hydration mismatch for scrollHeight
	const [barHeight, setBarHeight] = React.useState<string | null>(null);
	useEffect(() => {
		if (scrollAreaRef.current) {
			setBarHeight(`${scrollAreaRef.current.scrollHeight}px`);
		}
	}, []);

	// Helper to get the progress for each dot
	const dotProgress = (idx: number, total: number) => {
		// Evenly distribute dot positions along the bar
		const step = 1 / (total - 1);
		const start = idx * step - step * 0.2;
		const end = idx * step + step * 0.2;
		return [start < 0 ? 0 : start, end > 1 ? 1 : end];
	};

	// Scroll on hover handlers
	const scrollBy = (amount: number) => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollBy({
				top: amount,
				behavior: "auto",
			});
		}
	};

	const startScroll = (direction: "up" | "down") => {
		const fn = () => scrollBy(direction === "up" ? -scrollStep : scrollStep);
		if (direction === "up") {
			if (!upInterval.current) {
				upInterval.current = setInterval(fn, scrollInterval);
			}
		} else {
			if (!downInterval.current) {
				downInterval.current = setInterval(fn, scrollInterval);
			}
		}
	};

	const stopScroll = (direction: "up" | "down") => {
		if (direction === "up" && upInterval.current) {
			clearInterval(upInterval.current);
			upInterval.current = null;
		}
		if (direction === "down" && downInterval.current) {
			clearInterval(downInterval.current);
			downInterval.current = null;
		}
	};

	return (
		<section
			id="roadmap"
			className="w-full flex flex-col items-center py-16 bg-gray-900 text-white"
		>
			<h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">Our Journey</h2>
			<p className="mb-10 text-gray-300 text-lg">
				My evolution through the years
			</p>
			{/* Up Arrow Hover Button */}
			<div
				className="mb-4 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow transition flex items-center justify-center cursor-pointer"
				aria-label="Scroll Up"
				onMouseEnter={() => startScroll("up")}
				onMouseLeave={() => stopScroll("up")}
			>
				<ChevronUp size={24} />
			</div>
			<div
				ref={scrollAreaRef}
				className="relative w-full max-w-3xl h-[600px] overflow-y-auto px-2 scrollbar-hide"
				style={{ WebkitOverflowScrolling: "touch" }}
			>
				{/* Static background bar */}
				{/* Animated vertical timeline bar */}
				{barHeight && (
					<motion.div
						className="absolute left-1/2 top-0 w-1 bg-blue-500 -translate-x-1/2 origin-top"
						style={{
							height: barHeight,
							scaleY: barScale,
						}}
					/>
				)}
				<ul className="space-y-12 py-4">
					{roadmapData.map((item, idx) => {
						const itemRef = useRef<HTMLLIElement>(null);
						const inView = useInView(itemRef, {
							once: true,
							margin: "-100px 0px -100px 0px",
							root: scrollAreaRef,
						});

						// Animate the dot when the bar passes it
						const [dotStart, dotEnd] = dotProgress(idx, roadmapData.length);
						const dotActive = useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);
						// Animate scale and color when active
						const dotScale = useTransform(dotActive, [0, 1], [1, 1.4]);
						const dotColor = useTransform(dotActive, [0, 1], ["#3b82f6", "##101852"]);

						return (
							<motion.li
								key={item.year}
								ref={itemRef}
								className="relative flex items-center"
								initial={{ opacity: 0, y: 40 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.7, delay: idx * 0.15, type: "spring" }}
							>
								{/* Left side */}
								<div
									className={`w-1/2 pr-8 ${
										item.side === "left" ? "" : "opacity-0 pointer-events-none"
									}`}
								>
									{item.side === "left" && (
										<div className="bg-gray-800 rounded-3xl p-4 shadow hover:shadow-xl transition-shadow duration-300">
											<span className="text-blue-400 font-semibold">
												{item.year}
											</span>
											<h3 className="font-bold mt-1">{item.title}</h3>
											<p className="text-gray-300 mt-1">{item.desc}</p>
										</div>
									)}
								</div>
								{/* Timeline dot */}
								<motion.div
									className="z-10 w-6 h-6 bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2"
									style={{ scale: dotScale, borderColor: dotColor }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
								>
									<motion.div
										className="w-3 h-3 rounded-full"
										style={{ backgroundColor: dotColor, scale: dotScale }}
									/>
								</motion.div>
								{/* Right side */}
								<div
									className={`w-1/2 pl-8 ${
										item.side === "right" ? "" : "opacity-0 pointer-events-none"
									}`}
								>
									{item.side === "right" && (
										<div className="bg-gray-800 rounded-3xl p-4 shadow">
											<span className="text-blue-400 font-semibold">
												{item.year}
											</span>
											<h3 className="font-bold mt-1">{item.title}</h3>
											<p className="text-gray-300 mt-1">{item.desc}</p>
										</div>
									)}
								</div>
							</motion.li>
						);
					})}
				</ul>
				<div>{/* Spacer if needed */}</div>
			</div>
			{/* Down Arrow Hover Button */}
			<div
				className="mt-4 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow transition flex items-center justify-center cursor-pointer"
				aria-label="Scroll Down"
				onMouseEnter={() => startScroll("down")}
				onMouseLeave={() => stopScroll("down")}
			>
				<ChevronDown size={24} />
			</div>
		</section>
	);
}
