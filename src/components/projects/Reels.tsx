import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"
import { title } from "process"

const Reels = () => {
    const sections = [
        {
            key: "training-experience",
            title: "EGS Training Experience Reel",
            link: "https://www.instagram.com/reel/DQDefOMDKe8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            embedLink: "https://drive.google.com/file/d/10clbiac3Lq4xKFnoC5bRY7EgIWSPjf4W/preview",
        },
        {
            key: "plate-too-full",
            title: "Plate Too Full Reel",
            link: "https://www.instagram.com/reel/DQFV4oFDvE5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            embedLink: "https://drive.google.com/file/d/1Ht4OAX_xMeImkEk-YZL2YpD7V6EXBAqj/preview",
        },
        {
            key: "va-testimonial",
            title: "EGS VA Testimonial Reel",
            embedLink: "https://drive.google.com/file/d/1JwPpDd-f2357OKIz_BwsPaOATPZmnYty/preview",
        },
        {
            key: "things-i-thought-were-easy",
            title: "VA Tasks I Thought Were Easy Reel",
            link: "https://www.instagram.com/reel/DQIc-lAD5ND/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            embedLink: "https://drive.google.com/file/d/1anvhFyE4fan4apiBKYSyrcz647BOw8nq/preview",
        },
        {
            key: "agh-new-listing",
            title: "AureliaGHomes New Listing Reel",
            embedLink: "https://drive.google.com/file/d/1G0j5WoWLYVn_hXJKLSW7lTx-0H4E5IYG/preview",
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
                        >
                            {section.embedLink && (
                                <iframe
                                    src={section.embedLink}
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                />
                            )}
                        </PreviewCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Reels