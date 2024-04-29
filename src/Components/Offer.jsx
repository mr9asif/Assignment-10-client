import { Link } from 'react-router-dom'
import '../App.css'

const Offer = () => {
    return (
        <div className="offer w-[95%]   lg:max-w-7xl mx-auto h-[1000px] lg:h-[700px] lg:px-20 lg:flex justify-around items-center">
        <div data-aos='fade-down' className='flex flex-col gap-3'>
           <h3 className='text-[12px] lg:text-[18px] text-green-500 font-bold tracking-[6px]'>MEGA OFFER</h3>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold text-orange-700'><span data-aos='fade-down'  className='text-green-600'>30% OFF</span> For Honeymoon</h1>
            <p className='text-gray-300 font-semibold text-[13px] lg:text-xl'>Enjoy 30% off for honeymoon couples! Treat yourselves to unforgettable experiences.</p>
               
       <div className='flex flex-col gap-2 my-6'>
       <div className='flex items-center gap-1'>
       <svg className='w-[70px] lg:w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#63E6BE" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
       <p className='text-gray-100 font-semibold  text-[18px] lg:text-xl '><span className='font-bold text-orange-600'>Savings</span>: 30% off helps couples save on their dream honeymoon..</p>
       </div>
       <div className='flex items-center gap-1'>
       <svg className='w-[70px] lg:w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#63E6BE" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
       <p className='text-gray-100 font-semibold  text-[18px] lg:text-xl '><span className='font-bold text-orange-600'>Luxury</span>: Discount allows for a more luxurious experience.</p>
       </div>
       <div className='flex items-center gap-1'>
       <svg className='w-[70px] lg:w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#63E6BE" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
       <p className='text-gray-100 font-semibold text-[18px] lg:text-xl '><span className='font-bold text-orange-600'>Memorable</span>:Adds celebration, making honeymoon more memorable.</p>
       </div>
       
       </div>
     

           </div>

          <div className=''>
          <div data-aos='fade-up' className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-700">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[18px] lg:text-xl">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-[18px] lg:text-xlfont-semibold">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt text-[14px]">If you Don't have an account? please <Link className='font-bold link' to='/register'>Resigter</Link></a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-600 text-xl ">Login</button>
            </div>
          </form>
        </div>
          
          </div>
             

            
        </div>
    );
};

export default Offer;