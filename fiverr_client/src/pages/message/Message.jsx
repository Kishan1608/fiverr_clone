import React from 'react'
import './Message.scss';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Message = () => {
  const {id} = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () =>
      newRequest.get(`/message/${id}`).then((res) => {
        return res.data;
      })
  })

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message) => {
        return newRequest.post(`/message`, message)
    },
    
    onSuccess:() => {
        queryClient.invalidateQueries(["messages"])
    }
  })

  console.log(data);

  const handleSubmit  = (e) => {
    e.preventDefault();

    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value
    });

    e.target[0].value = "";
  }

  return (
    <div className='message'>
      <div className="container">
        <span className='breadCrumbs'>
          <Link to="/messages" className='link'>MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>

        {isLoading ? "Loading..." : error ? "Something Went Wrong!!!" : 
          <div className="messages">
            {data.map(m => {
              return <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p>
                  {m.desc}
                </p>
              </div>
            })}
          </div>
        }

        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message