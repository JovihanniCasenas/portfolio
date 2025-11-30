import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import Typography from '@mui/material/Typography'
import colors from '@/utils/colors'

const ExperienceTimeline = () => {
    const data = [
        {
            key: "engineer",
            title: "Software Engineer",
            company: "Alphaus Inc.",
            companyUrl: "https://alphaus.cloud",
            date: "July 2025 - Present",
        },
        {
            key: "lead",
            title: "Dev Team Lead",
            company: "Alphaus Inc.",
            companyUrl: "https://alphaus.cloud",
            date: "October 2024 - June 2025",
        },
        {
            key: "jr-engineer",
            title: "Junior Software Engineer",
            company: "Alphaus Inc.",
            companyUrl: "https://alphaus.cloud",
            date: "August 2023 - September 2024",
        }
    ]

    return (
        <Timeline sx={{ width: '100%' }}>
            {data.map((item) => (
                <TimelineItem key={item.key}>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color={colors.textLight}
                    >
                        {item.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{ bgcolor: colors.secondary }}>
                            <LaptopMacIcon sx={{ color: colors.tertiary }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" style={{ color: colors.textLight }}>
                            {item.title}
                        </Typography>
                        <a
                            href="https://alphaus.cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Typography style={{ color: colors.textLight }}>{item.company}</Typography>
                        </a>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}

export default ExperienceTimeline