import * as React from 'react';
import Box from '@mui/material/Box';
import { Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material'


export default function RenderMenu({ anchorEl, menuId, isMenuOpen, handleMenuClose, category }) {
    return (
        <Menu
            sx={{
                [`.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper`]: {
                    boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.13)",
                    borderRadius: "12px"

                }
            }}
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
            {category == "orders" ?
                <MenuItem onClick={handleMenuClose} sx={{
                    padding: "15px 20px",
                    transition: "color 0.2s ease, font-weight 0.2s ease",
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "600"
                    }
                }}>

                    <>
                        <Box sx={{ pr: 2, display: "flex", }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 4L12 14.01L9 11.01" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></Box>
                        <Typography>Accept Order</Typography> </>
                </MenuItem>
                :
                <MenuItem onClick={handleMenuClose} sx={{
                    padding: "15px 20px",
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "600"
                    }
                }}>
                    <Typography>view detail</Typography>
                </MenuItem>

            }



            {category == "orders" ?
                <MenuItem onClick={handleMenuClose} sx={{
                    padding: "15px 20px",
                    transition: "color 0.2s ease, font-weight 0.2s ease",
                    '&:hover': {
                        color: (theme) => theme.palette.danger.main,
                        fontWeight: "600"
                    }
                }}>
                    <>
                        <Box sx={{ pr: 2, display: "flex", }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></Box>
                        <Typography>Reject Order</Typography>
                    </>
                </MenuItem>
                :
                <MenuItem onClick={handleMenuClose} sx={{
                    padding: "15px 20px",
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "600"
                    }
                }}>
                    <Typography>Edit</Typography>
                </MenuItem>

            }


            {category == "orders" ?
                null
                :
                <MenuItem onClick={handleMenuClose} sx={{
                    padding: "15px 20px",
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "600"
                    }
                }}>
                    <Typography>Delete</Typography>
                </MenuItem>

            }

        </Menu>
    )
}