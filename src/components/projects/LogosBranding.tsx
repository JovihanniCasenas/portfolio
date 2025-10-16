import { Grid2 } from "@mui/material"
import CustomButton from "../CustomButton"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const LogosBranding = () => {
    const sections = [
        {
            key: "perlas-realty-logo",
            title: "Perlas Realty Logo",
            link: "https://www.canva.com/design/DAG1K7WOnlw/ZUqIATKp9xnumliVQpGlEQ/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1K7WOnlw/L_7qPCJsgQTv7RwKaZVUSA/edit?utm_content=DAG1K7WOnlw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This logo was created for Perlas Realty, a fictional real estate company.
            Perlas, the Filipino word for pearl, pays homage to the Philippines - the Pearl of
            the Orient Sea. The design features a pearl motif, symbolizing elegance and sophistication.
            The first iteration aimed to capture the essence of the brand with the shell and pearl elements.
            The second iteration refined the design, focusing on simplicity and modern aesthetics to ensure versatility across various mediums.
            Finally, the logo was polished to reflect the professionalism and trustworthiness of the real estate industry.`,
        },
        {
            key: "jacaranda-realty-logo",
            title: "Jacaranda Realty Logo",
            link: "https://www.canva.com/design/DAG18sxBCCk/se0bM2Hddls0opGyZPMlGA/view?embed",
            canvaLink: "https://www.canva.com/design/DAG18sxBCCk/cYCxEg22Jcf3ikP7n6UJpw/edit?utm_content=DAG18sxBCCk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This logo was created for Jacaranda Realty, a fictional real estate company that I fictionally own.
            The jacaranda tree is known for its vibrant purple flowers, symbolizing beauty and growth. I also chose this name due to its same initial as my own name, Jovi.
            The design features a segment of a jacaranda flower, representing the company's commitment to helping clients find their dream homes.`
        },
        {
            key: "wondererxwanderer-brand-kit",
            title: "wondererxwanderer Brand Kit",
            link: "https://www.canva.com/design/DAG1CE-LzQg/hbJrNnHk5LHaskI0hFs92Q/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1CE-LzQg/hVfQ3Ted1T6gaybCvqtflQ/edit?utm_content=DAG1CE-LzQg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This brand kit was developed for wondererxwanderer, a personal blog dedicated to creative writing.
            The brand kit includes a logo, color palette, typography guidelines, and other visual elements that reflect the blog's identity.
            The design process involved selecting colors and fonts that evoke a sense of creativity and inspiration, aligning with the blog's purpose of sharing imaginative stories and ideas.
            The final brand kit provides a cohesive visual identity that can be consistently applied across various platforms, enhancing the blog's recognition and appeal.`,
        },
        {
            key: "jovi-brand-kit",
            title: "Jovi Brand Kit",
            link: "https://www.canva.com/design/DAG1elW_DOg/jakT-4b2mnDn-llogGGw8w/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1elW_DOg/qDhhMPsKoVPwnvBXe0x8SQ/edit?utm_content=DAG1elW_DOg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This brand kit was created for Jovi, a personal brand that represents my VA identity.
            The brand kit includes a logo, color scheme, typography, and other design elements that reflect my personality and values.
            The design process involved selecting colors and fonts that convey professionalism, creativity, and approachability.
            The final brand kit provides a consistent visual identity that can be used across various platforms, including my portfolio website, social media profiles, and business cards.`,
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
                        {section.link && (
                            <iframe
                                src={section.link}
                                allowFullScreen={true}
                                title={section.title}
                                style={{ border: 'none', width: '100%', height: '100%', borderRadius: '8px' }}
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

export default LogosBranding