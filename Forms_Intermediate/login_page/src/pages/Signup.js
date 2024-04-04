import React from 'react'
import Template from '../components/Template';
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
    return(
       <Template 
        title="Join the millions learning to code with Studynotion for free"
        desc1="Build Skill for today,tommorow , and beyound."
        desc2="Education to future-proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
       ></Template>
    )
}

export default Signup;