"use client"

import useIsMobile from "@/hooks/useIsMobile"
import { Gmail, LinkedIn, GitHubLight } from "developer-icons"
import { Grid, Tooltip } from "@mui/material"
import colors from "@/utils/colors"

const Contact = () => {
    const isMobile = useIsMobile()

    return (
        <div className="page-wrapper">
            <h1 id="contact">Contact Me</h1>

            <Grid container spacing={2} width={isMobile ? "90vw" : "50vw"} justifyContent="center" textAlign={"center"}>
                <Grid size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }} justifyContent={"center"}>
                    <Tooltip title="Email">
                        <a href="mailto:casenasjovihanni@gmail.com">
                            <Gmail />
                        </a>
                    </Tooltip>
                </Grid>

                <Grid size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>

                    <Tooltip title="LinkedIn">
                        <a
                            href="https://www.linkedin.com/in/jovihanni-casenas-189438286"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </a>
                    </Tooltip>
                </Grid>

                <Grid size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <Tooltip title="GitHub">
                        <a
                            href="https://github.com/JovihanniCasenas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubLight />
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>

            <div className="skill-bar" style={{ textAlign: "left", padding: "20px 40px", marginTop: "30px" }}>
                <div className="text-sm" style={{ margin: 0, color: colors.textDark }}>
                    <h3 style={{ marginTop: "0px" }}>For Virtual Assistance inquiries</h3>
                    <p>Email: {" "}
                        <a
                            href="mailto:askinfo.egs@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontWeight: 'normal', color: 'inherit', textDecoration: 'none' }}
                        >
                            askinfo.egs@gmail.com
                        </a>
                        </p>
                    <p>Phone: +1 720-575-0579</p>
                </div>
            </div>
        </div>
    )
}

export default Contact