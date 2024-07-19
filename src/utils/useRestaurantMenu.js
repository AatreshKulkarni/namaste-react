import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let data = await fetch(RESTAURANT_MENU + resId);
        let json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;