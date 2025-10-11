import { useEffect, useMemo, useState } from "react"
import "./App.css"
import AboutMe from "./components/pages/AboutMe"
import Skillset from "./components/pages/Skillset"
import Projects from "./components/pages/Projects"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/pages/Education"
import Contact from "./components/pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Stars from "./components/Stars"
import colors from "./colors"
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth ?? 0)
  const [height, setHeight] = useState<number>(window.innerHeight ?? 0)
  const navigate = useNavigate()
  const location = useLocation()

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  const isMobile = useMemo(() => {
    return width <= height || width <= 829
  }, [width, height])

  // Determine current tab from URL path
  const tabStr = useMemo(() => {
    const path = location.pathname.substring(1) || 'about'
    return path
  }, [location])

  const onClick = (tab: string) => {
    navigate(`/${tab}`)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, []);

  // Redirect to /about if at root path
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/about')
    }
  }, [location.pathname, navigate])

  // Create a stable stars component reference so it doesn't change with route changes
  const starsElement = useMemo(() => <Stars count={150} />, []);

  return (
    <>
      <div className="animated-background" style={{ 
        background: `linear-gradient(125deg, 
          ${colors.skyGradientStart} 0%, 
          ${colors.skyGradientMiddle1} 25%, 
          ${colors.skyGradientMiddle2} 50%, 
          ${colors.skyGradientMiddle3} 75%, 
          ${colors.skyGradientEnd} 100%)`,
        minHeight: "100vh", 
        width: "100vw", 
        overflow: "hidden", 
        color: colors.textLight,
        position: "relative"
      }}>
        {/* Use the memoized stars element to ensure it doesn't re-render */}
        {starsElement}
        {/* Content container with higher z-index to overlay stars */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header isMobile={isMobile} onClick={onClick} currentTab={tabStr} />
          <div style={{ minHeight: "calc(100vh - 270px)" }}>
            <Routes>
              <Route path="/about" element={<AboutMe isMobile={isMobile} />} />
              <Route path="/skillset" element={<Skillset />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/work" element={<WorkExperience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact isMobile={isMobile} />} />
              <Route path="*" element={<AboutMe isMobile={isMobile} />} />
            </Routes>
          </div>
          <div style={{ height: "10px" }}></div>
          <Footer onClick={onClick} />
        </div>
      </div>
    </>
  )
}

export default App