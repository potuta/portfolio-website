"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SendHorizonal, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "../data/sections";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LINKS } from "@/lib/config/external-links";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";

export default function About() {
    const [techStackState, toggleTechStack] = useState('current')

    const coreTech = [
        "LeetCode",
        "SAP ABAP",
        "C#",
        "TypeScript",
        "Next.js",
        "React.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma ORM",
    ]

    const extraTech = [
        ".NET Core",
        "Java",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "MSSQL",
        "Unity",
        "Android Studio",
    ]

    return (
        <div className="">
            <section id="about" className="section min-h-screen flex items-center justify-center">
                <div className="mx-auto w-full">
                    <section className="flex gap-10 justify-between items-center">
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="md:text-7xl font-bold"
                            >
                                Cyril Bautista 
                            </motion.h1>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="md:text-xl font-bold"
                            >
                                Full-Stack | Software Engineer
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="text-muted-foreground italic max-w-5xl">
                                    Hello, welcome to my portfolio! My real name is Cyril Bautista and my online name is LesserDev or Potuta. I am a passionate full-stack developer and software engineer skilled in .NET Core, Next.js, React.js, and SAP ABAP (modern & classical). 
                                    I am also interested in Unity game development which allows me to strengthen my problem-solving abilities and deepen my understanding of programming.
                                </div>

                                <div className="flex items-center gap-6">
                                    <Link href={LINKS.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={22} />
                                    </Link>

                                    <Link href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={22} />
                                    </Link>

                                    <Link href={LINKS.email} target="_blank" rel="noopener noreferrer">
                                        <HiOutlineMail size={22} />
                                    </Link>
                                    <Button className="font-bold" size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                                        <SendHorizonal /> Send a Message
                                    </Button>
                                </div>

                            </motion.div>
                           
                        </div>

                    </section>

                    <section className="space-y-6 mt-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="md:text-2xl font-bold flex items-center justify-between"
                        >
                            <div>
                                Tech Stack
                            </div>
                            <div>
                                <ToggleGroup
                                    type="single"
                                    defaultValue="current"
                                    className="border gap-0 rounded-xl overflow-hidden" 
                                    onValueChange={(val) => {
                                        if (!val) return

                                        toggleTechStack(val)
                                    }}
                                >
                                    <ToggleGroupItem value="current" className="rounded-none border-0">
                                        Current Focus
                                    </ToggleGroupItem>

                                    <ToggleGroupItem value="all" className="rounded-none border-x">
                                        All
                                    </ToggleGroupItem>

                                </ToggleGroup>
                            </div>
                        </motion.h1>

                        <div className="grid md:grid-cols-6 gap-10">
                            <AnimatePresence mode="sync">
                                {coreTech.map((item) => (
                                    <motion.div
                                    key={item}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <Card className="rounded-2xl shadow p-2">
                                        <p className="text-sm text-center font-semibold">
                                        {item}
                                        </p>
                                    </Card>
                                    </motion.div>
                                ))}

                                {techStackState === "all" &&
                                    extraTech.map((item) => (
                                    <motion.div
                                        key={item}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <Card className="rounded-2xl shadow p-2">
                                            <p className="text-sm text-center font-semibold">
                                                {item}
                                            </p>
                                        </Card>
                                    </motion.div>
                                    ))}
                                </AnimatePresence>

                        </div>
                    </section>


                </div>
            </section>
        </div>
    );
}