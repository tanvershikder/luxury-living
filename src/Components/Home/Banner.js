import React from 'react';
import banner from '../../Assets/bernard-hermant-6ftZuO_-b64-unsplash 1.png'

const Banner = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen bg-base-200 lg:px-48">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class="h-96 w-80 shadow-2xl rounded-sm" />
                    <div>
                        <h1 class="text-4xl font-bold text-headercolor">We Build <br /> Your Dream</h1>
                        <p class="py-6">Online Easte Agency, the mordern way to sell your own home,
                            You can use Griffin Residential to market your property
                        </p>
                        <button class="btn btn-small bg-buttoncolor ">Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;