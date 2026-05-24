import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import Image from "next/image"
import { ExternalLink, Maximize2 } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { LINKS } from "@/lib/config/external-links";

export default function Projects() {
  return (
    <div className="">
        <section id="projects" className="section flex items-center justify-center">
            <div className="mx-auto w-full mt-16 mb-16">
                <section className="space-y-6">
                    <div className="md:text-2xl font-bold">
                        Notable Projects 
                    </div> 

                    <Card className="rounded-2xl shadow p-8 gap-2">
                        <div className="relative group w-full rounded-xl overflow-hidden transition-all duration-500 h-64 hover:h-[600px]">
                            <Image
                                src="/media/cortex-path.gif"
                                priority
                                width={800}
                                height={450}
                                alt="Cortex Path"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md">
                                <Maximize2 className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="md:text-xl font-bold mt-6">
                                Cortex-Path
                            </div> 
                            <div className="flex items-center justify-center">
                                <Link href={LINKS.cortexpath} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                    <ExternalLink className="w-4 h=4" />
                                    View Source
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="default">Next.js</Badge>
                            <Badge variant="default">React.js</Badge>
                            <Badge variant="default">TypeScript</Badge>
                            <Badge variant="default">Tailwind CSS</Badge>
                            <Badge variant="default">PostgreSQL</Badge>
                        </div> 
                        <div className="space-y-2 mt-4">
                            <p className="text-sm text-justify">
                                Top 4 Finalist at CodeKada 2026 Hackathon. Cortex-Path is an AI-powered codebase
                                understanding and visualization platform built in 6 days for the CodeKada 2026
                                Hackathon.
                            </p>
                        </div>
                    </Card> 

                    <Card className="rounded-2xl shadow p-8 gap-2">
                        <div className="relative group w-full rounded-xl overflow-hidden transition-all duration-500 h-64 hover:h-[600px]">
                            <Image
                                src="/media/nch.gif"
                                priority
                                width={800}
                                height={450}
                                alt="Cortex Path"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md">
                                <Maximize2 className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="md:text-xl font-bold mt-6">
                                Data Management System for National Children’s Hospital
                            </div> 
                            <div className="flex items-center justify-center">
                                <Link href={LINKS.nch} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                    <ExternalLink className="w-4 h=4" />
                                    View Source
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="default">.Net Core MVC</Badge>
                            <Badge variant="default">C#</Badge>
                            <Badge variant="default">JavaScript</Badge>
                            <Badge variant="default">HTML</Badge>
                            <Badge variant="default">CSS</Badge>
                            <Badge variant="default">MSSQL</Badge>
                        </div> 
                        <div className="space-y-2 mt-4">
                            <p className="text-sm text-justify">
                                A Data Management System Web Application with Decision Support System features for the National Children’s Hospital in Quezon City. Used for handling, storing, and converting OPD, 
                                Admission, and Discharge patients to digital records, reports, and statistics. With built-in multi page assessment tool, PDF & Excel Conversion, 
                                User & Role Management for Social Workers, Database Backup & Restore, and System Logs/Audit Trail.
                            </p>
                        </div>
                    </Card> 

                    <Card className="rounded-2xl shadow p-8 gap-2">
                        <div className="relative group w-full rounded-xl overflow-hidden transition-all duration-500 h-64 hover:h-[600px]">
                            <Image
                                src="/media/school-enrollment-system.gif"
                                priority
                                width={800}
                                height={450}
                                alt="Cortex Path"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md">
                                <Maximize2 className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="md:text-xl font-bold mt-6">
                                School Enrollment System
                            </div> 
                            <div className="flex items-center justify-center">
                                <Link href={LINKS.enrollmentsystem} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                    <ExternalLink className="w-4 h=4" />
                                    View Source
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="default">.Net Framework</Badge>
                            <Badge variant="default">Windows Forms</Badge>
                            <Badge variant="default">C#</Badge>
                            <Badge variant="default">MSSQL</Badge>
                        </div> 
                        <div className="space-y-2 mt-4">
                            <p className="text-sm text-justify">
                                A School Enrollment System we made for our 3rd year school project in IT at STI College Ortigas-Cainta. 
                                This project thought me the most about software engineering principles, systems architecture, database design and management through building a functional end-to-end Transactional Processing System
                                with PDF & Excel Conversion, User & Role Management, Database Backup & Restore, and System Logs/Audit Trail. 
                            </p>
                        </div>
                    </Card>  

                    <div className="md:text-2xl font-bold">
                        Games
                    </div> 

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="rounded-2xl shadow p-8 gap-2">
                            <div className="relative group w-full rounded-xl overflow-hidden transition-all duration-500 h-64 ">
                                <Image
                                    src="/media/beer-pong.gif"
                                    priority
                                    width={800}
                                    height={450}
                                    alt="Cortex Path"
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />

                                {/* <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md">
                                    <Maximize2 className="w-4 h-4 text-white" />
                                </div> */}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="md:text-xl font-bold mt-6">
                                    Beer Pong Multiplayer Game
                                </div> 
                                {/* <div className="flex items-center justify-center">
                                    <Link href={LINKS.beerpong} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                        <ExternalLink className="w-4 h=4" />
                                        Play
                                    </Link>
                                </div> */}
                            </div>
                            <div className="flex gap-2">
                                <Badge variant="default">Unity</Badge>
                                <Badge variant="default">C#</Badge>
                                <Badge variant="default">Blender</Badge>
                            </div> 
                            <div className="space-y-2 mt-4 mb-4">
                                <p className="text-sm">
                                    A Beer Pong game built in Unity for our finals project in Game Development. Includes a
                                    multiplayer feature for 1v1 player-versus-player gameplay, implemented game
                                    networking & synchronization, matchmaking systems, and optimized performance for
                                    online interaction.
                                </p>
                            </div>
                            <Link href={LINKS.beerpong} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                <ExternalLink className="w-4 h=4" />
                                Play on Itch.io
                            </Link>
                        </Card>  
                        <Card className="rounded-2xl shadow p-8 gap-2">
                            <div className="relative group w-full rounded-xl overflow-hidden transition-all duration-500 h-64 ">
                                <Image
                                    src="/media/skate-chase.gif"
                                    priority
                                    width={800}
                                    height={450}
                                    alt="Cortex Path"
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />

                                {/* <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md">
                                    <Maximize2 className="w-4 h-4 text-white" />
                                </div> */}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="md:text-xl font-bold mt-6">
                                    Skate Chase
                                </div> 
                                {/* <div className="flex items-center justify-center">
                                    <Link href={LINKS.skatechase} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                        <ExternalLink className="w-4 h=4" />
                                        View Source
                                    </Link>
                                </div> */}
                            </div>
                            <div className="flex gap-2">
                                <Badge variant="default">Unity</Badge>
                                <Badge variant="default">C#</Badge>
                            </div> 
                            <div className="space-y-2 mt-4 mb-4">
                                <p className="text-sm">
                                    A simple skateboard chasing game where you run away from a dog and jump over obstacles in your way.
                                </p>
                            </div>

                            <Link href={LINKS.skatechaseplay} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                <ExternalLink className="w-4 h=4" />
                                Play on Browser
                            </Link>

                            <Link href={LINKS.skatechase} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                <ExternalLink className="w-4 h=4" />
                                View Source
                            </Link>
                        </Card>  

                        <Card className="rounded-2xl shadow p-8 gap-2">
                            <div className="relative group w-full rounded-xl overflow-hidden transition-all duration-500 h-64 ">
                                <Image
                                    src="/media/turtle-game.gif"
                                    priority
                                    width={800}
                                    height={450}
                                    alt="Cortex Path"
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />

                                {/* <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-md">
                                    <Maximize2 className="w-4 h-4 text-white" />
                                </div> */}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="md:text-xl font-bold mt-6">
                                    Turtle Game
                                </div> 
                                {/* <div className="flex items-center justify-center">
                                    <Link href={LINKS.skatechase} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                        <ExternalLink className="w-4 h=4" />
                                        View Source
                                    </Link>
                                </div> */}
                            </div>
                            <div className="flex gap-2">
                                <Badge variant="default">Python</Badge>
                            </div> 
                            <div className="space-y-2 mt-4 mb-4">
                                <p className="text-sm ">
                                    This is just a very simple turtle game I made for our school task performance in Computer Graphics Programming.
                                </p>
                            </div>

                            <Link href={LINKS.turtlegame} target="_blank" rel="noopener noreferrer" className={buttonVariants({variant: "secondary"})}>
                                <ExternalLink className="w-4 h=4" />
                                View Source
                            </Link>
                            
                        </Card>  
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}