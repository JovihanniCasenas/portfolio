import { useEffect, useState } from "react"

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= window.innerHeight || window.innerWidth <= 829)
        };

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return isMobile
}
export default useIsMobile