import { AppBar, Avatar, Toolbar, Button } from "@mui/material"
import colors from "../colors"
import { Link } from 'react-scroll'

interface HeaderProps {
    onClick: (tab: string) => void;
}

const Header = (props: HeaderProps) => {
    return (
        <>
            <AppBar position="sticky" sx={{ background: "transparent", boxShadow: "none", padding: "10px", width: '100vw', mb: "10px" }}>
                <Toolbar>
                    <Avatar
                        alt="logo"
                        src="public/j-logo.png"
                        sx={{ pr: "10px", cursor: "pointer" }}
                        onClick={() => props.onClick("about")}
                    />

                    <Button
                        color="inherit"
                        component={Link}
                        to="about"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        sx={{
                            '&:hover': {
                                color: colors.tertiary,
                                backgroundColor: colors.secondary,
                            },
                        }}
                        onClick={() => props.onClick("about")}
                    >
                        About Me
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="skillset"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        sx={{
                            '&:hover': {
                                color: colors.tertiary,
                                backgroundColor: colors.secondary,
                            },
                        }}
                        onClick={() => props.onClick("skillset")}
                    >
                        Skillset
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="work"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        sx={{
                            '&:hover': {
                                color: colors.tertiary,
                                backgroundColor: colors.secondary,
                            },
                        }}
                        onClick={() => props.onClick("work")}
                    >
                        Work Experience
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="projects"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        sx={{
                            '&:hover': {
                                color: colors.tertiary,
                                backgroundColor: colors.secondary,
                            },
                        }}
                        onClick={() => props.onClick("projects")}
                    >
                        Projects
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="education"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        sx={{
                            '&:hover': {
                                color: colors.tertiary,
                                backgroundColor: colors.secondary,
                            },
                        }}
                        onClick={() => props.onClick("education")}
                    >
                        Education
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="contact"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        sx={{
                            '&:hover': {
                                color: colors.tertiary,
                                backgroundColor: colors.secondary,
                            },
                        }}
                        onClick={() => props.onClick("contact")}
                    >
                        Contact Me
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header