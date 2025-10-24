import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const Brochure = () => {
    const sections = [
        {
            key: "sample-brochure-1",
            title: "Launch Your Vision: Sample VA Brochure Page 1",
            link: "https://www.canva.com/design/DAG1e84WxBs/B1GAKUE73uXNuAj0bv3uPg/view?embed",
            imgSrc: "assets/designs/brochure/1.png",
        },
        {
            key: "sample-brochure-2",
            title: "Launch Your Vision: Sample VA Brochure Page 2",
            link: "https://www.canva.com/design/DAG1e84WxBs/B1GAKUE73uXNuAj0bv3uPg/view?embed",
            imgSrc: "assets/designs/brochure/2.png",
        },
        {
            key: "one-pager",
            title: "VA services One-Pager",
            link: "https://www.canva.com/design/DAG1exM87BI/xrQzofHIXMntA6G_ruWNEA/view?utm_content=DAG1exM87BI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46e5861d9e",
            imgSrc: "assets/designs/one-pager.png",
            description: `This one-pager was created to provide a concise overview of my services as a Virtual Assistant.
            The design features a clean and modern layout that highlights key information, including my skills, experience, and service offerings.
            The design process involved selecting a layout that is easy to read and visually appealing, incorporating elements from my personal brand kit.
            The final one-pager serves as an effective marketing tool to attract potential clients, providing them with a quick snapshot of what I can offer.`,
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
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Brochure