import Videobg from '../video/1675442-hd_1920_1080_30fps.mp4'
import Videobg2 from '../video/5670197-hd_1920_1080_30fps.mp4'
import Videobg3 from '../video/9112900-hd_1920_1080_25fps.mp4'


const Vlog = () => {
    return (
        <div className="my-6 max-w-7xl mx-auto">
        <h1 data-aos='zoom-in-up' data-aos-duration="1000" className="tracking-[12px] font-semibold text-xl text-center text-green-400">OUR VLOGS</h1>
        <h1 data-aos='zoom-in-down' data-aos-duration="1000" className="tracking-[6px] mb-8 font-semibold text-4xl text-center text-orange-800">Our Latest Vlogs</h1>

       <div className='lg:grid grid-cols-3 justify-between items-center w-full gap-16 '>
       <div data-aos="fade-left"  data-aos-duration="1200"  className=' '>
       <div className='w-[96%] mx-auto lg:w-[410px] h-[440px] shadow-lg '>
          <video className="w-[full]"  src={Videobg} autoPlay muted controls></video>
          <div className='flex flex-col gap-2 p-5 '>
             <h3 className='text-green-500 text-xl font-bold'>ADMIN || TOURS & TRAVEL || TRAVELER</h3>
             <h3 className='text-[17px] text-gray-700 font-semibold'>Exlpore Maldip with TRAVELER, You can see How we Travel, you can also see this ...</h3>
              <p className='text-gray-400 font-bold '>01/10/2023</p>
          </div>
       </div>
     
     </div>
       <div  data-aos="fade-left"  data-aos-duration="1200" className=' '>
       <div className='w-[98%] lg:w-[410px] mx-auto h-[440px] shadow-lg '>
          <video className="w-[full]"  src={Videobg2} autoPlay muted controls></video>
          <div className='flex flex-col gap-2 p-5 '>
             <h3 className='text-green-500 text-xl font-bold'>ADMIN || TOURS & TRAVEL || TRAVELER</h3>
             <h3 className='text-[17px] text-gray-700 font-semibold'>Exlpore Maldip with TRAVELER, You can see How we Travel, you can also see this ...</h3>
              <p className='text-gray-400 font-bold '>01/10/2023</p>
          </div>
       </div>
     
     </div>
       <div  data-aos="fade-left"  data-aos-duration="1200" className=' '>
       <div className='w-[98%] lg:w-[410px]  h-[440px] shadow-lg '>
          <video className="w-[full]"  src={Videobg3} autoPlay muted controls></video>
          <div className='flex flex-col gap-2 p-5 '>
             <h3 className='text-green-500 text-xl font-bold'>ADMIN || TOURS & TRAVEL || TRAVELER</h3>
             <h3 className='text-[17px] text-gray-700 font-semibold'>Exlpore Maldip with TRAVELER, You can see How we Travel, you can also see this ...</h3>
              <p className='text-gray-400 font-bold '>01/10/2023</p>
          </div>
       </div>
     
     </div>

   

    

       
       </div>

         
    
        
        </div>
    );
};

export default Vlog;