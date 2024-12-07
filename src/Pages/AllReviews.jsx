import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

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
    }
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <section className='container mx-auto my-8'>
            {/* sorting */}
                <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 py-3 px-6 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold">
                            {
                                sort ? `Sort by ${sort}`:'Sort By:'
                            }
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={()=>handleSort('publish year')} ><a>Year</a></li>
                            <li onClick={()=>handleSort('ratings')}><a>Rating</a></li>
                        </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviewData.map(card=> <ReviewCard key={card._id} card={card} ></ReviewCard>)
                }
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllReviews;