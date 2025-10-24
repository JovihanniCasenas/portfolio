import { Grid, Tooltip } from "@mui/material"
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
import colors from "@/utils/colors"

const VirtualAssistance = () => {
    return (
        <>
            <p className="text-md">Microsoft Office Suite</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="Microsoft Word">
                        <MSWord />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Microsoft Outlook">
                        <Outlook fontSize="large" />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Microsoft Teams">
                        <MSTeams />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Microsoft Excel">
                        <MSExcel />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Microsoft PowerPoint">
                        <MSPowerPoint />
                    </Tooltip>
                </Grid>
            </Grid>

            <p className="text-md">Google Workspace</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="Google Docs">
                        <GDocs />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Google Sheets">
                        <GSheets />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Google Calendar">
                        <Calendar />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Google Meet">
                        <GMeet />
                    </Tooltip>
                </Grid>
            </Grid>

            <p className="text-md">Productivity, Collaboration, and Analytics Tools</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="Slack">
                        <Slack />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Zoom">
                        <Zoom />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Trello">
                        <Trello />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="ClickUp">
                        <ClickUp />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Google Analytics">
                        <GoogleAnalytics />
                    </Tooltip>
                </Grid>
            </Grid>

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
