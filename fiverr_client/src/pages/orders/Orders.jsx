import React from 'react'
import './Orders.scss';
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import { getCurrentUser } from '../../utils/getCurrentUser';

const Orders = () => {
  const currentUser = getCurrentUser();

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/order`).then((res) => {
        return res.data;
      })
  })

  const handleContact = async(order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId+buyerId;

    try {
      const res = await newRequest.get(`/conversation/single/${id}`);
      navigate(`/message/${res.data.id}`)
    } catch (err) {
      if(err.response.status === 404){
        const res = await newRequest.post(`/conversation`, {to: currentUser.isSeller? buyerId : sellerId });
        navigate(`/message/${res.data.id}`)
      }
    }
  }

  return (
    <div className='orders'>
      {isLoading ? "Loading..." 
      : error 
      ? "Error"
      :(<div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => {           
              return <tr key={order._id}>
              <td>
                <img
                  className="image"
                  src={order.img}
                  alt=""
                  />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <img className="delete" src="./img/message.png" alt="" onClick={() => handleContact(order)}/>
              </td>
            </tr>})
            }
          </tbody>
          
        </table>
      </div>)}
    </div>
  )
}

export default Orders