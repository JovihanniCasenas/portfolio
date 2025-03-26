import { Stack } from "@mui/material"

interface AboutMeProps {
    isMobile: boolean;
}

const AboutMe = (props: AboutMeProps) => {
    return (
        <div className="page-wrapper">
            <Stack direction={'row'}>
                <div style={{
                    textAlign: "center",
                    justifyContent: "center"
                }}>
                    <h1 id="about">Hi, I'm Jovihanni.</h1>
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                        }}
                    >
                        <p
                            className="text-md"
                            style={{
                                maxWidth: props.isMobile
                                    ? "90vw"
                                    : "50vw",
                                lineHeight: "1.5",
                            }}
                        >
                            I'm a software engineer with more than a year of experience.
                            Working with a startup propelled me to learn and adapt quickly.
                            This includes working with various technologies and tools that
                            are used in full-stack web development. I have progressed
                            from a junior software engineer to a dev team lead which
                            enabled me to solidify my skills as I mentor juniors.
                        </p>
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default AboutMe