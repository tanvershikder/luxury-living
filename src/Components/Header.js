import React from 'react';
import logo from '../Assets/logo.webp'
import { Link, useLocation } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const { pathname } = useLocation()

    const menu = <>
        <li><Link to='/home' className='font-bold'>Home</Link></li>
        <li><a className='font-bold'>About</a></li>
        <li><a className='font-bold'>Projects</a></li>
        <li><a className='font-bold'>Contact</a></li>
        <li><Link to="/dashbord" className='font-bold'>Admin</Link></li>
        <li>
            {
                user
                    ?
                    <Link onClick={() => logout()} to='/login' class="bg-buttoncolor h-10 w-24 text-white">signOut</Link>
                    :
                    <Link to='/login' class="btn bg-buttoncolor h-10 w-24">LogIn</Link>
            }
        </li>
    </>

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className=''>
            <div class="px-12 navbar bg-base-200">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menu}

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-buttoncolor font-bold"><span><img src={logo} alt="" className='h-10 w-10' /></span>Luxury<br />living</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                {
                    pathname.includes("dashbord")
                    &&
                    <div className="navbar-end lg:hidden">
                        <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;