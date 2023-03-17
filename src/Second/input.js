// import {useState} from 'react'
import './input.css'

function InputCompo(){
    // const[text , setText] = useState("")

    // function handleChange(event){
    //     let userInput = event.target.value
    //     let userInputChar = userInput.split(" ").join("")

    //     if(userInputChar.length <= 100){
    //         setText(text)
    //     }
    //     else{
    //         alert("Maximum Character limit reached :  100 Characters")
    //     }
    // }
    return(
        <div className='container3'>
           <h2>Introduce Your Self</h2>
        {/* //     <textarea onChange={handleChange} value={text} cols="30" rows="5" placeholder='Enter your text here'>      
        //     </textarea> */} 
        <textarea 
            maxLength={100}
        />
        </div>

        
    )
}

export default InputCompo