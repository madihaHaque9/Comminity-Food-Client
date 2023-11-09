import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const AddFood = () => {
    const {user}= useContext(AuthContext)

    const handleAddFood=e=>{
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
      fetch('https://food-server-one-indol.vercel.app/foods',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(request)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  
    }
   
      
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleAddFood}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input type="text" name='foodName'className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Image URL</span>
          </label>
          <input name='foodImage' type="text" className="input input-bordered" required  />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Donator Name</span>
          </label>
          <input type="text" name='donatorName'  className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Expired date:</span>
          </label>
          <input type="date" name='date'className="input input-bordered" required  />
         
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
          <input type="text" name='notes' className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup Location:</span>
          </label>
          <input name='location' type="text"  className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Id:</span>
          </label>
          <input name='id' type="text"className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' defaultValue={user?.email}className="input input-bordered" required  />
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

export default AddFood;