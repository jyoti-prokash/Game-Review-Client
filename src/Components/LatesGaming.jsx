import React from 'react';
import new1 from  '../assets/release/new2.jpg'
import new2 from  '../assets/release/blur2.png'
import 'animate.css';
import "animate.css/animate.compat.css"
import { Link } from 'react-router-dom';
const LatesGaming = () => {
    return (
        <div style={{backgroundImage: `url(${new2})`}} className='lg:flex bg-cover bg-center justify-evenly items-center py-40 px-5 text-white'>
            <div className='space-y-5 animate__animated animate__backInLeft animate__delay-2s'>
                <h1 className='text-3xl lg:text-5xl font-extrabold'>NEW RELEASED!</h1>
                <p className='font bold text-xl'>Indiana Jones and the Great Circle (2024) </p>
                <p className='text-lg'>9 Dec, 2024</p>
                <p  className='lg:w-80 '>Uncover one of history's greatest mysteries in Indiana Jones and the Great Circle, a first-person, single-player adventure set between the events of Raiders of the Lost Ark and The Last Crusade.</p>
                <div>
                    <a href="https://www.ign.com/articles/indiana-jones-and-the-great-circle-review" target="_blank">
                    <button className='px-8 py-4 mr-5 hover:text-black border-red-500 border-2 hover:bg-red-500 text-white font-bold'>Read More</button>
                </a>
                <a href="https://store.steampowered.com/app/2677660/Indiana_Jones_and_the_Great_Circle/" target="_blank">
                    <button className='px-8 py-4 hover:text-black border-red-500 border-2 hover:bg-red-500 text-white font-bold'>Download Now</button>
                </a>
                </div>
                <Link to='/addreviews'><button className='text-yellow-500 text-xl mt-3 font-bold border-b-2 hover:bg- py-3'>Click on Reviews</button></Link>
            </div>
            <div>
                <img className='mt-10 w-[700px] animate__animated animate__backInRight animate__delay-2s' src={new1} alt="" />
            </div>
        </div>
    );
};

export default LatesGaming;