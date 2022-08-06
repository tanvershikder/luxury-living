import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

import creadit from '../../Assets/icons/credit-card 1.png'
import paypal from '../../Assets/icons/image 17.png'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackOutForm from './ChackOutForm';

const stripePromise = loadStripe('pk_test_51L0VYqIjoDmdgvDrUO0C5ZUrgLT9Zdi3bmtGi5P95AABblBLQEXmfm5ME6oo9BAe3n8mpbP4pdQEFYjWaYtPF7sV00p5YqAipF');

const Book = () => {

    const [user] = useAuthState(auth)
    // console.log(user.email);
    const { id } = useParams()
    // console.log(id)
    const [userName,setUserName] = useState()

    const [serviecDetails, setServicedetails] = useState({})

    useEffect(() => {

        if (id) {
            fetch(`http://localhost:5000/service/${id}`)
                .then(res => res.json())
                .then(data => setServicedetails(data))
        }
    }, [])

    if (serviecDetails) {
        // console.log(serviecDetails);
    }

   
   

    return (
        <div>
            <div className='m-10'>
                <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder='Enter Your Name' className='block mb-3 h-10 w-96 bg-blue-200 rounded' />
                <input type="email" value={user.email} className='block mb-3 h-10 w-96 bg-blue-200 rounded' />
                <input type="text" value={id ? serviecDetails?.service : "Please select any service"} className='block mb-3 h-10 w-96 bg-blue-200 rounded' />
            </div>
            <div className='m-10'>
                <p className='mb-4'>pay with</p>
                <div>
                    <div class="flex">
                        <div class="flex items-center mr-4">
                            <input id="default-radio-1" checked type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlfor="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><span className='flex justify-center items-center'><img src={creadit} alt="" className='h-4 mr-2' /> <p>Creadit Card</p></span> </label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlfor="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><span className='flex justify-center items-center'><img src={paypal} alt="" className='h-4 mr-2' /> <p>Paypal</p></span> </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackOutForm serviecDetails = {serviecDetails} userName={userName}></ChackOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Book;