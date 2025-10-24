import { Grid } from "@mui/material"
import TextWrapper from "../TextWrapper"

const Analytics = () => {
    return (
        <div>
            <TextWrapper>Experienced in setting up and managing Google Analytics and Google Tag Manager for various websites.</TextWrapper>
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <img src="/assets/tech/ga-1.png" alt="Analytics Graph 1" style={{ maxWidth: "100%", height: "auto", borderRadius: '8px' }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <img src="/assets/tech/ga-2.png" alt="Analytics Graph 2" style={{ maxWidth: "100%", height: "auto", borderRadius: '8px' }} />
                </Grid>
                <TextWrapper>
                    Above two images are Google Analytics dashboard that track site visitors.
                    This helped us gain insights on the number of visitors, their behavior, and the overall performance of the website.
                </TextWrapper>
            </Grid>
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <img src="/assets/tech/ga-events.png" alt="Google Analytics Events" style={{ maxWidth: "100%", height: "auto", borderRadius: '8px' }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <img src="/assets/tech/gtm-triggers.png" alt="Google Tag Manager Triggers" style={{ maxWidth: "100%", height: "auto", borderRadius: '8px' }} />
                </Grid>
                <TextWrapper>
                    Above images are the events captured by Google Analytics through Google Tag Manager triggers.
                    This setup allowed us to monitor specific user interactions, such as button clicks and form submissions, providing valuable data for optimizing user experience and conversion rates.
                </TextWrapper>
            </Grid>
        </div>
    )
}

export default Analytics