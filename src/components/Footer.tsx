import { Tooltip } from "@mui/material"

interface FooterProps {
    onClick: (tab: string) => void
}

const Footer = (props: FooterProps) => {
    return (
        <div style={{
            bottom: "0px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            width: "100vw",
        }}>
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                }}
            >

                <Tooltip title="Let's connect!" placement="right">
                    <div
                        style={{
                            backgroundImage: "url('public/assets/astronaut.gif')",
                            height: "80px",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            width: "80px",
                            bottom: "70px",
                            transform: "rotate(-18deg)",
                            cursor: "pointer",
                        }}
                        onClick={() => props.onClick("contact")}
                    />
                </Tooltip>
            </div>
            <div
                style={{
                    width: "100vw",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        width: "50vw",
                        height: "90px",
                        backgroundImage: "url('public/assets/moon.png')",
                        backgroundSize: "cover",
                        bottom: "0px",
                    }}
                />
            </div>
        </div>
    )
}

export default Footer