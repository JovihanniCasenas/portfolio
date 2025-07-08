import { Avatar, Grid2 } from "@mui/material"
import colors from "../colors"

const Projects = () => {
    return (
        <div className="page-wrapper" style={{ marginBottom: "60px"}}>
            <h1 id="projects">Projects</h1>
            <Grid2 justifyContent={"center"} container>
                <Grid2
                    size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
                    margin={"20px"}
                >
                    <a
                        href="https://wondererxwanderer.netlify.app"
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
                </Grid2>

                <Grid2
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
                </Grid2>

                <Grid2
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
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Projects