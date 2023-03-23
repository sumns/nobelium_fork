import Profile from "./profileData"
import'./scroll.css'
function Scroll(){

    const userData = [
        {
            name : "Ramu",
            company : "Amazon",
            designation : "SDE",
            exprience : "3years"
        },
        {
            name : "Aman",
            company : "Flipkart",
            designation : "SDE",
            exprience : "2years"
        },
        {
            name : "Atul",
            company : "Google",
            designation : "SDE",
            exprience : "3years"
        },
        {
            name : "Shreya",
            company : "Amazon",
            designation : "SDE",
            exprience : "3years"
        },
        {
            name : "Suman",
            company : "Amazon",
            designation : "SDE",
            exprience : "3years"
        }
    ]

    return(
        <>
           <div className="main">
                <h2>Software Developers</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti tempore. Nobis, quasi tenetur? Reiciendis quidem ipsum a at tenetur fugit pariatur minus corrupti odio.
                </p>
                <div className="profiles">
                    {
                        userData.map((data)=>(
                         <Profile key = {data.name} profileData = {data}/>
                        ))
                    }

                </div>
                
           </div>
        </>

    )
}
export default Scroll