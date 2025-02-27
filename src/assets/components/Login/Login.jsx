import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const{googleSignIn}=useContext(AuthContext)
    const handleGoogle=()=>{
      googleSignIn().then(result=>console.log(result.user))
    }
    const {signIn}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
       
        const form=e.target;
        
        const password=form.password.value;
        const email=form.email.value;
        console.log(password,email)
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            Swal.fire({
                title: (error.message),
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-500 text-center bg-base-200">Login</h2>
            <div className="hero min-h-screen bg-base-200">
             
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Login</button> <br />
          <button onClick={handleGoogle} className="btn btn-warning">Login with Google</button>
          <p>Don't have an account? </p><Link className="text-red-500 font-bold" to='/signup '>Register</Link>
        
        </div>
      </form>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Login;