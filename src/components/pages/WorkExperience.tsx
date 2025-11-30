"use client"
import colors from "@/utils/colors"

const WorkExperience = () => {
    const Alphaus = () => (
        <a
            href="https://alphaus.cloud"
            target="_blank"
            rel="noopener noreferrer"
        >
            <p
            className="text-md"
            style={{
                color: colors.textLight,
            }}
            >Alphaus Inc.</p>
        </a>
    )
    return (
        <div className="page-wrapper">
            <h1 id="work">Work Experience</h1>
            <p className="text-lg">Dev Team Lead</p>
            <Alphaus />
            <p className="text-md">October 2024-present</p>
            <div
            style={{
                height: "100px",
                width: "100px",
                backgroundImage: "url('/assets/rocket.gif')",
                backgroundSize: "cover",
                margin: "10px",
            }}
            />
            <p className="text-lg">Junior Software Engineer</p>
            <Alphaus />
            <p className="text-md">August 2023-September 2024</p>
        </div>
    )
}

export default WorkExperience