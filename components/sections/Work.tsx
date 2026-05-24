"use client"

import { Card } from "../ui/card";

export default function Work() {
  return (
    <div className="bg-accent">
        <section id="work" className="section flex items-center justify-center">
            <div className="mx-auto w-full mt-16 mb-16">
                <section className="space-y-6">
                   <div className="md:text-2xl font-bold">
                        Work Experience 
                    </div> 
                    <div className="">
                        <Card className="rounded-2xl shadow p-8 gap-2">
                            <div className="flex justify-between">
                                <div className="md:text-xl font-bold">
                                    SAP Advanced Business Application Programming Developer
                                </div> 
                                <div className="text-muted-foreground">
                                    Feb 2026 - May 2026
                                </div> 
                            </div>
                            <div className="text-muted-foreground">
                                Accenture - Philippines | On-the-Job Trainee
                            </div> 
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-sm">
                                        Completed the Accenture SAP ABAP Academy, gaining strong hands-on experience in
                                        both classical ABAP and modern SAP BTP development.
                                    </span>
                                </li>
                               
                               <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-sm">
                                        Earned SAP Certified Associate in End-to-End Business Processes (C_IEE2E),
                                        bridging functional knowledge with technical implementation skills.
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-sm text-justify">
                                        Developed ABAP programs using Object-Oriented ABAP, ALV Reports, Function Modules,
                                        in classical and modern ABAP programming.
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-sm text-justify">
                                        Built modern SAP applications in BTP environment using ABAP Development Tools (ADT)
                                        in Eclipse, including CDS Views, OData Services, and RESTful ABAP Programming Model
                                        (RAP).
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-sm text-justify">
                                        Collaborated in a team-based capstone case study, managing full development lifecycle
                                        from requirements analysis to delivery, debugging, testing, and transport management.
                                    </span>
                                </li>
                            </ul>
                            
                        </Card> 
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}