import { useEffect, useState } from "react";
import Tour from "./Tour";


const Distination = () => {
    const [tours , setTours]= useState([]);

    useEffect(()=>{
        fetch('https://as-10-server.vercel.app/addTourists')
        .then(res=>res.json())
        .then(data=>{
        
            setTours(data)
        })
    },[])
    return (
        <div className="my-7 mt-24 w-[95%] lg:max-w-7xl mx-auto  ">
            <h3 className="font-bold mb-3 text-xl text-center text-green-800">Distinaton</h3>
            <h1 className="text-orange-700 text-4xl mb-8 text-center font-extrabold">Our Tourist Spots </h1>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3">
               {
                tours.slice(0,6).map(tour=><Tour key={tour._id} tour={tour}></Tour>)
               }
            </div>
        </div>
    );
};

export default Distination;