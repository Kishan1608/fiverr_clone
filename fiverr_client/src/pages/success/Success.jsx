import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate()
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/order", {payment_intent})
        setTimeout(() => {
          navigate('/orders');
        },5000)
      } catch (err) {
        console.log(err);
      }
    }

    makeRequest();
  })

  return (
    <div style={{textAlign:'center'}}>Payment Successfull, You are being redirected. <p>Please don't close the tab.</p></div>
  )
}

export default Success