import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const  resInfo  = useRestaurantMenu(resId);
    console.log(resInfo)
    if(!resInfo){
         return <Shimmer />;
    }

    const { name, avgRating, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div>
            <h1>{name} ({avgRating})</h1>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((item, index) => {
                        return <li key={index}>{item.card.info.name} - Rs.{(item.card.info.price)/100}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;