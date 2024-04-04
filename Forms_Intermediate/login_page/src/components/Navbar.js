import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setLoggedIn=props.setLoggedIn;
    return(
        <div className='flex gap-3 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
            </Link>

            <nav>
                <ul className='flex gap-3 text-white'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/">About</Link>
                    </li>
                    <li>
                    <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login-Signup-Logout-Dashbord */}
            <div className='flex items-center gap-x-4 text-white'>
                { !isLoggedIn  &&
                    <Link to="/login">
                        <button className='bg-gray-800 text-white py-[2px] px-[12px] rounded-[8px] border-gray-700 '>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/Signup">
                        <button className='bg-gray-800 text-white py-[2px] px-[12px] rounded-[8px] border-gray-700 '>Signup</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged out")
                        }} className='bg-gray-800 text-white py-[2px] px-[12px] rounded-[8px] border-gray-700 '>Logout</button>
                    </Link>
                }
                { isLoggedIn && 
                    <Link to="/dashbord">
                        <button className='bg-gray-800 text-white py-[2px] px-[12px] rounded-[8px] border-gray-700 '>Dashbord</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;