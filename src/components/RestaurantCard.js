import { CDN_URL } from "../utils/constant"; //Named Exports Can be Used Like this  &&
//import CDN_URL  from "../utils/constant";       default exports can be used like this

const styleCard = {
  // style Card is an object Here
  backgroundColor: "#f0f0f0",
};

// const RestaurantCard = (props) => {
//   console.log(props);
//const { resData, resListData } = props; // from Props I sam destructuring my resData Properties
//const { resData, resListData } = props; // from Props I sam destructuring my resData Properties
// const RestaurantCard = ({ resName, cuisine }) => {

const RestaurantCard = ({ resListData }) => {
  //console.log(resListData.info);
  const { name, cuisines, avgRatingString, costForTwo } = resListData.info;
  const { deliveryTime } = resListData?.info.sla; // chaining Operation Can also Write like this
  return (
    <div className="res-card" style={styleCard}>
      {"All Javascript code inside in these Curly Braces. "}
      {/* Inline Style ,   we can also write like this style = {{  backgroundColor: "#f0f0f0",}} first Curly Braces there is a Some piece of Javasscript inside it & second curly braces refers an javascript object */}

      {/* <img
          className="res-logo"
          src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"
          alt="res-logo"
        /> */}
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> */}
      {/* <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4> */}

      {/* <img
          // className= {"logo" + "food"}   We write like this...
          className="res-logo"
          alt="swiggy Food"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + //  CDN URL DATA WILL REMAIN THE SAME
            resData.cloudinaryImageId
          }
        />
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRatingString} Rating</h4>
        <h4>{resData.sla.deliveryTime} min </h4>
        <h4>{resData.costForTwo}</h4> */}

      {/* <img
        className="res-logo"
        alt="swiggy Food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + //  CDN URL DATA WILL REMAIN THE SAME
          resListData.info.cloudinaryImageId
        }
      /> */}

      <img
        className="res-logo"
        alt="swiggy Food"
        src={
          CDN_URL + //  CDN URL DATA WILL REMAIN THE SAME
          resListData.info.cloudinaryImageId
        }
      />

      {/* <h3>{resListData.info.name}</h3>
        <h4>{resListData.info.cuisines.join(", ")}</h4>
        <h4>{resListData.info.avgRatingString} Rating</h4>
        <h4>{resListData.info.costForTwo}</h4>
        <h4>{resListData.info.sla.deliveryTime} min </h4> */}

      {/* Modifying Above Code  Will Do Destructuring & Make it direct*/}

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min </h4>
    </div>
  );
};

export default RestaurantCard;
