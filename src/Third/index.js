import { Fragment, useState } from "react";
import './login.css'

export default function Form(){
    const[isAllFieldsVisible , setIsAllFieldsVisible] = useState(false)

    function handleClick(){
        setIsAllFieldsVisible(true)
    }

    return(

        <div className="containerLogin" >
            { isAllFieldsVisible &&
                <Fragment>
                    <div>
                        <input placeholder="first name " />
                    </div>

                    <div>
                        <input placeholder="last name" />
                    </div>
                </Fragment>
            }

            <div>
                <input placeholder="email" />
            </div>

            <div>
                <input placeholder="password" />
            </div>

            <p onClick={handleClick}  > Dont have account ? SignUp</p>
            
        </div>
    )
}