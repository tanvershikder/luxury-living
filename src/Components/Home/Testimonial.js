import React from 'react';

import nahasPatik from '../../Assets/Ellipse 90.png'
import mirriamBaron from '../../Assets/Ellipse 91.png'
import bariaMalon from '../../Assets/Ellipse 92.png'

import star from '../../Assets/icons/Group 33040.png'

const Testimonial = () => {
    return (
        <div>
            <div className='py-6'>
                <h1 className='text-3xl font-bold text-headercolor text-center'>Testimonials</h1>
                <hr className='w-48 bg-buttoncolor h-1 rounded text-center m-auto' />
            </div>

            <div className='flex justify-between lg:px-12'>
                <div className='card w-80 bg-base-100 shadow-xl py-10 px-5'>
                    <div className='flex justify-center items-center mb-5'>
                        <div>
                            <img src={nahasPatik} alt="" className='h-10 mr-5' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-headercolor'>Nash Patrik</h3>
                            <p className=''>CEO, Manpol</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-justify'>This organization is so much trusted and this is very fast service providefull organization and their behevior are so nice</p>
                        <div className='mt-3'>
                            <ul className='flex'>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card w-80 bg-base-100 shadow-xl py-10 px-5'>
                    <div className='flex justify-center items-center mb-5'>
                        <div>
                            <img src={mirriamBaron} alt="" className='h-10 mr-5' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-headercolor'>Mirriam Baron</h3>
                            <p className=''>CEO, Chingcho</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-justify'>This organization is so much trusted and this is very fast service providefull organization and their behevior are so nice</p>
                        <div className='mt-3'>
                            <ul className='flex'>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card w-80 bg-base-100 shadow-xl py-10 px-5'>
                    <div className='flex justify-center items-center mb-5'>
                        <div>
                            <img src={bariaMalon} alt="" className='h-10 mr-5' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-headercolor'>Baria Malon</h3>
                            <p className=''>CEO, Amaon</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-justify'>This organization is so much trusted and this is very fast service providefull organization and their behevior are so nice</p>
                        <div className='mt-3'>
                            <ul className='flex'>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                                <li><img src={star} alt="" className='h-5 mr-1' /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Testimonial;