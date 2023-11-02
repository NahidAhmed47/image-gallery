import React from "react";

const Header = ({ checkedCards, handleDeleteCards }) => {
  return (
    <div className="px-3 sm:px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-4 border-b-2 md:min-h-[66px] flex items-center">
      {checkedCards?.length > 0 ? (
        <div className="w-full h-full flex items-center justify-between">
          <div className="w-fit h-fit flex items-center gap-1">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 sm:w-5 sm:h-5"
              checked
            />
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 ml-2">
              {checkedCards?.length} Files Selected
            </span>
          </div>
          <button onClick={handleDeleteCards} className="font-semibold text-red-500 hover:underline duration-100 transition-all">Delete files</button>
        </div>
      ) : (
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700">
          Gallery
        </h1>
      )}
    </div>
  );
};

export default Header;
