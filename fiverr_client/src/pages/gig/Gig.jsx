import React, { useState } from 'react'
import './Gig.scss'
import { useQuery } from '@tanstack/react-query';
import ReactSimplyCarousel from 'react-simply-carousel';
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import Reviews from '../../components/reviews/Reviews';

const Gig = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const {id} = useParams();
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      })
  })

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data;
      })
  })

  return (
    <div className='gig'>
      {isLoading ? "Loading..." : error ? "Something Went Wrong!!!" : 
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
          <h1>{data.title}</h1>

          {isLoadingUser ? "Loading..." : errorUser ? "Something Went Wrong!!!" : 
          (<div className="user">
            <img className='pp' src={dataUser.img || '/img/noavatar.jpg'} alt="" />
            <span>{dataUser.username}</span>
            {!isNaN(data.totalStars / data.starNumber) && (
              <div className="stars">
                {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => {
                  return <img src="/img/star.png" alt="" key={i}/>
                })}
                <span>{Math.round(data.totalStars / data.starNumber)}</span>
              </div>
            )}
          </div>)}

          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                color: '#555',
                cursor: 'pointer',
                fontSize: '30px',
                height: 30,
                lineHeight: 1,
                textAlign: 'center',
                width: 30,
              },
              children: <BsArrowRightShort />,
            }}
            backwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                color: '#555',
                cursor: 'pointer',
                fontSize: '30px',
                height: 30,
                lineHeight: 1,
                textAlign: 'center',
                width: 30,
              },
              children: <BsArrowLeftShort />,
              className:"slider"
            }}
            responsiveProps={[
              {
                itemsToShow: 1,
                itemsToScroll: 1,
                minWidth: 768,
              },
            ]}
            speed={400}
            easing="linear"
          >
            {
              data.images.map((img) => {
                return (
                  <div key={img} style={{ width: 800, height: 500,textAlign: 'center', background: '#f1f1f1' }}>
                    <img
                        src={img}
                        alt=""
                        style={{height: '500px', width: '400px', objectFit:'cover'}}
                      />
                  </div>
                )
              })
            }
          </ReactSimplyCarousel>
          
          <h2>About This Gig</h2>
          <p>
            {data.desc}
          </p>

          {isLoadingUser ? "Loading..." : errorUser ? "Something Went Wrong!!!" :
          (
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img
                  src={dataUser.img || '/img/noavatar.jpg'}
                  alt=""
                />
                <div className="info">
                  <span>{dataUser.username}</span>
                  {!isNaN(data.totalStars / data.starNumber) && (
                    <div className="stars">
                      {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => {
                        return <img src="/img/star.png" alt="" key={i}/>
                      })}
                      <span>{Math.round(data.totalStars / data.starNumber)}</span>
                    </div>
                  )}
                  <button>Contact Me</button>
                </div>
              </div>

              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{dataUser.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{dataUser.desc}</p>
              </div>
            </div>
          )}
          <Reviews gigId={id}/>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p>
            {data.shortDesc}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data.deliveryDate}</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber}</span>
            </div>
          </div>
          <div className="features">
            {data.features.map(feature => {
              return (
              <div className="item" key={feature}>
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              )
            })}
          </div>
          <button>Continue</button>
        </div>
      </div>
    }
    </div>
  )
}

export default Gig