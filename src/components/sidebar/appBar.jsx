import * as React from 'react';
// APP-BAR IMPORTS 
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import TextButton from '../buttons/button';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Divider, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './sidebar.css'
import MuiAppBar from '@mui/material/AppBar';





const drawerWidth = 240;
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










const AppBarComp = (props) => {
    const theme = useTheme();

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




    return (
        <>
            <AppBar position="fixed" open={props.openDrawer} sx={{ backgroundColor: "#ffffff", color: theme.palette.secondary.light, minHeight: "75px", justifyContent: "center" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.setOpenDrawer}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(props.openDrawer && { display: 'none' }),
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
        </ >
    )
}


export default AppBarComp;