import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestroList, setFilteredRestroList] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const apiResult = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let data = await apiResult.json();
        setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestroList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        restaurantList.length === 0 ? <Shimmer /> :
            <div className="body">
                <div>
                    <input
                        className="search"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button
                        onClick={() => {
                            let filteredList = restaurantList.filter(restaurant => {
                                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            setFilteredRestroList(filteredList)
                            setSearchText("")
                        }
                        }
                    >
                        search
                    </button>

                    <button
                        className="filter-btn"
                        onClick={() => {
                            let filteredRestaurantList = restaurantList.filter(res => {
                                return res.info.avgRating > 4.5
                            })

                            setFilteredRestroList(filteredRestaurantList)
                        }
                        }>
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="res-container">
                    {filteredRestroList.map(restaurant => {
                        return (<Link className="link" key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>)
                    })}
                </div>
            </div>
    )
}

export default Body;