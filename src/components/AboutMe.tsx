import { Stack } from "@mui/material"

const AboutMe = () => {
    return (
        <div className="page-wrapper">
            <Stack direction={'row'}>
                <div style={{ textAlign: "center" }}>
                    <h1 id="about">Hi, I'm Jovihanni.</h1>
                    <p className="text-md" style={{maxWidth: "50vw", lineHeight: "1.5"}}>
                        I'm a software engineer with more than a year of experience.
                        Working with a startup propelled me to learn and adapt quickly.
                        This includes working with various technologies and tools that
                        are used in full-stack web development. I have progressed
                        from a junior software engineer to a dev team lead which
                        enabled me to solidify my skills as I mentor juniors.
                    </p>
                </div>
            </Stack>
        </div>
    )
}

export default AboutMe