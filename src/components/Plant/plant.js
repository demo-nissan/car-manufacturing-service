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
import CreateUpdate from '../createUpdate';

function Plant({menuTabValue}) {
    let mockData={
        Plant :  [
            {
            plantCode: "2c1",
            plantName : "Nissan",
            country:"India",
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

  const [buttonStatus, setButtonStatus] = useState(true);
  const [open, setOpen] = useState(false);

  const handleActivateButton =(id)=>{
    setButtonStatus(false)
    console.log(id)
  }
  const handledeActivateButton =()=>{
    setButtonStatus(true)
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
       
  return (
    <div>
        <TableContainer component={Paper}> 
            <Table sx={{ minWidth: 650 }}   aria-label="a dense table">
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
                            <CreateUpdate createOrUpdateStatus={'Update'} handleClose={handleClose} headerMenuValue={menuTabValue}/>
                        </Modal>
                            <TableBody>
                             {mockData.Plant.map((item) => (
                                <TableRow
                                    key="1"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >{item.plantCode}</TableCell>
                                    <TableCell >{item.plantName}</TableCell>
                                    <TableCell >{item.country}</TableCell>
                                    <TableCell >
                                        <Button variant="contained" onClick={handleOpen}>Edit</Button>
                                    </TableCell>
                                    <TableCell >
                                        {buttonStatus ?(<Button variant="contained" onClick={()=>handleActivateButton(item.plantCode)} color="error">
                                            Deactivate
                                        </Button>):( <Button variant="contained"  onClick={handledeActivateButton}>
                                            active
                                        </Button>) }
                                       
                                       
                                    </TableCell>
                                </TableRow>
                              ))}  
                            </TableBody>
                        </Table>
        </TableContainer>
    </div>
  );
}

export default Plant;
