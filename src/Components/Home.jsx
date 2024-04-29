import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Countrys from "./Countrys/Countrys";
import Distination from "./Distination/Distination";

import Offer from "./Offer";
import Service from "./Service";

import UAbout from "./UAbout";
import Testimonial from "./Testimonial";
import Guids from "./Guids";
import Vlog from "./Vlog";


const Home = () => {
    return (
        <div>
             <Banner></Banner>
              {/* about*/}
               <AboutUs></AboutUs>
               {/* usabout*/}
           <UAbout></UAbout>
            {/* destinaton*/}
            <Distination></Distination>
            {/* service*/}
           <Service></Service>
             {/* country*/}
           
             <Countrys></Countrys>
              {/* offer*/}
             <Offer></Offer>
          
              {/* guide*/}
              <Guids></Guids>
     
              {/* vlog*/}
              <Vlog></Vlog>
          
              <Testimonial></Testimonial>
           
          


        </div>
    );
};

export default Home;