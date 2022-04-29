import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { getZoneData } from '../actions/actions';
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
/**
 * Common component for edit and update operations
 * @param {*} param0 flag to check whether create or update action,
 * close operation handling method,
 * header value(Plant,Group and Zone),
 * editable data if the action is update,
 * index value of the row
 * @returns Create/Update Pop Up component
 * @author JOJO Joseph
 * @author Mijoy M J
 */
function CreateUpdate({createOrUpdateStatus, handleClose, headerMenuValue, updateData, indexValue}) {

  const[productCodeValue, setProductCodeValue]=useState(0);
  const[groupCodeValue, setGroupCodeValue]=useState(0)
  const[editValueCode, setEditValueCode]=useState(headerMenuValue=== '1' ? updateData.plantCode : headerMenuValue=== '2'? updateData.groupCode : updateData.zoneCode);
  const[editValueName, setEditValueName]=useState(headerMenuValue=== '1' ? updateData.plantName : headerMenuValue=== '2'?updateData.groupName : updateData.zoneName);
  const[plantCountryName, setPlantCountryName]=useState(updateData?.country)
  const[groupData, setGroupData]=useState([]);
  const dispatch  = useDispatch();
  let createUpdateStatus=createOrUpdateStatus==='Update' ? true: false;
  const tabValueCreate=headerMenuValue==='1' ? 'plants': headerMenuValue==='2' ? 'group/createGroup': 'zones';
  const tabValueUpdate=headerMenuValue==='1' ? 'plants': headerMenuValue==='2' ? 'group/editGroup': 'zones';
 
  const MockData = useSelector(state => state.reducer.cmsReducer.zoneData);
 

  const handleChangePlantCodeValue=(event)=>{
    setProductCodeValue(event.target.value);
    setGroupData(event.target.value.groups);
    console.log(groupData);
  }
  

  const handleChangeGroupCodeValue=(e)=>{
    setGroupCodeValue(e.target.value);
  }

  const handleChangeEditValueCode=(event)=>{
    setEditValueCode(event.target.value);
  }

  const handleChangeEditValueName=(event)=>{
    setEditValueName(event.target.value)
  }

  const handleChangePlantCountryValue=(event)=>{
    setPlantCountryName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let createBodyValue= headerMenuValue ==='1' ? {
          plant_name: editValueName,
          country: plantCountryName,
          place:"TVM",
          language: "ENG",
          active_flag: true
      } : headerMenuValue ==='2' ? {
          group_name: editValueName,
          active_flag: true,
          plant_code:productCodeValue.plantCode,
      } : {
          zone_name: editValueName,
          active_flag: true,
          plant_code:productCodeValue.plantCode,
          group_code:1,
      }

      let updateBodyValue=headerMenuValue ==='1' ? {
            place: editValueName,
            country: plantCountryName,
            language: "ENG",
        } : headerMenuValue ==='2' ? {
            group_name: editValueName,
        } : {
            zone_name: editValueName,
        }

      

    if(createOrUpdateStatus==='Update'){
    axios.put(`http://localhost:8080/${tabValueUpdate}/${editValueCode}`, updateBodyValue)
      .then(async (res) => {
        console.log(res,"100 ");
        const newData = await getZoneData();
        dispatch(newData);
      });
    }else{
      axios.post(`http://localhost:8080/${tabValueCreate}`, createBodyValue)
      .then(res => {
        console.log(res);
        dispatch(getZoneData());
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
                  <div className={createUpdateStatus? 'groupCodeTextBox' : 'hideCodeValueCss'} >
                      <TextField id="outlined-basic" disabled={createUpdateStatus} value={editValueCode} onChange={handleChangeEditValueCode} label={(headerMenuValue === '1' && (<>Plant Code</>)) || (headerMenuValue === '2' && (<>Group Code</>))  || (headerMenuValue === '3' && (<>Zone Code</>))} variant="outlined" />
                  </div>
                  <div className={headerMenuValue === '1' ? "plantCountryTextBox" : "hideCodeValueCss" }  >
                      <TextField id="outlined-basic" value={plantCountryName}  onChange={handleChangePlantCountryValue} label="Plant Country" variant="outlined" />
                  </div>
                  <div className={headerMenuValue === '1' || createUpdateStatus ? "hideCodeValueCss" : "groupOrZonePlantDropDown" }>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Plant Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={productCodeValue}
                            label="Plant Name"
                            onChange={handleChangePlantCodeValue}
                        >
                          <MenuItem value= '0' disabled>Select..</MenuItem>
                          {MockData.map((data) =>(
                              <MenuItem value={data}>{data.plantName}</MenuItem>
                          ))} 
                        </Select>
                    </FormControl>
                  </div>
                  <div className={headerMenuValue === '1' || headerMenuValue === '2' || createUpdateStatus ? "hideCodeValueCss" : "groupOrZonePlantDropDown" }>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Group Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={groupCodeValue}
                            label="Group Name"
                            onChange={handleChangeGroupCodeValue}
                        >
                          <MenuItem value= '0' disabled>Select..</MenuItem>
                          {groupData.map((data) =>(
                              <MenuItem value={data.groupCode}>{data.groupName}</MenuItem>
                          ))} 
                        </Select>
                    </FormControl>
                  </div>
                  <div className='groupNameTextbox'>
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
