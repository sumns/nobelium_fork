import {useState} from 'react'
import './first.css'

function Changepic(props){
    const[image, setImage]=useState (0)

    function handleClick(){
        if(image === props.source.length-1){
            setImage(image - (props.source.length-1))
        }
        else{
            setImage(image + 1)
        }
    }
    return (
        <div className='main-div'>
            <div className='container'>
                <div className='image-part'>
                    <img src={props.source[image]} alt='' />
                </div>
                <div className='button-part'>
                    <button onClick={handleClick}>Change Image</button>
                </div>
            </div>
        </div>
    )
}

export default Changepic