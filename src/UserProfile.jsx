import React, { useState, useEffect } from "react";
export default function UserDetails({user}){
    console.log(user);
    const userCardStyles={
        padding:'12px',
        textAlign:'left',
        borderRadius:'8px',
        backgroundColor:'red',
        color:'white',
        textTransform:'capitalize',
        width:'300px',
        margin:'10px 10px'
        
    }
    return (
        <div className="cardWrapper" style={{
            display:'flex',
            flexBasis:'33%',
        }}>
            <div className="userCard " style={userCardStyles}>
                <h3>name: {user.name}</h3>
                <h5>e-mail:{user.email}</h5>
                <h5>website:{user.website}</h5>
            </div> 
        </div>
    )
}