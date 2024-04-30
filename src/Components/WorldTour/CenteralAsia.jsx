import { useEffect, useState } from "react";
import Combodia from "./Combodia";


const CenteralAsia = () => {
    const [combodia, setCombodia]= useState([]);
    const [spiner, setSpiner]= useState(true)
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Combodia`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setCombodia(data)
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
            combodia.map(com=><Combodia key={com._id} com={com}></Combodia>
              )
        }
        </div>
       
    </div>
    );
};

export default CenteralAsia;