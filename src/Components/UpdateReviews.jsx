import React, { useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Swal from 'sweetalert2';
import cover from '../assets/allcover/coverreviews.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa6';

const UpdateReviews = () => {
    const {user} = useContext(AuthContext);
    const loadData = useLoaderData()
    const {image,title,description,rating,publish,genre, _id} = loadData;
    
    const handleUpdate= (e) =>{
      e.preventDefault()
      const form = e.target;
      const image = form.coverImage.value;
      const title = form.gameTitle.value;
      const description = form.reviewDescription.value;
      const rating = form.rating.value;
      const publish = form.publishingYear.value;
      const genre = form.genre.value;
      const name = form.name.value;
      const email = form.email.value;
      const addReview = {image,title,description,rating,publish,genre,name,email}
      fetch(`http://localhost:5000/update/${_id}`,{
        method: 'PATCH',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(addReview)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount>0){
          Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully review update",
          showConfirmButton: false,
          timer: 1500
          });
        }
      })
    }
    return (
        <div>
            <header><Navbar></Navbar></header>
                <Link to="/myreviews"><button className="ml-44 mb-5 px-6 btn py-2 font-extrabold text-xl"><FaBackward /></button></Link>
            <section style={{backgroundImage: `url(${cover})`}} className='bg-cover bg-center container mx-auto text-white my-8'>
            <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center">
      <form onSubmit={handleUpdate} className="max-w-4xl w-full p-6 bg-opacity-80 shadow-md rounded-md grid grid-cols-2 gap-6">
        <h2 className="col-span-2 text-2xl font-bold text-center text-white">
          Update your Form
        </h2>

        {/* Game Cover Image */}
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="coverImage" className="block text-sm font-medium text-white">
            Game Cover Image/Thumbnail (URL)
          </label>
          <input
            type="text"
            id="coverImage" defaultValue={image}
            name="coverImage"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-transparent"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Game Title */}
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="gameTitle" className="block text-sm font-medium text-white">
            Game Title/Name
          </label>
          <input
            type="text"
            id="gameTitle" defaultValue={title}
            name="gameTitle"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-transparent"
            placeholder="Enter game title"
            required
          />
        </div>

        {/* Review Description */}
        <div className="col-span-2">
          <label htmlFor="reviewDescription" className="block text-sm font-medium text-white">
            Review Description
          </label>
          <textarea
            id="reviewDescription" defaultValue={description}
            name="reviewDescription"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-transparent"
            rows="4"
            placeholder="Write a detailed review"
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="rating" className="block text-sm font-medium text-white">
            Rating (1-9)
          </label>
          <input
            type="number"
            id="rating" defaultValue={rating}
            name="rating"
            min="1"
            max="9"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-transparent"
            placeholder="Enter rating"
            required
          />
        </div>

        {/* Publishing Year */}
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="publishingYear" className="block text-sm font-medium text-white">
            Publishing Year
          </label>
          <input
            type="number" defaultValue={publish}
            id="publishingYear"
            name="publishingYear"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-transparent"
            placeholder="e.g., 2024"
            required
          />
        </div>

        {/* Genres */}
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="genre" className="block text-sm font-medium text-white">
            Genre
          </label>
          <select
            id="genre" defaultValue={genre}
            name="genre"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-gray-400"
            required
          >
            <option value="" disabled>
              Select Genre
            </option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Sports">Sports</option>
            <option value="Puzzle">Puzzle</option>
          </select>
        </div>

        {/* User Email */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-white">User Email</label>
          <input
            type="email" name='email'
            value = { user?.email }
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 p-2 border bg-transparent cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-white">User Name</label>
          <input
            type="text" name='name'
            value = { user?.displayName }
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed p-2 border bg-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateReviews;