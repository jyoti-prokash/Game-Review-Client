import { Link, useLoaderData } from "react-router-dom";
import { FaBackward, FaStarHalfAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const ReviewDetails = () => {

    const reviewData = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);
    const {_id,title,name,image,description,email,rating,publish,genre} = reviewData;
    const watchListData = {title,name,image,description,email,rating,publish,genre};
    const handleWatchList = () =>{
        fetch(`https://assignment-10-server-seven-iota.vercel.app/watchList`, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(watchListData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Added WatchList",
        showConfirmButton: false,
        timer: 1500
    });
            }
        })
    };
    return (
      <div>
        <section className="my-8 px-5 lg:px-0 container mx-auto">
          <Link to="/allreviews">
            <button className="mb-5 px-6 btn py-2 font-extrabold text-xl">
              <FaBackward />
            </button>
          </Link>
          <div className="lg:flex gap-10 justify-between">
            <div className="space-y-3">
              <img className="lg:w-[850px] lg:h-[400px]" src={image} alt="" />
              {user ? (
                <button
                  onClick={handleWatchList}
                  className="px-6 py-4 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold"
                >
                  Add to WatchList
                </button>
              ) : (
                <button disabled
                  onClick={handleWatchList}
                  className="px-6 py-4 bg-gray-300 text-white font-bold"
                >
                  Add to WatchList
                </button>
              )}
            </div>
            <div className="space-y-3 lg:w-5/6">
              <h2 className="text-3xl lg:w-96 lg:text-4xl font-bold">
                {title}
              </h2>
              <p className="text-base text-stone-500 font-medium">
                {description}
              </p>
              <p className="text-base font-medium">Publish Year: {publish}</p>
              <p className="text-base font-medium">
                Rating: {rating}/10{" "}
                <span className="inline-block">
                  <FaStarHalfAlt />
                </span>
              </p>
              <p className="text-base font-medium">
                Genre: <span className="badge badge-secondary">{genre}</span>
              </p>
              <div className="divider"></div>
              <p className="font-semibold text-lg">Reviewer Name: {name}</p>
              <p className="font-semibold text-lg">Reviewer Email: {email}</p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ReviewDetails;