import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const WatchList = () => {
    const watchListData = useLoaderData()
    const [watch, setWatch] = useState(watchListData)
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        const remaining = watchListData.filter(w=> w.email ==user.email)
        setWatch(remaining)
    },[])

    return (
        <div>
            <header><Navbar></Navbar></header>
            <section className='container mx-auto mt-10'>
                    <div>
                        <h2 className='text-center text-2xl font-bold'>WatchList</h2>
                        <div className="overflow-x-auto">
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
        watch.map((watchData,index) =>
        <tr key={watchData._id} className="hover hover:text-red-600">
        <th>{index+1}</th>
        <th><img className='w-[200px]' src={watchData.image} alt=""/></th>
        <td>{watchData.title}</td>
        <td>{watchData.publish}</td>
        <td>{watchData.genre}</td>
        </tr>
    )
    }
    </tbody>
  </table>
</div>
                    </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default WatchList;