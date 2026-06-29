import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card?.info?.id} data-testid="foodItems">
          <div className="border-gray-100 border-b-2 text-left flex justify-between">
            <div className="w-9/12 p-2 m-2">
              <span className="text-md font-semibold">
                {item.card.info.name} -{" "}
              </span>
              <span className="text-md font-semibold">
                ₹{" "}
                {item.card.info.finalPrice / 100 ||
                  item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 p-2">
              <img
                className="rounded-t-xl"
                src={CDN_URL + item.card.info.imageId}
              />
              <button
                className="shadow-lg bg-white w-full text-green-800 font-bold cursor-pointer border-gray-200 border-2"
                onClick={() => handleClick(item)}
              >
                add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
