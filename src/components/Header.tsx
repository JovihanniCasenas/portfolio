import { useState } from "react";
import { AppBar, Avatar, Toolbar, Box, Drawer, List, ListItem, Tabs, Tab } from "@mui/material"
import colors from "../colors"
import { Link } from 'react-scroll'

interface HeaderProps {
    isMobile: boolean;
    onClick: (tab: string) => void;
}

const Header = (props: HeaderProps) => {
    const [tabVal, setTabVal] = useState<number>(0)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [selectedDrawerItem, setSelectedDrawerItem] = useState<string>("about")


    const pages = ['about', 'skillset', 'work', 'projects', 'education', 'contact']
    const pageTitles = ['About Me', 'Skillset', 'Work Experience', 'Projects', 'Education', 'Contact Me']

    // @ts-ignore
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        // event is unused in the function but is required to be passed in
        if (!props.isMobile) {
            setSelectedDrawerItem("about")
            setTabVal(0)
            props.onClick("about")
        } else {
            setIsDrawerOpen(true)
        }
    };

    const handleClose = () => {
        setIsDrawerOpen(false)
    };

    const handleDrawerItemClick = (page: string) => {
        props.onClick(page)
        setSelectedDrawerItem(page)
        setTabVal(pages.indexOf(page))
        setIsDrawerOpen(false)
    }

    // @ts-ignore
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        // event is unused in the function but is required to be passed in
        setTabVal(newValue);
        setSelectedDrawerItem(newValue === 0 ? "about" : pages[newValue])
    };

    return (
        <>
            <AppBar position="sticky" sx={{ background: "transparent", boxShadow: "none", padding: "10px", width: '100vw', mb: "10px" }}>
                <Toolbar>
                    <Avatar
                        alt="logo"
                        src="/assets/j-logo.png"
                        sx={{ pr: "10px", cursor: "pointer" }}
                        onClick={handleClick}
                    />

                    <Drawer
                        open={isDrawerOpen}
                        onClose={handleClose}
                    >
                        <Box
                            sx={{
                                height: "100vh",
                            }}
                            role="presentation"
                            onClick={handleClose}
                        >
                            <List>
                                {pages.map((page, idx) => {
                                    return (
                                        <ListItem
                                            sx={{
                                                backgroundColor: selectedDrawerItem === pages[idx] ? colors.secondary : "white",
                                                cursor: "pointer",
                                                color: colors.tertiary,
                                            }}
                                            onClick={handleDrawerItemClick.bind(this, page)}
                                        >
                                            {pageTitles[idx]}
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </Drawer>
                    
                    {!props.isMobile && (
                        <Tabs
                            value={tabVal}
                            onChange={handleTabChange}
                            sx={{
                                '& .MuiTabs-indicator': {
                                    backgroundColor: colors.secondary,
                                },
                            }}
                        >
                            {pages.map((page, idx) => {
                                return (
                                    <Tab
                                        label={pageTitles[idx]}
                                        component={Link}
                                        to={page}
                                        sx={{
                                            '&:hover': {
                                                color: colors.tertiary,
                                                backgroundColor: colors.secondary,
                                                borderRadius: "20px",
                                            },
                                            '&.Mui-selected': {
                                                color: colors.textLight,
                                                fontWeight: "bold",
                                            },
                                            color: colors.textLight,
                                        }}
                                        onClick={() => props.onClick(page)}
                                    >
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header