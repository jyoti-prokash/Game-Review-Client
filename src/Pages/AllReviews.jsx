import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';
import { IoMdMenu } from 'react-icons/io';

const AllReviews = () => {
    const reviewsData = useLoaderData();
    const [reviewData, setReviewData] = useState(reviewsData)
    const [sort, setSort] = useState([])

    const handleSort = sortType => {
        setSort(sortType);
        if(sortType=== 'publish year'){
            const sortedYearList = [...reviewsData].sort((a,b)=> b.publish - a.publish);
            setReviewData(sortedYearList)
        }
        if(sortType=== 'ratings'){
            const sortedRatingsList = [...reviewsData].sort((a,b)=> b.rating - a.rating);
            setReviewData(sortedRatingsList)
        }
    };
    const handleFilter = (category) =>{
        const filterData = reviewsData.filter(f=> f.genre == category)
        setReviewData(filterData)
    }

    return (
      <div>
        <section className="container mx-auto my-10">
          {/* sorting year/rating */}
          <div className="flex">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 py-3 px-6 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold"
              >
                {sort ? `Sort by ${sort}` : "Sort By:"}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={() => handleSort("publish year")}>
                  <a>Year</a>
                </li>
                <li onClick={() => handleSort("ratings")}>
                  <a>Rating</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn text-3xl m-1">
                <IoMdMenu />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={() => handleFilter("Action")}>
                  <a>Action</a>
                </li>
                <li onClick={() => handleFilter("Adventure")}>
                  <a>Adventure</a>
                </li>
                <li onClick={() => handleFilter("RPG")}>
                  <a>RPG</a>
                </li>
                <li onClick={() => handleFilter("Sports")}>
                  <a>Sport</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 animate__animated animate__slideInUp">
            {reviewData.map((card) => (
              <ReviewCard key={card._id} card={card}></ReviewCard>
            ))}
          </div>
        </section>
      </div>
    );
};

export default AllReviews;