import React, { useEffect, useState } from 'react';

import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { useNavigate } from 'react-router-dom';

const Service = () => {

    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(allservice => {
                setServices(allservice);
            })
    }, [services])

    const hendelServiceDetails = id => {
        navigate(`/dashbord/booking/${id}`);
    }


    return (
        <div>
            <div className='py-5'>
                <div className='text-center'>
                    <p >Service</p>
                    <hr className='w-16 bg-buttoncolor h-1 rounded text-center m-auto' />
                </div>
                <h2 className='text-center text-3xl font-bold text-headercolor'>We're an agency tailored to all <br />
                    Clients' needs that always delivers</h2>
                <div className='flex justify-between items-center lg:px-10 my-10'>
                    {
                        services?.map(service => <div>
                            <div class="card w-80 h-[400px] bg-base-100 shadow-xl pointer">
                                <figure class="px-10 pt-5">
                                    <img src={service.image} alt="Shoes" class="rounded-xl h-24" />
                                </figure>
                                <div class="card-body items-center text-center">

                                    <h2 class="card-title text-headercolor">{service.service}</h2>
                                    <h2 class="card-title">${service.price}</h2>
                                    <div className='h-[120px]'>
                                        <p className='text-center'>{service.details}</p>

                                    </div>
                                    <div class="card-actions">
                                        <button onClick={()=> hendelServiceDetails(service._id)} class="btn bg-warning border-0">Book Now <AiOutlineArrowRight className='ml-2 text-2xl text-headercolor'/></button>
                                    </div>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
                <div className='text-center'>
                    <button class="btn bg-buttoncolor">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;