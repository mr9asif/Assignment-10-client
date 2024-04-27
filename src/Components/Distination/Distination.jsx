import { useEffect, useState } from "react";
import Tour from "./Tour";


const Distination = () => {
    const [tours , setTours]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:2000/addTourists')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTours(data)
        })
    },[])
    return (
        <div className="my-7 mt-24 max-w-7xl mx-auto  ">
            <h3 className="font-bold mb-3 text-xl text-center text-green-800">Distinaton</h3>
            <h1 className="text-orange-700 text-4xl mb-8 text-center font-extrabold">Explore Tours (from database)</h1>
            <div className="lg:grid grid-cols-3 gap-3">
               {
                tours.slice(0,6).map(tour=><Tour key={tour._id} tour={tour}></Tour>)
               }
            </div>
        </div>
    );
};

export default Distination;