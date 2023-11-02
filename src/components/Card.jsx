import { motion } from "framer-motion";
import React, { useState } from "react";
import { useMeasurePosition } from "../utls/use-measure-position";

const Card = ({ i, item, updatePosition, updateOrder, checkedCards, setCardChecked }) => {
  const [isDragging, setDragging] = useState(false);
  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  return (
    <motion.div
      ref={ref}
      layout
      initial={false}
      style={{
        background: "white",
        width: "100%",
        borderRadius: 10,
        cursor: isDragging ? "grabbing" : "pointer",
        zIndex: isDragging ? 3 : 1,
        backgroundImage: `url(${item?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`border-2 rounded-[10px] overflow-hidden cursor-pointer w-full relative group z-10 ${
        i === 0
          ? "col-start-1 col-end-3 row-start-1 row-end-3 h-full"
          : "h-[120px] sm:h-[150px] md:h-[170px] xl:h-[200px] "
      }`}
      whileHover={{
        scale: 0.998,
      }}
      whileTap={{
        scale: 1.01,
      }}
      drag={true}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onViewportBoxUpdate={(viewportBox, _) => {
        isDragging && updateOrder(i, viewportBox);
      }}
    >
      {isDragging || (
        <div className={`w-full h-full  absolute top-0 right-0 left-0 bottom-0   duration-300 transition-all p-4 lg:p-5 ${checkedCards?.includes(item?.id) ? "bg-opacity-50 bg-white group-hover:opacity-100" : "bg-opacity-40 opacity-0 group-hover:opacity-100 bg-black"}`}>
          <input
            type="checkbox"
            name=""
            id=""
            className="w-4 h-4 sm:w-6 sm:h-6"
            checked={checkedCards?.includes(item?.id)}
            onChange={() => setCardChecked(item?.id)}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Card;
