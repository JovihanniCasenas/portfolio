import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const EmailCampaign = () => {
    const sections = [
        {
            key: "real-estate-just-listed",
            title: "Real Estate Just Listed Email Campaign",
            link: "https://mailchi.mp/0040a24e2b0d/just-listed-your-dream-home-awaits-in-forest-hill-south-toronto",
            imgSrc: "assets/real-estate-just-listed.png",
        }
    ]
    return (
        <div>
            <Grid
                container
            >
                {sections.map((section, idx) => (
                    <Grid
                        key={section.key}
                        size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}
                        sx={{ paddingRight: "4px", paddingBottom: `${idx === sections.length - 1 ? '0' : '4px'}` }}
                    >
                        <PreviewCard
                            key={section.key}
                            title={section.title}
                            link={section.link}
                            imgSrc={section.imgSrc}
                            fit="cover"
                            focus="top"
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default EmailCampaign