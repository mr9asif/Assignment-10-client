import  { useContext, useEffect, useState } from 'react';
import Bangladesh from './Bangladesh';
import { AuthContext } from '../Provider/Provider';

const America = () => {
   
   
    const [bd, setBd]= useState([]);
    const [spiner, setSpiner]= useState(true)
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Bangladesh`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setBd(data)
            setSpiner(false)
        })
    
    },[])

    return (
        <div className="w-[95%] lg:max-w-7xl mx-auto my-6">
        <h2 className="text-center text-orange-500 font-bold text-4xl  my-6">Our All Bangladesh Tourist Spots </h2>
        <div className="">
       
        <h1 className="text-7xl text-center  ">{spiner && <span className="loading loading-bars loading-lg text-blue-400  my-28"></span> }</h1>
        </div>
            <div className="lg:grid grid-cols-3 gap-3 ">
            {
                bd.map(bangladesh=><Bangladesh key={bangladesh._id} bangladesh={bangladesh}></Bangladesh>
                  )
            }
            </div>
           
        </div>
    );
};

export default America;