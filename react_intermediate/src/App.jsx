import React from "react";
import "./App.css";
import {useState,useEffect} from 'react';
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spiner from "./components/Spiner";
import {toast} from "react-toastify";

function App() {

  const [cources,setCources]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  
  async function fetchData() {
    setLoading(true);
    try{
      let res=await fetch(apiUrl);
      let output = await res.json();
      setCources(output.data);
    }
    catch(error)
    {
      toast.error("Something went wrong")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
    console.log("Hii");
  },[])


  return (

    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>

      <div className="bg-neutral-700 h-screen">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className='w-11/12 flex flex-wrap max-w-[1200px] mx-auto py-4 justify-center items-center min-h-[50vh'>
          {
            loading ? (<Spiner/>) : (<Cards cources={cources} category={category}/>)
          }
        </div>  
      </div>
      
    </div>    
  );
}

export default App;
