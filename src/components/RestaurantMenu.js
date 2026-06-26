import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_LINK } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    city,
    totalRatings,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  console.log(categories);

  return (
    <div className="Menu text-center my-5 p-5">
      <h1 className="resName text-3xl font-bold my-2"> {name} </h1>
      <p className="font-bold text-xl">
        {" "}
        {areaName} , {city}
      </p>
      <p className="font-bold text-lg">
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3 className="font-bold text-lg">{totalRatingsString} </h3>
      <h2 className="font-bold text-xl">Menu</h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
