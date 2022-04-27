import { useState } from 'react';
import axios from "axios";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import EditIcon from '@mui/icons-material/Edit';
import TablePagination from '@mui/material/TablePagination';
import { mockData } from '../mockData/mockData';
import CreateUpdate from '../createUpdate';

function Plant({menuTabValue}) { 
  const [open, setOpen] = useState(false);
  const [stateMockData, setStateMockData]=useState(mockData.Plant);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);  
  const [editableData, setEditableData]=useState('')
  const [plantIndexValue, setPlantIndexValue]=useState('');

  React.useEffect(() => {
    axios.get('http://localhost:8080/get/all').then((response) => {
        setStateMockData(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleActivateDeactivateButton =( buttonStatus, item, i)=>{
    const list = [...stateMockData];
    console.log(list);
    list[i]['active'] = buttonStatus ? false : true;
    setStateMockData(list);

    const baseURL = buttonStatus ? 'http://localhost:8080/plants/deactivate/' : 'http://localhost:8080/plants/activate/';
    axios.put(`${baseURL}/${i}`).then((response) => {
        console.log(response)
    });
  }
  
  const handleOpenEdit = (itemValue, i) => {
    setEditableData(itemValue);
    setPlantIndexValue(i);
    setOpen(true); 
    }
    
  const handleClose = () => setOpen(false);
       
  return (
    <div>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 310 }}> 
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell >Plant Code</TableCell>
                        <TableCell >Plant Name</TableCell>
                        <TableCell >Country</TableCell>
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
                            <CreateUpdate createOrUpdateStatus={'Update'} handleClose={handleClose} headerMenuValue={menuTabValue} updateData={editableData} indexValue={plantIndexValue} />
                        </Modal>
                            <TableBody>
                             {stateMockData
                             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                             .map((item, i) => (
                                <TableRow
                                    key="1"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell width="20%">{item.plantCode}</TableCell>
                                    <TableCell width="20%">{item.plantName}</TableCell>
                                    <TableCell width="20%">{item.country}</TableCell>
                                    <TableCell width="20%">
                                        <Button variant="contained" onClick={()=>handleOpenEdit(item, i)} startIcon={<EditIcon />}>Edit</Button>
                                    </TableCell>
                                    <TableCell width="20%">
                                        <Button variant="contained" fullWidth="false" onClick={() => { handleActivateDeactivateButton( item.active, item, i) }}
                                            color={item.active ? 'success' : 'error'}>{item.active ? 'Activate' : 'Deactivate'}
                                        </Button>  
                                    </TableCell>
                                </TableRow>
                              ))}  
                            </TableBody>
                        </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[4, 10, 25]}
            component="div"
            count={stateMockData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
       />
       </Paper>
    </div>
  );
}

export default Plant;
