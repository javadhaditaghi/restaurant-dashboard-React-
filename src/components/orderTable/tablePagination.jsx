import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    'button': {
        backgroundColor: '#E3E4EB;',
        color: '#000000',
        borderRadius: "6px",
        border: "1px solid #ffffff",
        cursor: 'pointer',
    },
    '& > li:first-child': {
        marginRight: "15px",
        fontWeight: 'bold',

    },
    '& > li:last-child': {
        marginLeft: "15px",


    },
    '& .endButton': {
        padding: "10px 15px",
        fontSize: "16px",
        color: 'white',


    },
    '& .normalButton': {
        padding: '5px 10px',
        display: 'block',
        fontSize: "15px",
        border: "1px solid #E3E4EB",
        color: '#2F4CDD',
    },

    '& .normalButton__wrapper': {
        backgroundColor: '#E3E4EB',
        padding: '5px 8px',
        display: 'block',

    }
});


export default function CustomizedPagination() {
    const pageNum = 10
    const { items } = usePagination({
        count: pageNum,
    });

    return (
        <nav >
            <List sx={{ display: "flex", justifyContent: "end" }}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = <Box className="normalButton__wrapper" ><Typography sx={{ padding: "2.5px 0px" }}>…</Typography></Box>;
                    } else if (type === 'page') {
                        children = (
                            <Box className="normalButton__wrapper" sx={{
                                borderRadius: index === 1 ? "6px 0px 0px 6px" : (index === items.length - 2 ? "0px 6px 6px 0px" : "0px")
                            }}>

                                <button
                                    type="button"
                                    className='normalButton'
                                    style={{
                                        fontWeight: selected ? 'bold' : undefined,
                                        border: selected ? "1px solid #ffffff" : undefined,
                                        color: selected ? '#000000' : undefined,
                                        backgroundColor: selected ? '#ffffff' : undefined,
                                    }
                                    }
                                    {...item}
                                >
                                    {page}
                                </button>
                            </Box>
                        );
                    } else {
                        children = (
                            <button type="button" className='endButton' {...item}
                                style={{
                                    backgroundColor: page == 0 || page == pageNum + 1 ? "#2F4CDD" : '#969BA0'
                                }}>
                                {type}

                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav >
    );
}