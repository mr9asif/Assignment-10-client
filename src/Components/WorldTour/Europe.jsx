import { useEffect, useState } from "react";
import Indonesia from "./Indonesia";


const Europe = () => {
     const [indonesia, setIndonesia]= useState([])
    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Indonesia`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
           setIndonesia(data)
            
        })
    
    },[])
    return (
        <div className="max-w-7xl mx-auto my-6">
            <h1 className="text-4xl font-bold text-center text-orange-400 my-3">Visti Indonesia best Tourist Spots</h1>
            <div className="lg:grid grid-cols-3 ">
            {
                indonesia.map(indo=><Indonesia key={indo._id} indo={indo}></Indonesia>
                  )
            }
            </div>
        </div>
    );
};

export default Europe;