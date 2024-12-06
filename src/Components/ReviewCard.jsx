import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewCard = ({card}) => {
    const {title,image,rating,_id,genre} = card;
    return (
        <div>
            <div className='p-2 shadow-xl'>
                <div>
                    <img className='rounded-xl lg:h-[280px]' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-base font-medium my-2'>Rating: {rating} <span className='inline-block'><FaStar /></span></p>
                    <p className="text-base font-medium mb-2">Genre: <span className="badge badge-secondary">{genre}</span></p>
                    <Link to={`/review/${_id}`}>
                    <button className='px-6 py-4 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold'>Explore Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;