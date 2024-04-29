import { useEffect, useState } from "react";
import Combodia from "./Combodia";


const CenteralAsia = () => {
    const [combodia, setCombodia]= useState([]);
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Combodia`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setCombodia(data)
        })
    
    },[])
    return (
        <div className="max-w-7xl mx-auto my-6">
        <h1  className="text-4xl font-bold text-center text-orange-400 my-3">Visit Bangladesh Best Tourist Spots</h1>

        <div className="lg:grid grid-cols-3 gap-3 ">
        {
            combodia.map(com=><Combodia key={com._id} com={com}></Combodia>
              )
        }
        </div>
       
    </div>
    );
};

export default CenteralAsia;