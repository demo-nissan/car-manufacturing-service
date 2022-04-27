import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
//import { createTheme } from '@mui/system';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux';
import { getZoneActivate, setZoneActivate, getZoneData, setZoneData } from '../../actions/actions';
import { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CreateUpdate from '../createUpdate';

function Zone({menuTabValue}) {

    const zoneActivate = useSelector(state => state.reducer.cmsReducer.zoneActivate);
    const zoneData = useSelector(state => state.reducer.cmsReducer.zoneData);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch  = useDispatch();

    useEffect(()=>{
        dispatch(getZoneData());
    },[]);

    function updateActivate(data,i){

        console.log("$%$%$%$%$%%$");
        console.log(data)
        console.log("$%$%$%$%$%%$");

        data.Plant[i].status = "InActive";
        var newState = !zoneActivate;
        dispatch(setZoneActivate(newState));
        //dispatch(setZoneData(data))

    }

    const theme = createTheme({
        palette:{
            green:{
                main:'#11cb5f'
            }
        }
    })  
    
  return (
     
        <div>
        <TableContainer component={Paper}> 
            <Table sx={{ minWidth: 650 }}   aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >Zone Code</TableCell>
                        <TableCell >Zone Name</TableCell>
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
                            <CreateUpdate createOrUpdateStatus={'Update'} handleClose={handleClose} headerMenuValue={menuTabValue} />
                        </Modal>

                            <TableBody>
                             {zoneData && zoneData.Plant.map((plant, i) => (
                                    plant.Group.map((group, j) => (
                                            group.Zone.map((item, k) => (
                                                <TableRow
                                                    key={k}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell >{item.ZoneCode}</TableCell>
                                                    <TableCell >{item.ZoneName}</TableCell>
                                                    <TableCell >{plant.country}</TableCell>
                                                    <TableCell >
                                                        <Button variant="contained" color="info" startIcon={<EditIcon />}
                                                            onClick={handleOpen}>Edit</Button>
                                                    </TableCell>
                                                    <TableCell >
                                                    <ThemeProvider theme={theme}>
                                                        <Button variant="contained" onClick={() => { updateActivate(zoneData,i) }}
                                                            color={zoneActivate ? 'success' : 'error'}>{zoneActivate ? 'Activate' : 'Deactivate'}
                                                        </Button>
                                                        </ThemeProvider>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                    ))
                              ))}  
                            </TableBody>
                        </Table>
        </TableContainer>
    </div>
    
  );
}

export default Zone;
