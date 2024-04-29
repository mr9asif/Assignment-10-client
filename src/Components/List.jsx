import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const List = ({ list, setList, lists }) => {
 

  const { imageUrl, touristSpotName, countryName, averageCost, seasonality, travelTime, totalVisitorsPerYear, location, description } = list;

  const handleUpdate = id => {
    console.log('update id', id);
  }

  const handleDelete = id => {
    console.log('delete', id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://as-10-server.vercel.app/delete/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = lists.filter(item => item._id !== id);
              setList(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Tourist Spot has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (

             
    <div>
    <table className="bg-gray-400 p-4 flex justify-between items-center">
         <th>
           <img className="w-[200px] rounded-sm" src={list.imageUrl} alt="" />
         </th>
         <tr className="flex flex-col gap-3">
             <td><h1 className="text-xl font-semibold text-gray-600"> <span className="text-xl font-bold text-orange-800"> Spot Name: </span>{list.touristSpotName}</h1></td>
             <td><h1 className="text-xl font-semibold text-gray-600"> <span className="text-xl font-bold text-orange-800"> Country Name: </span>{list.countryName}</h1></td>
             <td><h1 className="text-xl font-semibold text-gray-600"> <span className="text-xl font-bold text-orange-800">Average Cost: </span>{list.averageCost}</h1></td>    

         </tr>
         <tr>
             <td className="flex flex-col gap-5">
             <Link onClick={() => handleUpdate(list._id)} to={`/update/${list._id}`}><button className="text-[13px]  lg:text-xl w-8 h-[30px] lg:w-32 rounded-xl lg:h-[40px] bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-500 size-36 rounded-xl group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-orange-600 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Update</button></Link>
             <Link onClick={() => handleDelete(list._id)} ><button className="text-[13px]  lg:text-xl w-8 h-[30px] lg:w-32 rounded-xl lg:h-[40px] bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-500 size-36 rounded-xl group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-orange-600 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Delete</button></Link>
             </td>
         </tr>
    </table>
</div> 
  );
};

export default List;
