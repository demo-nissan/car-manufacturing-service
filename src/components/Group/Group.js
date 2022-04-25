import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Group.module.css';

const mockData = [{
    GroupCode: "1",
    GroupName : "Wheel",
    active:true
},{
    GroupCode: "2",
    GroupName : "Interior",
    active:false
},
{
    GroupCode: "3",
    GroupName : "Exterior",
    active:true
}
]
function Group(props) {
    const [groupData, setGroupData] = React.useState(mockData);
    const handleClick = (newValue,i) => {
        console.log(newValue,i);
        const list = [...groupData];
        list[i]['active']=newValue?false:true;
        setGroupData(list);
    };
    return (
        <div className="Group" data-testid="Group">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Group Code</TableCell>
                            <TableCell >Group Name</TableCell>
                            <TableCell >Edit</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        groupData.map((data,i)=>{
                            return(<TableRow
                            key="1"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell > {data.GroupCode}</TableCell>
                            <TableCell >{data.GroupName}</TableCell>
                            <TableCell ><Button variant="outlined" color="info">Edit</Button></TableCell>
                            <TableCell ><Button variant="contained" onClick={() => { handleClick(data.active,i) }} 
                            color={data.active ? 'success' : 'error'}>{data.active ? 'Activate' : 'Deactivate'}</Button>
                            </TableCell>
                        </TableRow>)
                        }
                        )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};


export default Group;
