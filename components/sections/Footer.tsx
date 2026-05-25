"use client";

import { LINKS } from "@/lib/config/external-links";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <div className="h-20 border-t">
        <section className="h-full max-w-7xl mx-auto px-5 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
                @ 2026 Cyril Bautista.
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
            </div>
        </section>
    </div>
  )
}