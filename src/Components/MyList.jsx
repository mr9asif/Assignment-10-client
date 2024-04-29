import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/Provider";
import List from "./List";


const MyList = () => {
    const {user} = useContext(AuthContext);
    const [lists, setList]= useState([])

    useEffect(()=>{
        fetch(`https://as-10-server.vercel.app/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setList(data)
        })
    },[])
    return (
            
        <div className="w-[95%] mx-auto">
            <h3 className='text-center text-3xl lg:text-4xl font-bold text-orange-700 my-5'>Your Added Lists Here</h3>
           <div className="w-[95%] grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto my-4">
           {
            lists.map(list=><List key={list._id} list={list} lists={lists} setList={setList}></List>)
           }
           </div>
        </div>
    );
};

export default MyList;