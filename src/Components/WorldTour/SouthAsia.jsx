import { useEffect, useState } from "react";
import Thailand from "./Thailand";


const SouthAsia = () => {
    const [thailand, setThailand]=useState([])
    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Thailand`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
             setThailand(data)
         
            
        })
    
    },[])

    return (
        <div className="max-w-7xl mx-auto my-6">
        <h1  className="text-4xl font-bold text-center text-orange-400 my-3">Visit Thailand Best Tourist Spots</h1>


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