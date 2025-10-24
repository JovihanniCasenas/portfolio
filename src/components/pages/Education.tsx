"use client"

import colors from "@/utils/colors"

const Education = () => {
    return (
        <div className="page-wrapper">
            <h1 id="education">Education</h1>
            <p className="text-md">Bachelor of Science in Computer Engineering</p>
            <p className="text-md">Magna Cum Laude</p>
            <p className="text-md">Bohol Island State University</p>
            <p className="text-md">2023</p>
            <div style={{ height: "30px" }} />
            <h1>Certifications</h1>
            <a
                href="https://www.credly.com/badges/55f5ea3d-ccd9-4a96-858c-2f8feb5b1d93"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="text-md" style={{ color: colors.textLight }}>FinOps Certified Pracitioner</p>
            </a>
            <a
                href="https://education.ciagile.com/certificate_v2/66b0716c6a4e4eca3007a57e/user/674fc62c672f45e0eb087ef4"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="text-md" style={{ color: colors.textLight }}>Agile & Scrum 201 Training</p>
            </a>
        </div>
    )
}

export default Education