import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const Packets = () => {
    const sections = [
        {
            key: "jovi-coming-soon-ig",
            title: "Jovihanni Coming Soon Instagram Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/1.png",
        },
        {
            key: "jovi-coming-soon-fb",
            title: "Jovihanni Coming Soon Facebook Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/2.png",
        },
        {
            key: "jovi-just-listed-ig",
            title: "Jovihanni Just Listed Instagram Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/3.png",
        },
        {
            key: "jovi-just-listed-fb",
            title: "Jovihanni Just Listed Facebook Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/4.png",
        },
        {
            key: "jovi-open-house-ig",
            title: "Jovihanni Open House Instagram Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/5.png",
        },
        {
            key: "jovi-open-house-fb",
            title: "Jovihanni Open House Facebook Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/6.png",
        },
        {
            key: "jovi-under-contract-ig",
            title: "Jovihanni Under Contract Instagram Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/7.png",
        },
        {
            key: "jovi-under-contract-fb",
            title: "Jovihanni Under Contract Facebook Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/8.png",
        },
        {
            key: "jovi-sold-ig",
            title: "Jovihanni Sold Instagram Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/9.png",
        },
        {
            key: "jovi-sold-fb",
            title: "Jovihanni Sold Facebook Post",
            link: "https://www.canva.com/design/DAG2iCSVyro/b11ISChEW-sKJeeHG07b9w/view?utm_content=DAG2iCSVyro&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h159c02d675",
            imgSrc: "assets/designs/packets/jovi-realty/10.png",
        },
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

export default Packets