import { Card, CardMedia, Tooltip } from "@mui/material"
import colors from "@/utils/colors"

interface PreviewCardProps {
    children?: React.ReactNode,
    title?: string,
    description?: string,
    link?: string,
    imgSrc?: string,
    fit?: string,
    focus?: string,
}

const PreviewCard = ({
    children,
    title,
    link,
    imgSrc,
    fit,
    focus
}: PreviewCardProps) => {
    const Default = () => (
        <>
            {imgSrc && (
                <CardMedia
                    component="img"
                    sx={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        objectFit: fit || "contain",
                        objectPosition: focus || "center",
                        backgroundColor: colors.textLight,
                    }}
                    image={imgSrc}
                />
            )}
        </>
    )

    return (
        <Tooltip title={`View in Full: ${title}`} followCursor>
            <Card
                variant="elevation"
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 255)",
                    borderRadius: "0px",
                    padding: "0px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                    '&:hover': {
                        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
                        transform: "translateY(-8px) scale(1.03)",
                        cursor: "pointer",
                    },
                }}
                onClick={() => window.open(link, '_blank')}
            >
                {children ? children : <Default />}
            </Card>
        </Tooltip>
    )
}

export default PreviewCard