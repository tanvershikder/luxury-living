import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getAuth } from 'firebase/auth';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChackOutForm = ({ serviecDetails,userName }) => {

   

    const [user] = useAuthState(auth)
    

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('')
    const [transactionID, setTransactonID] = useState('');

    // console.log(serviecDetails);

    const price = Number(serviecDetails.price);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })

        })

            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    // console.log(clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        // console.log(card);

        if (elements == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });

        setCardError(error?.message || "")
        setSuccess('')
        setProcessing(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: serviecDetails.service,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setSuccess('')
            setProcessing(false)
        }

        else {
            setCardError('')
            setTransactonID(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Your payment is completed')

            //send payment to database

            let payment = {}

            if(userName){
                 payment = {
                    userName:userName,
                    service:serviecDetails.service,
                    price:serviecDetails.price,
                    userEmail:user.email,
                    transactionID: paymentIntent.id,
                }
            }

             else{
                payment = {
                    userName:'',
                    service:serviecDetails.service,
                    price:serviecDetails.price,
                    userEmail:user.email,
                    transactionID: paymentIntent.id,
                }
             }

            fetch(`http://localhost:5000/booking`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);
                    // toast.success("payment Done")
                })

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='w-[383px] ml-10'>
                    <CardElement className='border-solid border-2 border-indigo-600 p-3'
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    {/* <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button> */}
                    <div className='flex justify-between mt-5'>
                        <p className='font-bold'>Your service charge will be {serviecDetails?.price}</p>
                        <button type="submit" disabled={!stripe || !clientSecret || success} className='bg-buttoncolor text-white px-5 py-2 rounded'>Pay</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChackOutForm;