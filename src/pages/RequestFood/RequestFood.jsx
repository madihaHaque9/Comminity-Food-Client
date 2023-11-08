
// import  { useContext, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";


// const RequestFood = ({ food, userEmail }) => {
   
//     const {foodName,foodQuantity,foodImage,donatorName,expiredDate,pickupLocation}=food;

//     const { user, googleSignIn, createUser, signIn } = useContext(AuthContext)
//     const [additionalNotes, setAdditionalNotes] = useState("");
//   const [donationMoney, setDonationMoney] = useState("");
//   const handleRequest = () => {
   
//     // Here you can add the requested food into the database food request collection.
//     // You can make an API call to your server to handle this.

//     // Example of sending a request to your server:
//     fetch("/requestFood", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         foodId: food._id, // Replace with the actual food ID
//         donatorEmail: food.donatorEmail, // Replace with the actual donator's email
//         userEmail, // The user's email (loggedIn user)
//         requestDate: new Date(),
//         // eslint-disable-next-line react/prop-types
//         pickupLocation: food.pickupLocation,
//         expireDate: food.expiredDate,
//         additionalNotes,
     
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server, if needed
//         console.log(data);
//         close(); // Close the modal
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   };

//     return (
//         <>
//       <button className="btn btn-warning" onClick={open}>
//         Request
//       </button>
      
//         <div className="p-5">
//           <h2>Request Food</h2>
//           <p>Food Name: {foodName}</p>
//           <p>Food Image: {foodImage}</p>
         
//           {/* <p>Food Donator Email: {food.donatorEmail}</p> */}
//           <p>User Email (Logged In): {userEmail}</p>
//           <p>Request Date: {new Date().toString()}</p>
//           <p>Pickup Location: {pickupLocation}</p>
//           <p>Expire Date: {expiredDate}</p>
//           <input
//             type="text"
//             placeholder="Additional Notes"
//             value={additionalNotes}
//             onChange={(e) => setAdditionalNotes(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Donation Money"
//             value={donationMoney}
//             onChange={(e) => setDonationMoney(e.target.value)}
//           />
//           <button className="btn btn-primary" onClick={handleRequest}>
//             Request Food
//           </button>
//         </div>
//         </>
//     );
    
// };   

// export default RequestFood;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const RequestFood = () => {
  const {user}= useContext(AuthContext)
  const food=useLoaderData();
  const {foodName,_id,foodImage,donatorName,pickupLocation,expiredDate,additionalNotes}=food;
  const handleFoodRequest=e=>{
    e.preventDefault();
    const form=e.target;
    const foodName=form.foodName.value;
    const foodImage=form.foodImage.value;
    const donatorName=form.donatorName.value;
    const date=form.date.value;
    const notes=form.notes.value;
    const location=form.location.value;
    const id=form.id.value
    const email=form.email.value
    const money=form.money.value
    //  console.log(foodName,foodImage,donatorName,date,notes,location,id,email,money)
    const request={
      foodImage,
      foodName,
      donatorName,
      date,
      notes,
      location,
      id,
      email,
      money
    }
    console.log(request)
    fetch('')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })



  }
  return (
    
     <div className="hero  bg-base-200">
  <div className="hero-content ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleFoodRequest}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input type="text" name='foodName' defaultValue={foodName} className="input input-bordered" required readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Image URL</span>
          </label>
          <input name='foodImage' type="text" defaultValue={foodImage}className="input input-bordered" required readOnly />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Donator Name</span>
          </label>
          <input type="text" name='donatorName' defaultValue={donatorName} className="input input-bordered" required readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Request date:</span>
          </label>
          <input type="date" name='date' defaultValue={expiredDate}className="input input-bordered" required  />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Money:</span>
          </label>
          <input type="text" name='money' placeholder="Money" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Additional Notes:</span>
          </label>
          <input type="text" name='notes' defaultValue={additionalNotes} className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup Location:</span>
          </label>
          <input name='location' type="text" placeholder={pickupLocation}className="input input-bordered" required readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Id:</span>
          </label>
          <input name='id' type="text" defaultValue={_id} className="input input-bordered" required readOnly/>
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required defaultValue={user?.email} />
        </div>
        
        <div className="form-control mt-6">
          <input type="submit" value="Request" className='btn btn-warning'/>
        </div>
      </form>
    </div>
  </div>
</div>
    
  );
};

export default RequestFood;
  