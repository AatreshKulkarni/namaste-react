import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constants";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {

    const [restaurantDetails, setRestaurantDetails] = useState();

    useEffect(() => {
        fetchMenuData()
    }, [])
    
    const { resId } = useParams();

    const fetchMenuData = async () => {
        const data = await fetch(RESTAURANT_MENU + resId);
        const json = await data.json();
        setRestaurantDetails(json.data)
    }

    if(!restaurantDetails){
         return <Shimmer />;
    }

    const { name, avgRating, cuisines } = restaurantDetails?.cards[2]?.card?.card?.info;

    const { itemCards } = restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div>
            <h1>{name} ({avgRating})</h1>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => {
                        return <li>{item.card.info.name} - Rs.{(item.card.info.price)/100}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;