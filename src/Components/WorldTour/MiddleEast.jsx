import { useEffect, useState } from "react";
import Vietnam from "./Vietnam";


const MiddleEast = () => {
    const [vietnam, setVietnam]= useState([]);
    const [spiner, setSpiner]= useState(true)
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Vietnam`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setVietnam(data)
            setSpiner(false)
        })
    
    },[])
    return (
        <div className="w-[95%] lg:max-w-7xl mx-auto my-6">
        <h2 className="text-center text-orange-500 font-bold text-4xl  my-6">Our All Tourist Spots </h2>
        <div className="">
       
        <h1 className="text-7xl text-center  ">{spiner && <span className="loading loading-bars loading-lg text-blue-400  my-36"></span> }</h1>
        </div>

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