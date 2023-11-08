import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageFoodRow = ({request,handleDelete}) => {
    const {_id,foodName,foodImage,email,donatorName,money}=request;

    
    return (
        
             <tr>
        <th>
        <button className="btn btn-circle" onClick={()=> handleDelete(_id)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
         
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={foodImage}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
        
        </td>
        <td>
        {
          foodName
        }
         
        </td>
        <td>{email}</td>
        <td>{donatorName}</td>
        <td>${money}</td>
        <th>
          <Link to='/manageFood/manage'><button className="btn btn-ghost btn-xs">Manage</button></Link>
        </th>
      </tr>
       
    );
};

export default ManageFoodRow;