
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import './createUpdate.css'

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

function CreateUpdate({createOrUpdateStatus, handleClose, headerMenuValue, updateData}) {

  const editValueCode = headerMenuValue=== '1' ? updateData.plantCode : '';
  const editValueName = headerMenuValue=== '1' ? updateData.plantName : '';
  console.log("===",editValueCode, editValueName )
  let createUpdateStatus=createOrUpdateStatus==='Update' ? true: false;

  return (
    <div>
          <Box sx={style}>
            <span className='closeIcon'>  <CloseIcon onClick={handleClose}/></span>
            <div className="createMainLabel"> {createOrUpdateStatus}<span>{' '}</span>{(headerMenuValue === '1' && (<>Plant</>)) || (headerMenuValue === '2' && (<>Group</>))  || (headerMenuValue === '3' && (<>Zone</>))}</div>
            <div>
                <div className='groupCodeTextBox'>
                    <TextField id="outlined-basic" disabled={createUpdateStatus} value={editValueCode} label={(headerMenuValue === '1' && (<>Plant Code</>)) || (headerMenuValue === '2' && (<>Group Code</>))  || (headerMenuValue === '3' && (<>Zone Code</>))} variant="outlined" />
                </div>
                <div className='GroupNameTextbox'>
                    <TextField id="outlined-basic" value={editValueName}  label={(headerMenuValue === '1' && (<>Plant Name</>)) || (headerMenuValue === '2' && (<>Group Name</>))  || (headerMenuValue === '3' && (<>Zone Name</>))}variant="outlined" />
                </div>
                <div className='submitButton'>
                    <Button variant="contained"  >Submit</Button>
                </div>
            </div>
          </Box>  
    </div>
  );
}

export default CreateUpdate;
