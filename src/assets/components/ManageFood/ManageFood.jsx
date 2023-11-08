import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import ManageFoodRow from "./ManageFoodRow";
import Swal from "sweetalert2";


const ManageFood = () => {
    const {user}=useContext(AuthContext);
    const [requests,setRequest]=useState([])
    const url=`https://food-server-5bfggg8sy-madiha-haques-projects.vercel.app/request?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setRequest(data))
    },[url]);
    const handleDelete=id=>{
        const proceed= Swal.fire({
            title:"Do you want to delete?",
            
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        if(proceed){
          fetch(`https://food-server-5bfggg8sy-madiha-haques-projects.vercel.app/request/${id}`,{
            method:"DELETE",
  
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              if(data.deletedCount>0){
                  Swal.fire({
                      title:"Deleted Successfully",
                      text: 'Do you want to continue',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
                    const remaining=requests.filter(request=>request._id!==id);
                    setRequest(remaining)
              }
          })
        }
      }
  
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="text" placeholder="delete"  />
          </label>
        </th>
        <th>Image</th>
        <th>Food Name</th>
        <th>User Email</th>
        <th>Donator Name</th>
        <th>Amount of donation</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        requests.map(request=><ManageFoodRow key={request._id} request={request}handleDelete={handleDelete}></ManageFoodRow>)

     }
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default ManageFood;