"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeInfo, CheckCircle, ListTodo, User, Users } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "../data/sections";

export default function About() {
  return (
    <div>
        <section id="about" className="section min-h-screen flex items-center">
            <div>
                {/* Hero Section */}
                <section className="text-left flex gap-10 space-y-6 justify-between items-center">
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
                        className="md:text-xl font-bold"
                        >
                            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                                <User /> Contact
                            </Button>
                        </motion.div>
                    </div>

                    <Card className="max-w-2xl rounded-2xl shadow">
                        <CardContent className="space-y-3">
                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground font-bold text-lg text-justify"
                            >
                                <div className="flex items-center gap-3">
                                    <BadgeInfo className="w-5 h-5"/>
                                    About Me:
                                </div>
                            </motion.div>
                            <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-muted-foreground text-sm text-justify italic" 
                            >
                                Motivated IT student with a strong passion for programming, software development, and
                                web development. I specialize in full-stack web development and software engineering using
                                frameworks such as .NET Core, Next.js, React.js, as well as modern and classical SAP ABAP
                                Development. I am also interested in Unity game development, which allows me to strengthen
                                my problem-solving abilities and deepen my understanding of programming through a versatile,
                                hands-on approach.
                            </motion.p>
                        </CardContent>
                    </Card>
                </section>

                <section className="grid md:grid-cols-3 gap-10 mt-16">
                    <Card className="rounded-2xl shadow">
                        <CardContent className="p-6 space-y-3">
                            <ListTodo className="w-6 h-6" />
                            <h3 className="font-semibold text-lg">Task Management</h3>
                            <p className="text-sm text-muted-foreground">
                            Create, update, and organize your tasks easily.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow">
                        <CardContent className="p-6 space-y-3">
                            <Users className="w-6 h-6" />
                            <h3 className="font-semibold text-lg">Multi-User</h3>
                            <p className="text-sm text-muted-foreground">
                            Each user has their own private and secure task list.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow">
                        <CardContent className="p-6 space-y-3">
                            <CheckCircle className="w-6 h-6" />
                            <h3 className="font-semibold text-lg">Stay Productive</h3>
                            <p className="text-sm text-muted-foreground">
                            Track progress and complete tasks efficiently.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </section>
    </div>
  );
}