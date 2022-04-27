import { useState } from 'react';
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

import CreateUpdate from '../createUpdate';

function Plant({menuTabValue}) {
    let mockData={
        Plant :  [
            {
            plantCode: "2c1",
            plantName : "Nissan",
            country:"India",
            active: true,
                Group: [{
                    GroupCode: "2c1",
                    GroupName : "Nissan",
                        Zone: [{
                        ZoneCode: "2c1",
                        ZoneName : "Nissan",
                        }]
                    },{
                    GroupCode: "2c1",
                    GroupName : "Nissan",
                        Zone: [{
                            ZoneCode: "2c1",
                            ZoneName : "Nissan",
                        }]
                    },]
        
            },
            {
                plantCode: "2c2",
                plantName : "Nissan",
                country:"India",
                active: false,
                    Group: [{
                        GroupCode: "2c1",
                        GroupName : "Nissan",
                            Zone: [{
                            ZoneCode: "2c1",
                            ZoneName : "Nissan",
                            }]
                        },{
                        GroupCode: "2c1",
                        GroupName : "Nissan",
                            Zone: [{
                                ZoneCode: "2c1",
                                ZoneName : "Nissan",
                            }]
                        },]
            
                },
                {
                    plantCode: "2c3",
                    plantName : "Nissan",
                    country:"India",
                    active: false,
                        Group: [{
                            GroupCode: "2c1",
                            GroupName : "Nissan",
                                Zone: [{
                                ZoneCode: "2c1",
                                ZoneName : "Nissan",
                                }]
                            },{
                            GroupCode: "2c1",
                            GroupName : "Nissan",
                                Zone: [{
                                    ZoneCode: "2c1",
                                    ZoneName : "Nissan",
                                }]
                            },]
                
                    },
                    {
                        plantCode: "2c4",
                        plantName : "Nissan",
                        country:"India",
                        active: false,
                            Group: [{
                                GroupCode: "2c1",
                                GroupName : "Nissan",
                                    Zone: [{
                                    ZoneCode: "2c1",
                                    ZoneName : "Nissan",
                                    }]
                                },{
                                GroupCode: "2c1",
                                GroupName : "Nissan",
                                    Zone: [{
                                        ZoneCode: "2c1",
                                        ZoneName : "Nissan",
                                    }]
                                },]
                    
                        },
                        {
                            plantCode: "2c5",
                            plantName : "Nissan",
                            country:"India",
                            active: false,
                                Group: [{
                                    GroupCode: "2c1",
                                    GroupName : "Nissan",
                                        Zone: [{
                                        ZoneCode: "2c1",
                                        ZoneName : "Nissan",
                                        }]
                                    },{
                                    GroupCode: "2c1",
                                    GroupName : "Nissan",
                                        Zone: [{
                                            ZoneCode: "2c1",
                                            ZoneName : "Nissan",
                                        }]
                                    },]
                        
                            },
                            {
                                plantCode: "2c6",
                                plantName : "Nissan",
                                country:"India",
                                active: false,
                                    Group: [{
                                        GroupCode: "2c1",
                                        GroupName : "Nissan",
                                            Zone: [{
                                            ZoneCode: "2c1",
                                            ZoneName : "Nissan",
                                            }]
                                        },{
                                        GroupCode: "2c1",
                                        GroupName : "Nissan",
                                            Zone: [{
                                                ZoneCode: "2c1",
                                                ZoneName : "Nissan",
                                            }]
                                        },]
                            
                                },
            ]
        }

 
  const [open, setOpen] = useState(false);
  const [stateMockData, setStateMockData]=useState(mockData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);  
  const [editablePlantCode, setEditablePlantCode]=useState('')
  const [editablePlantName, setEditablePlantName]=useState('')


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleActivateDeactivateButton =( buttonStatus, item, i)=>{
      let tempMockData=item
      let completeMockData=stateMockData;
      tempMockData.active=buttonStatus ? false : true;
      completeMockData.push(tempMockData)
      setStateMockData(completeMockData)  
  }
  
  const handleOpen = (plantCodeValue, plantNameValue) => {
    setEditablePlantCode(plantCodeValue);
    setEditablePlantName(plantNameValue);
    //   console.log("++",editablePlantCodeValue, editablePlantNameValue)
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
                            <CreateUpdate createOrUpdateStatus={'Update'} handleClose={handleClose} headerMenuValue={menuTabValue} codeValue={editablePlantCode} codeName={editablePlantName}/>
                        </Modal>
                            <TableBody>
                             {stateMockData.Plant
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
                                        <Button variant="contained" onClick={()=>handleOpen(item.plantCode,item.plantName)} startIcon={<EditIcon />}>Edit</Button>
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
            count={stateMockData.Plant.length}
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
