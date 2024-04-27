import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)

    // const location = useLocation()
    // console.log(location)
    

    if( loading){
       return <div className="max-w-6xl mx-auto ">
       <span className="text-center  my-52 ml-[500px]  text-green-300 loading loading-bars loading-lg"></span>
       </div>
    }

    if(user){
       return children
   }
    return <Navigate to='/login' />
   
   ;
};

export default PrivetRoute;