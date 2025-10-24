import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const EmailCampaign = () => {
    const sections = [
        {
            key: "real-estate-just-listed",
            title: "Real Estate Just Listed Email Campaign",
            link: "https://mailchi.mp/0040a24e2b0d/just-listed-your-dream-home-awaits-in-forest-hill-south-toronto",
            imgSrc: "assets/designs/emailcampaign/real-estate-just-listed.png",
        },
        {
            key: "jovi-just-listed",
            title: "Jovihanni Realty Just Listed Landing Page",
            link: "https://www.canva.com/design/DAG2tdd02QE/g-5xGMU5Iunc57_CINpXmg/view?utm_content=DAG2tdd02QE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb2c88a8873",
            imgSrc: "assets/designs/emailcampaign/jovi-just-listed.png",
        },
        {
            key: "virtual-tour-invitation",
            title: "Sample Virtual Tour Invitation Email Campaign",
            link: "https://mailchi.mp/b5ce3a8db566/experience-green-mountain-living-virtually-13765605",
            imgSrc: "assets/designs/emailcampaign/virtual-tour-event.png",
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