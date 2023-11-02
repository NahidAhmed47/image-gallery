import { useState, useRef } from "react";
import move from "array-move";
import { findIndex } from "./find-index";

export const usePositionReorder = (initialState) => {
  const [order, setOrder] = useState(initialState);

  /* Need to collect an array of width and position data for all of this component's
  `Item` children, so we can later us that in calculations to decide when a dragging
  `Item` should swap places with its siblings. */
  const positions = useRef([]).current;
  const updatePosition = (i, offset) => (positions[i] = offset);

  /* Find the ideal index for a dragging item based on its position in the array, and its
  current drag offset. If it's different to its current index, we swap this item with that
  sibling. */
  const updateOrder = (i, viewportBox) => {
    const targetIndex = findIndex(i, viewportBox, positions);
    if (targetIndex !== i) setOrder(move(order, i, targetIndex));
  };

  return [order, setOrder, updatePosition, updateOrder];
};


