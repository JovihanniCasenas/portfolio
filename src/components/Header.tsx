"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import useIsMobile from "@/hooks/useIsMobile"
import { Avatar, Toolbar, Box, Drawer, IconButton, List, ListItem, Tabs, Tab } from "@mui/material"
import { Close, Menu } from "@mui/icons-material"
import colors from "@/utils/colors"

const Header = () => {
    const isMobile = useIsMobile()
    const pathname = usePathname()
    const router = useRouter()
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [tabVal, setTabVal] = useState<number>(0)

    const pages = ['', 'skillset', 'work', 'projects', 'education', 'contact']
    const pageTitles = ['About Me', 'Skillset', 'Work Experience', 'Projects', 'Education', 'Contact Me']

    // Update tab value when route changes
    useEffect(() => {
        const index = pages.indexOf(pathname.replace("/", ""))
        setTabVal(index >= 0 ? index : 0)
    }, [pathname, pages])

    const handleClick = () => {
        router.push('/')
    };

    const handleClose = () => {
        setIsDrawerOpen(false)
    };

    const handleDrawerItemClick = (page: string) => {
        router.push(`/${page}`)
        setIsDrawerOpen(false)
    }

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabVal(newValue);
        router.push(`/${pages[newValue]}`)
    };

    return (
        <>
            <div
                style={{
                    background: "transparent",
                    padding: "10px",
                    width: '100%',
                    marginBottom: "10px",
                }}
            >
                <Toolbar style={{ justifyContent: isMobile ? "space-between" : "center" }}>
                    <Avatar
                        alt="logo"
                        src="/assets/j-logo.png"
                        sx={{ pr: "10px", cursor: "pointer" }}
                        onClick={handleClick}
                    />

                    {isMobile && (
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
                                                backgroundColor: tabVal === idx ? colors.secondary : "white",
                                                cursor: "pointer",
                                                color: colors.tertiary,
                                                marginY: "10px",
                                                paddingLeft: "20px",
                                            }}
                                            onClick={() => handleDrawerItemClick(page)}
                                        >
                                            {pageTitles[idx]}
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </Drawer>

                    {!isMobile && (
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
            </div>
        </>
    )
}

export default Header