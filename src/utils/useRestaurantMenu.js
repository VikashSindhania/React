//Custom Hooks
//Here we defined the custom hooks related to fetching the data...

import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log("useRestaurantMenu hook", json);
  };

  return resInfo;
};

export default useRestaurantMenu;
