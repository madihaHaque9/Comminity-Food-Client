
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo-fotor-bg-remover-2023110523123.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      Swal.fire({
        title: 'Error!'(error.message),
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })

  }

    const navItems=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/availableFoods'>Available Foods</Link></li>
    <li><Link to='/addFood'>Add Food</Link></li>
    
    <li><Link to='/foodRequest'>My Food Request</Link></li>
    {
      user?.email? <>
      <li><Link to='/manageFood'>Manage My Food</Link></li>
       <li><button onClick={handleLogOut} to='/logout'>Logout</button></li></>: <li><Link to='/login'>Login</Link></li>
    }
    
   
   
    </>
    return (
        <div className="navbar bg-orange-400 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <div className='mb-1'>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
     <img src={logo} alt="" className='h-[100px]' /> FoodFirst
    </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex text-white">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
 
</div>

    );
};

export default Navbar;