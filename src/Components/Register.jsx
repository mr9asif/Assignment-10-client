import { useContext, useState } from "react";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

const Register = () => {
    const { creatUser, updateUser } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

   

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password, name, image } = data;
        console.log(data)
        creatUser(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You Successfully Register",
                        showConfirmButton: false,
                        timer: 1500
                      })
                    updateUser(name, image)
                        .then(() => {
                            navigate('/');
                        })
                        .catch(error => {
                            console.error("Error updating user profile:", error);
                        });
                }
            })
            .catch(error => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <div>
            <div className="hero  max-w-8xl mx-auto bg-yellow-300 ">
                <div className="hero-content flex-col w-full   ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-gray-400">Register Here Now!</h1>
                        
                    </div>
                    <div className="card shrink-0 w-full border max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Image</span>
                                </label>
                                <input {...register("image")} type="text" placeholder="Image URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                <input type={show ? "text" : 'password'} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
                                        message: "Password must contain at least one capital letter and one special character"
                                    }
                                })} placeholder="password" className="input input-bordered w-full" required />
                                <span className="absolute top-4 right-3" onClick={()=>setShow(!show)}>{show ? <FaEye />: <FaEyeSlash />}</span>
                                </div>
                                {errors.password && errors.password.type === "pattern" && (
                                    <p className="text-red-500">Password must contain at least one capital letter and one special character.</p>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p className="text-red-500">Password must be at least 6 characters long.</p>
                                )}
                            </div>
                            <p className="text-[14px] lg:text-[18px] ">
                            If you don't have any account? please <Link className="underline font-semibold" to ='/login'>Login</Link>
                            </p>
                            <div className="form-control mt-6 bg-blue-500 hover:bg-blue-800 py-2 px-4 rounded-xl text-white font-semibold cursor-pointer">
                                <input className="cursor-pointer" type="submit" value='Register' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;