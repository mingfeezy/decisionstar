import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function UserTable({onBlur, rows}) {
    
    const classes = useStyles();
    console.log('rows',rows);
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Inquiry Topic</TableCell>
                <TableCell align="right">Your Current Rating</TableCell>
                <TableCell align="right">Reference Rating 1</TableCell>
                <TableCell align="right">Reference Rating 2</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right"> 
                    <input defaultValue={row.currentRatings} name={row.name} data-col={'currentRatings'} 
                    onBlur={e => onBlur(e)}/>
                </TableCell>
                <TableCell align="right">
                    <input defaultValue={row.ratings1} name={row.name} data-col={'ratings1'} onBlur={e => onBlur(e)}/>
                </TableCell>
                <TableCell align="right">
                    <input defaultValue={row.ratings2} name={row.name} data-col={'ratings2'} onBlur={e => onBlur(e)}/>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}