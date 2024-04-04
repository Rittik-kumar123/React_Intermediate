import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs =()=>{
    const navigate = useNavigate();
    function changeHandler(){
        //Move to home page
        navigate("/")
    }
    function backHandler(){
        //move to previous page
        navigate(-1)
    }
    return(
        <div>
            <div>
                this is lab page
            </div>
            <button onClick={changeHandler}>Home</button>
            <button onClick={backHandler}>Go back</button>
        </div>
    )
}

export default Labs;