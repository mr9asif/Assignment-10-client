import {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import Swal from "sweetalert2";


const Update = () => {
  const {user}= useContext(AuthContext)
     
  const handleUpdate = e =>{
    e.preventDefault();
    const form =e.target;
    const imageUrl = form.imageUrl.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalvisitor = form.totalvisitor.value;
        const username = form.username.value;
        const userEmail = form.userEmail.value;

        const UpdateSport = {imageUrl, touristSpotName, countryName, location, description, averageCost, 
                          seasonality, travelTime, totalvisitor, username, userEmail, 
        }
              console.log(UpdateSport)

              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Updated!",
                    text: "Your file has been Updated.",
                    icon: "success"
                  });

                  fetch(`https://as-10-server.vercel.app/update/${id}`,{
                    method:'PUT',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(UpdateSport)
                 })
                 .then(res=>res.json())
                 .then(data=>{
                    console.log(data)
                 })
                }
              });

           
   
  }
    
     const {id} = useParams()
     const [update, setUpdate]= useState({})
     const {imageUrl,touristSpotName,countryName,averageCost,seasonality,travelTime ,
        totalVisitorsPerYear,location,description} = update
 

     useEffect(() => {
        fetch(`https://as-10-server.vercel.app/update/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdate(data)
                
            })
    }, [id]);


    return (
             
        <div className="max-w-8xl mx-auto bg-green-900 py-6">
         <h1 className="text-4xl text-orange-600 text-center font-bold py-5 ">ADD YOUR TOURIST SPOTS</h1>
        <div className="p-8 max-w-4xl mx-auto bg-gray-400 rounded-xl my-4 ">
        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4">
            <div className="form-group">
                <label className="text-xl font-semibold" htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                     defaultValue={imageUrl}
                  
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="touristSpotName">Tourist Spot Name</label>
                <input
                    type="text"
                    id="touristSpotName"
                    name="touristSpotName"
                    defaultValue={touristSpotName}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="countryName">Country Name</label>
                <input
                    type="text"
                    id="countryName"
                    name="countryName"
                  defaultValue={countryName}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    defaultValue={location}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group col-span-2">
                <label  className="text-xl font-semibold"  htmlFor="description">Short Description</label>
                <textarea
                    id="description"
                    name="description"
                   defaultValue={description}
                    className="textarea textarea-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="averageCost">Average Cost</label>
                <input
                    type="text"
                    id="averageCost"
                    name="averageCost"
                     defaultValue={averageCost}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="seasonality">Seasonality</label>
                <select
                    id="seasonality"
                    name="seasonality"
                     defaultValue={seasonality}
                    className="select select-bordered w-full"
                >
                    <option>Summer</option>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>Fall</option>
                </select>
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="travelTime">Travel Time</label>
                <input
                    type="text"
                    id="travelTime"
                    name="travelTime"
                    defaultValue={travelTime}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="totalVisitorsPerYear">Total Visitors Per Year</label>
                <input
                    type="text"
                    id="totalVisitorsPerYear"
                    name="totalvisitor"
                    defaultValue={totalVisitorsPerYear}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="totalVisitorsPerYear">User Name</label>
                <input
                    type="text"
                    id="totalVisitorsPerYear"
                    name="username"
                    value={user.displayName}
                    disabled
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="totalVisitorsPerYear">User Email</label>
                <input
                    type="text"
                    id="totalVisitorsPerYear"
                    name="userEmail"
                    value={user.email}
                    disabled
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group col-span-2">
                <button type="submit" className="btn btn-primary w-full">Update</button>
            </div>
        </form>
    </div>
        </div>
    );
};

export default Update;