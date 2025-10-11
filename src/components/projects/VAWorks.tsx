import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import colors from "../../colors"
import DesignBranding from "./DesignBranding"
import CreativeWriting from "./CreativeWriting"
import VATechSection from "./VATechSection"

const VAWorks = () => {
    const sections = [
        { key: "design-branding", title: "Design and Branding", content: <DesignBranding /> },
        { key: "creative-writing", title: "Creative Writing", content: <CreativeWriting /> },
        { key: "tech-analytics", title: "Tech / Analytics / Systems", content: <VATechSection /> },
    ]
    const accordionStyle = {
        backgroundColor: "rgba(255,255,255,0.2)",
        color: colors.textLight,
        marginBottom: "10px",
    }
    return (
        <div style={{ marginTop: "20px", width: "100%" }}>
            <div style={{ padding: "20px", textAlign: "left" }}>
                {sections.map(section => (
                    <Accordion sx={accordionStyle} key={section.key}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: colors.textLight }} />}
                            aria-controls={`${section.key}-content`}
                            id={`${section.key}-header`}
                        >
                            {section.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            {section.content}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default VAWorks