import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Group.module.css';

function Group(props) {
    const [activeGroup, setActiveGroup] = React.useState(true);

    const handleClick = (newValue) => {
        setActiveGroup(newValue);
    };
    return (
        <div className="Group" data-testid="Group">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Group Code</TableCell>
                            <TableCell >Group Name</TableCell>
                            <TableCell >Edit</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key="1"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell > 1</TableCell>
                            <TableCell >2</TableCell>
                            <TableCell ><Button variant="outlined" color="info">Edit</Button></TableCell>
                            <TableCell ><Button variant="contained" onClick={() => { activeGroup ? handleClick(false) : handleClick(true) }} color={activeGroup ? 'success' : 'error'}>{activeGroup ? 'Activate' : 'Deactivate'}</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};


export default Group;
