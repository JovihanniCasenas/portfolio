import HighlightHover from "@/components/ui/HighlightHover"
import LaunchIcon from "@mui/icons-material/Launch"

export default function Education() {
  return (
    <div>
      <section id="education" className="text-2xl font-bold mb-2">
        Education and Certifications
      </section>
      <p className="text-lg">Bachelor of Science in Computer Engineering</p>
      <p className="text-sm">Magna Cum Laude</p>
      <p className="text-sm">Bohol Island State University</p>
      <p className="text-sm">2019-2023</p>
      <div className="mb-2" />
      <a
        href="https://www.credly.com/badges/55f5ea3d-ccd9-4a96-858c-2f8feb5b1d93"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HighlightHover>
          FinOps Certified Pracitioner
          <LaunchIcon className="ml-1" />
        </HighlightHover>
      </a>
      <div className="mb-2" />
      <a
        href="https://education.ciagile.com/certificate_v2/66b0716c6a4e4eca3007a57e/user/674fc62c672f45e0eb087ef4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HighlightHover>
          Agile & Scrum 201 Training
          <LaunchIcon className="ml-1" />
        </HighlightHover>
      </a>
    </div>
  )
}
