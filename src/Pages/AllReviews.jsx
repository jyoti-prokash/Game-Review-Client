import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

const AllReviews = () => {
    const reviewsData = useLoaderData();
    // const {reviews, setReviews} = useState(reviewsData);
    // console.log(reviews);
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <section className='container mx-auto my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviewsData.map(card=> <ReviewCard key={card._id} card={card} ></ReviewCard>)
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