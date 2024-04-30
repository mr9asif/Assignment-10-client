import { useEffect, useState } from "react";
import Malaysia from "./Malaysia";


const Africa = () => {
    const [malaysia, setMalaysia]= useState([]);
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Malaysia`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setMalaysia(data)
        })
    
    },[])
    return (
        <div className="w-[95%] lg:max-w-7xl mx-auto my-6">
        <h1  className="text-2xl lg:text-4xl font-bold text-center text-orange-400 my-3">Visit Bangladesh Best Tourist Spots</h1>

        <div className="lg:grid grid-cols-3 gap-3 ">
        {
            malaysia.map(mal=><Malaysia key={mal._id} mal={mal}></Malaysia>
              )
        }
        </div>
       
    </div>
    );
};

export default Africa;