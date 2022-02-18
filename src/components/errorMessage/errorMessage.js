import React from "react";

const ErrorMessage = () =>{
    return (

        <div>

        <img src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error" style={{"width": "100%"}}></img>
     
        <div style={{"text-align": "center"}}>Something went wrong...</div>
        </div>
    )
}

export default ErrorMessage;