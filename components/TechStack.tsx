import { Grid, Tooltip } from "@mui/material"
import {
  Go,
  TypeScript,
  PostgreSQL,
  Prisma,
  GraphQL,
  VueJs,
  Pinia,
  React,
  ChakraUI,
  MaterialUI,
  NextJs,
  AWS,
  GoogleCloud,
  Slack,
  Auth0,
} from "developer-icons"

export default function TechStack() {
  const techTypes = [
    {
      title: "Backend technologies",
      techs: [
        { name: "Go", icon: <Go className="max-w-[50px]" /> },
        { name: "TypeScript", icon: <TypeScript className="max-w-[50px]" /> },
        { name: "PostgreSQL", icon: <PostgreSQL className="max-w-[50px]" /> },
        { name: "Prisma", icon: <Prisma className="max-w-[50px]" /> },
        { name: "GraphQL", icon: <GraphQL className="max-w-[50px]" /> },
      ],
    },
    {
      title: "Frontend technologies",
      techs: [
        { name: "VueJs / Vuetify", icon: <VueJs className="max-w-[50px]" /> },
        { name: "Pinia", icon: <Pinia className="max-w-[50px]" /> },
        { name: "React", icon: <React className="max-w-[50px]" /> },
        { name: "ChakraUI", icon: <ChakraUI className="max-w-[50px]" /> },
        { name: "MaterialUI", icon: <MaterialUI className="max-w-[50px]" /> },
        { name: "TypeScript", icon: <TypeScript className="max-w-[50px]" /> },
        { name: "NextJs", icon: <NextJs className="max-w-[50px]" /> },
      ],
    },
    {
      title: "Cloud Service Providers",
      techs: [
        { name: "AWS", icon: <AWS className="max-w-[50px]" /> },
        { name: "GCP", icon: <GoogleCloud className="max-w-[50px]" /> },
      ],
    },
    {
      title: "Integrations",
      techs: [
        { name: "Slack", icon: <Slack className="max-w-[50px]" /> },
        { name: "Auth0", icon: <Auth0 className="max-w-[50px]" /> },
      ],
    },
  ]
  return (
    <div>
      <section id="tech-stack" className="text-2xl font-bold mb-2">
        Technology Stack
      </section>
      {techTypes.map((type, index) => (
        <div key={index}>
          <p className="text-md my-2">{type.title}</p>
          <Grid container spacing={2}>
            {type.techs.map((tech, techIndex) => (
              <Grid key={techIndex}>
                <Tooltip title={tech.name}>{tech.icon}</Tooltip>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  )
}
