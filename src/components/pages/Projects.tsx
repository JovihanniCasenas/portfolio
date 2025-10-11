import { useState } from "react"
import CareerTabs from "../CareerTabs"
import Systems from "../projects/Systems"
import VAWorks from "../projects/VAWorks"
import ContactCTA from "../ContactCTA"

const Projects = () => {
    const [tabValue, setTabValue] = useState("va")
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue)
    }

    return (
        <div className="page-wrapper" style={{ marginBottom: "60px"}}>
            <h1 id="projects">Projects</h1>
            <CareerTabs tabValue={tabValue} handleTabChange={handleTabChange} />
            {tabValue === "engineering" && <Systems />}
            {tabValue === "va" && <VAWorks />}
            <ContactCTA />
        </div>
    )
}

export default Projects