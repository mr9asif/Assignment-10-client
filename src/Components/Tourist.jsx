import { Link } from "react-router-dom";


const Tourist = ({tourist}) => {
   
     const handleDetails = id =>{
        console.log('id', id)
     }


    console.log(tourist)
    const {imageUrl,touristSpotName,countryName,averageCost,seasonality,travelTime ,
        totalVisitorsPerYear,location,description} = tourist;
    return (
        <div  data-aos="flip-up"  data-aos-duration="1200" className="w-[400px] h-[520px] bg-gray-300 shadow-md rounded p-2">
            <div className="flex flex-col justify-center items-center gap-2">
                 <img className="w-full h-[250px]  rounded" src={imageUrl} alt="" />
                 <div className="p-4">
                     <h1 className="text-2xl font-bold text-gray-900"><span> </span>{touristSpotName}</h1>
                     <h2 className="text-[15px] font-bold text-gray-800"><span>Description: </span>{description.slice(0,100)}....</h2>
                    
                     <div className="flex items-center gap-7">
                       <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Country:</span>{countryName}</h2>
                       <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Location:</span>{location}</h2>
                     </div>
                     <div className="flex items-center gap-7">
                       <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Average Cost: </span>{averageCost}</h2>
                       <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Total Visitor: </span>{totalVisitorsPerYear }/year</h2>
                     </div>
                     <div className="flex items-center gap-7">
                       <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Sesonality:</span>{seasonality}</h2>
                       <h2 className="text-[16px] font-bold text-gray-600"><span className="text-gray-800">Travel Time:</span>{travelTime}</h2>
                     </div>
                    <div className="flex justify-start items-center my-2">
                    <Link onClick={()=>handleDetails(tourist._id)} to={`/viewDetails/${tourist._id}`}><button className="text-[13px]  lg:text-xl w-12 h-[30px] lg:w-32 rounded-xl lg:h-[40px] bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-500 size-36 rounded-xl group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-orange-600 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>View Details</button></Link>
                    </div>

                 </div>
            </div>
        </div>
    );
};

export default Tourist;