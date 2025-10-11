import TextWrapper from "../TextWrapper"

const Integrations = () => {
    return (
        <div>
            <TextWrapper>
                I design and implement smart systems that connect tools, automate workflows, and enhance user experience — reducing manual effort and improving overall efficiency.
            </TextWrapper>
            <TextWrapper>
                <span style={{ fontWeight: "bold" }}>Custom Slack Bot Notifications</span>
                <br />
                Developed a Slack bot that automatically sends custom alerts to a designated channel whenever a new event is triggered by another system.
                This integration ensures that teams receive real-time updates on critical actions or issues, streamlining communication and reducing response time.
            </TextWrapper>
            <TextWrapper>
                <span style={{ fontWeight: "bold" }}>Intercom Product Tour & Onboarding Workflow</span>
                <br />
                Built a comprehensive onboarding experience inside Intercom, guiding users from first login to full platform adoption.
                <br />
                <br />
                What I did:
                <ul>
                    <li>Interactive product tour to introduce key features</li>
                    <li>Checklist-based onboarding workflow that tracks user progress</li>
                    <li>Dynamic content targeting based on the user's browser language, ensuring localized messaging for better engagement</li>
                </ul>
            </TextWrapper>
        </div>
    )
}

export default Integrations