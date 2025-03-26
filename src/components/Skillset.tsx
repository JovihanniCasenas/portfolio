import { Grid2, Tooltip } from "@mui/material"
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
        <Grid2 container className="skill-bar" spacing={2}>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Go">
                    <Go />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Typescript">
                    <TypeScript />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="PostgresSQL">
                    <PostgreSQL />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Prisma">
                    <Prisma />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="GraphQL">
                    <GraphQL />
                </Tooltip>
            </Grid2>
        </Grid2>

        <p className="text-md">Frontend technologies</p>
        <Grid2 container className="skill-bar" spacing={2}>
            <Grid2 className="skill-bar-item">
                <Tooltip title="VueJs / Vuetify">
                    <VueJs />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Pinia">
                    <Pinia />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="React">
                    <React />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="ChakraUI">
                    <ChakraUI />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="MaterialUI">
                    <MaterialUI />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Typescript">
                    <TypeScript />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="NextJs">
                    <NextJs />
                </Tooltip>
            </Grid2>
        </Grid2>
        
        <p className="text-md">Cloud Service Providers</p>
        <Grid2 container className="skill-bar" spacing={2}>
            <Grid2 className="skill-bar-item">
                <Tooltip title="AWS">
                    <AWS />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="GCP">
                    <GoogleCloud />
                </Tooltip>
            </Grid2>
        </Grid2>

        <p className="text-md">Integrations</p>
        <Grid2 container className="skill-bar" spacing={2}>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Slack">
                    <Slack />
                </Tooltip>
            </Grid2>
            <Grid2 className="skill-bar-item">
                <Tooltip title="Auth0">
                    <Auth0 />
                </Tooltip>
            </Grid2>
        </Grid2>
        </div>
    )
}

export default Skillset