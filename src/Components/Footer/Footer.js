import React from 'react';
import map from '../../Assets/icons/map-pin-2-fill.png'

const Footer = () => {
    return (
        <div className='bg-buttoncolor lg:grid grid-cols-4 gap-4 lg:text-justify text-center'>
            <div className='flex justify-center items-center p-10'>
                <div className='mr-3'>
                    <img src={map} alt="" className='h-10 w-8' />
                </div>
                <div>
                    <p className='text-base-100 text-sm'>H#000 (0th Floor), Road #00,</p>
                    <p className='text-base-100 text-sm'>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className=' p-10'>
                <h4 className='text-base-100 mb-5'>Company</h4>
                <p className='text-base-100 text-sm'>About</p>
                <p className='text-base-100 text-sm'>Projects</p>
                <p className='text-base-100 text-sm'>Our Team</p>
                <p className='text-base-100 text-sm'>Teams Conditions</p>
                <p className='text-base-100 text-sm'>Submit Listing</p>
            </div>
            <div className=' p-10'>
                <h4 className='text-base-100 mb-5'>Quick Links</h4>
                <p className='text-base-100 text-sm'>Quick Links</p>
                <p className='text-base-100 text-sm'>Rentals</p>
                <p className='text-base-100 text-sm'>Seals</p>
                <p className='text-base-100 text-sm'>Contact</p>
                <p className='text-base-100 text-sm'>Our Blogs</p>
            </div>
            <div className=' p-10'>
                <p className='text-base-100 mb-5'>About Us</p>
                <p className='text-base-100 text-sm'>We have 24hours service and we give best Security . we have buffet lunch system and Personal Perty Hall</p>
            </div>
        </div>
    );
};

export default Footer;