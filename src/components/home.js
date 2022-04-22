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
import Plant from './Plant/plant';
import Group from './Group/Group'
import './home.css';

function Home() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <div className='homeDiv'>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Manufacturing Informations
                </Typography>
                <div className="createButtonDiv">
                    <Button variant="contained">Create</Button>
                </div>
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
                        <Plant/>
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
  