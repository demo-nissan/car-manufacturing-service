import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import './createUpdate.css'
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CreateUpdate({createOrUpdateStatus, handleClose, headerMenuValue, updateData, indexValue}) {

  const[editValueCode, setEditValueCode]=useState(headerMenuValue=== '1' ? updateData.plantCode : '');
  const[editValueName, setEditValueName]=useState(headerMenuValue=== '1' ? updateData.plantName : '');
 
  let createUpdateStatus=createOrUpdateStatus==='Update' ? true: false;
  const tabValue=headerMenuValue==='1' ? 'plants': headerMenuValue==='2' ? 'groups': 'zones';

  const handleChangeEditValueCode=(event)=>{
    setEditValueCode(event.target.value);
  }

  const handleChangeEditValueName=(event)=>{
    setEditValueName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let bodyValue= headerMenuValue ==='1' ? {
          plant_name: editValueCode,
          place: editValueName,
          country: "IND",
          language: "ENG",
          active_flag: true
      } : headerMenuValue ==='2' ? {
          group_name: "ZN2",
          active_flag: true,
          group_code:1,
      } : {
          zone_name: "ZN2",
          active_flag: true,
          plant_code:1,
          group_code:1,
      }

    if(createOrUpdateStatus==='Update'){
    axios.put(`http://localhost:8080/${tabValue}/${indexValue}`)
      .then(res => {
        console.log(res);
      });
    }else{
      axios.post(`http://localhost:8080/${tabValue}`, bodyValue )
      .then(res => {
        console.log(res);
      });
    }
    handleClose();
  }


  return (
    <div>
          <Box sx={style}>
          <form onSubmit={handleSubmit}>
              <span className='closeIcon'>  <CloseIcon onClick={handleClose}/></span>
              <div className="createMainLabel"> {createOrUpdateStatus}<span>{' '}</span>{(headerMenuValue === '1' && (<>Plant</>)) || (headerMenuValue === '2' && (<>Group</>))  || (headerMenuValue === '3' && (<>Zone</>))}</div>
              <div>
                  <div className='groupCodeTextBox'>
                      <TextField id="outlined-basic" disabled={createUpdateStatus} value={editValueCode} onChange={handleChangeEditValueCode} label={(headerMenuValue === '1' && (<>Plant Code</>)) || (headerMenuValue === '2' && (<>Group Code</>))  || (headerMenuValue === '3' && (<>Zone Code</>))} variant="outlined" />
                  </div>
                  <div className='GroupNameTextbox'>
                      <TextField id="outlined-basic" value={editValueName} onChange={handleChangeEditValueName}  label={(headerMenuValue === '1' && (<>Plant Name</>)) || (headerMenuValue === '2' && (<>Group Name</>))  || (headerMenuValue === '3' && (<>Zone Name</>))}variant="outlined" />
                  </div>
                  <div className='submitButton'>
                      <Button variant="contained" type="submit" >Submit</Button>
                  </div>
              </div>
            </form>
          </Box>  
    </div>
  );
}

export default CreateUpdate;
