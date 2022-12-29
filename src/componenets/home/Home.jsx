import React, { useState } from "react";
import "./Home.css";

const DEFAULT_COFFEE_IMAGES = {
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
};

const Home = () => {
  const [dummyImage, setDummyImage] = useState(DEFAULT_COFFEE_IMAGES);
  return (
    <div className="home_container">
      <div className="home">
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
        <img src={dummyImage.image} alt="" />
      </div>
    </div>
  );
};

export default Home;
