import React from "react";

const ImagesGallery = ({ data }) => {
  return (
    <div className="px-3 sm:px-4 md:px-5 lg:px-8 xl:px-10 py-4 md:py-6 lg:py-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-8 cursor-pointer">
      {/* feature image container */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 border-2 rounded-[10px] overflow-hidden">
        <img
          src={data[0]?.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {data?.slice(1, data?.length).map((item, index) => (
        <div
          className="border-2 rounded-[10px] overflow-hidden cursor-pointer"
          key={index}
        >
          <img
            src={item?.image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
      {/* upload image container */}
      <div className="w-full h-full border-2 border-dashed rounded-[10px] overflow-hidden flex flex-col items-center justify-center gap-2 md:gap-3.5 cursor-pointer">
        <img
          src={"/icons/image-icon.png"}
          alt=""
          className="w-10 h-auto rounded-lg"
        />
        <p className="text-xs md:text-sm lg:text-lg text-gray-700 font-semibold">
          Add Images
        </p>
      </div>
    </div>
  );
};

export default ImagesGallery;
