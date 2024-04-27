import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/Provider";
import List from "./List";


const MyList = () => {
    const {user} = useContext(AuthContext);
    const [list, setList]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:2000/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setList(data)
        })
    },[])
    return (
            
        <div>
            <h3>my lists</h3>
           <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto">
           {
            list.map(list=><List key={list._id} list={list}></List>)
           }
           </div>
        </div>
    );
};

export default MyList;