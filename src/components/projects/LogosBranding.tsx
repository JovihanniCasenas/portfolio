import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const LogosBranding = () => {
    const sections = [
        {
            key: "perlas-realty-logo",
            title: "Perlas Realty Logo",
            link: "https://www.canva.com/design/DAG1K7WOnlw/ZUqIATKp9xnumliVQpGlEQ/view?utm_content=DAG1K7WOnlw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8fa49607be",
            imgSrc: "assets/designs/perlas.png",
            description: `This logo was created for Perlas Realty, a fictional real estate company.
            Perlas, the Filipino word for pearl, pays homage to the Philippines - the Pearl of
            the Orient Sea. The design features a pearl motif, symbolizing elegance and sophistication.
            The first iteration aimed to capture the essence of the brand with the shell and pearl elements.
            The second iteration refined the design, focusing on simplicity and modern aesthetics to ensure versatility across various mediums.
            Finally, the logo was polished to reflect the professionalism and trustworthiness of the real estate industry.`,
        },
        {
            key: "jovi-realty-logo",
            title: "Jovihanni Realty Logo",
            link: "https://www.canva.com/design/DAG2nlmRFE4/6teDDSbvJJIE0K7M8bkjZA/view?utm_content=DAG2nlmRFE4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h36caf432e7",
            imgSrc: "assets/designs/jovi-real-estate.png",
        },
        {
            key: "wondererxwanderer-brand-kit",
            title: "wondererxwanderer Brand Kit",
            link: "https://www.canva.com/design/DAG1CE-LzQg/hbJrNnHk5LHaskI0hFs92Q/view?utm_content=DAG1CE-LzQg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7973615f35",
            imgSrc: "assets/designs/wxw.png",
            description: `This brand kit was developed for wondererxwanderer, a personal blog dedicated to creative writing.
            The brand kit includes a logo, color palette, typography guidelines, and other visual elements that reflect the blog's identity.
            The design process involved selecting colors and fonts that evoke a sense of creativity and inspiration, aligning with the blog's purpose of sharing imaginative stories and ideas.
            The final brand kit provides a cohesive visual identity that can be consistently applied across various platforms, enhancing the blog's recognition and appeal.`,
        },
        {
            key: "jovi-brand-kit",
            title: "Jovi Brand Kit",
            link: "https://www.canva.com/design/DAG1elW_DOg/jakT-4b2mnDn-llogGGw8w/view?utm_content=DAG1elW_DOg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h275f3ff420",
            imgSrc: "assets/designs/jovi.png",
            description: `This brand kit was created for Jovi, a personal brand that represents my VA identity.
            The brand kit includes a logo, color scheme, typography, and other design elements that reflect my personality and values.
            The design process involved selecting colors and fonts that convey professionalism, creativity, and approachability.
            The final brand kit provides a consistent visual identity that can be used across various platforms, including my portfolio website, social media profiles, and business cards.`,
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
                            description={section.description}
                            link={section.link}
                            imgSrc={section.imgSrc}
                        />
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default LogosBranding