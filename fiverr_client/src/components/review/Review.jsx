import React from 'react'
import './Review.scss';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Review = ({review}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['reviewUser'],
        queryFn: () =>
            newRequest.get(`/users/${review.userId}`).then((res) => {
            return res.data;
        })
    })

    return (
        <div className="review">
            {isLoading 
            ? "Loading..." 
            : error 
            ? "Something Went Wrong!!!" 
            : 
                <div className="user">
                    <img className="pp" src={data.img || './img/noavatar.jpg'} alt="" />
                    <div className="info">
                        <span>{data.username}</span>
                        <div className="country">
                            <span>{data.country}</span>
                        </div>
                    </div>
                </div>
            }
            {!isNaN(review.totalStars / review.starNumber) && (
                <div className="stars">
                {Array(Math.round(review.totalStars / review.starNumber)).fill().map((item, i) => {
                    return <img src="/img/star.png" alt="" key={i}/>
                })}
                <span>{Math.round(review.totalStars / review.starNumber)}</span>
                </div>
            )}
            <p>
                {review.desc}
            </p>
            <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
            </div>
        </div>
    )
}

export default Review