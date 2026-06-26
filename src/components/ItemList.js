import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items:", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card?.info?.id}>
          <div className="border-gray-300 border-b-2 text-left flex justify-between">
            <div className="w-9/12 p-2">
              <span>{item.card.info.name} - </span>
              <span>
                ₹{" "}
                {item.card.info.finalPrice / 100 ||
                  item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 p-2">
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
