import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ViewDetails = () => {
    const {id}= useParams();
     const [details, setDetails]= useState(null)
        console.log('details', details)
     
    
    useEffect(() => {
        fetch(`http://localhost:2000/viewDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }, [id]);
    
    console.log('iid', id)
    return (
              <div>
              
              </div>
    );
};

export default ViewDetails;