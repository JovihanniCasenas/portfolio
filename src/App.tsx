import { useMemo, useState } from "react"
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

  const onClick = (tab: string) => {
    setTabStr(tab)
  }

  const currentTab = useMemo(() => {
    switch (tabStr) {
      case 'about':
        return <AboutMe />
      case 'skillset':
        return <Skillset />
      case 'projects':
        return <Projects />
      case 'work':
        return <WorkExperience />
      case 'education':
        return <Education />
      case 'contact':
        return <Contact />
    }
  }, [tabStr])

  return (
    <>
      <div style={{ backgroundImage: "url('src/assets/sky.png')", backgroundSize: "cover", minHeight: "100vh", width: "100vw", overflow: "hidden", color: colors.textLight }}>
        <Header onClick={onClick} />
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