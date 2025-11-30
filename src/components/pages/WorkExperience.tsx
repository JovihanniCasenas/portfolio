"use client"

import ExperienceTimeline from "../experience/ExperienceTimeline"
import CustomButton from "../CustomButton"

const WorkExperience = () => {
    return (
        <div className="page-wrapper">
            <h1 id="work">Work Experience</h1>
            <ExperienceTimeline />
            <CustomButton
                text="View My Resume"
                onClick={() => {window.open('https://drive.google.com/file/d/1J4pcn-YbDk2HcPeVMQ_3pUY485Du3AKR/view?usp=sharing')}}
            />
        </div>
    )
}

export default WorkExperience