import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Plant() {
    let mockData={
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
                status:"deactive",
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
                                        <Button variant="contained">Edit</Button>
                                    </TableCell>
                                    <TableCell >
                                        {item.status ==="active"? (<Button variant="contained" disabled>
                                            Deactivate
                                        </Button>):(<Button variant="contained" >
                                            active
                                        </Button>)} 
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
