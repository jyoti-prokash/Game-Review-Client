import React from "react";
import cover1 from "../assets/allcover/images.jpg";
import cover2 from "../assets/allcover/header.jpg";
import cover3 from "../assets/allcover/images (1).jpg";
const News = () => {
  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-3xl font-bold text-center my-5">Latest News</h1>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={cover1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Call of duty black ops-6</h2>
            <h2 className="card-title">
              Action Game
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Call of Duty®: Black Ops 6 is signature Black Ops across a
              cinematic single-player Campaign, a best-in-class Multiplayer
              experience and with the epic return of Round-Based Zombies.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline">
                <a href="https://www.gamespot.com/news/" target="_blank">
                  View Details
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={cover2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>EA Sports WRC</h2>
            <h2 className="card-title">
              Sports Game
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              EA Sports WRC is not for those who want an easy-to-digest rally
              race. But for anyone who wants a rally
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline">
                <a href="https://www.gamespot.com/news/" target="_blank">
                  View Details
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={cover3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Assassin's Creed Shadows</h2>
            <h2 className="card-title">
              Adventure Game
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Thrown to the Dogs. Experience an epic historical action-adventure
              story set in feudal Japan! Become a lethal shinobi Assassin and a
              powerful legendary samurai as you explore a beautiful open world
              in a time of chaos.{" "}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline">
                <a href="https://www.gamespot.com/news/" target="_blank">
                  View Details
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
