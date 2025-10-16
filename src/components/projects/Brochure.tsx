import { Grid2 } from "@mui/material"
import CustomButton from "../CustomButton"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Brochure = () => {
    const sections = [
        {
            key: "sample-brochure",
            title: "Launch Your Vision: Sample VA Brochure",
            link: "https://www.canva.com/design/DAG1e84WxBs/B1GAKUE73uXNuAj0bv3uPg/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1e84WxBs/Dge_S6qBxVjlmRK5mlLUig/edit?utm_content=DAG1e84WxBs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This sample brochure was created to showcase my services as a Virtual Assistant.
            The brochure features a clean and professional design that highlights my skills, experience, and service offerings.
            The design process involved selecting a layout that is easy to read and visually appealing, incorporating elements from the wondererxwanderer brand kit.
            The final brochure provides a comprehensive overview of my VA services, making it an effective marketing tool to attract potential clients.`,
        },
        {
            key: "one-pager",
            title: "VA services One-Pager",
            link: "https://www.canva.com/design/DAG1exM87BI/xrQzofHIXMntA6G_ruWNEA/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1exM87BI/VwSC4guvwDSVR2WhxfwXSw/edit?utm_content=DAG1exM87BI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This one-pager was created to provide a concise overview of my services as a Virtual Assistant.
            The design features a clean and modern layout that highlights key information, including my skills, experience, and service offerings.
            The design process involved selecting a layout that is easy to read and visually appealing, incorporating elements from my personal brand kit.
            The final one-pager serves as an effective marketing tool to attract potential clients, providing them with a quick snapshot of what I can offer.`,
        }
    ]
    return (
        <div>
            {sections.map((section, idx) => (
                <Grid2
                    container
                    sx={{ marginBottom: `${idx === sections.length - 1 ? '0' : '40px'}` }}
                    key={section.key}
                >
                    <Grid2
                        size={{ xs: 12, sm: 12, md: 5, lg: 4, xl: 4 }}
                        sx={{ paddingRight: "10px", paddingBottom: `${idx === sections.length - 1 ? '0' : '20px'}` }}
                    >
                        {section.link && (
                            <iframe
                                src={section.link}
                                allowFullScreen={true}
                                title={section.title}
                                style={{ border: 'none', width: '100%', height: '100%', borderRadius: '8px' }}
                            />
                        )}
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, md: 7, lg: 8, xl: 8 }}>
                        <div>
                            <h4 style={{ marginTop: "0px" }}>{section.title}</h4>
                            <p>
                                {section.description}
                            </p>
                            {section.canvaLink && (
                                <CustomButton
                                    customVariant="text"
                                    onClick={() => window.open(section.canvaLink, '_blank')}
                                    size="small"
                                    sx={{ textTransform: 'none', marginTop: '10px' }}
                                >
                                    View on Canva
                                    <OpenInNewIcon fontSize="small" sx={{ marginLeft: '8px' }} />
                                </CustomButton>
                            )}
                        </div>
                    </Grid2>
                </Grid2>
            ))}
        </div>
    )
}

export default Brochure