import colors from "../colors"

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
        </div>
    )
}

export default Education