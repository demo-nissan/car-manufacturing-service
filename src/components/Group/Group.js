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
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CreateUpdate from '../createUpdate';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { getZoneData } from '../../actions/actions';
import axios from "axios";

function Group({ menuTabValue }) {
    const dispatch  = useDispatch(); 
    let groupData =[];
    const MockData = useSelector(state => state.reducer.cmsReducer.zoneData);
    MockData.forEach(element => {
        element.groups.forEach(data=>{
            groupData.push(data);
        })
    });
    // const [groupData, setGroupData] = React.useState([...groupArray]);
    console.log(groupData)
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    const [editableData, setEditableData]=React.useState('');
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleOpen = (itemValue) => {
        setEditableData(itemValue);
        setOpen(true); 
        }
    const handleClose = () => setOpen(false);
    const handleClick = (rowData) => {
        const baseURL = rowData.activeFlag ? 'http://localhost:8080/group/deactivateGroup' : 'http://localhost:8080/group/activateGroup';
    axios.put(`${baseURL}/${rowData.groupCode}`).then((response) => {
        console.log(response)
        dispatch(getZoneData());
    });
    };
    return (
        <div className="Group" data-testid="Group">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 310 }} component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Group Code</TableCell>
                                <TableCell >Group Name</TableCell>
                                <TableCell >Edit</TableCell>
                                <TableCell >Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <CreateUpdate createOrUpdateStatus={'Update'} handleClose={handleClose} headerMenuValue={menuTabValue} updateData={editableData} />
                        </Modal>
                        <TableBody>
                            {
                                groupData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((data, i) => {
                                    return (<TableRow
                                        key="1"
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell width="20%"> {data.groupCode}</TableCell>
                                        <TableCell width="20%">{data.groupName}</TableCell>
                                        <TableCell width="20%"><Button variant="contained" color="info" startIcon={<EditIcon />}
                                            onClick={()=>{handleOpen(data)}}>Edit</Button></TableCell>
                                        <TableCell width="20%"><Button variant="contained" fullWidth="false" onClick={() => { handleClick(data) }}
                                            color={!data.activeFlag ? 'success' : 'error'}>{!data.activeFlag ? 'Activate' : 'Deactivate'}
                                        </Button>
                                        </TableCell>
                                    </TableRow>)
                                }
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 10, 25]}
                    component="div"
                    count={groupData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
};


export default Group;
