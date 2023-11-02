import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { usePositionReorder } from "../utls/use-position-reorder";
import Header from "../components/Header";
import data from "../data/data";

const Gallery = () => {
  const [cardData, setCardData] = useState([...data]);
  const [order, setOrder, updatePosition, updateOrder] =
    usePositionReorder(cardData);
  const [checkedCards, setCheckedCards] = useState([]);
  
  // set card checked state, if card is checked then remove it from checkedCard array, if card is not checked then add it to checkedCard array
  const setCardChecked = (id) => {
    if (checkedCards?.includes(id)) {
      const data = checkedCards?.filter((i) => i !== id);
      setCheckedCards(data);
      localStorage.setItem("checkedCards", JSON.stringify(data));
    } else {
      setCheckedCards([...checkedCards, id]);
      localStorage.setItem(
        "checkedCards",
        JSON.stringify([...checkedCards, id])
      );
    }
  };

  // delete checked cards
  const handleDeleteCards = () => {
    const saveCheckedCards = JSON.parse(localStorage.getItem("checkedCards"));
    setOrder(cardData.filter((item) => !saveCheckedCards?.includes(item?.id)));
    setCheckedCards([]);
    localStorage.removeItem("checkedCards");
  };
  return (
    <div className="md:px-5 w-full h-full">
      <div className="max-w-[1280px] mx-auto w-full md:my-5 xl:my-10 md:border min-h-[70vh] rounded-[10px] h-full">
        <Header
          checkedCards={checkedCards}
          handleDeleteCards={handleDeleteCards}
        />
        <div className="px-3 sm:px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-4 lg:py-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-8 w-full h-full">
          {order.map((item, i) => (
            <Card
              key={item?.id}
              item={item}
              i={i}
              updatePosition={updatePosition}
              updateOrder={updateOrder}
              checkedCards={checkedCards}
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
