import { useState } from "react"

export default function UseHook(){

    const [Seats,setSeat]=useState(11)
    const handleAddSeat=()=>{
        const newCountSeat=Seats+1;
        setSeat(newCountSeat);
    }
    const handleSubstractSeat=()=>{
        const newCountSeat=Seats-1;
        setSeat(newCountSeat);
    }
    const buttonStyle={
        margin:'5px',
        backgroundColor:'blue',
        color:'white',
        textTransform:'capitalize'
        
    }
    return (

        <div style={{
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            padding:'5px'
        }}>
            <h2>Hooks in React</h2>
            <div style={{
                padding:'30px',
                background:'wheat',
                borderRadius:'5px',
                color:'white',
                display:'flex',
                alignItems:'center'
            }}>
                <button style={buttonStyle} onClick={handleSubstractSeat}>decrease seats</button><h1 style={{padding:'18px',color:'blue',textTransform:'capitalize'}}>Camp seats:{Seats}</h1><button style={buttonStyle} onClick={handleAddSeat}>increase seats</button>
            </div>
            
        </div>
    )
}