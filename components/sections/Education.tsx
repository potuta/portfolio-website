"use client"

import { GraduationCap } from "lucide-react";
import { Card } from "../ui/card";

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
                </section>
            </div>
        </section>
    </div>
  )
}