import React from 'react';

const ReviewCard = ({card}) => {
    const {title,image,rating} = card;
    return (
        <div>
            <div className='border p-2 shadow-xl'>
                <div>
                    <img className='rounded-xl' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p>Rating: {rating}/10</p>
                    <button className='px-6 py-4 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;