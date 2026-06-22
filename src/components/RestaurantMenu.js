import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_LINK } from "../utils/constants";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_LINK + resId);

      const json = await response.json();
      setResData(json?.data);
      console.log(resData);
    } catch (err) {
      console.error("Error:" + err);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (resData === null) return <Shimmer />;

  const {
    name,
    areaName,
    city,
    totalRatings,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = resData.cards[0]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="Menu">
      <h1 className="resName"> {name} </h1>
      <p>
        {" "}
        {areaName} , {city}
      </p>
      <p>
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>{totalRatingsString} </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
