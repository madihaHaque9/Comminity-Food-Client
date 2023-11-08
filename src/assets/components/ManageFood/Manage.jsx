import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../../provider/AuthProvider";


const Manage = () => {
    const {user}=useContext(AuthContext);
    

    return (
        <div className="card w-100 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.imgur.com/0ICGWm3.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Pasta Carbonara!</h2>
    <p>{user?.email}</p>
    <p>Sophia Martin</p>
  </div>
</div>
    );
};

export default Manage;