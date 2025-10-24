import { Grid, Tooltip } from "@mui/material"
import {
    Go, TypeScript, PostgreSQL, Prisma, GraphQL,
    VueJs, Pinia, React, ChakraUI, MaterialUI, NextJs,
    AWS, GoogleCloud,
    Slack, Auth0,
} from "developer-icons"

const Engineering = () => {
    return (
        <>
            <p className="text-md">Backend technologies</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="Go">
                        <Go />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Typescript">
                        <TypeScript />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="PostgresSQL">
                        <PostgreSQL />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Prisma">
                        <Prisma />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="GraphQL">
                        <GraphQL />
                    </Tooltip>
                </Grid>
            </Grid>

            <p className="text-md">Frontend technologies</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="VueJs / Vuetify">
                        <VueJs />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Pinia">
                        <Pinia />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="React">
                        <React />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="ChakraUI">
                        <ChakraUI />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="MaterialUI">
                        <MaterialUI />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Typescript">
                        <TypeScript />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="NextJs">
                        <NextJs />
                    </Tooltip>
                </Grid>
            </Grid>

            <p className="text-md">Cloud Service Providers</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="AWS">
                        <AWS />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="GCP">
                        <GoogleCloud />
                    </Tooltip>
                </Grid>
            </Grid>

            <p className="text-md">Integrations</p>
            <Grid container className="skill-bar" spacing={2}>
                <Grid className="skill-bar-item">
                    <Tooltip title="Slack">
                        <Slack />
                    </Tooltip>
                </Grid>
                <Grid className="skill-bar-item">
                    <Tooltip title="Auth0">
                        <Auth0 />
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    )
}

export default Engineering