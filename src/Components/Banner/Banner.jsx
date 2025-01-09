import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/cover/rdr2.png";
import slide2 from "../../assets/cover/horizon-4.jpg";
import slide3 from "../../assets/cover/gtaV.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-8 lg:mt-[72px]">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide
            className="w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <div className="w-full h-[600px]">
              <div className="text-white text-center md:w-4/6 mx-auto pt-72 space-y-2">
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  Red Dead Redemption 2
                </h1>
                <p className="text-center lg:w-4/6 mx-auto font-medium">
                  Winner of over 175 Game of the Year Awards and recipient of
                  over 250 perfect scores, RDR2 is the epic tale of outlaw
                  Arthur Morgan and the infamous Van der Linde gang, on the run
                  across America at the dawn of the modern age.
                </p>
                <Link to="/addreviews">
                  <button className="border-b-2 border-white px-5 py-3 font-bold hover:bg-gray-300 hover:text-black my-5">
                    Click on Reviews
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-full h-[600px] bg-cover  bg-center"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            {/* <img className='w-full h-[570px]' src={slide1} alt=""/> */}
            <div className="w-full h-[570px]">
              <div className="text-white text-center md:w-3/6 mx-auto pt-72 space-y-2">
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  Froza Horizon 4
                </h1>
                <p className="text-center font-medium">
                  Dynamic seasons change everything at the world’s greatest
                  automotive festival. Go it alone or team up with others to
                  explore beautiful and historic Britain in a shared open world.
                </p>
                <Link to="/addreviews">
                  <button className="border-b-2 border-white px-5 py-3 font-bold hover:bg-gray-300 hover:text-black my-5">
                    Click on Reviews
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-full h-[570px] bg-cover  bg-center "
            style={{ backgroundImage: `url(${slide3})` }}
          >
            {/* <img className='w-full h-[570px]' src={slide1} alt=""/> */}
            <div className="w-full h-[600px]">
              <div className="text-white text-center md:w-3/6 mx-auto pt-72 space-y-2">
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  Grand Theft Auto V
                </h1>
                <p className="text-center font-medium">
                  Experience entertainment blockbusters Grand Theft Auto V and
                  Grand Theft Auto Online — now upgraded for a new generation
                  with stunning visuals, faster loading, 3D audio and more, plus
                  exclusive content for GTA Online players.
                </p>
                <Link to="/addreviews">
                  <button className="border-b-2 border-white px-5 py-3 font-bold hover:bg-gray-300 hover:text-black my-5">
                    Click on Reviews
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
