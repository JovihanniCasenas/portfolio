import { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Box, Drawer, IconButton, List, ListItem, Tabs, Tab } from "@mui/material"
import { Close, Menu } from "@mui/icons-material";
import colors from "../colors"
import { Link as RouterLink } from "react-router-dom"

interface HeaderProps {
    isMobile: boolean;
    onClick: (tab: string) => void;
    currentTab: string;
}

const Header = (props: HeaderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [tabVal, setTabVal] = useState<number>(0)

    const pages = ['about', 'skillset', 'work', 'projects', 'education', 'contact']
    const pageTitles = ['About Me', 'Skillset', 'Work Experience', 'Projects', 'Education', 'Contact Me']

    // Update tab value when route changes
    useEffect(() => {
        const index = pages.indexOf(props.currentTab)
        setTabVal(index >= 0 ? index : 0)
    }, [props.currentTab, pages])

    const handleClick = () => {
        props.onClick("about")
    };

    const handleClose = () => {
        setIsDrawerOpen(false)
    };

    const handleDrawerItemClick = (page: string) => {
        props.onClick(page)
        setIsDrawerOpen(false)
    }

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabVal(newValue);
        props.onClick(pages[newValue])
    };

    return (
        <>
            <AppBar position="sticky" sx={{ background: "transparent", boxShadow: "none", padding: "10px", width: '100vw', mb: "10px" }}>
                <Toolbar style={{ justifyContent: props.isMobile ? "space-between" : "center" }}>
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
                                    onClick={handleClose}
                                >
                                    <Close />
                                </IconButton>
                            </div>

                            <List>
                                {pages.map((page, idx) => {
                                    return (
                                        <ListItem
                                            key={page}
                                            sx={{
                                                backgroundColor: props.currentTab === pages[idx] ? colors.secondary : "white",
                                                cursor: "pointer",
                                                color: colors.tertiary,
                                                marginY: "10px",
                                                paddingLeft: "20px",
                                            }}
                                            onClick={() => handleDrawerItemClick(page)}
                                            component={RouterLink}
                                            to={`/${page}`}
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
                                        key={page}
                                        label={pageTitles[idx]}
                                        component={RouterLink}
                                        to={`/${page}`}
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
                                    />
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