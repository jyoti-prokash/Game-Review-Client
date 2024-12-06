import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const MyReviews = () => {
    const myReviews = useLoaderData() 
    const [myWatch, setMyWatch] = useState(myReviews)
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const remaining = myWatch.filter(w=> w.email ==user.email)
        setMyWatch(remaining)
    },[])

    return (
        <div>
            <header><Navbar></Navbar></header>
            <section className='container mx-auto'>
                <table className="table">
            {/* head */}
    <thead>
        <tr>
        <th>No</th>
        <th>No</th>
        <th>Title</th>
        <th>Publish Year</th>
        <th>Genre</th>
        </tr>
    </thead>
    <tbody>
        {
        myWatch.map((watchData,index) =>
        <tr key={watchData._id} className="hover hover:text-red-600">
        <th>{index+1}</th>
        <th><img className='w-[200px]' src={watchData.image} alt=""/></th>
        <td>{watchData.title}</td>
        <td>{watchData.publish}</td>
        <td>{watchData.genre}</td>
        <td>Delete</td>
        <td>Edit</td>
        </tr>
    )}
    </tbody>
  </table>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyReviews;