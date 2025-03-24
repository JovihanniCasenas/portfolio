import { Stack, Tooltip } from "@mui/material"
import {
    Go, TypeScript, PostgreSQL, Prisma, GraphQL,
    VueJs, Pinia, React, ChakraUI, MaterialUI, NextJs,
    AWS, GoogleCloud,
    Slack, Auth0,
} from "developer-icons"

// docs link to all available icons: https://xandemon.github.io/developer-icons/icons/All/

const Skillset = () => {
    return (
        <div className="page-wrapper">
        <h1 id="skillset">Skillset</h1>
        <p className="text-md">Backend technologies</p>
        <Stack className="skill-bar" direction={"row"} spacing={2} mb={2}>
            <Tooltip title="Go">
                <Go />
            </Tooltip>
            <Tooltip title="Typescript">
                <TypeScript />
            </Tooltip>
            <Tooltip title="PostgresSQL">
                <PostgreSQL />
            </Tooltip>
            <Tooltip title="Prisma">
                <Prisma />
            </Tooltip>
            <Tooltip title="GraphQL">
                <GraphQL />
            </Tooltip>
        </Stack>
        <p className="text-md">Frontend technologies</p>
        <Stack className="skill-bar" direction={"row"} spacing={2} mb={2}>
            <Tooltip title="VueJs / Vuetify">
                <VueJs />
            </Tooltip>
            <Tooltip title="Pinia">
                <Pinia />
            </Tooltip>
            <Tooltip title="React">            
                <React />
            </Tooltip>
            <Tooltip title="ChakraUI">
                <ChakraUI />
            </Tooltip>
            <Tooltip title="MaterialUI">
                <MaterialUI />
            </Tooltip>
            <Tooltip title="Typescript">
                <TypeScript />
            </Tooltip>
            <Tooltip title="NextJs">
                <NextJs />
            </Tooltip>
        </Stack>
        <p className="text-md">Cloud Service Providers</p>
        <Stack className="skill-bar" direction={"row"} spacing={2} mb={2}>
            <Tooltip title="AWS">
                <AWS />
            </Tooltip>
            <Tooltip title="GCP">
                <GoogleCloud />
            </Tooltip>
        </Stack>
        <p className="text-md">Integrations</p>
        <Stack className="skill-bar" direction={"row"} spacing={2}>
            <Tooltip title="Slack">
                <Slack />
            </Tooltip>
            <Tooltip title="Auth0">
                <Auth0 />
            </Tooltip>
        </Stack>
        </div>
    )
}

export default Skillset