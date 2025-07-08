import { Gmail, LinkedIn, GitHubLight } from "developer-icons"
import { Grid2, Tooltip } from "@mui/material"

interface ContactProps {
    isMobile: boolean;
}

const Contact = (props: ContactProps) => {
    return (
        <div className="page-wrapper">
            <h1 id="contact">Contact Me</h1>

            <Grid2 container spacing={2} width={props.isMobile ? "90vw" : "50vw"} justifyContent="center" textAlign={"center"}>
                <Grid2 size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }} justifyContent={"center"}>
                    <Tooltip title="Email">
                        <a href="mailto:casenasjovihanni@gmail.com">
                            <Gmail />
                        </a>
                    </Tooltip>
                </Grid2>

                <Grid2 size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>

                    <Tooltip title="LinkedIn">
                        <a
                            href="https://www.linkedin.com/in/jovihanni-casenas-189438286"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </a>
                    </Tooltip>
                </Grid2>

                <Grid2 size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <Tooltip title="GitHub">
                        <a
                            href="https://github.com/JovihanniCasenas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubLight />
                        </a>
                    </Tooltip>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Contact