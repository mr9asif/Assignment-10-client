import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/Provider";
import List from "./List";


const MyList = () => {
    const {user} = useContext(AuthContext);
    const [lists, setList]= useState([])
    const [spiner, setSpiner]= useState(true)

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setList(data)
            setSpiner(false)
        })
    },[])
    return (
            
        <div className="w-[95%] mx-auto">

             <h2 className="text-center text-orange-500 font-bold text-4xl  my-6">Our All Tourist Spots </h2>
        <div className="">
       
        <h1 className="text-7xl text-center  ">{spiner && <span className="loading loading-bars loading-lg text-blue-400  my-36"></span> }</h1>
        </div>

           <div className="w-[95%] flex flex-col gap-3 max-w-6xl mx-auto my-4">
           {
            lists.map(list=><List key={list._id} list={list} lists={lists} setList={setList}></List>)
           }
           </div>
        </div>
    );
};

export default MyList;