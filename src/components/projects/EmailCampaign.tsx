import { Grid2 } from "@mui/material"
import CustomButton from "../CustomButton"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const EmailCampaign = () => {
    const sections = [
        {
            key: "real-estate-just-listed",
            title: "Real Estate Just Listed Email Campaign",
            img: "assets/real-estate-just-listed.png",
            canvaLink: "https://www.canva.com/design/DAG0CHTDX_w/iaItagOOhCqW9y2KiTzcgw/edit?utm_content=DAG0CHTDX_w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This real estate "Just Listed" email campaign was designed to promote new property listings.
            The template features a visually appealing layout that highlights key details about the property, including images, and features.
            The design process involved creating a layout that is easy to customize for different property listings, incorporating elements from my personal brand kit.
            The final template provides a professional and eye-catching design that can help attract potential buyers and increase engagement.`,
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
                        {section.img && (
                            <img
                                src={section.img}
                                alt={section.title}
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
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

export default EmailCampaign