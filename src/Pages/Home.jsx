import React from 'react';
import Banner from '../Components/Banner/Banner';
import TypeScript from '../Components/TypeScript';
import { useLoaderData } from 'react-router-dom';
import RatedData from '../Components/RatedData';

const Home = () => {
    const ratedData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <section>
                <TypeScript></TypeScript>
            </section>
            <RatedData ratedData={ratedData}></RatedData>
        </div>
    );
};

export default Home;