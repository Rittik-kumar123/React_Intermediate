import React, { useState } from 'react';
import Card from './Card'

const Cards =(props)=>{
    let cources=props.cources;
    let category=props.category;
    //console.log(cources)

    const[likedCources,setLikedCources]=useState([]);

    //returns you a list of all cources received from api
    const getCources=()=>{
        if(category === "All")
        {
            let allCources=[];
            Object.values(cources).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCources.push(course);
                })
            })
            return allCources;
        }
        else{
            return cources[category];
        }
    }
    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCources().map((course)=>
                    (
                        <Card key={course.id} course={course} likedCources={likedCources} setLikedCources={setLikedCources}/>
                    )       
                )
            }
        </div>
    );
}

export default Cards;