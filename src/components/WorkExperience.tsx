const WorkExperience = () => {
    return (
        <div className="page-wrapper">
            <h1 id="work">Work Experience</h1>
            <p className="text-lg">Dev Team Lead</p>
            <p className="text-md">Alphaus Inc.</p>
            <p className="text-md">October 2024-present</p>
            <div
            style={{
                height: "100px",
                width: "100px",
                backgroundImage: "url('src/assets/rocket.gif')",
                backgroundSize: "cover",
                margin: "10px",
            }}
            />
            <p className="text-lg">Junior Software Engineer</p>
            <p className="text-md">Alphaus Inc.</p>
            <p className="text-md">August 2023-September 2024</p>
        </div>
    )
}

export default WorkExperience