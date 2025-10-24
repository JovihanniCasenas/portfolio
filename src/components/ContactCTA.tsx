import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"

const ContactCTA = () => {
    const router = useRouter()
    return (
        <CustomButton
            text="Let's Connect"
            onClick={() => router.push("/contact")}
        />
    )
}

export default ContactCTA