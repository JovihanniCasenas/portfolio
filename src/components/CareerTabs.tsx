import { Tabs, Tab } from "@mui/material"
import colors from "../colors";

interface CareerTabsProps {
    tabValue: string;
    handleTabChange: (_event: React.SyntheticEvent, newValue: string) => void;
}

const CareerTabs = (props: CareerTabsProps) => {
    const customTabStyle = {
        '&:hover': {
            color: colors.tertiary,
            backgroundColor: colors.secondary,
            borderRadius: "20px",
        },
        '&.Mui-selected': {
            color: colors.tertiary,
            backgroundColor: colors.secondary,
            borderRadius: "20px",
            fontWeight: "bold",
        },
        color: colors.textLight,
    }

    return (
        <>
            <Tabs
                value={props.tabValue}
                onChange={props.handleTabChange}
                aria-label="skillset tabs"
                slotProps={{ indicator: { style: { display: "none" } } }} // Remove blue highlight
            >
                <Tab
                    value={"engineering"}
                    label="Engineering"
                    key={"engineering-tab"}
                    sx={customTabStyle}
                />
                <Tab
                    value={"va"}
                    label="Virtual Assistance"
                    key={"va-tab"}
                    sx={customTabStyle}
                />
            </Tabs>
        </>
    )
}

export default CareerTabs