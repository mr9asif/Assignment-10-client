

const AddTourists = () => {
    return (
        <div>
        <div className="p-4 max-w-4xl mx-auto">
        <form className="grid grid-cols-2 gap-4">
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                  
                  
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label htmlFor="touristSpotName">Tourist Spot Name</label>
                <input
                    type="text"
                    id="touristSpotName"
                    name="touristSpotName"
                    
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label htmlFor="countryName">Country Name</label>
                <input
                    type="text"
                    id="countryName"
                    name="countryName"
                 
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                   
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group col-span-2">
                <label htmlFor="description">Short Description</label>
                <textarea
                    id="description"
                    name="description"
                 
                    className="textarea textarea-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label htmlFor="averageCost">Average Cost</label>
                <input
                    type="text"
                    id="averageCost"
                    name="averageCost"
                   
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label htmlFor="seasonality">Seasonality</label>
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
                <label htmlFor="travelTime">Travel Time</label>
                <input
                    type="text"
                    id="travelTime"
                    name="travelTime"
                    
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group">
                <label htmlFor="totalVisitorsPerYear">Total Visitors Per Year</label>
                <input
                    type="text"
                    id="totalVisitorsPerYear"
                    name="totalVisitorsPerYear"
                 
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-group col-span-2">
                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </div>
        </form>
    </div>
        </div>
    );
};

export default AddTourists;