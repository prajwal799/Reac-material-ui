import React from "react";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { TextField  } from "@mui/material";
import {AppBar, Toolbar,IconButton,Typography, InputLabel , Select , option , MenuItem } from "@mui/material";

const Component = () => {
    const [value , setValue] = useState(false);
    const [text  ,setText] = useState("");
    const [select , setSelect] = useState("");
    const handleCheck = () => {
    }
    console.log(text,"text",value,select);
    return(
        <>

       
        <br />
        <Button variant="contained" color="success"
                 size="large"  startIcon={<DeleteIcon />}>hello</Button>
        <br />
          <Checkbox size="medium" color="success" checked={value} onClick={() => setValue(!value)}></Checkbox>         
         <br />
         <TextField label="Filled" color="" variant="filled" value={text} onChange={(e) => setText(e.target.value)}></TextField>
         <br />
         <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Age
  </InputLabel>
  <Select
    value={select}
    onChange={(e) => setSelect(e.target.value)}
    label={value}
  >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
   
  </Select>
 
        </>
    )
}
export default Component;