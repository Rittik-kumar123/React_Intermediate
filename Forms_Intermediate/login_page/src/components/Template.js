import React from 'react'
import frameImage from "../assets/frame.png"
// import Login from '../pages/Login';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
    return(
        <div className='w-11/12 max-w-[1160px] flex py-12 mx-auto gap-x-12 gap-y-0 justify-between'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-gray-50 font-semibold text-[1.875rem] leading-[2.37rem]'>{title}</h1>
                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-gray-100'>{desc1}</span>
                    <br></br>
                    <span className='text-blue-700 italic'>{desc2}</span>
                </p>

                {
                    formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-[48%] h-[1px] bg-gray-700'></div>
                    <p className='text-gray-700 font-medium leading-[1.375rem]'>or</p>
                    <div className='w-[48%] h-[1px] bg-gray-700'></div>
                </div>

                <button className='flex flex-row w-full items-center justify-center px-[12px] py-[8px] gap-x-2 mt-6 rounded-[8px] font-medium text-gray-100 border border-gray-700'>
                    <FcGoogle></FcGoogle>
                    <p>Signup with Google</p>
                </button>
            </div>

            <div className='w-11/12 relative max-w-[450px]'>
                <img src={frameImage} alt='Pattern' width={558} height={504} loading='lazy'/>

                <img src={image} alt='student' width={558} height={504} loading='lazy' className='absolute -top-3 right-3 '/>
            </div>

        </div>
    )
}

export default Template;