import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [show, setShow] = useState(false)

  const [error, setError] = useState('')
   const {login, signout, googleSignIn,GithibSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
   const from = location?.state || '/';
 
 

 const {register,handleSubmit, formState: { errors },} = useForm()
//   const navigate = useNavigate();
//   const location = useLocation()
//  console.log(location)
//   const handleSocialLogin = social =>{
//        social()
//        .then(result=>{
//         console.log(result)
//        })

//   }

const handleSocialLogin = socialLogin =>{
 socialLogin()
 .then(result=>{
   if(result.user){
     console.log(result.user)
     navigate(from)
   }
 })
}



 const onSubmit=  data => {
   console.log(data)
   const {email, password, } = data;
   login(email, password,)
   .then(result=>{
     if(result.user){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You Loged In Succesfully",
        showConfirmButton: false,
        timer: 1500
      })
       console.log(result.user)
       navigate(from)
     }
   })
   .catch(error=>{
     console.log(error)
     setError('invalid Email or Password!')
   })}
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-5xl font-bold text-gray-500">Login Here </h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <div className="relative ">
              <input  type={show ?"text" : 'password'} {...register('password' ,{ required: true })} name="password" placeholder="password" className="input input-bordered w-full" required />
              <span className="absolute top-4 right-3" onClick={()=>setShow(!show)}>{show ? <FaEye />: <FaEyeSlash />}</span>
              </div>
                <label className="label">
                <p className="text-[14px] lg:text-[18px] ">
                If you don't have any account? please <Link className="underline font-semibold" to ='/register'>register</Link>
                </p>
                </label>
              </div>
              
               
              
              <div className="form-control mt-6">
                <button className="btn btn-primary  text-[15px] lg:text-[18px]">Login</button>
                <p className="text-red-400">{error}</p>
              </div>
            </form>
            <div className="flex justify-between items-center my-4 px-20 ">
            <button className="bg-blue-500 rounded-xl hidden px-3 py-2" onClick={signout}>Sign Out</button>
            <button className="bg-blue-500 rounded-xl px-3 py-2" onClick={()=>handleSocialLogin(googleSignIn)}>Google</button>
            <button className="bg-blue-500 rounded-xl px-3 py-2" 
            onClick={()=>handleSocialLogin(GithibSignIn)}>Github</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;