import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const WatchList = () => {
  const watchListData = useLoaderData();
  const [watch, setWatch] = useState(watchListData);

  return (
    <div>
      <section className="container mx-auto">
        <div>
          <h2 className="text-center text-2xl font-bold">WatchList</h2>
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
                {watch.map((watchData, index) => (
                  <tr key={watchData._id} className="hover hover:text-red-600">
                    <th>{index + 1}</th>
                    <th>
                      <img className="w-[200px]" src={watchData.image} alt="" />
                    </th>
                    <td>{watchData.title}</td>
                    <td>{watchData.publish}</td>
                    <td>{watchData.genre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchList;
