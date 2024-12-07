import React from 'react';
import ReviewCard from './ReviewCard';
import 'animate.css';

const RatedData = ({ratedData}) => {
    
    return (
        <div className='animate__animated animate__bounceInUp animate__delay-1s'>
            <div className='text-3xl text-center font-bold'>Top Rated Reviews Game</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    ratedData.map(card=> <ReviewCard key={card._id} card={card} ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default RatedData;