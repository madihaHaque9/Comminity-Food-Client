import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const ManageFood = () => {
    const {user}=useContext(AuthContext);
    const [request,setRequest]=useState([])
    const url=`http://localhost:5000/request?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setRequest(data))
    },[url])
    return (
        <div>
            <h2>request:{request.length}</h2>
        </div>
    );
};

export default ManageFood;