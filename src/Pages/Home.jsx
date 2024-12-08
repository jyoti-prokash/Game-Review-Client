import React from 'react';
import Banner from '../Components/Banner/Banner';
import TypeScript from '../Components/TypeScript';
import { useLoaderData } from 'react-router-dom';
import RatedData from '../Components/RatedData';
import LatesGaming from '../Components/LatesGaming';

const Home = () => {
    const ratedData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <section className='my-10'>
                <TypeScript></TypeScript>
            </section>
            <section className='container mx-auto'>
            <RatedData ratedData={ratedData}></RatedData>
            </section>
            <section className='my-12'><LatesGaming></LatesGaming></section>
        </div>
    );
};

export default Home;