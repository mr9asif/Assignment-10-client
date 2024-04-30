import { useEffect, useState } from "react";
import Indonesia from "./Indonesia";


const Europe = () => {
     const [indonesia, setIndonesia]= useState([])
     const [spiner, setSpiner] = useState(false)
    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Indonesia`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
           setIndonesia(data)
           setSpiner(true)
            
        })
    
    },[])
    return (
        <div className="w-[95%] lg:max-w-7xl mx-auto my-6">
        <h2 className="text-center text-orange-500 font-bold text-4xl  my-6">Our All Tourist Spots </h2>
        <div className="">
       
        <h1 className="text-7xl text-center  ">{spiner && <span className="loading loading-bars loading-lg text-blue-400  my-36"></span> }</h1>
        </div>
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