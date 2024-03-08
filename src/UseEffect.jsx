import React, { useState, useEffect } from "react";
import UserDetails from "./UserProfile";

export default function UseEffectSection(){

    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);

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
            <h2>Use Effect in React</h2>
            <div style={{
                padding:'30px',
                background:'wheat',
                borderRadius:'5px',
                color:'white',
                display: 'grid',
                gridTemplateColumns:'auto auto auto',
                justifyContent:'center',
                color:'black'
            }}>
                <h2>total user: {users.length}</h2>
                
                {
                    users.map(user => <UserDetails user={user}></UserDetails>)
                }
            </div>
            
        </div>
    )
}