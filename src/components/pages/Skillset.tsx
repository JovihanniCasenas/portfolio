import { useState } from "react"
import Engineering from "../skillset/Engineering"
import VirtualAssistance from "../skillset/VirtualAssistance"
import CareerTabs from "../CareerTabs"
import ContactCTA from "../ContactCTA"

// docs link to all available icons: https://xandemon.github.io/developer-icons/icons/All/

const Skillset = () => {
    const [tabValue, setTabValue] = useState("va")
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue)
    }
    
    return (
        <div className="page-wrapper">
        <h1 id="skillset">Skillset</h1>
        <CareerTabs tabValue={tabValue} handleTabChange={handleTabChange} />
        <div style={{ height: "30px" }} />
        {tabValue === "engineering" && <Engineering />}
        {tabValue === "va" && <VirtualAssistance />}
        <ContactCTA />
        </div>
    )
}

export default Skillset