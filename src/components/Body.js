import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import {useState} from 'react';
import {useEffect} from 'react';

const Body = () => {

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.282328&lng=77.4411702&carousel=true&third_party_vendor=1");
            const data = await response.json();
            console.log(data);
        }
        catch(err){
            console.error("Error fetching restaurant data: ", err);
        }
    }
    useEffect(() => {
        fetchData();
    },[]);

    const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

    return(
        <div className = "body">
            <div className= "search">
                <input type = "text" placeholder = "Search for restaurant, cuisine or a dish" />
            </div>
            <div className = "filter">
                <button className = "filter-btn" onClick = {() => {
                    const filteredList = ListOfRestaurants.filter((res) => res.info.avgRatingString > 4);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "restaurant-list">
                {ListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>    
        </div>
    )
}

export default Body
