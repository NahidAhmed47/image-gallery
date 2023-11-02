import React, { useRef, useState } from "react";
import Card from "../components/Card";
import { usePositionReorder } from "../utls/use-position-reorder";
import Header from "../components/Header";
import data from "../data/data";
import toast from "react-hot-toast";

const imgUploadToken = import.meta.env.VITE_IMG_HOSTING_KEY;

const Gallery = () => {
  const [order, setOrder, updatePosition, updateOrder] =
    usePositionReorder(data);
  const [checkedCards, setCheckedCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);
  // set card checked state, if card is checked then remove it from checkedCard array, if card is not checked then add it to checkedCard array
  const setCardChecked = (id) => {
    if (checkedCards?.includes(id)) {
      setCheckedCards(checkedCards?.filter((i) => i !== id));
    } else {
      setCheckedCards([...checkedCards, id]);
    }
  };

  // delete checked cards
  const handleDeleteCards = () => {
    setOrder(order.filter((item) => !checkedCards?.includes(item?.id)));
    toast.success(`${checkedCards?.length} cards deleted successfully`);
    setCheckedCards([]);
  };

  // handle upload image
  const handleUploadImage = async () => {
    setLoading(true);
    const file = imgRef?.current?.files[0];
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imgUploadToken}`;
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data?.data?.url) {
      setOrder([
        ...order,
        {
          id: order?.length + 1,
          image: data?.data?.url,
        },
      ]);
      toast.success("Image uploaded successfully");
      setLoading(false);
    } else {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <div className="md:px-5 w-full h-full">
      <div className="max-w-[1280px] mx-auto w-full md:my-5 xl:my-10 md:border min-h-[70vh] rounded-[10px] h-full bg-white">
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
          <label htmlFor="fileUpload">
            <div className="w-full h-[120px] sm:h-[150px] md:h-[170px] xl:h-[200px] border-2 border-dashed rounded-[10px] overflow-hidden flex flex-col items-center justify-center gap-2 md:gap-3.5 cursor-pointer relative">
              <img
                src={"/icons/image-icon.png"}
                alt=""
                className="w-10 h-auto rounded-lg z-10"
              />
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 font-semibold">
                Add Images
              </p>
              <input
                onChange={handleUploadImage}
                ref={imgRef}
                type="file"
                name=""
                className="hidden"
                id="fileUpload"
                disabled={loading}
              />
              {/* loading effect */}
              {loading && (
                <div className="absolute z-50 w-full h-full right-0 left-0 bottom-0 top-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div
                    className="inline-block h-8 w-8 animate-spin  rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></div>
                </div>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
