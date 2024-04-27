import { useContext } from "react";
import { AuthContext } from "./Provider/Provider";
import Swal from "sweetalert2";


const AddTourists = () => {
    const {user}= useContext(AuthContext);

    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
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

        const TouristSpot = {imageUrl, touristSpotName, countryName, location, description, averageCost, 
                          seasonality, travelTime, totalvisitor, username, userEmail, 
        }
              console.log(TouristSpot)

          fetch('http://localhost:2000/addTourists',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(TouristSpot)

          } )
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Added Tourist Spots Succesfully",
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
          })


    }
    return (
        
        <div className="max-w-8xl mx-auto bg-green-900 py-6">
         <h1 className="text-4xl text-orange-600 text-center font-bold py-5 ">ADD YOUR TOURIST SPOTS</h1>
        <div className="p-8 max-w-4xl mx-auto bg-gray-400 rounded-xl my-4 ">
        <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
            <div className="form-group">
                <label className="text-xl font-semibold" htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                  
                  
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="touristSpotName">Tourist Spot Name</label>
                <input
                    type="text"
                    id="touristSpotName"
                    name="touristSpotName"
                    
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="countryName">Country Name</label>
                <input
                    type="text"
                    id="countryName"
                    name="countryName"
                 
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                   
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group col-span-2">
                <label  className="text-xl font-semibold"  htmlFor="description">Short Description</label>
                <textarea
                    id="description"
                    name="description"
                 
                    className="textarea textarea-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="averageCost">Average Cost</label>
                <input
                    type="text"
                    id="averageCost"
                    name="averageCost"
                   
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="seasonality">Seasonality</label>
                <select
                    id="seasonality"
                    name="seasonality"
                    
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
                    
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label  className="text-xl font-semibold"  htmlFor="totalVisitorsPerYear">Total Visitors Per Year</label>
                <input
                    type="text"
                    id="totalVisitorsPerYear"
                    name="totalvisitor"
                 
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
                <button type="submit" className="btn btn-primary w-full">ADD</button>
            </div>
        </form>
    </div>
        </div>
    );
};

export default AddTourists;