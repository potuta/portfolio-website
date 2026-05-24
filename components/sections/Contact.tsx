"use client";

import { LINKS } from "@/lib/config/external-links";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="h-25">
        <section id="contact" className="h-full max-w-7xl mx-auto flex items-center justify-between">
            <div className="p-5 py-3 space-y-4">
                {/* <div className="text-sm text-muted-foreground flex items-center justify-center mt-4">
                    Contact Information
                </div> */}

                <div className="text-sm text-muted-foreground">
                    Contact Information
                </div>

                <div className="flex items-center justify-center gap-6">
                    <Link href={LINKS.github} target="_blank" rel="noopener noreferrer" >
                        <FaGithub size={25}/>
                    </Link>
                    <Link href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin size={25}/>
                    </Link>
                    <Link href={LINKS.email} target="_blank" rel="noopener noreferrer" >
                        <HiOutlineMail size={25}/>
                    </Link>
                </div>

            </div>
        </section> 
    </div>
  )
}