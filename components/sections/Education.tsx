"use client"

import { GraduationCap } from "lucide-react";
import { Card } from "../ui/card";
import { ImageModal } from "../modals/image-modal";

export default function Education() {
  return (
    <div className="bg-accent">
        <section id="education" className="section flex items-center justify-center">
            <div className="mx-auto w-full mt-16 mb-16">
                <section className="space-y-6">
                    <div className="md:text-2xl font-bold">
                        Education 
                    </div> 
                    <div className="">
                        <Card className="rounded-2xl shadow p-8 gap-2">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <GraduationCap />
                                    <div className="md:text-xl font-bold" >
                                        Bachelor of Science in Information Technology
                                    </div> 
                                </div> 
                                <div className="text-muted-foreground">
                                    Sep 2022 - July 2026
                                </div> 
                            </div>
                            <div className="text-muted-foreground">
                                STI College Ortigas-Cainta
                            </div> 

                            {/* <ul className="space-y-2 mt-4">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-sm">
                                        Top 5 Capstone Project for BSIT Students
                                    </span>
                                </li>
                            </ul> */}
                        </Card> 
                    </div>

                    <div className="md:text-2xl font-bold">
                        Certifications 
                    </div> 

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/ojt-coc.png"
                                    alt="OJT COC"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                STI On-The-Job Training Certification of Completion
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/devkada-cop.png"
                                    alt="DevKada CodeKada Hackathon"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                DevKada - CodeKada Hackathon Certificate of Participation
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/sap-cert-e2e.png"
                                    alt="SAP Certified"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                SAP Certified - Implementation Consultant
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/cyber-coa.png"
                                    alt="Cybersecurity"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2024
                                </p>
                                Cybersecurity Awareness & Startup 101
                            </div>
                        </Card>

                    </div>

                    <div className="md:text-2xl font-bold">
                        Badges
                    </div> 

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/intro-abap-fundamentals-cc.png"
                                    alt="Intoducing ABAP"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                Introducing SAP ABAP Platform Fundamentals 
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/deepening-abap-cc.png"
                                    alt="Deepening ABAP"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                Deepening Your ABAP Programming Knowledge 
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/learning-abap-cc.png"
                                    alt="Learning ABAP"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                Learning Basic ABAP Programming
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/clean-core-cc.png"
                                    alt="Clean Core"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                Managing Clean Core for SAP S/4HANA Cloud
                            </div>
                        </Card>
                        
                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/exploring-btp-cc.png"
                                    alt="Exploring BTP"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                Exploring SAP Business Technology Platform
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/exploring-cc.png"
                                    alt="Exploring End-to-End"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2026
                                </p>
                                Exploring End-to-End Business Processes in SAP Business Suite 
                            </div>
                        </Card>

                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/systems-cc.png"
                                    alt="Systems Admin"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2023
                                </p>
                                Systems Administrations
                            </div>
                        </Card>
                        
                        <Card className="rounded-2xl shadow p-8 gap-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <ImageModal
                                    src="/media/java-cc.png"
                                    alt="Java fundamentals"
                                />
                            </div>

                            <div className="md:text-xl font-bold mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    2023
                                </p>
                                Java Fundamentals
                            </div>
                        </Card>

                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}