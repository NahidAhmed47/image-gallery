"";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useMeasurePosition } from "../utls/use-measure-position";

const Card = ({ i, item, updatePosition, updateOrder }) => {
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
      className={`border-2 rounded-[10px] overflow-hidden cursor-pointer w-full ${
        i === 0
          ? "col-start-1 col-end-3 row-start-1 row-end-3 h-full"
          : " h-[200px]"
      }`}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
      }}
      whileTap={{
        scale: 1.12,
        boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
      }}
      drag={true}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onViewportBoxUpdate={(viewportBox, _) => {
        isDragging && updateOrder(i, viewportBox);
      }}
    ></motion.div>
  );
};

export default Card;
