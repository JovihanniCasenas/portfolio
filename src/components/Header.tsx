import { useState } from "react";
import { AppBar, Avatar, Toolbar, Box, Drawer, IconButton, List, ListItem, Tabs, Tab } from "@mui/material"
import { Close, Menu } from "@mui/icons-material";
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
        setSelectedDrawerItem("about")
        setTabVal(0)
        props.onClick("about")
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
                <Toolbar style={{justifyContent: "space-between"}}>
                    <Avatar
                        alt="logo"
                        src="/assets/j-logo.png"
                        sx={{ pr: "10px", cursor: "pointer" }}
                        onClick={handleClick}
                    />

                    {props.isMobile && (
                        <IconButton
                            aria-label="menu"
                            size="large"
                            sx={{
                                color: colors.textLight
                            }}
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <Menu />
                        </IconButton>
                    )}

                    <Drawer
                        open={isDrawerOpen}
                        onClose={handleClose}
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                minWidth: "50vw"
                            }}
                            role="presentation"
                            onClick={handleClose}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    padding: "10px",
                                    paddingBottom: "0px",
                                    marginBottom: "0px",
                                }}
                            >
                                <IconButton
                                    aria-label="close"
                                    size="large"
                                    sx={{
                                        color: colors.primary
                                    }}
                                >
                                    <Close />
                                </IconButton>
                            </div>

                            <List>
                                {pages.map((page, idx) => {
                                    return (
                                        <ListItem
                                            sx={{
                                                backgroundColor: selectedDrawerItem === pages[idx] ? colors.secondary : "white",
                                                cursor: "pointer",
                                                color: colors.tertiary,
                                                marginY: "10px",
                                                paddingLeft: "20px",
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
                                                borderTopLeftRadius: "20px",
                                                borderTopRightRadius: "20px",
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