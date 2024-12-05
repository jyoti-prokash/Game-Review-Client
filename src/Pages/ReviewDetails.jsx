import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { FaBackward, FaStarHalfAlt } from "react-icons/fa";

const ReviewDetails = () => {
    const reviewData = useLoaderData();
    const {title,name,image,description,email,rating,publish,genre} = reviewData;
    return (
        <div>
            <header><Navbar></Navbar></header>
            <section className="my-8 px-5 lg:px-0 container mx-auto">
                <Link to="/allreviews"><button className="mb-5 px-6 btn py-2 font-extrabold text-xl"><FaBackward /></button></Link>
                <div className="lg:flex gap-10 justify-between">
                    <div className="space-y-3">
                        <img className="lg:w-[850px] lg:h-[400px]" src={image} alt="" />
                        <button className="px-6 py-4 bg-gradient-to-r from-[#e1296f] to-[#f9493b] text-white font-bold">Add to WatchList</button>
                </div>
                <div className="space-y-3 lg:w-5/6">
                        <h2 className="text-3xl lg:w-96 lg:text-4xl font-bold">{title}</h2>
                        <p className="text-base text-stone-500 font-medium">{description}</p>
                        <p className="text-base font-medium">Publish Year: {publish}</p>
                        <p className="text-base font-medium">Rating: {rating}/10 <span className="inline-block"><FaStarHalfAlt /></span></p>
                        <p className="text-base font-medium">Genre: <span className="badge badge-secondary">{genre}</span></p>
                        <div className="divider"></div>
                        <p className="font-semibold text-lg">Reviewer Name: {name}</p>
                        <p className="font-semibold text-lg">Reviewer Email: {email}</p>
                </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ReviewDetails;