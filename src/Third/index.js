import { useState } from "react";

function Login(){
    const[input , setInput] = useState(false)
    return(
        <div>
            {input ? <Login/> : ' '}
            {input != true ? <Signup/> : ' '}
            <button
                onClick={()=>{
                    setInput(!input)
                }}
            >
                SignIn     
            </button>

            <button
                onClick={()=>{
                    setInput(!input)
                }}
            >
                Signup    
            </button>
        </div>
    )
}

export default Login