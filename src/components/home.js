import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Group from "./Group/Group"
import './home.css';

function Home() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <div className='mainHomediv'>
       <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Manufacturing Informations
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Button variant="contained">Create</Button>
                </Typography>

            </CardContent>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Plant " value="1" />
                        <Tab label="Group" value="2" />
                        <Tab label="Zone" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
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
                                <TableRow
                                    key="1"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell > 1</TableCell>
                                    <TableCell >2</TableCell>
                                    <TableCell >3</TableCell>
                                    <TableCell >4</TableCell>
                                    <TableCell >5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    </TabPanel>
                    <TabPanel value="2"><Group/></TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
       </Card>
      </div>
    );
  }
  
  export default Home;
  