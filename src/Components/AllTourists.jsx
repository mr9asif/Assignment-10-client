import { useContext, useEffect, useState } from "react";
import Tourist from "./Tourist";



const AllTourists = () => {
    const [tourists, setTourist]= useState([])
    
    const [spiner, setSpiner]= useState(true)

       

     useEffect(()=>{
        fetch('https://as-10-server.vercel.app/addTourists')
        .then(res=>res.json())
        .then(data=>{
     
            setTourist(data)
          
            setSpiner(false)
        })
     },[]) 
    return (
         
        <div className="my-5">
        <h2 className="text-center text-orange-500 font-bold text-4xl  my-6">Our All Tourist Spots </h2>
        <div className="">
       
        <h1 className="text-7xl text-center  ">{spiner && <span className="loading loading-bars loading-lg text-blue-400  my-36"></span> }</h1>
        </div>

            <div className="w-[95%] grid md:grid-cols-2  lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
             {
               tourists.map(tourist=><Tourist key={tourist.is} tourist={tourist}></Tourist>)
             }
            </div>
        </div>
    );
};

export default AllTourists;