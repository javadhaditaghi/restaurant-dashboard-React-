import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


// APP-BAR IMPORTS 

import Badge from '@mui/material/Badge';
import AppBarComp from './appBar';



// Imported Sections
import DashboardHeader from '../dashboardHeader/DashboardHeader';
import InfoSummary from '../InfoSummery/InfoSummary';
import OrdersInfo from '../ordersSummary/ordersInfo';
import Revenue from '../revenue/revenue';
import DailyInfo from '../dailyInfo/dailyInfo';







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






    const theme = useTheme();
    const [open, setOpen] = React.useState(false);



    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* ------------- Start  of Appbar Section------------------- */}
            <AppBarComp openDrawer={open} setOpenDrawer={handleDrawerOpen} />









            {/* ------------- Start  of Appbar Section------------------- */}


            {/* ------------- Start  of Left Drawer Section------------------- */}

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
            {/* ------------- End  of Left Drawer Section------------------- */}

            <Grid2 spacing={.5} width={'100%'}>
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#F9F9F9", display: "flex", flexDirection: "column" }}>
                    <DrawerHeader />
                    <DashboardHeader />
                    <InfoSummary />

                    <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
                        <OrdersInfo />
                        <Revenue />
                    </Grid2>
                    <DailyInfo />
                </Box>
            </Grid2>
        </Box>
    );
}
