import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";


const UpdateFood = () => {
    const {user}= useContext(AuthContext)
    const food=useLoaderData();
    const {foodName,_id,foodImage,donatorName,pickupLocation,expiredDate,additionalNotes}=food;
    const handleFoodUpdate=e=>{
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
        const UpdatedFood={
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
        console.log(UpdatedFood)
        fetch(`https://food-server-one-indol.vercel.app/foods/${_id}`,{
          method:"PUT",
          headers:{
             'content-type':'application/json'
          },
          body:JSON.stringify(UpdatedFood)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Update has done successfully',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    
    
    
      }
     


    return (
    
        <div className="hero  bg-base-200">
     <div className="hero-content ">
       
       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form className="card-body" onSubmit={handleFoodUpdate}>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Food Name</span>
             </label>
             <input type="text" name='foodName' defaultValue={foodName} className="input input-bordered" required  />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Food Image URL</span>
             </label>
             <input name='foodImage' type="text" defaultValue={foodImage}className="input input-bordered" required/>
            
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Donator Name</span>
             </label>
             <input type="text" name='donatorName' defaultValue={donatorName} className="input input-bordered" required />
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
             <input name='location' type="text" defaultValue={pickupLocation} className="input input-bordered" required  />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Food Id:</span>
             </label>
             <input name='id' type="text" defaultValue={_id} className="input input-bordered" required />
            
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name='email' placeholder="email" className="input input-bordered" required defaultValue={user?.email} />
           </div>
           
           <div className="form-control mt-6">
             <input type="submit" value="Update" className='btn btn-warning'/>
           </div>
         </form>
       </div>
     </div>
   </div>
       
     );
   };
   

export default UpdateFood;