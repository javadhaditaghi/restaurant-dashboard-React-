import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CustomizedPagination from './tablePagination';
import service from './paginationService';
import { useState, useEffect } from 'react';
import { EnhancedTableHead } from './enhancedTable';



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}



export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const dense = false;
    const rowsPerPage = 10
    const [pagination, setPagination] = useState({
        countPage: 0,
        from: 0,
        to: rowsPerPage
    });
    const [visibleRows, setVisibleRows] = useState([]);
    const [ordersHead, setOrdersHead] = useState([]);
    const [wholeData, setWholeData] = useState([]);



    // Fetching the data to use in the table
    useEffect(() => {
        service.getData({ from: pagination.from, to: pagination.to })
            .then(response => {
                setPagination(prevPagination => ({
                    ...prevPagination,
                    countPage: response.countPage
                }));
                setVisibleRows(response.data);
                setWholeData(response.wholeData); // Set the whole data here
                setOrdersHead(response.ordersHead);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [pagination.from, pagination.to]);

    const visibleRows_updated = React.useMemo(
        () =>
            stableSort(visibleRows, getComparator(order, orderBy)),
        [visibleRows, order, orderBy],
    );


    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);

    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
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
            <MenuItem onClick={handleMenuClose} sx={{
                padding: "15px 20px",
                transition: "color 0.2s ease, font-weight 0.2s ease",
                '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                    fontWeight: "600"
                }
            }}>
                <Box sx={{ pr: 2, display: "flex", }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></Box>
                Accept Order</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{
                padding: "15px 20px",
                transition: "color 0.2s ease, font-weight 0.2s ease",
                '&:hover': {
                    color: (theme) => theme.palette.danger.main,
                    fontWeight: "600"
                }
            }}>
                <Box sx={{ pr: 2, display: "flex", }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></Box>
                Reject Order</MenuItem>
        </Menu>
    );

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = wholeData.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };




    const isSelected = (id) => selected.indexOf(id) !== -1;




    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - wholeData.length) : 0;




    const handlePageChange = (event, page) => {
        const from = (page - 1) * rowsPerPage
        const to = (page - 1) * rowsPerPage + rowsPerPage

        setPagination({ ...pagination, from: from, to: to })

    }

    const counter = Math.ceil(pagination.countPage / rowsPerPage)


    return (
        <Box sx={{
            width: '100%', [`& .css-1mxz8qt-MuiPaper-root`]: {
                borderRadius: "15px"
            }
        }}>
            <Paper sx={{ width: '100%', mb: 2, }}>

                <TableContainer >
                    <Table
                        sx={{
                            minWidth: 750,
                            [`& .css-1mxz8qt-MuiPaper-root`]: {
                                borderRadius: "15px"
                            }
                        }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}


                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={wholeData.length}
                            ordersHead={ordersHead}


                        />
                        <TableBody sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none"
                            }
                        }}>
                            {visibleRows_updated.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox" >
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"

                                        >
                                            {row.orderNumber}
                                        </TableCell>
                                        <TableCell align="left">{row.date}</TableCell>
                                        <TableCell align="left">{row.customerName}</TableCell>
                                        <TableCell align="left">{row.address}</TableCell>
                                        <TableCell align="left">{row.distance}</TableCell>
                                        <TableCell align="left"><Box sx={{

                                            borderRadius: "10px", padding: "13px 16px",
                                            backgroundColor: row.status == "Delivered"
                                                ? (theme) => theme.palette.success.lighter
                                                : (row.status == "On Delivery" ? (theme) => theme.palette.primary.lighter : (theme) => theme.palette.danger.lighter),
                                            color: row.status == "Delivered"
                                                ? (theme) => theme.palette.success.main
                                                : (row.status == "On Delivery" ? (theme) => theme.palette.primary.main : (theme) => theme.palette.danger.main),
                                            fontWeight: "bold",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            minWidth: "122px",
                                            justifyContent: "center",


                                        }}>{row.status}</Box></TableCell>
                                        <TableCell align="left"><IconButton
                                            aria-label="more info"

                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit"
                                        ><MoreHorizIcon /></IconButton></TableCell>
                                        {renderMenu}

                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>

            <CustomizedPagination
                counter={counter}
                pageChange={handlePageChange}
            />


        </Box>
    );
}
