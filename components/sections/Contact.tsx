"use client"

import ContactForm from "../forms/ContactForm";
import { Card } from "../ui/card";

export default function Contact() {
  return (
    <div className="">
        <section id="contact" className="section flex items-center justify-center">
            <div className="mx-auto w-full mt-16 mb-16">
                <section className="space-y-6">
                   <div className="md:text-2xl font-bold text-center">
                        Contact Me 
                    </div> 

                    <Card className="rounded-2xl shadow p-8 gap-2">
                        <ContactForm />
                    </Card>
                </section>
            </div>
        </section>
    </div>
  )
}