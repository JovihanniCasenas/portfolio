import { Button, ButtonProps, SxProps, Theme } from "@mui/material"
import colors from "../colors"

interface CustomButtonProps extends ButtonProps {
    text?: string;
    sx?: SxProps<Theme>;
}

const CustomButton = ({ text, sx = {}, ...otherProps }: CustomButtonProps) => {
    const customStyle = {
        backgroundColor: colors.secondary,
        borderRadius: "100px",
        padding: "18px",
        margin: "10px",
        fontWeight: "bold",
        transition: "background-color 0.3s, transform 0.1s",
        cursor: "pointer",
        userSelect: "none",
        '&:hover': {
            color: colors.textLight,
            backgroundColor: colors.tertiary,
            borderRadius: "100px",
        },
        color: colors.tertiary,
        ...(sx as object) // Properly merge with sx prop
    }
    
    return (
        <Button sx={customStyle} {...otherProps}>
            {text || "Click Me"}
        </Button>
    )
}

export default CustomButton