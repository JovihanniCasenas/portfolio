import { Grid2 } from "@mui/material"
import CustomButton from "../CustomButton"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SocialPost = () => {
    const sections = [
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

export default SocialPost