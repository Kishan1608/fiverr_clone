import React, { useEffect, useState } from 'react'
import './Pay.scss'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import {useParams} from 'react-router-dom'
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51NLOBXSGYk4vnsWgmNrevxbpgcYDRaH3evw9g0jK09QNOsGXFwkCYCPvPDFsHKBQCg7qdyP0p1RQmqDFalXOt6Gy00F0FMN3cm");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const {id} = useParams();

    useEffect(() => {
        const makeRequest = async() => {
            try {
                const res = await newRequest.post(`/order/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        }
        makeRequest();
    },[]);

    const appearance = {
        theme: 'stripe',
    };
      
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className='pay'>
            <div className="container">
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </div>
    )
}

export default Pay