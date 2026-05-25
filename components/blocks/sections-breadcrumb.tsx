"use client"

import { useEffect, useState } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { scrollToSection, sections as secs } from "../data/sections"

const sections = secs;

export function SectionsBreadcrumb() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // threshold: 0.6,
        rootMargin: "-40% 0px -40% 0px",
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex items-center"
          >
            <BreadcrumbItem>
              {activeSection === section.id ? (
                <BreadcrumbPage>
                  {section.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveSection(section.id)
                    scrollToSection(section.id) 
                  }}
                >
                  {section.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {index < sections.length - 1 && (
              <BreadcrumbSeparator />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}