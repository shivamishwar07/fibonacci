import React from "react";
import { useState } from "react";
import { TextField,Button } from "@mui/material";

export default function Fibonacci()
{
    const [input1,setInput1] = useState(0);
    const [input2,setInput2] = useState(0);
    const [fibSeries,setFibSeries] = useState([])

    const handleClick=()=>{
        
        var a = input1
        var b = input2
        var c = 0
        var series = []
        var i = 0
        series.push(a)
        series.push(b)

        for(i=0;i<10;i++)
        {
            c=parseInt(a)+parseInt(b)
            series.push(c)
            a=b;
            b=c;
        }
        setFibSeries(series)


    }

    return(
        <div>
        <div style={{display:"flex",alignContent:"center",justifyContent:'center',backgroundColor:'#f5f6fa',backgroundPosition:'center',backgroundSize:'cover',width:'100vw',height:'100vh'}}>
            <div style={{marginTop:30,width:500,height:500}}>
            <h1 style={{display:"flex",alignContent:"center",justifyContent:'center'}}>FIBONACCI SERIES</h1>
            <TextField onChange={(e)=>setInput1(e.target.value)} id="outlined" fullWidth label="Enter First Number" variant="outlined" />
            <br /><br />
            <TextField onChange={(e)=>setInput2(e.target.value)} id="outlined" fullWidth label="Enter Second Number" variant="outlined" />
            <br /><br />
            <Button onClick={()=>handleClick()} fullWidth>Get Unique Fibonacci Series</Button>
            <h4>{fibSeries.map( s =>
               <span> {s} , </span>
            )}</h4>
            </div>
            

        </div>
        </div>
    )

}
