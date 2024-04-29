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
      <div data-aos="flip-right" data-aos-duration="1200" className=" w-[95%] mx-auto  bg-slate-300 shadow-md rounded p-2 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <img className="w-full h-[250px]  rounded" src={imageUrl} alt="" />
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-900">{touristSpotName}</h1>
            <h2 className="text-[15px] font-bold text-gray-800"><span>Description: </span>{description.slice(0, 100)}....</h2>

            <div className="flex items-center gap-7">
              <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Country:</span>{countryName}</h2>
              <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Location:</span>{location}</h2>
            </div>
            <div className="flex items-center gap-7">
              <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Average Cost: </span>{averageCost}</h2>
              <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Total Visitor: </span>{totalVisitorsPerYear}/year</h2>
            </div>
            <div className="flex items-center gap-7">
              <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Sesonality:</span>{seasonality}</h2>
              <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Travel Time:</span>{travelTime}</h2>
            </div>
            <div className="flex justify-between items-center my-4 mb-3">

              <Link onClick={() => handleUpdate(list._id)} to={`/update/${list._id}`}><button className="text-[13px]  lg:text-xl w-8 h-[30px] lg:w-32 rounded-xl lg:h-[40px] bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-500 size-36 rounded-xl group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-orange-600 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Update</button></Link>
              <button onClick={() => handleDelete(list._id)} className="text-[13px]  lg:text-xl w-8 h-[30px] lg:w-32 rounded-xl lg:h-[40px] bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-500 size-36 rounded-xl group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-orange-600 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Delete</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
