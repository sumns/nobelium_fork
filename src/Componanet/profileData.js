import React from "react"
export default function Profile({profileData}){
    console.log(profileData)

    const {name,designation,company,exprience} = profileData

    return(
        <div className = "profileContainer">
            <img className="image" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profileData.name"/>
            
            <h3>{name}</h3>
            <span>{designation} @ {company}</span>
            <p>{exprience}</p>

        </div>
    )
}