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
        },
        {
            key: "what-is-va",
            title: "What is a VA Infographic",
            link: "https://www.canva.com/design/DAG0U7sVgo4/XCIBabiXUSasaHzy-0sGOw/view?utm_content=DAG0U7sVgo4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd396f6774b",
            imgSrc: "assets/designs/what-is-va.png",
        },
        {
            key: "handling-multi-tasks",
            title: "Handling Multiple Tasks Infographic",
            link: "https://www.canva.com/design/DAG0ro5_wzo/UmDQeOcvoXC_Wn2d8Pf9TA/view?utm_content=DAG0ro5_wzo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h896939a590",
            imgSrc: "assets/designs/handle-multi-tasks.png",
        },
        {
            key: "jessica-realty-sample-1",
            title: "Jessica Realty Sample Post 1",
            link: "https://www.canva.com/design/DAG1WVqj8As/MWy0Wjxo5BTJ05-Krqq2Fg/view?utm_content=DAG1WVqj8As&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5927457e84",
            imgSrc: "assets/designs/jessica-realty/1.png",
        },
        {
            key: "jessica-realty-sample-2",
            title: "Jessica Realty Sample Post 2",
            link: "https://www.canva.com/design/DAG1WVqj8As/MWy0Wjxo5BTJ05-Krqq2Fg/view?utm_content=DAG1WVqj8As&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5927457e84",
            imgSrc: "assets/designs/jessica-realty/2.png",
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