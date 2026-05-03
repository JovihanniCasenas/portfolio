"use client"

import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import HighlightHover from "@/components/ui/HighlightHover"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { useIsMobile } from "@/hooks/useIsMobile"

function NavItems() {
  const { onAnchorClick } = useSmoothScroll({ duration: 800, headerOffset: 0 })

  const items = [
    { name: "About", link: "#about", id: "about" },
    {
      name: "Work Experience",
      link: "#work-experience",
      id: "work-experience",
    },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Tech Stack", link: "#tech-stack", id: "tech-stack" },
    {
      name: "Education and Certifications",
      link: "#education",
      id: "education",
    },
  ]

  return (
    <div className="flex flex-col mb-4 mt-6">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="mr-4"
          onClick={onAnchorClick(item.id)}
        >
          <HighlightHover>{item.name}</HighlightHover>
        </a>
      ))}
    </div>
  )
}

function Contact() {
  const items = [
    {
      icon: <MdEmail size={24} className="mr-4" />,
      link: "mailto:casenasjovihanni@gmail.com",
    },
    {
      icon: <FaLinkedin size={24} className="mr-4" />,
      link: "https://www.linkedin.com/in/jovihanni-casenas-189438286",
    },
    {
      icon: <FaGithub size={24} />,
      link: "https://github.com/JovihanniCasenas",
    },
  ]

  return (
    <div className="flex flex-row mt-6">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HighlightHover>{item.icon}</HighlightHover>
        </a>
      ))}
    </div>
  )
}

export default function Profile() {
  const isMobile = useIsMobile()
  return (
    <>
      <div
        className={`flex flex-col justify-between ${isMobile ? "" : "h-full"}`}
      >
        <div>
          <div className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold`}>
            Jovihanni Casenas
          </div>
          <div className={`${isMobile ? "text-xl" : "text-2xl"} mt-4`}>
            Software Engineer
          </div>
        </div>
        {!isMobile && <NavItems />}
        <Contact />
      </div>
    </>
  )
}
