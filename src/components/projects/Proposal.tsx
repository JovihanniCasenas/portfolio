import { Grid2 } from "@mui/material"
import CustomButton from "../CustomButton"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Proposal = () => {
    const sections = [
        {
            key: "sample-proposal",
            title: "Sample Digital Presence Boost Proposal",
            link: "https://www.canva.com/design/DAG1e5GFEhA/qizKPfPpvA_RFBeRb0vAZQ/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1e5GFEhA/xSFOVlYyWjJ5Cf7eGN0PgQ/edit?utm_content=DAG1e5GFEhA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This sample proposal was created to outline a strategy for enhancing AureliaGHomes' digital presence.
            The proposal features a professional design that clearly communicates the goals, strategies, and expected outcomes.
            The design process involved creating a layout that is easy to follow and visually engaging, incorporating elements from my personal brand kit.
            The final proposal serves as a comprehensive guide for the potential client, showcasing my skills in digital marketing and branding.`,
        },
        {
            key: "sample-36-touches-proposal",
            title: "Sample 36 Touches Proposal",
            link: "https://www.canva.com/design/DAG1t-aSy8M/57rTA5de1LDDpWuLi_Wl9w/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1t-aSy8M/exG34lJI4-yKI4vKH8tfGQ/view?utm_content=DAG1t-aSy8M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha406e49d23",
            description: `This sample proposal was created to outline a comprehensive 36 touches marketing strategy for AureliaGHomes.
            The proposal features a clean and professional design that effectively communicates the various touchpoints and strategies involved in the campaign.`,
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

export default Proposal