import { useEffect, useState } from "react";
import { MENU_LINK } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_LINK + resId);
      const json = await data.json();

      setResInfo(json.data);
    } catch (err) {
      console.error("Error: " + err);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
