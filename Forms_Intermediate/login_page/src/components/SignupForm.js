import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const SignupForm = ({setIsLoggedIn}) => {
    const [FormData,setFormData] = useState({firstname:"",lastname:"",email:"",createpassword:"",confirmpassword:""})
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [accountType,setAccountType]=useState("student")
    const navigate = useNavigate();
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,[event.target.name]:event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(FormData.createpassword != FormData.confirmpassword)
        {
            toast.error("paaword do not match")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created")
        const accountData = {
            ...FormData
        }

        const finalData = {
            ...accountData,accountType
        }
        console.log("print Data");
        console.log(finalData);
        navigate("/dashbord");
    }
    return(
        <div>
            {/* student instructor tab */}
            <div className='flex bg-gray-500 border max-w-max rounded-full p-1 gap-x-1 my-6'>
                <button
                className={`${accountType === "student" ? 
                "bg-gray-900 text-white":
                "bg-transparent text-gray-200"} py-2 px-5 rounded-full transition-all duration-200`}   
                onClick={()=>setAccountType("student")}>
                    Student
                </button>
                <button  
                className={`${accountType === "instructor" ? 
                "bg-gray-900 text-white":
                "bg-transparent text-gray-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
                {/* firstname and lastname */}
                <div className='flex gap-3'>
                    <label className='w-full'>
                        <p  className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                            First Name<sup className='text-pink-500 text-[1pxl]'>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name' 
                            value={FormData.firstname} 
                            className='bg-gray-600 rounded-[0.5rem] w-full p-[5px] border-gray-700 hover:border border-b-2 hover:border-white'  
                        >
                        </input>
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                            Last Name<sup className='text-pink-500 text-[1pxl]'>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name' 
                            value={FormData.lastname}
                            className='bg-gray-600 rounded-[0.5rem] w-full p-[5px] border-gray-700 hover:border border-b-2 hover:border-white'    
                        >
                        </input>
                    </label>
                </div>
                {/* emailAddress */}
                <label className='w-full'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                            Email Address<sup className='text-pink-500 text-[1pxl]'>*</sup>
                        </p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address' 
                            value={FormData.email}
                            className='bg-gray-600 rounded-[0.5rem] w-full p-[5px] border-gray-700 hover:border border-b-2 hover:border-white'    
                        >
                        </input>
                </label>
                {/* create password and confirm password  */}
                <div className='flex gap-3'>
                    <label className='w-full relative'>
                            <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                                Create Password<sup className='text-pink-500 text-[1pxl]'>*</sup></p>
                            <input
                                required
                                type={showPassword ? ("text") : ("password")}
                                name='createpassword'
                                onChange={changeHandler}
                                placeholder='Enter Password' 
                                value={FormData.createpassword}  
                                className='bg-gray-600 rounded-[0.5rem] w-full p-[5px] border-gray-700 hover:border border-b-2 hover:border-white'  
                            >
                            </input>
                            <span className='absolute right-3 top-[32px] cursor-pointer'
                             onClick={()=>setShowPassword((prev)=> !prev)}>
                                {showPassword ? 
                                (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={20} fill='#AFB2BF'></AiOutlineEye>)}
                            </span>
                        </label>
                        <label className='w-full relative'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                            Confirm Password<sup className='text-pink-500 text-[1pxl]'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirmpassword'
                            onChange={changeHandler}
                            placeholder='Enter Password' 
                            value={FormData.confirmpassword}  
                            className='bg-gray-600 rounded-[0.5rem] w-full p-[5px] border-gray-700 hover:border border-b-2 hover:border-white'  
                        >
                        </input>
                        <span className='absolute right-3 top-[32px] cursor-pointer'
                            onClick={()=>setShowConfirmPassword((prev)=> !prev)}>
                            {showConfirmPassword ?
                             (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'></AiOutlineEyeInvisible >):(<AiOutlineEye fontSize={20} fill='#AFB2BF'></AiOutlineEye>)}
                        </span>
                    </label>
                </div>
                <button className='bg-yellow-600 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px] mt-5 w-full'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm;