import RestaurantCard from "./RestaurantCard";
import resArrList from "../utils/mockData";
import { useState } from "react"; // Named Exports Variables that why we are using curly braces.

const resObj = {
  id: "863062",
  name: "Pizza Hub",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/eee6b62c-bd18-464c-80ae-8ab0f15ce69e_815738.jpg",
  locality: "Srikrishnapuri",
  areaName: "Srikrishnapuri",
  costForTwo: "₹300 for two",
  cuisines: ["Pizzas", "Fast Food", "Burgers"],
  avgRating: 4.7,
  parentId: "14585",
  avgRatingString: "4.7",
  totalRatingsString: "7",
  sla: {
    deliveryTime: 68,
    lastMileTravel: 5.7,
    serviceability: "SERVICEABLE",
    slaString: "65-70 mins",
    lastMileTravelString: "5.7 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-05-11 09:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "₹100 OFF",
    subHeader: "ABOVE ₹599",
    discountTag: "FLAT DEAL",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  isNewlyOnboarded: true,
  restaurantOfferPresentationInfo: {},
};

const Body = () => {
  //Local State Variable  --> Super Powerful Variable
  //Local State Variable --> FOCUS inside the component in Which for it is defined
  //Here ListOfRestaurants -->  is A state variable which is holding some value; as we define like this let ListOfRestaurants = ["ABC"]
  //Default value  is defined . This state variable will render that value which is initially defined in useState(define your value here or any data Types)
  // setListOfRestaurants --> is a Super Powerful method playing the role of function which is used to update the
  //static defined state variable value.  like we do in JS --> let ListOfRestaurants ; ListOfRestaurants = ["ABC"]
  // Whenever a state variable update React will  re renders the component.
  // const [ListOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     info: {
  //       id: "1",
  //       name: "Paratha Wala",
  //       cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Thalis", "Chinese"],
  //       avgRatingString: 3.3,
  //       sla: {
  //         deliveryTime: 76,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "2",
  //       name: "Paratha b Wala",
  //       cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Thalis", "Chinese"],
  //       avgRatingString: 4.3,
  //       sla: {
  //         deliveryTime: 76,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "3",
  //       name: "Phuchka Wala",
  //       cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Thalis", "Chinese"],
  //       avgRatingString: 4.8,
  //       sla: {
  //         deliveryTime: 76,
  //       },
  //     },
  //   },
  // ]);
  const [ListOfRestaurants, setListOfRestaurants] = useState(resArrList); // React is Keeping an Eye on state Variable. //Constantly tracking & Checking.
  //Going with JS,HTML,Css. it eill be more complex and lengthy to handle.Here React plays Important Role. Super Power of React;

  //Normal JKS Variable;
  //let ListOfRestaurants = []

  //Normal JS Variable
  // let ListOfRestaurants = [
  //   {
  //     info: {
  //       id: "1",
  //       name: "Paratha Wala",
  //       cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Thalis", "Chinese"],
  //       avgRatingString: 3.3,
  //       sla: {
  //         deliveryTime: 76,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "2",
  //       name: "Paratha b Wala",
  //       cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Thalis", "Chinese"],
  //       avgRatingString: 4.3,
  //       sla: {
  //         deliveryTime: 76,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "3",
  //       name: "Phuchka Wala",
  //       cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Thalis", "Chinese"],
  //       avgRatingString: 4.8,
  //       sla: {
  //         deliveryTime: 76,
  //       },
  //     },
  //   },
  // ];

  return (
    // return a Piece of JSX code       {() => {console.log("Button Clicked")}} its a callback function which is written inside Javascript;
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = ListOfRestaurants.filter(
              (restro) => restro.info.avgRatingString > 4
            );
            console.log("button Clicked", ListOfRestaurants);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* The Componment which will be always be in Reuse its better to define that functional Component Independently*/}
        {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biryani, North Indian , Asian"
          />
          <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        {/* <RestaurantCard resData={resObj} /> */}
        {/* sending or passing my resObj Data to resData key*/}
        {/* <RestaurantCard resListData={resArrList[0]} />
          <RestaurantCard resListData={resArrList[1]} />
          <RestaurantCard resListData={resArrList[2]} /> */}
        {/* <RestaurantCard resListData={resArrList[3]} />              When You are building Production Level App then You have to Use Reusable Component */}
        {/* <RestaurantCard resListData={resArrList[3]} />
          <RestaurantCard resListData={resArrList[4]} />
          <RestaurantCard resListData={resArrList[5]} />
          <RestaurantCard resListData={resArrList[6]} /> */}

        {/* Above Code Modified */}
        {/* 
          {resArrList.map((restaurant) =>  resArrListData = {restaurant})} */}
        {/* {resArrList.map((restaurant) => (
            <RestaurantCard resListData={restaurant} /> */}

        {/* //  We have built here Reusable RestaurantCard  Component       The Above are the two powerful line  {resArrList.map((restaurant) => (    --> its a Function Which
            // returning a piece of JSX  -->    <RestaurantCard resListData={restaurant} />
           // <RestaurantCard resListData={restaurant} />    Eaach of the List Item should be UniQuely Presented , means should have a key properties 
           //key = {} When You are looping to anything. Remeber When you are looping Anything by using map, filter ,reduce ,for ,etc. You should always mention the key properties.
           //Example shown below: */}

        {/* Why to define key ? Reason --> If You have list of Cards let take = 100 cards so now you want that id = xyx will be placed at first or some other position which u want  . then React will render that Key only
           instead of rendering a 100 card at every render . so here "Key" is playing Unique Role . & this how react trace it .For Example here  =  key={restaurant.info.id} 
           and Whatever the key you should give it should be Unique.
           */}
        {/* 
           {resArrList.map((restaurant) => <RestaurantCard  key = {index} resListData =  {restaurant}>)} Its Not a good Habit of defining Key as Index. Its Not recommended  to used By React
           In case If You don't atleast have an id then you can use "index" as the key. The best thing is  to use UniQue id. ask from backened developer to share the id.
           */}

        {/* {resArrList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resListData={restaurant} /> */}

        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resListData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
