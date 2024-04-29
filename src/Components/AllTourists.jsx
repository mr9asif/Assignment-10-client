import { useEffect, useState } from "react";
import Tourist from "./Tourist";


const AllTourists = () => {
    const [tourists, setTourist]= useState([])
     useEffect(()=>{
        fetch('https://as-10-server.vercel.app/addTourists')
        .then(res=>res.json())
        .then(data=>{
     
            setTourist(data)
        })
     },[])
    return (
        <div className="my-7">
            <h2 className="text-center text-orange-500 font-bold text-4xl my-6">Our All Tourist Spots {tourists.length}</h2>

            <div className="w-[95%] grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
             {
               tourists.map(tourist=><Tourist key={tourist.is} tourist={tourist}></Tourist>)
             }
            </div>
        </div>
    );
};

export default AllTourists;