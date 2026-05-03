"use client"

import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import LaptopMacIcon from "@mui/icons-material/LaptopMac"
import LaunchIcon from "@mui/icons-material/Launch"
import Typography from "@mui/material/Typography"
import HighlightHover from "@/components/ui/HighlightHover"
import colors from "@/utils/colors"

export default function WorkExperience() {
  const data = [
    {
      key: "engineer",
      title: "Software Engineer and Team Lead",
      company: "Alphaus Inc.",
      companyUrl: "https://alphaus.cloud",
      date: "Oct 2024 - Present",
    },
    {
      key: "jr-engineer",
      title: "Junior Software Engineer",
      company: "Alphaus Inc.",
      companyUrl: "https://alphaus.cloud",
      date: "Aug 2023 - Sep 2024",
    },
  ]

  return (
    <div>
      <section id="work-experience" className="text-2xl font-bold mb-2">
        Work Experience
      </section>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.4,
          },
          width: "100%",
          padding: 0,
        }}
      >
        {data.map((item) => (
          <TimelineItem key={item.key}>
            <TimelineOppositeContent
              style={{
                color: colors.textLight,
                textAlign: "left",
                paddingLeft: 0,
              }}
            >
              <div className="text-xs mt-1">{item.date}</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="h6"
                component="span"
                style={{ color: colors.textLight }}
              >
                {item.title}
              </Typography>
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HighlightHover>
                  {item.company}
                  <LaunchIcon className="ml-1" />
                </HighlightHover>
              </a>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-md flex items-center transition-transform hover:scale-103 origin-left"
        style={{ color: colors.secondary }}
      >
        View Full Resume
        <LaunchIcon className="ml-1" />
      </a>
    </div>
  )
}
