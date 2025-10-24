"use client"

import { useRouter } from "next/navigation"
import { Stack } from "@mui/material"
import CustomButton from "../CustomButton"
import ContactCTA from "../ContactCTA"
import useIsMobile from "../../hooks/useIsMobile"

const AboutMe = () => {
    const router = useRouter();
    const isMobile = useIsMobile();

    return (
        <div className="page-wrapper">
            <Stack direction={'row'}>
                <div style={{
                    textAlign: "center",
                    justifyContent: "center"
                }}>
                    <h1 id="about">Software Engineer & Virtual Assistant</h1>
                    <h2>BRIDGING CODE AND ADMINISTRATIVE SUPPORT</h2>
                    <div
                        style={{
                            paddingTop: "20px",
                            justifyContent: "center",
                            display: "flex",
                        }}
                    >
                        <p></p>
                        <p
                            className="text-md"
                            style={{
                                maxWidth: isMobile
                                    ? "90vw"
                                    : "50vw",
                                lineHeight: "1.5",
                            }}
                        >
                            Hi, I'm Jovihanni — a highly organized, tech-savvy Virtual Assistant and Software Engineer 
                            with over two years of experience in full-stack web development and remote team collaboration. 
                            Having grown from a junior developer to a team lead in a startup environment, I've learned to adapt quickly, 
                            streamline operations, and leverage technology to improve efficiency, communication, and overall productivity.
                        </p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", paddingTop: "30px", paddingBottom: "30px"}}>
                        <CustomButton
                            text="View My Sample Work"
                            onClick={() => router.push("/projects")}
                        />
                        <ContactCTA />
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default AboutMe