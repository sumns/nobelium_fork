import React from 'react'
import './style/Style.css'

function Card (props){

    return(
        <div className='outerContainer' >
            <div className='cardContainer'>
                <img src={props.image} alt="" />
                <h3>{props.designation}</h3>
                <h1>{props.name}</h1>
                <p>{props.description}</p>

            </div>

        </div>
    )
}

export default Card
