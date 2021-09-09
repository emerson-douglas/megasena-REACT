import { useState } from "react";
import Numero from "../components/painel/Numero";
import Sorteio from "../functions/mega";

export default function mega(){
    const [num,setnum]= useState([])
    function gerar(){
        setnum(Sorteio().map(num=><Numero num={num}></Numero>))
    }
    return(
        <center>

            <div style={{backgroundColor:"green",width:"fit-100%",height:"100vh",    justifyContent:"center",
    alignItems:"center",display:"flex", flexDirection:"column", }}>
        <h1>APOSTA</h1>
            <div style={{backgroundColor:"#999",width:"fit-content"}}>
                <div style={
                {display:"flex", 
                width:"fit-content", 
                minHeight:"60px",
            minWidth:"360px"}
                }>
                {num}
            </div>
            <button onClick={gerar}>Gerar Aposta</button>
            </div>

            </div>
  
        </center>
   
        
    )
}