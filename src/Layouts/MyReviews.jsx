import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const myReviews = useLoaderData() 
    const [myWatch, setMyWatch] = useState(myReviews)
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const remaining = myWatch.filter(w=> w.email ==user.email)
        setMyWatch(remaining)
    },[])

    const handleDelete = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You want to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/reviews/${id}`,{
            method: "DELETE",
        })
        .then(res=> res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
            title: "Deleted!",
            text: "Delete Successfully",
            icon: "success"
            });
        const remainingDelete = myWatch.filter(r=>r._id  !==id)
        setMyWatch(remainingDelete)
            }
        });
        }
        });
    }
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
        <td><button className='text-lg'><FaRegEdit /></button></td>
        <td><button onClick={()=> handleDelete(watchData._id)} className='text-lg'><FaDeleteLeft /></button></td>
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