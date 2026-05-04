import WorkExperience from "@/components/WorkExperience"
import Projects from "@/components/Projects"
import TechStack from "@/components/TechStack"
import Education from "@/components/Education"

export default function Main() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <section id="about">
          Hi, I'm Jovihanni, a Software Engineer and Team Lead with a core focus
          on full-stack development and cloud infrastructure. Proven track
          record in developing digital licensing platforms and identity
          management systems supporting 3.1k+ users. Responsible for extending
          CI/CD workflows and provisioning AWS/GCP test environments to improve
          deployment reliability. Combines technical proficiency in Go, NestJS,
          and TypeScript with experience leading agile teams to deliver stable,
          business-aligned technical solutions.
        </section>
      </div>
      <WorkExperience />
      <Projects />
      <TechStack />
      <Education />
    </div>
  )
}
