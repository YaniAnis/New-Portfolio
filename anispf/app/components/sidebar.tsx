"use client"

import { User, Folder, Menu, Briefcase, Mail, } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SIDEBAR_ITEMS = [

  { name: "About", icon: User, color: "#8B5CF6", href: "#about" },
  { name: "Projects", icon: Folder, color: "#EC4899", href: "#projects" },
  { name: "Experience", icon: Briefcase, color: "#10B981", href: "#experience" },
  { name: "Contact", icon: Mail, color: "#F59E0B", href: "#contact" },

];

export default function Sidebar() {
    

    return (

                <nav className="sidebar-nav m-9 border-r border-gray-800 pr-6 items-start text-xl inline-flex flex-col gap-6">
                    {SIDEBAR_ITEMS.map((item) => (
                        <a key={item.href} href={item.href}>
                            <motion.div className="sidebar-item">
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                <AnimatePresence>
                                     (
                                        <motion.span
                                            className="sidebar-item-text"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )
                                </AnimatePresence>
                            </motion.div>
                        </a>
                    ))}
                </nav>

    );
}