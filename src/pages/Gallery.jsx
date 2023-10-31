import React from "react";
import Header from "../components/Header";
import data from "../data/data.json";
import ImagesGallery from "../components/ImagesGallery";

const Gallery = () => {
  return (
    <div className="md:px-5 w-full h-full">
      <div className="max-w-[1280px] mx-auto md:my-5 xl:my-10 md:border min-h-[70vh] rounded-[10px]">
        <Header />
        <ImagesGallery data={data} />
      </div>
    </div>
  );
};

export default Gallery;
