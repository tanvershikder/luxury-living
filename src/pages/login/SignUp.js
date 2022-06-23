import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import google from '../../Assets/icons/Group 573.png'
import logo from '../../Assets/logo.webp'
import auth from '../../Firebase.init';

const SignUp = () => {
    const [showpass, setShowpass] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

      const onSubmit = data => {

       createUserWithEmailAndPassword(data.email, data.password)
        // await updateProfile({ displayName: data.name });
        // navigate('/')
    }

    if(user){
        navigate('/home')
    }
    

    return (
        <div className='flex h-screen justify-center items-center p-20 my-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <div>
                            <div className='flex justify-center align-center'>
                                <img src={logo} alt="" className='h-20' />
                                <div>
                                    <h1 className='font-bold text-headercolor text-3xl'>Luxury</h1>
                                    <p className='text-2xl text-headercolor'>Living</p>
                                </div>
                            </div>
                            <h2 className="text-center text-2xl text-headercolor font-bold">SIgnUp</h2>
                        </div>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your name"
                                className="input input-bordered w-full max-w-xs"

                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input
                                type={showpass ? "text" : "password"}
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charecters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>see password</span>

                        {/* {signInerror} */}

                        <div className="flex flex-col w-full border-opacity-50">
                            <input type="submit" value="SignUp" className="grid btn btn-primary rounded-box place-items-center input input-bordered w-full max-w-xs" />

                            <p className='m-3'>Already have an account?
                                <span><Link to="/login" className='text-secondary text-sm cursor-pointer'>Login</Link></span></p>

                        </div>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline'><span><img src={google} alt="" className='h-5' /></span> CONTINUE WITH GOOGLE</button>
                     
                </div>
            </div>
        </div>
    );
};

export default SignUp;