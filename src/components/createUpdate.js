
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

function CreateUpdate({handleClose}) {
    
  return (
    <div>
          <Box sx={style}>
            <span className='closeIcon'>  <CloseIcon onClick={handleClose}/></span>
            <div className="createMainLabel"> Create Plant..</div>
            <div>
                <div className='groupCodeTextBox'>
                    <TextField id="outlined-basic" label="Group Code" variant="outlined" />
                </div>
                <div className='GroupNameTextbox'>
                    <TextField id="outlined-basic" label="Group Name" variant="outlined" />
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
