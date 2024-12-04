import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import cover from '../assets/allcover/game2.jpg'
const AddReviews = () => {
    // style={{backgroundImage: `url(${cover})`}}
    return (
        <div>
            <header><Navbar></Navbar></header>
            <section style={{backgroundImage: `url(${cover})`}} className='bg-cover bg-center container mx-auto  text-white'>
            <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center">
      <form className="max-w-4xl w-full p-6 bg-opacity-80 shadow-md rounded-md grid grid-cols-2 gap-6">
        <h2 className="col-span-2 text-2xl font-bold text-center text-white">
          Game Review Form
        </h2>

        {/* Game Cover Image */}
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="coverImage" className="block text-sm font-medium text-white">
            Game Cover Image/Thumbnail (URL)
          </label>
          <input
            type="url"
            id="coverImage"
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
            id="gameTitle"
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
            id="reviewDescription"
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
            Rating (1-10)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="10"
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
            type="number"
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
            id="genre"
            name="genre"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border bg-transparent"
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
            type="email"
            value="user@example.com"
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 p-2 border bg-transparent cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-white">User Name</label>
          <input
            type="text"
            value="John Doe"
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
            Submit
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

export default AddReviews;