import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card=(props)=>{
    let course=props.course;
    let likedCources=props.likedCources; 
    let setLikedCources = props.setLikedCources;
    function clickHandler(){
        //logic
        if(likedCources.includes(course.id)){
            //pahle se like hua pada tha
            setLikedCources((prev) => prev.filter((cid)=>(cid !== course.id)))
            toast.warning("Liked removed")
        }
        else{
            //pahle se like nhi ho
            //insert karna hai liked cource
            if(likedCources.length === 0)
            {
                setLikedCources([course.id])
            }
            else{
                //non empty pahle se hai
                setLikedCources((prev)=>[...prev,course.id])
            }
            toast.success("Liked succesfully")
        }
    }
    return(
        <div className='w-[300px] bg-neutral-800 bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCources.includes(course.id)?
                            (<FcLikePlaceholder fontSize="1.75rem"/>):(<FcLike fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length>100?
                        (course.description.substr(0,100)+".... "):(course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;