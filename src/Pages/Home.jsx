import React from 'react';
import Banner from '../Components/Banner/Banner';
import TypeScript from '../Components/TypeScript';
import { useLoaderData } from 'react-router-dom';
import RatedData from '../Components/RatedData';
import LatesGaming from '../Components/LatesGaming';
import News from '../Components/News';
import FAQ from '../Components/FAQ/FAQ';

const Home = () => {
    const ratedData = useLoaderData();
    return (
        <div className='space-y-10'>
            <section>
            <Banner></Banner>
            </section>
            <section>
                <TypeScript></TypeScript>
            </section>
            <section className='container mx-auto'>
            <RatedData ratedData={ratedData}></RatedData>
            </section>
            <section><LatesGaming></LatesGaming></section>
            <section><News></News></section>
            <section><FAQ></FAQ></section>
        </div>
    );
};

export default Home;