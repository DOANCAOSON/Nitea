import { useEffect, useState } from "react";
import Slider from "react-slick";
const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-gray-100 min-h-screen p-4 flex">
      <Slider {...settings}>
        <div>
          <h3 className="text-lg text-colorBlack">1</h3>
        </div>
        <div>
          <h3 className="text-lg text-colorBlack">2</h3>
        </div>
        <div>
          <h3 className="text-lg text-colorBlack">3</h3>
        </div>
        <div>
          <h3 className="text-lg text-colorBlack">4</h3>
        </div>
        <div>
          <h3 className="text-lg text-colorBlack">5</h3>
        </div>
        <div>
          <h3 className="text-lg text-colorBlack">6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Test;
