import { Grid2, Tooltip } from "@mui/material"
import { 
    Slack, Outlook
} from "developer-icons"
import Zoom from '../logos/Zoom'
import Trello from "../logos/Trello"
import ClickUp from "../logos/ClickUp"
import MSWord from "../logos/MSWord"
import MSTeams from "../logos/MSTeams"
import MSExcel from "../logos/MSExcel"
import MSPowerPoint from "../logos/MSPowerPoint"
import GDocs from "../logos/GDocs"
import GSheets from "../logos/GSheets"
import Calendar from "../logos/Calendar"
import GMeet from "../logos/GMeet"
import GoogleAnalytics from "../logos/GoogleAnalytics"
import colors from "../../colors"

const VirtualAssistance = () => {
    return (
        <>
            <p className="text-md">Microsoft Office Suite</p>
            <Grid2 container className="skill-bar" spacing={2}>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Microsoft Word">
                        <MSWord />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Microsoft Outlook">
                        <Outlook fontSize="large" />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Microsoft Teams">
                        <MSTeams />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Microsoft Excel">
                        <MSExcel />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Microsoft PowerPoint">
                        <MSPowerPoint />
                    </Tooltip>
                </Grid2>
            </Grid2>

            <p className="text-md">Google Workspace</p>
            <Grid2 container className="skill-bar" spacing={2}>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Google Docs">
                        <GDocs />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Google Sheets">
                        <GSheets />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Google Calendar">
                        <Calendar />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Google Meet">
                        <GMeet />
                    </Tooltip>
                </Grid2>
            </Grid2>

            <p className="text-md">Productivity, Collaboration, and Analytics Tools</p>
            <Grid2 container className="skill-bar" spacing={2}>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Slack">
                        <Slack />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Zoom">
                        <Zoom />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Trello">
                        <Trello />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="ClickUp">
                        <ClickUp />
                    </Tooltip>
                </Grid2>
                <Grid2 className="skill-bar-item">
                    <Tooltip title="Google Analytics">
                        <GoogleAnalytics />
                    </Tooltip>
                </Grid2>
            </Grid2>

            <p className="text-md">Others</p>
            <div className="skill-bar" style={{ textAlign: "left", padding: "20px 40px" }}>
                <ul className="text-sm" style={{ margin: 0, paddingLeft: "20px", color: colors.textDark }}>
                    <li>Administrative support (calendar and email management)</li>
                    <li>Project coordination</li>
                    <li>Communication and collaboration</li>
                    <li>Problem solving and adaptability</li>
                    <li>Attention to detail</li>
                </ul>
            </div>
        </>
    )
}

export default VirtualAssistance
