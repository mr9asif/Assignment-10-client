import { useState, useEffect } from "react";
import America from "./America";
import Countrys from "../Countrys/Countrys";

const Countries = () => {
    const [allCountries, setAllCountries] = useState([]);
    console.log(allCountries)

    useEffect(() => {
      
        fetch('https://as-10-server.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
              console.log(data)
                setAllCountries(data);
            });
    }, []); 

    return (
        <div>
   
      
            {allCountries.map(country => (
                <Countrys key={country._id} country={country} />
                
            ))}

           
        </div>
    );
};

export default Countries;
