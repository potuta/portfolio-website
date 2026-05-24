"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SectionsBreadcrumb } from "./sections-breadcrumb";
import { scrollToSection } from "../data/sections";

export function Navbar() {
    return (
        <nav className="h-var(--navbar-height) w-full border-b border-b-accent-foreground backdrop-blur-md">
            <div className="h-full max-w-7xl mx-auto p-5 py-3 flex items-center justify-between justify-items-center">
                <div className="flex items-center gap-8">
                    <button onClick={() => scrollToSection('about')}>
                        <div className="text-xl font-bold">
                            LesserDev
                        </div>
                    </button>
                    
                </div>

                <div className="flex items-center gap-2">
                    <SectionsBreadcrumb />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}