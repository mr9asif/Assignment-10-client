import { useEffect, useState } from "react";
import Thailand from "./Thailand";


const SouthAsia = () => {
    const [thailand, setThailand]=useState([])
    const [spiner, setSpiner]= useState(true)
    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Thailand`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
             setThailand(data)
             setSpiner(false)
            
        })
    
    },[])

    return (
        <div className="w-[95%] lg:max-w-7xl mx-auto my-6">
        <h2 className="text-center text-orange-500 font-bold text-4xl  my-6">Our All Thailand Tourist Spots </h2>
        <div className="">
       
        <h1 className="text-7xl text-center  ">{spiner && <span className="loading loading-bars loading-lg text-blue-400  my-36"></span> }</h1>
        </div>
            <div className="lg:grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {
                thailand.map(thailand=><Thailand key={thailand._id} thailand={thailand}></Thailand>
                  )
            }
            </div>
        </div>
    );
};

export default SouthAsia;