import React from 'react'
import './Message.scss';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className='breadCrumbs'>
          <Link to="/messages" className='link'>MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>

        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="item">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="item">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="item">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="item">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message