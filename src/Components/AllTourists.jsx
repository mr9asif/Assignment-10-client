import { useEffect, useState } from "react";
import Tourist from "./Tourist";


const AllTourists = () => {
    const [tourists, setTourist]= useState([])
     useEffect(()=>{
        fetch('http://localhost:2000/addTourists')
        .then(res=>res.json())
        .then(data=>{
     
            setTourist(data)
        })
     },[])
    return (
        <div className="my-7">
            <h2 className="text-center text-orange-500 font-bold text-4xl my-6">Our All Tourist Spots {tourists.length}</h2>

            <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto">
             {
               tourists.map(tourist=><Tourist key={tourist.is} tourist={tourist}></Tourist>)
             }
            </div>
        </div>
    );
};

export default AllTourists;