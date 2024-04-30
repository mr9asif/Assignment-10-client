import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { useContext, useState } from 'react';
import { AuthContext } from './Provider/Provider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Offer = () => {
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const from = location?.state || '/';

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You Logged In Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          console.log(result.user);
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid Email or Password!');
      });
  };

  return (
    <div className="offer w-[95%] lg:max-w-7xl mx-auto h-[1000px] lg:h-[700px] lg:px-20 lg:flex justify-around items-center">
      <div data-aos='fade-down' className='flex flex-col gap-3'>
        <h3 className='text-[12px] lg:text-[18px] text-green-500 font-bold tracking-[6px]'>MEGA OFFER</h3>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold text-orange-700'><span data-aos='fade-down' className='text-green-600'>30% OFF</span> For Honeymoon</h1>
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

      <div className=' '>
        <div className="hero  ">
          <div className="hero-content flex-col">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl opacity-80 bg-base-200">
              <form onSubmit={onSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative ">
                    <input type={show ? "text" : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />
                    <span className="absolute top-4 right-3" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</span>
                  </div>
                  <label className="label">
                    <p className="text-[14px] lg:text-[18px] ">
                      If you don't have any account? please <Link className="underline font-semibold" to='/register'>register</Link>
                    </p>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary  text-[15px] lg:text-[18px]">Login</button>
                  <p className="text-red-400">{error}</p>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Offer;
