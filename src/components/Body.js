import { useState } from "react";
import RestaurantCard, { RestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    const [ restaurantList, setRestaurantList ] = useState(resList);
    return (
        <div className="body">
            <button
                onClick={() => {
                    let filteredRestaurantList = restaurantList.filter(res => {
                        return res.info.avgRating > 4.5
                    })
                    setRestaurantList(filteredRestaurantList)
                }
                }>
                Top Rated Restaurant
            </button>
            <div className="res-container">
                {restaurantList.map(restaurant => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                })}
            </div>
        </div>
    )
}

export default Body;