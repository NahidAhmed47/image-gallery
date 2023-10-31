import React from "react";
import Header from "../components/Header";

const data = [
  {
    _id: 1,
    image: "/images/image-11.jpeg",
  },
  {
    _id: 2,
    image: "/images/image-2.webp",
  },
  {
    _id: 3,
    image: "/images/image-3.webp",
  },
  {
    _id: 4,
    image: "/images/image-4.webp",
  },
  {
    _id: 5,
    image: "/images/image-5.webp",
  },
  {
    _id: 6,
    image: "/images/image-6.webp",
  },
  {
    _id: 7,
    image: "/images/image-7.webp",
  },
  {
    _id: 8,
    image: "/images/image-8.webp",
  },
  {
    _id: 9,
    image: "/images/image-9.webp",
  },
  {
    _id: 10,
    image: "/images/image-10.jpeg",
  },
  {
    _id: 11,
    image: "/images/image-1.webp",
  },
];

const Gallery = () => {
  return (
    <div className="md:px-5 w-full h-full">
      <div className="max-w-[1280px] mx-auto md:my-5 xl:my-10 md:border min-h-[70vh] rounded-lg">
        <Header />
        {/* Gallery body start from here */}
        <div className="px-3 sm:px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-8 ">
            {/* feature image container */}
          <div className="col-start-1 col-end-3 row-start-1 row-end-3 border rounded-lg overflow-hidden">
            <img
              src={data[0]?.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {data?.slice(1, data?.length).map((item, index) => (
            <div className="border rounded-lg overflow-hidden" key={index}>
              <img
                src={item?.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
          {/* upload image container */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
