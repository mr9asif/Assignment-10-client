import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Countrys = () => {
    // const [allCountries, setAllCountries] = useState([]);
    // console.log(allCountries)
   

    // useEffect(() => {
      
    //     fetch('https://as-10-server.vercel.app/countries')
    //         .then(res => res.json())
    //         .then(data => {
    //           console.log(data)
    //             setAllCountries(data);
    //         });
    // }, []); 
    // console.log(country)

   

    return (
        <div className=" my-7 w-[95%] lg:max-w-7xl mx-auto ">
            <h1 className="text-center text-4xl text-green-600 my-4">Explore many country with us</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:w-[92%]  lg:max-w-7xl gap-4 mx-auto">
              <Link to ={ `/countries/Bangladesh`} >
              <div data-aos="flip-left"  data-aos-duration="1200"  className="bangladesh lg:p-5 border rounded h-[330px] sm:w-[95%] mx-auto  flex flex-col justify-center items-center gap-3">
              <div className="w-[85%] h-[40%] border  p-8" >
              <h1 className="text-3xl font-extrabold text-gray-200">Bangladesh</h1>
              <p className="text-gray-300 text-center font-bold text-xl">5 Countries</p>
             
              </div>
         </div>
              
              </Link>
              <Link to={`/countries/Thailand`}>
              <div data-aos="flip-left"  data-aos-duration="1200" className="thailand h-[330px] w-[95%] mx-auto  flex flex-col justify-center items-center gap-3">
              <div className="w-[70%] h-[40%] border p-8" >
              <h1 className="text-3xl text-center font-extrabold  text-gray-200">Thailand</h1>
              <p className="text-gray-300 text-center font-bold text-xl">6 Countries</p>
             
              </div>
         </div>
              
              </Link>
           <Link to='/countries/Indonesia'>
           <div data-aos="flip-left" data-aos-duration="1200" className="indonesia h-[330px] w-[95%] mx-auto  flex flex-col justify-center items-center gap-3">
           <div className="w-[70%] h-[40%] border p-8" >
           <h1 className="text-3xl font-extrabold text-center  text-orange-400">Indonesia</h1>
           <p className="text-gray-300 text-center font-bold text-xl">3 Countries</p>
           
           </div>
       </div>
           
           </Link>
                  <Link to='/countries/Malaysia'>
                  <div data-aos="flip-right"  data-aos-duration="1200" className="malaysia h-[330px] w-[95%] mx-auto  flex flex-col justify-center items-center gap-3">
                  <div className="w-[70%] h-[40%] border p-8" >
                  <h1 className="text-3xl font-extrabold text-center  text-gray-200">Malaysia</h1>
                  <p className="text-gray-300 text-center font-bold text-xl">6 Countries</p>
              
                  </div>
          </div>
                  
                  </Link>
         <Link to='/countries/Vietnam'>
         <div data-aos="flip-right"  data-aos-duration="1200" className="vietnam h-[330px] w-[95%] mx-auto  flex flex-col justify-center items-center gap-3">
         <div className="w-[75%] h-[40%] border p-8" >
         <h1 className="text-3xl font-extrabold text-center  text-gray-200">Vietnam</h1>
         <p className="text-gray-300 text-center font-bold text-xl">5 Countries</p>
        
         </div>
    </div>
         </Link>
         <Link to='/countries/Combodia'>
         <div data-aos="flip-right"  data-aos-duration="1200" className="combodia h-[330px] w-[95%]  flex flex-col justify-center items-center gap-3">
         <div className={`w-[75%] h-[40%]  rounded  border p-8`} >
         <h1 className="text-3xl font-extrabold text-center  text-gray-200">Combodia</h1>
         <p className="text-gray-300 text-center font-bold text-xl">4 Countries</p>
         
         </div>
     </div>
         
         </Link>
            </div>
        </div>
    );
};

export default Countrys;