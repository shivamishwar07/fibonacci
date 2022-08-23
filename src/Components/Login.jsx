import React from "react";
import { useState } from "react";
import { TextField,Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import Fibonacci from "./Fibonacci";

export default function Login()
{
    const navigate = useNavigate() 
    const [uid,setUID] = useState("");
    const [password,setPassword] = useState("")
    const [msg,setMsg] = useState("")

    const handleClick=()=>{

        if(uid=="ABCDE" && password=="12345")
        {
            setMsg("")
            navigate("/fibonacci")
        }
        else
        {
            setMsg("Invalid UID / Password !")
        }


    }

    return(
        <div>
        <div style={{display:"flex",alignContent:"center",justifyContent:'center',backgroundColor:'#f5f6fa',backgroundPosition:'center',backgroundSize:'cover',width:'100vw',height:'100vh'}}>
            <div style={{marginTop:30,width:500,height:500}}>
            <h1 style={{display:"flex",alignContent:"center",justifyContent:'center'}}>LOGIN PAGE</h1>
            <TextField onChange={(e)=>setUID(e.target.value)} id="outlined" fullWidth label="Enter UID / Name" variant="outlined" />
            <br /><br />
            <TextField onChange={(e)=>setPassword(e.target.value)} id="outlined" fullWidth label="Enter Password" variant="outlined" />
            <br /><br />
            <Button onClick={()=>handleClick()} fullWidth>SIGN IN</Button>
            <h4>{msg}</h4>
            </div>
            

        </div>
        </div>
    )

}
