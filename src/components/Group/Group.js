import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import'./Group.module.css';

const Group = () => (
  <div className="Group" data-testid="Group">
    <TableContainer component={Paper}> 
                        <Table sx={{ minWidth: 650 }}   aria-label="a dense table">
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
                                    <TableCell ><Button>Edit</Button></TableCell>
                                    <TableCell >Active</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
  </div>
);

Group.propTypes = {};

Group.defaultProps = {};

export default Group;
