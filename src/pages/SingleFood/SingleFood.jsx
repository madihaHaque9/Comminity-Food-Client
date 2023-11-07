import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    const food=useLoaderData();
    const {foodName,foodQuantity,foodImage,donatorName,expiredDate,pickupLocation}=food;
    return (
        <div className="card w-96 bg-amber-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src={foodImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{foodName}!</h2>
    <p>Food Quantity:{foodQuantity}</p>
    <p>Expired Date:{expiredDate}</p>
    <p>Donator:{donatorName}</p>
    <p>Location:{pickupLocation}</p>
    <button className="btn btn-warning">Request</button>
    
  
  </div>
</div>
    );
};

export default SingleFood;