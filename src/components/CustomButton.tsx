import { Button, ButtonProps, SxProps, Theme } from "@mui/material"
import colors from "../colors"

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
    text?: string;
    customVariant?: "solid" | "outlined" | "text";
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
}

const CustomButton = ({ text, customVariant="solid", children, sx = {}, ...otherProps }: CustomButtonProps) => {
    const muiVariant = customVariant === "solid" ? "contained" : "outlined";
    const customStyle = {
        backgroundColor: customVariant === "solid" ? colors.secondary : "transparent",
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
        color: customVariant === "solid" ? colors.tertiary : colors.textLight,
        border: customVariant === "outlined" ? `2px solid ${colors.secondary}` : "none",
        ...(sx as object) // Properly merge with sx prop
    }
    
    return (
        <Button variant={muiVariant} sx={customStyle} {...otherProps}>
            {children ? children : text}
        </Button>
    )
}

export default CustomButton