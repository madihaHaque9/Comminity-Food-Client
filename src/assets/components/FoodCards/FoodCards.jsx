import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";


const FoodCards = ({food}) => {
    const [foods,setFoods]=useState([]);
    useEffect(()=>{
        fetch('foods.json')
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
         
            foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
         }
        </div>
       </div>
    );
};

export default FoodCards;