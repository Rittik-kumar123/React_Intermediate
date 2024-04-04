import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({setIsLoggedIn}) => {
    const [FormData,setFormData] = useState({email:"",password:""})
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,[event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        // console.log("Hii")
        navigate("/dashbord")
    }
    return(
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                    Email Address<sup className='text-pink-500 text-[1pxl]'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={FormData.email}
                    onChange={changeHandler}
                    placeholder='Enter your Email'
                    name='email'
                    className='bg-red rounded-[0.5rem] w-full p-[5px] border-gray-600 hover:border border-b-2 hover:border-white'
                ></input>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] text-3xl'>
                    Password<sup className='text-pink-500 text-[1pxl]'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-red rounded-[0.5rem] w-full p-[5px] hover:border border-b-2 border-gray-500'
                ></input>

                <span className='absolute right-3 top-[32px] cursor-pointer' onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={20} fill='#AFB2BF'></AiOutlineEye>)}
                </span>

                <Link to='#'>
                <p className='text-xs mt-1 text-blue-500 max-w-max ml-auto '>Forgot Password</p>
                </Link>
            </label>

            <button className='bg-yellow-600 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px] mt-5'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm;