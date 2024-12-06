import React from 'react';
import ReviewCard from './ReviewCard';

const RatedData = ({ratedData}) => {
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    ratedData.map(card=> <ReviewCard key={card._id} card={card} ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default RatedData;