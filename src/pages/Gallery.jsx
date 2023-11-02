import React, { useState } from "react";
import Card from "../components/Card";
import { usePositionReorder } from "../utls/use-position-reorder";
import Header from "../components/Header";
import data from "../data/data";

const Gallery = () => {
  const [order, updatePosition, updateOrder] = usePositionReorder(data);
  const [checkedCard, setCheckedCard] = useState([]);
  // set card checked state
  const setCardChecked = (id) => {
    if (checkedCard.includes(id)) {
      setCheckedCard(checkedCard.filter((i) => i !== id));
    } else {
      setCheckedCard([...checkedCard, id]);
    }
  };
  return (
    <div className="md:px-5 w-full h-full">
      <div className="max-w-[1280px] mx-auto w-full md:my-5 xl:my-10 md:border min-h-[70vh] rounded-[10px] h-full">
        <Header />
        <div className="px-3 sm:px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-4 lg:py-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-8 w-full h-full">
          {order.map((item, i) => (
            <Card
              key={item?.id}
              item={item}
              i={i}
              updatePosition={updatePosition}
              updateOrder={updateOrder}
              checkedCard={checkedCard}
              setCardChecked={setCardChecked}
            />
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
      </div>
    </div>
  );
};

export default Gallery;
