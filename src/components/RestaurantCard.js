import React from 'react'
import resList from '../utils/mockData'
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
    const {resData} = props;
    const{name, cuisines, avgRatingString, totalRatingsString, areaName, sla, costForTwo} = resData?.info;
    return(
        <div className = "restaurant-card">
            <img className="restaurant-image" src = {CDN_URL + resData.info.cloudinaryImageId} alt = "logo" />
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h3>{avgRatingString} ( {resData.info.totalRatingsString}+ ratings )</h3>
            <p>{areaName}</p>
            <p>{sla.slaString}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard
