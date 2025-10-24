import { Grid } from "@mui/material"
import CustomButton from "../CustomButton"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DesignBranding = () => {
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
        },
        {
            key: "instagram-stories",
            title: "Instagram Stories",
            link: "https://www.canva.com/design/DAG1CALYQI4/y54AxkQ3p1uI9RYjXwuJ0g/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1CALYQI4/WjzxLdioEDfvp7HTyASX1g/edit?utm_content=DAG1CALYQI4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `These Instagram story samples were designed to enhance my social media presence and engage with my audience.
            The templates feature a cohesive design that aligns with the wondererxwanderer brand, incorporating elements from the brand kit.
            The design process involved creating visually appealing layouts that can be easily customized for different types of content, such as announcements, quotes, and promotions.
            The final templates provide a consistent and professional look for my Instagram stories, helping to increase brand recognition and engagement.`,
        },
        {
            key: "square-posts",
            title: "Square Posts",
            link: "https://www.canva.com/design/DAG1CC-VCCI/CNQXBbUrpaxjNYuzeLT-tQ/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1CC-VCCI/zR8J5J3CmflpON3-3W58-Q/edit?utm_content=DAG1CC-VCCI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `These square post samples were designed for my Instagram and Facebook feed to create a visually appealing and cohesive look.
            The templates incorporate elements from the wondererxwanderer brand kit, ensuring consistency across my social media presence.
            The design process involved creating layouts that can be easily customized for various types of content, such as quotes, announcements, and promotions.
            The final templates provide a polished and professional appearance for my Instagram posts, helping to enhance my brand identity and engage with my audience.`,
        },
        {
            key: "sample-brochure",
            title: "Launch Your Vision: Sample VA Brochure",
            link: "https://www.canva.com/design/DAG1e84WxBs/B1GAKUE73uXNuAj0bv3uPg/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1e84WxBs/Dge_S6qBxVjlmRK5mlLUig/edit?utm_content=DAG1e84WxBs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This sample brochure was created to showcase my services as a Virtual Assistant.
            The brochure features a clean and professional design that highlights my skills, experience, and service offerings.
            The design process involved selecting a layout that is easy to read and visually appealing, incorporating elements from the wondererxwanderer brand kit.
            The final brochure provides a comprehensive overview of my VA services, making it an effective marketing tool to attract potential clients.`,
        },
        {
            key: "sample-proposal",
            title: "Sample Digital Presence Boost Proposal",
            link: "https://www.canva.com/design/DAG1e5GFEhA/qizKPfPpvA_RFBeRb0vAZQ/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1e5GFEhA/xSFOVlYyWjJ5Cf7eGN0PgQ/edit?utm_content=DAG1e5GFEhA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This sample proposal was created to outline a strategy for enhancing AureliaGHomes' digital presence.
            The proposal features a professional design that clearly communicates the goals, strategies, and expected outcomes.
            The design process involved creating a layout that is easy to follow and visually engaging, incorporating elements from my personal brand kit.
            The final proposal serves as a comprehensive guide for the potential client, showcasing my skills in digital marketing and branding.`,
        },
        {
            key: "one-pager",
            title: "VA services One-Pager",
            link: "https://www.canva.com/design/DAG1exM87BI/xrQzofHIXMntA6G_ruWNEA/view?embed",
            canvaLink: "https://www.canva.com/design/DAG1exM87BI/VwSC4guvwDSVR2WhxfwXSw/edit?utm_content=DAG1exM87BI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This one-pager was created to provide a concise overview of my services as a Virtual Assistant.
            The design features a clean and modern layout that highlights key information, including my skills, experience, and service offerings.
            The design process involved selecting a layout that is easy to read and visually appealing, incorporating elements from my personal brand kit.
            The final one-pager serves as an effective marketing tool to attract potential clients, providing them with a quick snapshot of what I can offer.`,
        },
        {
            key: "real-estate-just-listed",
            title: "Real Estate Just Listed Email Campaign",
            img: "assets/real-estate-just-listed.png",
            canvaLink: "https://www.canva.com/design/DAG0CHTDX_w/iaItagOOhCqW9y2KiTzcgw/edit?utm_content=DAG0CHTDX_w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: `This real estate "Just Listed" email campaign was designed to promote new property listings.
            The template features a visually appealing layout that highlights key details about the property, including images, and features.
            The design process involved creating a layout that is easy to customize for different property listings, incorporating elements from my personal brand kit.
            The final template provides a professional and eye-catching design that can help attract potential buyers and increase engagement.`,
        }
    ]
    return (
        <div>
            {sections.map((section, idx) => (
                <Grid
                    container
                    sx={{ marginBottom: `${idx === sections.length - 1 ? '0' : '40px'}` }}
                    key={section.key}
                >
                    <Grid
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
                        {section.img && (
                            <img
                                src={section.img}
                                alt={section.title}
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        )}
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8, xl: 8 }}>
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
                    </Grid>
                </Grid>
            ))}
        </div>
    )
}

export default DesignBranding