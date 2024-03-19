import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sidebarButtons, sidebarSubuttons_1, sidebarSubuttons_2 } from '../../constants/consts';
import { useState } from 'react';
import './sidebar.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextButton from '../buttons/button';


// APP-BAR IMPORTS 
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';



// Imported Sections
import DashboardHeader from '../dashboardHeader/DashboardHeader';





const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


// ------------------ START OF APPBAR -----------------------------

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


// -------------------- END OF APPBAR -----------------------------



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);







export default function MiniDrawer() {

    // Change the color of the button when clicked 
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };
    const [selectedSuButton, setSelectedSuButton] = useState(null);
    const handleSuButtonClick = (ind) => {
        setSelectedSuButton(ind);
    };


    // -------------------- APPBAR SECTION --------------------

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    {/* ------------- Start of mobile Appbar Menue for right icons ------------------- */ }
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="primary">
                        <img src="../../../src/assets/images/ring.svg" width={35} />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={85} color="primary">
                        <img src="../../../src/assets/images/notification.svg" width={35} />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={1700} color="secondary">
                        <img src="../../../src/assets/images/gift.svg" width={35} />
                    </Badge>
                </IconButton>
                <p>Lorem</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show ! new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={1} color="danger">
                        <img src="../../../src/assets/images/process.svg" width={35} />
                    </Badge>
                </IconButton>
                <p>Lorem</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <Divider />
            <Box >
                <TextButton>About</TextButton>
                <TextButton>Tools</TextButton>
                <TextButton>Help</TextButton>
            </Box>

        </Menu>

    );
    {/* ------------- End  of mobile Appbar Menue for right icons ------------------- */ }

    //----------------------- END OF APPBAR SECTION ----------------------




    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" open={open} sx={{ backgroundColor: "#ffffff", color: theme.palette.secondary.light, minHeight: "75px", justifyContent: "center" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Search
                        sx={{
                            border: '1px solid #EBEBEB',
                            display: 'flex',
                            alignItems: 'center', // Align items vertically
                            justifyContent: 'flex-end', // Distribute space between items
                            flexGrow: '.7',
                        }}
                    >
                        <StyledInputBase
                            placeholder="Search Here"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <Box sx={{ flexGrow: 1.5 }} />
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    </Search>


                    <Box sx={{ flexGrow: 1 }} />
                    {/* ------------- Start of Buttons ----------------- */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <TextButton>About</TextButton>
                        <TextButton>Tools</TextButton>
                        <TextButton>Help</TextButton>
                    </Box>
                    {/* ------------- End of Buttons ----------------- */}
                    <Box sx={{ flexGrow: .1 }} />
                    {/* ------------- Start of Appbar icons ----------------- */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="primary">
                                <img src="../../../src/assets/images/ring.svg" width={35} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={85} color="primary">
                                <img src="../../../src/assets/images/notification.svg" width={35} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={1700} color="secondary">
                                <img src="../../../src/assets/images/gift.svg" width={35} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show ! new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={1} color="danger">
                                <img src="../../../src/assets/images/process.svg" width={35} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Box className="toolbar__profile-icon">
                                <Typography sx={{
                                    position: 'relative',
                                    Zindex: "100",
                                    fontSize: '12px',
                                    lineHeight: '35px',
                                    left: '-10px',
                                    color: '#ffffff',
                                }}>Hello, <Box component="span" sx={{ fontWeight: 'bold' }}>Samuel</Box></Typography>
                            </Box>
                            <AccountCircle className="toolbar__profile-circle" />

                        </IconButton>

                    </Box>
                    {/* ------------- End of Appbar icons ----------------- */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                            minHeight: '75px',

                        }}
                    >
                        <img src="../../../src/assets/images/logo.png" alt="Desc" width={35}

                        />
                        <Typography fontSize={30} fontWeight={1000}>Davur  &nbsp;</Typography>
                    </Box>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <List>

                    {sidebarButtons.map((text, index) => (
                        <ListItem key={text.index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                selected={selectedButton === index}
                                onClick={() => handleButtonClick(index)}
                                sx={{
                                    minHeight: 60,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    color: selectedButton === index ? '#2F4CDD' : 'inherit',
                                }}
                            >

                                {selectedButton === index ? (
                                    <div className='sidebar__buttons-items' />
                                ) : null}

                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {selectedButton === index ? text.icon1 : text.icon}

                                </ListItemIcon>
                                <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0, color: theme.palette.secondary.light, fontWeight: 500 }} />

                                {/*Small badge in front of orders*/}
                                {index === 1 ? <Badge badgeContent={4} color="primary" className='sidebar__drower-badge'></Badge> : null}

                                {((index === 2 || index === 3) && open ? <KeyboardArrowRightIcon /> : null)}

                            </ListItemButton>
                            {((index === 2) && open && (selectedButton == index) ? <div className='sidebar__dropduttons-items'>

                                {
                                    sidebarSubuttons_1.map((item, ind) => (
                                        <ListItemButton
                                            key={ind}
                                            selected={selectedSuButton === ind}
                                            onClick={() => handleSuButtonClick(ind)}
                                            sx={{
                                                minHeight: 30,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                                color: selectedSuButton === ind ? '#2F4CDD' : 'inherit',
                                                paddingLeft: 8.5
                                            }}
                                        >
                                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0, color: theme.palette.secondary.light }} />


                                        </ListItemButton>

                                    ))

                                }
                            </div> : null)}
                            {((index === 3) && open && (selectedButton == index) ? <div className='sidebar__dropduttons-items'>
                                {
                                    sidebarSubuttons_2.map((items, inde) => (
                                        <ListItemButton
                                            key={inde}
                                            selected={selectedSuButton === inde}
                                            onClick={() => handleSuButtonClick(inde)}
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                                color: selectedSuButton === inde ? '#2F4CDD' : 'inherit',
                                                paddingLeft: 8.5
                                            }}
                                        >
                                            <ListItemText primary={items.title} sx={{ opacity: open ? 1 : 0, color: theme.palette.secondary.light }} />


                                        </ListItemButton>

                                    ))

                                }
                            </div> : null)}
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <DashboardHeader />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}
