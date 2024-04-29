import { useEffect, useState } from "react";
import Vietnam from "./Vietnam";


const MiddleEast = () => {
    const [vietnam, setVietnam]= useState([]);
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Vietnam`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setVietnam(data)
        })
    
    },[])
    return (
        <div className="max-w-7xl mx-auto my-6">
        <h1  className="text-4xl font-bold text-center text-orange-400 my-3">Visit Bangladesh Best Tourist Spots</h1>

        <div className="lg:grid grid-cols-3 gap-3 ">
        {
            vietnam.map(vt=><Vietnam key={vt._id} vt={vt}></Vietnam>
              )
        }
        </div>
       
    </div>
    );
};

export default MiddleEast;