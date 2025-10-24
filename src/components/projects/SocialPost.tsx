import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const SocialPost = () => {
    const sections = [
        {
            key: "sq-1",
            title: "Instagram Post 1",
            link: "https://www.canva.com/design/DAG1CC-VCCI/CNQXBbUrpaxjNYuzeLT-tQ/view?utm_content=DAG1CC-VCCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha5b2bb7448",
            imgSrc: "assets/designs/social-square/1.png",
        },
        {
            key: "sq-2",
            title: "Instagram Post 2",
            link: "https://www.canva.com/design/DAG1CC-VCCI/CNQXBbUrpaxjNYuzeLT-tQ/view?utm_content=DAG1CC-VCCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha5b2bb7448",
            imgSrc: "assets/designs/social-square/2.png",
        },
        {
            key: "sq-3",
            title: "Instagram Post 3",
            link: "https://www.canva.com/design/DAG1CC-VCCI/CNQXBbUrpaxjNYuzeLT-tQ/view?utm_content=DAG1CC-VCCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha5b2bb7448",
            imgSrc: "assets/designs/social-square/3.png",
        },
        {
            key: "sq-4",
            title: "Instagram Post 4",
            link: "https://www.canva.com/design/DAG1CC-VCCI/CNQXBbUrpaxjNYuzeLT-tQ/view?utm_content=DAG1CC-VCCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha5b2bb7448",
            imgSrc: "assets/designs/social-square/4.png",
        },
        {
            key: "sq-5",
            title: "Instagram Post 5",
            link: "https://www.canva.com/design/DAG1CC-VCCI/CNQXBbUrpaxjNYuzeLT-tQ/view?utm_content=DAG1CC-VCCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha5b2bb7448",
            imgSrc: "assets/designs/social-square/5.png",
        },
        {
            key: "story-1",
            title: "Instagram Story 1",
            link: "https://www.canva.com/design/DAG1CALYQI4/y54AxkQ3p1uI9RYjXwuJ0g/view?utm_content=DAG1CALYQI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfef2ec621",
            imgSrc: "assets/designs/stories/6.png",
        },
        {
            key: "story-2",
            title: "Instagram Story 2",
            link: "https://www.canva.com/design/DAG1CALYQI4/y54AxkQ3p1uI9RYjXwuJ0g/view?utm_content=DAG1CALYQI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfef2ec621",
            imgSrc: "assets/designs/stories/7.png",
        },
        {
            key: "story-3",
            title: "Instagram Story 3",
            link: "https://www.canva.com/design/DAG1CALYQI4/y54AxkQ3p1uI9RYjXwuJ0g/view?utm_content=DAG1CALYQI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfef2ec621",
            imgSrc: "assets/designs/stories/8.png",
        },
        {
            key: "story-4",
            title: "Instagram Story 4",
            link: "https://www.canva.com/design/DAG1CALYQI4/y54AxkQ3p1uI9RYjXwuJ0g/view?utm_content=DAG1CALYQI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfef2ec621",
            imgSrc: "assets/designs/stories/9.png",
        },
        {
            key: "story-5",
            title: "Instagram Story 5",
            link: "https://www.canva.com/design/DAG1CALYQI4/y54AxkQ3p1uI9RYjXwuJ0g/view?utm_content=DAG1CALYQI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfef2ec621",
            imgSrc: "assets/designs/stories/10.png",
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

export default SocialPost