import { Avatar, Grid } from "@mui/material"
import colors from "@/utils/colors"

const Systems = () => {
    return (
        <>
        <Grid justifyContent={"center"} container>
                <Grid
                    size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
                    margin={"20px"}
                >
                    <a
                        href="https://wondererxwanderer.jovihanni.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-card">
                            <Avatar alt="Blog" src="/assets/astronaut-no-bg.png" sx={{ width: 100, height: 100 }} />
                            <p className="project-card-title text-lg" style={{ color: colors.tertiary }}>Blog</p>
                            <p className="project-card-content text-sm" style={{ color: colors.tertiary }}>
                                Website for my creative writing pieces
                                developed using VueJS and Vuetify framework,
                                then deployed on Netlify.
                            </p>
                        </div>
                    </a>
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
                    margin={"20px"}
                >
                    <a
                        href="https://github.com/JovihanniCasenas/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-card">
                            <Avatar alt="Blog" src="/assets/j-logo.png" sx={{ width: 100, height: 100 }} />
                            <p className="project-card-title text-lg" style={{ color: colors.tertiary }}>Portfolio</p>
                            <p className="project-card-content text-sm" style={{ color: colors.tertiary }}>
                                This portfolio is created from scratch
                                with Vite, React, and MUI for styling. Deployed currently
                                on Netlify but will be moving to 
                                AWS soon.
                            </p>
                        </div>
                    </a>
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
                    margin={"20px"}
                >
                    <a
                        href="https://jovihanni.com/simple-sse"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-card">
                            <Avatar alt="Hi Low Game" src="/assets/simple-sse.png" sx={{ width: 100, height: 100 }} />
                            <p className="project-card-title text-lg" style={{ color: colors.tertiary }}>Simple SSE</p>
                            <p className="project-card-content text-sm" style={{ color: colors.tertiary }}>
                                A simple server-sent events counter application to demonstrate real-time updates. 
                            </p>
                        </div>
                    </a>
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
                    margin={"20px"}
                >
                    <a
                        href="https://jovihannicasenas.github.io/high-low-game-web-app/#/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-card">
                            <Avatar alt="Hi Low Game" src="/assets/high-low.png" sx={{ width: 100, height: 100 }} />
                            <p className="project-card-title text-lg" style={{ color: colors.tertiary }}>High Low</p>
                            <p className="project-card-content text-sm" style={{ color: colors.tertiary }}>
                                Interactive game developed using flutter. Can be played via mobile, desktop, or web.
                            </p>
                        </div>
                    </a>
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
                    margin={"20px"}
                >
                    <a
                        href="https://github.com/JovihanniCasenas/hulagway"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-card">
                            <Avatar alt="Hulagway" src="/assets/hulagway.png" sx={{ width: 100, height: 100 }} />
                            <p className="project-card-title text-lg" style={{ color: colors.tertiary }}>Hulagway</p>
                            <p className="project-card-content text-sm" style={{ color: colors.tertiary }}>
                                Image gallery to manage local storage images meant to be hosted locally along with
                                tools like Tailscale for outside the network access.
                                Created using ReactJS, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                    </a>
                </Grid>
            </Grid>
            <div style={{ height: "30px" }}></div>
        </>
    )
}

export default Systems