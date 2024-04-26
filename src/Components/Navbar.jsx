import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
        const [theme, setTheme]= useState('light');

        useEffect(()=>{
            localStorage.setItem('theme', theme)
            const localstorageTheme = localStorage.getItem('theme');
            document.querySelector('html').setAttribute('data-theme', localstorageTheme)
        },[theme])

    const handleThemeChange = e=>{
        if(e.target.checked){
            setTheme('synthwave')
        }else{
            setTheme('light')
        }
    }


    return (
        <div className="max-w-10xl mx-auto px-2 lg:px-9  bg-gray-800 shadow-md h-[80px] py-3">
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to='/' className={({isActive})=>isActive? 'text-bold text-green-500' : 'text-bold' || 'hover:bg-green-500 text-[18px]'}>Home</NavLink>
            <NavLink to='/allTourists' className={({isActive})=>isActive? 'text-bold text-green-500' : 'text-bold'}>All Tourists Spot</NavLink>
            <NavLink to='/addTourists' className={({isActive})=>isActive? 'text-bold text-green-500' : 'text-bold'}>Add Tourists Spot</NavLink>
            <NavLink to='myList' className={({isActive})=>isActive? 'text-bold text-green-500' : 'text-bold'}>My List</NavLink>
        
            </ul>
          </div>
          <div className="">

          <div className="flex items-center gap-2">
           <img className="w-[30px] lg:w-[60px] rounded" src="https://i.postimg.cc/5tdxjj8Q/image.jpg" alt="" />
            <h1 className=" md:text-2xl lg:text-3xl font-bold text-green-400">TRAVEL<span className="text-orange-500">ER</span></h1>
           </div>
         
         </div>
          
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex justify-between  lg:gap-6">
            <NavLink to='/' className={({isActive})=>isActive? 'text-bold text-green-500  text-[18px]' : 'font-bold text-white hover:text-green-500 text-[18px]' }>Home</NavLink>
            <NavLink to='/allTourists' className={({isActive})=>isActive? 'text-bold text-green-500 text-[18px]' : 'font-bold text-white hover:text-green-500 text-[18px]'}>All Tourists Spot</NavLink>
            <NavLink to='addTourists' className={({isActive})=>isActive?'text-bold text-green-500 text-[18px]' : 'font-bold text-white hover:text-green-500 text-[18px]'}>Add Tourists Spot</NavLink>
            <NavLink to='myList' className={({isActive})=>isActive?'text-bold text-green-500 text-[18px]' : 'font-bold text-white hover:text-green-500 text-[18px]'}>My List</NavLink>
        
            
          </ul>
        </div>
        <div className="navbar-end">
        <button className="text-[13px] lg:text-xl w-12 h-[30px] lg:w-24 lg:h-[40px] bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-500 size-36 rounded-xl group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Login</button>
        <label className="cursor-pointer grid place-items-center mx-3">
            <input
             onChange={handleThemeChange}
            type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
        </div>
            
      </div>
        </div>
    );
};

export default Navbar;