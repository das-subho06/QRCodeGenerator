import React from "react";
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import Input from "@mui/material/Input"   
import { Box } from '@mui/material';
import Swal from 'sweetalert2'

const App = () => {
  
  const [text, setText] = useState(""); 
  const [finallink, setFinallink] = useState("");
  

  
      <template id="my-template">
  <swal-title>
    Save changes to "Untitled 1" before closing?
  </swal-title>
  <swal-icon type="warning" color="red"></swal-icon>
  <swal-button type="confirm">
    Save As
  </swal-button>
  <swal-button type="cancel">
    Cancel
  </swal-button>
  <swal-button type="deny">
    Close without Saving
  </swal-button>
  <swal-param name="allowEscapeKey" value="false" />
  <swal-param
    name="customClass"
    value='{ "popup": "my-popup" }' />
  <swal-function-param
    name="didOpen"
    value="popup => console.log(popup)" />
</template>
    
  const generateqr=(event)=>{
     event.preventDefault();
     if(text.trim() === "")
     {
      Swal.fire({
        
        title: 'Please enter a proper text or URL before proceeding',
    //  text: 'Please enter a proper text or URL before proceeding',
    
     confirmButtonText: 'Okay', 
     customClass: {
       popup: 'my-popup',
       title: 'my-title',
      //  text: 'my-text',
       
       confirmButton: 'my-confirm-button',
       
     }
      });
      return;
     }else{
    //console.log(text);
    let link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text;
    setFinallink(link);
    console.log(link);
  return;}
  }



  return(
    
    <div   style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35px',
        backgroundColor: '#E2E2B6'
      }}>
    <Paper elevation={24} id="paper" sx={{ margin:"60px 50px 50px", bgcolor:"#03346e", color:"white", borderRadius:"20px", position:"absolute", justifyContent:"center", width:"400px"  }}>
    <AppBar position="static" id="heading" sx={{padding:"20px 20px", borderTopRightRadius:"20px",  borderTopLeftRadius:"20px", fontFamily:"sans-serif"}}>QR CODE GENERATOR</AppBar>
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35px',
        backgroundColor: '#03346E'
      }}>
    <Typography variant="h7" sx={{backgroundColor:"#03346E", textAlign:"center"}}>Enter any text or url...</Typography>
    </div>
    <form onSubmit={generateqr}>
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35px',
        backgroundColor: '#03346E'
      }}
    >
    <TextField variant="standard" color="black" id="textinput"  InputProps={{
        style: { backgroundColor: '#03346E', color:"white" }
      }} value={text} onChange={(e)=> setText(e.target.value)}  focused/>
      <Button type="submit" color="white" variant="text" disableRipple >GO</Button>
    </div>
    </form>
    
      <div
      style={{
        
        justifyContent: 'center',
        alignItems: 'center',
        margin:'65px' ,
        backgroundColor: '#03346E',
        
      
      }}>
      
    <Box  sx={{borderBottomLeftRadius:"20px", borderBottomRightRadius: "20px", alignItems: 'center', backgroundColor:"#03346E", alignContent:"center", margin:"30px 30px", padding:"10px 30px 30px"}}>
      <img src={finallink} id="image" ></img>
    </Box>
      </div>

    </Paper>
   </div>
  )
}
export default App;