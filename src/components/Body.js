import React from 'react';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';
import {useEffect} from 'react';
import Shimmer from "./Shimmer.js";
import axios from 'axios';


const Body = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);

            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.error("Error fetching restaurant data: ", err);
        }
    }

    if(ListOfRestaurants === 0 || ListOfRestaurants.length === 0){
        return (
            <Shimmer />
        );
    }

    return (
        <>
        <div className = "body">
            <div className = "filter">
                <div className= "search">
                    <input type = "text" placeholder = "Search for restaurant, cuisine or a dish" value = {searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() =>{
                        const filteredList = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredList);
                    }
                    }>Search</button>
                </div>
                <button className = "filter-btn" onClick = {() => {
                    const filteredList = ListOfRestaurants.filter((res) => res.info.avgRatingString > 4);
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "restaurant-list">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>    
        </div>
        </>
    )
}

export default Body
