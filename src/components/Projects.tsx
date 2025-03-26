import { Avatar, Grid2 } from "@mui/material"
import colors from "../colors"

const Projects = () => {
    return (
        <div className="page-wrapper">
            <h1 id="projects">Projects</h1>
            <Grid2 container>
                <Grid2
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
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
                                Site for my creative writing pieces
                                developed using VueJS with the Vuetify framework
                                then deployed in netlify
                            </p>
                        </div>
                    </a>
                </Grid2>

                <Grid2
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                    justifyContent={"center"}
                    display={"flex"}
                    padding={"20px"}
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
            </Grid2>
        </div>
    )
}

export default Projects