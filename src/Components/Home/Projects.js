import React from 'react';

import location from '../../Assets/icons/Group 33011.png'
import westenVila from '../../Assets/bernard-hermant-6ftZuO_-b64-unsplash 1.png'
import luxury from '../../Assets/Mask Group-1.png'
import maskgroup from '../../Assets/Mask Group.png'

const Projects = () => {
    return (
        <div>
            <div className='py-5'>
                <div className='text-center'>
                    <p >Projects</p>
                    <hr className='w-16 bg-buttoncolor h-1 rounded text-center m-auto' />
                </div>
                <h2 className='text-center text-3xl font-bold text-headercolor'>Discover the latest Interior Design <br /> Available Today</h2>
                <div className='flex justify-between px-20 py-8'>
                    <div className='py-5'>
                        <img src={luxury} alt="" className='h-80 w-80 rounded mb-5' />
                        <div className='align-items-center'>
                            <div className='text-center'>
                                <h4 className='font-bold text-[20px] text-headercolor'>Villa on Washington Avenue</h4>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <img src={location} alt="" className='h-5 w-5' />
                                <p className='text-[15px]'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <img src={westenVila} alt="" className='h-80 w-80 rounded mb-5' />
                        <div className='text-center'>
                            <h4 className='font-bold text-[20px] text-headercolor'>Luxury villa in Rego Park</h4>
                        </div>
                        <div className='flex justify-center items-center mt-2'>
                            <img src={location} alt="" className='h-5 w-5' />
                            <p className='text-[15px]'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='py-5'>
                        <img src={maskgroup} alt="" className='h-80 w-80 rounded mb-5' />
                        <div className='text-center'>
                            <h4 className='font-bold text-[20px] text-headercolor'>Gorgeous house</h4>
                        </div>
                        <div className='flex justify-center items-center mt-2'>
                            <img src={location} alt="" className='h-5 w-5' />
                            <p className='text-[15px] '>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;