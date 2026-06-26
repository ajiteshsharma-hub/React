import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
    costForTwo,
  } = resData?.info;
  return (
    <div className="restaurant-card rounded-2xl bg-gray-100 w-72 h-full p-3 hover:shadow-2xl hover:bg-gray-200">
      <img
        className="restaurant-image rounded-2xl pb-2"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="logo"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h3>
        {avgRatingString} ( {resData.info.totalRatingsString}+ ratings )
      </h3>
      <p>{areaName}</p>
      <p>{sla.slaString}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label className="absolute m-2 p-2">PROMOTED</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
