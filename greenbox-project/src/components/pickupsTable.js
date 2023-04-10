import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PickupsTable(props) {
    let { data } = props;
    return (
        <div>
            <h2>Pickups</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Day</TableCell>
                    <TableCell align="right">Customers</TableCell>
                    <TableCell align="right">Items</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((row) => (
                    <TableRow
                    key={row.day}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.day}
                    </TableCell>
                    <TableCell align="right">{row.customers}</TableCell>
                    <TableCell align="right">{row.items}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}