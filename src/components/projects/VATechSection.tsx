import Analytics from "./Analytics"
import Scripts from "./Scripts"
import Integrations from "./Integrations"

const VATechSection = () => {
    const sections = [
        {
            key: "analytics",
            title: "Google Analytics and Tag Manager",
            content: <Analytics />
        },
        {
            key: "scripts",
            title: "Google Sheets Scripts",
            content: <Scripts />
        },
        {
            key: "integrations",
            title: "Automations and Integrations",
            content: <Integrations />
        }
    ]
    return (
        <div>
            <div>
                {sections.map(section => (
                    <div key={section.key} style={{ marginBottom: "40px" }}>
                        <h4 style={{ marginTop: "0px" }}>{section.title}</h4>
                        {section.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VATechSection