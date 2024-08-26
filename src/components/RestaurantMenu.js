import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; // For dynamic Routing to get an dynamic id here we use useParams

import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const onlineStatus = useOnlineStatus();

  const resInfo = useRestaurantMenu(resId);

  console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info; // Destructuring Concepts

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("itemCards", itemCards);

  console.log("onlineStatus", onlineStatus);
  if (onlineStatus === false)
    return (
      <h1>Look like you're offline !! Please check your Internet Connection</h1>
    );

  return (
    // <div className="menu">
    //   <h1>Name of the Restaurant</h1>
    //   <h2>Menu</h2>
    //   <ul>
    //     <li>Biryani</li>
    //     <li>Burgers</li>
    //     <li>Diet Coke</li>
    //   </ul>
    // </div>

    <div className="menu">
      {/* <h1>{resInfo.cards[2]?.card?.card?.info.name}</h1> */}
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

// Below code is there When custom hook is not defined...
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom"; // For dynamic Routing to get an dynamic id here we use useParams
// import { MENU_API } from "../utils/constant";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   const { resId } = useParams();
//   console.log(resId);

//   useEffect(() => {
//     fetchMenu();
//   }, []); // useEffect wii be called when everytimes a component Render means Everytime you make a API call at eery Reload it should be like foolish
//   //so to prevent this so that it call only once or have restriction can be defined in dependencies Array. Once on Initial Render is the meaning of an empty Array.[]

//   const fetchMenu = async () => {
//     // const data = await fetch(
//     //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=126292&catalog_qa=undefined&submitAction=ENTER"
//     // );
//     const data = await fetch(MENU_API + resId);
//     const JSON = await data.json(); // After that you store the data or results in the state variable so use the useState hook. Whenever state will update it will automatically update my UI. where we integrate our date in JSX.
//     console.log("JSON", JSON.data);
//     setResInfo(JSON.data);
//   };

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
//     resInfo.cards[2]?.card?.card?.info; // Destructuring Concepts

//   const { itemCards } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log("itemCards", itemCards);

//   return (
//     // <div className="menu">
//     //   <h1>Name of the Restaurant</h1>
//     //   <h2>Menu</h2>
//     //   <ul>
//     //     <li>Biryani</li>
//     //     <li>Burgers</li>
//     //     <li>Diet Coke</li>
//     //   </ul>
//     // </div>

//     <div className="menu">
//       {/* <h1>{resInfo.cards[2]?.card?.card?.info.name}</h1> */}
//       <h1>{name}</h1>
//       <p>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       <h3>{costForTwoMessage}</h3>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} -{"Rs"}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//         {/* <li>{itemCards[0].card.info.name}</li>
//         <li>{itemCards[1].card.info.name}</li>
//         <li>{itemCards[2].card.info.name}</li>
//         <li>Biryani</li>
//         <li>Burgers</li>
//         <li>Diet Coke</li> */}
//       </ul>
//     </div>
//   );
// };
// export default RestaurantMenu;
