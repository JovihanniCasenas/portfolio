import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const Websites = () => {
    const sections = [
        {
            key: "lafayette-landing-page",
            title: "Lafayette Property Landing Page",
            link: "https://sites-external.egsolutions.ph/jovi-just-listed",
            imgSrc: "assets/websites/lafayette-landing-page.png",
        },
        {
            key: "virtual-tour-event",
            title: "Sample Virtual Tour Event Page",
            link: "https://jovihanni-egs.mailchimpsites.com/",
            imgSrc: "assets/websites/virtual-tour-event.png",
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
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Websites