import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import {useState} from 'react';

const Body = () => {
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
