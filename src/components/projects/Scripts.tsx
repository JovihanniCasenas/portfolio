import { Grid2 } from "@mui/material"
import TextWrapper from "../TextWrapper"

const Scripts = () => {
    return (
        <Grid2 container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <img src="/assets/sheets-script.png" alt="Google Sheets Script" style={{ maxWidth: "100%", height: "auto" }} />
            </Grid2>
            <TextWrapper>
                Integrated the above Google Sheets script to automate counting of cells of specific colors
                to easily consolidate custom sheets calendar data.
            </TextWrapper>
        </Grid2>
    )
}

export default Scripts