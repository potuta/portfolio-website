export const sections = [
  { id: "about", label: "About Me" },
  { id: "work", label: "Work History" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({ behavior: "smooth" })
}