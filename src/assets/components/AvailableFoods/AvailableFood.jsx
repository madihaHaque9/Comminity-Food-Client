import React from 'react';
import { Link } from 'react-router-dom';

const AvailableFood = ({food}) => {
    const{_id,foodImage,foodName,donatorImage,donatorName,foodQuantity,pickupLocation,expiredDate,additionalNotes}=food
    return (
        <div className="card w-96 bg-amber-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={foodImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{foodName}!</h2>
    <p>Food Quantity:{foodQuantity}</p>
    <p>Expired Date:{expiredDate}</p>
    <p>Donator:{donatorName}</p>
    <p>{additionalNotes}</p>
    <div className="card-actions">
      <Link to={`/singleFood/${_id}`}><button className="btn btn-warning">View Details</button></Link>
    </div>
   
  </div>
</div>
    );
};

export default AvailableFood;