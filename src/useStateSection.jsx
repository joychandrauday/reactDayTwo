import { useState } from "react"

export default function UseStateFunction(){
    const [count,setCount]=useState(0)
    const handleAddCount=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleSubstractCount=()=>{
        const newCount=count-1;
        setCount(newCount);
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
            <h2>state change</h2>
            <div style={{
                display:'flex',
                alignItems:'center'
            }}>
                <button style={buttonStyle} onClick={handleSubstractCount}>decrease</button><h1 style={{padding:'18px'}}>{count}</h1><button style={buttonStyle} onClick={handleAddCount}>increase</button>
            </div>
            
        </div>
    )
}