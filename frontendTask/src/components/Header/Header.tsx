
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TabPanel from '../Tabs/TabPanel';
import { useSelector } from 'react-redux';
import { selectSelctedPage } from '@/redux/reducers/selectedPageReducer';

const pages = [
    {
        id: 1,
        name: 'Shop',
        isSelected: false,
        details: [
            'New',
            'Sale',
            'Categories',
        ]
    },
    {
        id: 2,
        name: 'Recipes',
        isSelected: false,
        details: [
            'categories',
            'collections',
            'resources',
        ]
    },
    {
        id: 3,
        name: 'Learn',
        isSelected: true,
        details: [
            'Documentations',
            'Videos',
            'Live Tutor',
        ]
    },
    {
        id: 4,
        name: 'About',
        isSelected: false,
        details: [
            'Documentations',
            'Videos',
            'Live Tutor',
        ]
    },
    {
        id: 5,
        name: 'Blog',
        isSelected: false,
        details: [
            'categories',
            'collections',
            'resources',
        ]
    },
]
export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const selectedPage = useSelector(selectSelctedPage)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '9vh'
            }}
        >

            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        style={{ color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages?.map((page, index) => (
                            <MenuItem key={index} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page?.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    {selectedPage?.name}
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <TabPanel pages={pages} />
                </Box>
            </Toolbar>
        </Container>
    )
}