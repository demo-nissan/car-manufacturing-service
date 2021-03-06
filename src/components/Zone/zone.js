import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux';
import { getZoneActivate, setZoneActivate, getZoneData, setZoneData } from '../../actions/actions';
import { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CreateUpdate from '../createUpdate';
import axios from "axios";

function Zone({ menuTabValue }) {
    const dispatch  = useDispatch(); 
    let zoneArray =[];
    const zoneActivate = useSelector(state => state.reducer.cmsReducer.zoneActivate);
    const zoneData = useSelector(state => state.reducer.cmsReducer.zoneData);

    zoneData?.forEach(element => {
        element?.groups?.forEach(data=>{
            data?.zones?.forEach(item=>{     
                zoneArray.push(item);
            })  
        })
    });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);  
    const [open, setOpen] = useState(false);
    const [editableData, setEditableData] = useState('');
    const handleOpen = (itemValue) => {
        setEditableData(itemValue);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    function updateActivate(rowData) {
        const baseURL = rowData.activeFlag ? 'http://localhost:8080/zones/deactivate' : 'http://localhost:8080/zones/activate';
        axios.put(`${baseURL}/${rowData.zoneCode}`).then((response) => {
            console.log(response)
            dispatch(getZoneData());
        });

    }

    const theme = createTheme({
        palette: {
            green: {
                main: '#11cb5f'
            }
        }
    })

    return (

        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 310 }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Zone Code</TableCell>
                            <TableCell >Zone Name</TableCell>
                            {/* <TableCell >Country</TableCell> */}
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
                        [].concat(zoneArray)
                            .sort((a, b) => a.zoneCode > b.zoneCode ? 1 : -1)
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item, i) => (
                                    <TableRow
                                        // key={k}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell width="25%">{item.zoneCode}</TableCell>
                                        <TableCell width="25%">{item.zoneName}</TableCell>
                                        {/* <TableCell >{plant.country}</TableCell> */}
                                        <TableCell width="25%">
                                            <Button variant="contained" color="info" startIcon={<EditIcon />}
                                                onClick={() => { handleOpen(item) }}>Edit</Button>
                                        </TableCell>
                                        <TableCell width="30%">
                                            <ThemeProvider theme={theme}>
                                                <Button variant="contained" fullWidth="false" onClick={() => { updateActivate(item) }}
                                                    color={!item.activeFlag ? 'success' : 'error'}>{!item.activeFlag ? 'Activate' : 'Deactivate'}
                                                </Button>
                                            </ThemeProvider>
                                        </TableCell>
                                    </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[3, 10, 25]}
                component="div"
                count={zoneArray?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
        </div>

    );
}

export default Zone;
