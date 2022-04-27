import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
//import { createTheme } from '@mui/system';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux';
import { getZoneActivate, setZoneActivate } from '../../actions/actions';

function Zone() {

    const zoneActivate = useSelector(state => state.reducer.cmsReducer.zoneActivate);
    const dispatch  = useDispatch();
    var activateButton = zoneActivate?"Active":"InActive";
    var activateButtonColor = zoneActivate?"Success":"";

    function updateActivate(){
        var newState = !zoneActivate;
        dispatch(setZoneActivate(newState));

    }

    const theme = createTheme({
        palette:{
            green:{
                main:'#11cb5f'
            }
        }
    })
    let apiData={
        Plant :  [
            {
            plantCode: "2c1",
            plantName : "Nissan",
            country:"India",
            status:"active",
                Group: [{
                    GroupCode: "2c1",
                    GroupName : "Nissan",
                        Zone: [{
                        ZoneCode: "NSNKOCHI",
                        ZoneName : "Nissan Kochi",
                        }]
                    },{
                    GroupCode: "2c1",
                    GroupName : "Nissan",
                        Zone: [{
                            ZoneCode: "NSNTVM",
                            ZoneName : "Nissan Tvm",
                        }]
                    },]
        
            },
            {
                plantCode: "2c2",
                plantName : "Nissan",
                country:"India",
                status:"deactive",
                    Group: [{
                        GroupCode: "2c1",
                        GroupName : "Nissan",
                            Zone: [{
                            ZoneCode: "NSNBAN",
                            ZoneName : "Nissan BAN",
                            }]
                        },{
                        GroupCode: "2c1",
                        GroupName : "Nissan",
                            Zone: [{
                                ZoneCode: "NSNCHN",
                                ZoneName : "Nissan Chennai",
                            }]
                        },]
            
                },
            ]
        }
        
        

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
                            <TableBody>
                             {apiData.Plant.map((plant, i) => (
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
                                                        <Button variant="contained">Edit</Button>
                                                    </TableCell>
                                                    <TableCell >
                                                    <ThemeProvider theme={theme}>
                                                        {plant.status ==="active"? (
                                                            
                                                            <Button   variant="contained" disabled>
                                                                Deactivate
                                                            </Button>):(<Button onClick={updateActivate} color="success" variant="contained" >
                                                                {activateButton}
                                                            </Button>
                                                            
                                                        )} 
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
