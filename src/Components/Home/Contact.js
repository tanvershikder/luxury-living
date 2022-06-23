import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='py-12'>
                <div className='py-6'>
                    <h1 className=' text-headercolor text-center'>Contact</h1>
                    <hr className='w-16 bg-buttoncolor h-1 rounded text-center m-auto' />
                </div>
                <h2 className='text-center text-3xl font-bold text-headercolor'>Let's Handle Your <br /> Project,professionally</h2>

                <div className='flex align-items-center justify-center py-10'>
                    <form action="">
                        <div>
                            <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="text" placeholder='FullName' />
                            <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="text" placeholder='FullName' />
                        </div>
                        <div>
                            <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="email" placeholder='Email' />
                            <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="Number" placeholder='Phone' />
                        </div>
                        <textarea name="" id="" cols="56" rows="5" placeholder='Your Message' className='bg-base-200 px-5'></textarea>
                        <button type="submit" className='block m-auto btn bg-buttoncolor mt-4'>send message</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contact;