import { Gmail, LinkedIn, GitHubLight } from "developer-icons"
import { Stack, Tooltip } from "@mui/material"
import colors from "../colors"

const Contact = () => {
    return (
        <div className="page-wrapper">
            <h1>Contact Me</h1>
            <Stack direction={'row'} spacing={10} sx={{ marginBottom: "10px", width: "fit-content", alignItems: "center" }}>
                <Tooltip title="Email">
                    <a
                        href="mailto:casenasjovihanni@gmail.com"
                        style={{ color: colors.textLight, display: "inline-flex", flexDirection: "column" }}
                    >
                        <Gmail size={100} />
                    </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                    <a
                        href="https://www.linkedin.com/in/jovihanni-casenas-189438286"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: colors.textLight, display: "inline-flex", flexDirection: "column" }}
                    >
                        <LinkedIn size={100} />
                    </a>
                </Tooltip>
                <Tooltip title="GitHub">
                    <a
                        href="https://github.com/JovihanniCasenas"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: colors.textLight, display: "inline-flex", flexDirection: "column" }}
                    >
                        <GitHubLight size={100} />
                    </a>
                </Tooltip>
            </Stack>
        </div>
    )
}

export default Contact