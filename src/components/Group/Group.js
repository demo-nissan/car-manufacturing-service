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

const mockData = [{
    GroupCode: "1",
    GroupName: "Wheel",
    active: true
}, {
    GroupCode: "2",
    GroupName: "Interior",
    active: false
},
{
    GroupCode: "3",
    GroupName: "Exterior",
    active: true
}
]
function Group({ menuTabValue }) {
    const [groupData, setGroupData] = React.useState(mockData);
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = (rowData) => {
        const list = [...groupData]
        const i  = groupData.findIndex((data)=>{
            return data.GroupCode === rowData.GroupCode;
        })
        
        list[i]['active'] = rowData.active ? false : true;
        setGroupData(list);
    };
    return (
        <div className="Group" data-testid="Group">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                            <CreateUpdate createOrUpdateStatus={'Update'} handleClose={handleClose} headerMenuValue={menuTabValue} />
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
                                        <TableCell width="20%"> {data.GroupCode}</TableCell>
                                        <TableCell width="20%">{data.GroupName}</TableCell>
                                        <TableCell width="20%"><Button variant="contained" color="info" startIcon={<EditIcon />}
                                            onClick={handleOpen}>Edit</Button></TableCell>
                                        <TableCell width="20%"><Button variant="contained" fullWidth="false" onClick={() => { handleClick(data) }}
                                            color={data.active ? 'success' : 'error'}>{data.active ? 'Activate' : 'Deactivate'}
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
                    rowsPerPageOptions={[5, 10, 25]}
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
