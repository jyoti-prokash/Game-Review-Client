import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewCard = ({card}) => {
    const {title,image,rating,_id,publish,genre} = card;
    return (
      <div>
        <div className="p-2 shadow-xl  rounded-2xl lg:w-[350px] lg:h-[450px] mx-auto">
          <div>
            <img className="rounded-xl lg:h-[250px]" src={image} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold">
              {title} <span className="badge badge-secondary">{publish}</span>
            </h1>
            <div>
              <p className="font-semibold my-2">{genre}</p>
              <p className="text-base font-medium my-2">
                Rating: {rating}{" "}
                <span className="inline-block">
                  <FaStar />
                </span>
              </p>
            </div>
            <div className="flex justify-end">
              <Link to={`/review/${_id}`}>
                <button className="px-5 py-3 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold rounded-lg">
                  Explore Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;