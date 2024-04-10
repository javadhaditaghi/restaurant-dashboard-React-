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
import CustomizedPagination from './tablePagination';
import service from './paginationService';
import { useState, useEffect } from 'react';
import { EnhancedTableHead } from './enhancedTable';
import { useParams } from 'react-router-dom';
import RenderMenu from './tableMenue';




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

    const { pageName } = useParams()




    // Fetching the data to use in the table
    useEffect(() => {
        service.getData({ from: pagination.from, to: pagination.to })

            .then(response => {
                //Finding the last item in the url (is it order? or customer?)
                const pathname = window.location.pathname;
                const parts = pathname.split('/');
                const relatedPath = parts[parts.length - 1];


                //Setting the pagingation
                setPagination(prevPagination => ({
                    ...prevPagination,
                    countPage: relatedPath == 'orders' ? response.countPage : response.countPageCustomers
                }));

                setVisibleRows(relatedPath == 'orders' ? response.data : response.customersData);
                setWholeData(relatedPath == 'orders' ? response.wholeData : response.wholeCustomersData); // Set the whole data here
                setOrdersHead(relatedPath == 'orders' ? response.ordersHead : response.customersHead);

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
                                            {row.orderNumber || row.customerId}
                                        </TableCell>
                                        <TableCell align="left">{row.date || row.joinDate}</TableCell>
                                        <TableCell align="left">{row.customerName}</TableCell>
                                        <TableCell align="left">{row.address || row.location}</TableCell>
                                        <TableCell align="left">{row.distance || `$${row.totalSpent}`}</TableCell>
                                        <TableCell align="left"><Box sx={{

                                            borderRadius: "10px", padding: "13px 16px",
                                            backgroundColor: row.status == "Delivered"
                                                ? (theme) => theme.palette.success.lighter
                                                : (row.status == "On Delivery" ? (theme) => theme.palette.primary.lighter :
                                                    (row.status == 'New Order' ? (theme) => theme.palette.danger.lighter : "rgba(62, 73, 84, 0.06)")),

                                            color: row.status == "Delivered"
                                                ? (theme) => theme.palette.success.main
                                                : (row.status == "On Delivery" ? (theme) => theme.palette.primary.main : (row.status == 'New Order' ? (theme) => theme.palette.danger.main : "#3E4954")),
                                            fontWeight: "bold",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            minWidth: "122px",
                                            justifyContent: "center",


                                        }}>{row.status || `$${row.lastOrder.price}`}</Box></TableCell>
                                        <TableCell align="left"><IconButton
                                            aria-label="more info"

                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit"
                                        ><MoreHorizIcon /></IconButton></TableCell>
                                        <RenderMenu
                                            anchorEl={anchorEl}
                                            menuId={menuId}
                                            isMenuOpen={isMenuOpen}
                                            handleMenuClose={handleMenuClose}
                                            category={row.category}

                                        />

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


        </Box >
    );
}
