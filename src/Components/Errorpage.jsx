import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
        <div>
        <div className="w-full h-[100vh] flex flex-col gap-3 justify-center items-center border bg-slate-200 ">
        
        <h1 className="text-red-700 font-bold bg-blue-200 p-8  text-5xl rounded-xl border-r-slate-950">Oops!</h1>
        <h1 className="text-3xl font-bold ">404</h1> 
        <h1 className="text-2xl font-bold">Not Found!</h1>
        
        <Link to="/"><button className="text-xl text-gray-200 hover:bg-gray-700 font-bold p-4 rounded-xl hover:bg-gray-300 bg-blue-700">Back Home</button></Link>
        </div>
        </div>
        </div>
    );
};

export default Errorpage;