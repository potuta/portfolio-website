"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeInfo, CheckCircle, ListTodo, User, Users } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "../data/sections";

export default function About() {
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
                        className="text-muted-foreground italic max-w-4xl"
                        >

                            I am a passionate full-stack developer and software engineer skilled in .NET Core, Next.js, React.js, and SAP ABAP (modern & classical). 
                            I am also interested in Unity game development which allows me to strengthen my problem-solving abilities and deepen my understanding of programming.
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:text-xl font-bold"
                        >
                            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                                <User /> Contact
                            </Button>
                        </motion.div>
                    </div>

                </section>

                <section className="space-y-6 mt-16">
                    <div className="flex items-center justify-between">
                        <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:text-2xl font-bold"
                        >
                            Tech Stack
                        </motion.h1>
                        <div>

                        </div>
                    </div> 

                    <div className="grid md:grid-cols-6 gap-10" >
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">SAP ABAP</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">C#</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">SAP ABAP</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">C#</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">SAP ABAP</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">C#</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">SAP ABAP</p>
                        </Card>
                        <Card className="rounded-2xl shadow p-2">
                            <p className="font-semibold text-sm text-center wrap-break-word">C#</p>
                        </Card>
                    </div>
                </section>

            </div>
        </section>
    </div>
  );
}