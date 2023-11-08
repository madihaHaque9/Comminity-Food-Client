import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableFood from './AvailableFood';

const AvailableFoods = ({food}) => {
    
    const [foods,setFoods]=useState([]);
    useEffect(()=>{
        fetch('https://food-server-5bfggg8sy-madiha-haques-projects.vercel.app/foods')
        .then(res=>res.json())
        .then(data=>setFoods(data))

    },[])
    

    return (
        <div className="mx-auto" >
        <h3 className="text-3xl text-center mb-5 font-bold text-orange-500 mx-auto">
        Food Items 
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         {
         
            foods.map(food=><AvailableFood key={food._id} food={food}></AvailableFood>)
         }
        </div>
       </div>
    );
    
};

export default AvailableFoods;