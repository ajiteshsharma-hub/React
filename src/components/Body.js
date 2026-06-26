import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer.js";
import axios from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await data.json();

      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (err) {
      console.error("Error fetching restaurant data: ", err);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1>Oops! Looks like you're offline</h1>
        <h1>Check your internet connection</h1>
      </div>
    );

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="flex filter my-4 py-4 mx-15">
          <input
            className=" border border-solid ml-4 px-2 w-90"
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn mx-4 px-4 bg-blue-100 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn bg-gray-100 rounded-lg px-4"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4,
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="restaurant-list flex flex-wrap mx-19 gap-5">
          {filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
              {restaurant.info.promoted ? (
                <RestaurantCardWithLabel resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
