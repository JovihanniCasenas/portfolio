import { useNavigate } from "react-router-dom"
import CustomButton from "./CustomButton"

const ContactCTA = () => {
    const navigate = useNavigate()
    return (
        <CustomButton
            text="Let's Connect"
            onClick={() => navigate("/contact")}
        />
    )
}

export default ContactCTA