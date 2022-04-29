import * as React from 'react';
import { useState } from 'react';
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
import Zone from './Zone/zone';
import Group from './Group/Group'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CreateUpdate from './createUpdate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZoneData } from '../actions/actions';
import './home.css';
/**
 * Common component or home component which holds the heading and create action button 
 * @returns home component
 */
function Home() {
  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(false);
  const dispatch  = useDispatch();
  dispatch(getZoneData());

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='homeDiv'>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Manufacturing Informations
          </Typography>
          <div className="createButtonDiv">
            <Button variant="contained" onClick={handleOpen}>Create</Button>
          </div>
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
            <div>
              <CreateUpdate createOrUpdateStatus={'Create'} handleClose={handleClose} headerMenuValue={value} updateData={''} />
            </div>
          </Modal>
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
              <Plant menuTabValue={value} />
            </TabPanel>
            <TabPanel value="2">
              <Group menuTabValue={value} />
            </TabPanel>
            <TabPanel value="3">
              <Zone menuTabValue={value} />
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
    </div>
  );
}

export default Home;
