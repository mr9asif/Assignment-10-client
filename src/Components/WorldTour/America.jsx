import  { useContext, useEffect, useState } from 'react';
import Bangladesh from './Bangladesh';
import { AuthContext } from '../Provider/Provider';

const America = () => {
   
   
    const [bd, setBd]= useState([]);
    // console.log(bd)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/countries/Bangladesh`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
         
            setBd(data)
        })
    
    },[])

    return (
        <div className="max-w-7xl mx-auto my-6">
            <h1  className="text-4xl font-bold text-center text-orange-400 my-3">Visit Bangladesh Best Tourist Spots</h1>

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