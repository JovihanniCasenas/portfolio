import { useEffect, useMemo, useState } from "react"
import "./App.css"
import AboutMe from "./components/AboutMe"
import Skillset from "./components/Skillset"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import colors from "./colors"

function App() {
  const [tabStr, setTabStr] = useState<string>("about");
  const [width, setWidth] = useState<number>(window.innerWidth ?? 0)
  const [height, setHeight] = useState<number>(window.innerHeight ?? 0)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  const isMobile = useMemo(() => {
    return width <= height || width <= 829
  }, [width, height])

  const onClick = (tab: string) => {
    setTabStr(tab)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, []);

  const currentTab = useMemo(() => {
    switch (tabStr) {
      case 'about':
        return <AboutMe isMobile={isMobile} />
      case 'skillset':
        return <Skillset />
      case 'projects':
        return <Projects />
      case 'work':
        return <WorkExperience />
      case 'education':
        return <Education />
      case 'contact':
        return <Contact isMobile={isMobile} />
    }
  }, [tabStr])

  return (
    <>
      <div style={{ backgroundImage: "url('public/assets/sky.png')", backgroundSize: "cover", minHeight: "100vh", width: "100vw", overflow: "hidden", color: colors.textLight }}>
        <Header isMobile={isMobile} onClick={onClick} />
        <div style={{ minHeight: "calc(100vh - 270px)" }}>
          {currentTab}
        </div>
        <div style={{ height: "10px" }}></div>
        <Footer onClick={onClick} />
      </div>
    </>
  )
}

export default App