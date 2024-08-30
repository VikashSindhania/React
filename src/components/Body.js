import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resArrList from "../utils/mockData";
import { useState, useEffect, useContext } from "react"; // Named Exports Variables that why we are using curly braces.
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
  // const [ListOfRestaurants, setListOfRestaurants] = useState(resArrList); // React is Keeping an Eye on state Variable. //Constantly tracking & Checking.
  //Going with JS,HTML,Css. it eill be more complex and lengthy to handle.Here React plays Important Role. Super Power of React;

  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState(""); //Every time called your useState inside your body,Not out of Your body,
  // Purpose of useState --> it is used to create a local state variable inside your functional component.
  //Never used Your useState inside your if Else block or in condition.function,for loop. This can create inconsistency in tthe program.  Try to keep on Top.

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

  // console.log("ListOfRestaurants", ListOfRestaurants);
  console.log("Full Body Component Rendered---1");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); //With PromotedLabel here is behaving as an HigherOrderFunctional Component.

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []); //This component can be called After Your Component Renders. it Quicky call the useEffect method or function  when render cycle completely rendered.

  const fetchData = async () => {
    const data = await fetch(
      // fetch Method is a Browser register  function Which returns a promise object an d then we use "then" methos to extract but its now older version. Use async & await for this to handle API.
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //const json = await data.json();

    //console.log(json);
    setListOfRestaurants(
      // When i have to filter on some condition then i will use my "ListOfRestaurants" variable value.
      //json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      //Optional Chaning
      //json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      resArrList
    );

    setFilteredRestaurants(resArrList); // when we are fetching Data I am updating a copy of ListOfRestaurants & FilteredRestaurants both as well.
  };

  //Conditional Rendering --> A rendering Which is based on the condition.
  // if (ListOfRestaurants.length === 0) {
  //   // return <h1>Loading...</h1>;
  //   return <Shimmer />;
  // }

  // Whenever state variables update, react triggers a reconcilation cycle (re-renders the component)
  console.log("Full Body Component Rendered---2");

  const { loggedInUser, setUserName } = useContext(UserContext); // concept of useContext

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    // return a Piece of JSX code       {() => {console.log("Button Clicked")}} its a callback function which is written inside Javascript;
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 px-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search-food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); // typing "cafe" on input then this onChange Method is calling  setSearchText method each time and its just updating the local
              //state variable "SearchText" which is define in useState  const [SearchText, setSearchText] = useState("");  and this body component is just refreshing each input value you type.
              // virtualDom is the object Representation of the JSX(Actual DOm).
              //Reconcillation Concept, Diff Algorithm concept. using here.  DOM Manipulation is very costly and React here playing it important  role. Making it Simply.
              //Note On input not only input value getting rendered  whole body component is getting Re-Render. only final updating will be done on input at actual DOM.
              // Virtual Dom is just an copy of Actaul DOM which is used for the comparison.
            }}
          />
          <button
            className="px-4 py-2 bg-green-400 rounded-2xl "
            onClick={() => {
              // Filter the restaurant cards and update the UI
              //Search text
              console.log("ListOfRestaurants", ListOfRestaurants);
              console.log(searchText);
              const filteredRestaurant = ListOfRestaurants.filter(
                (
                  res // Here ListOfRestaurants holding the original fetch Data & we aare doing filtering  operation on this.
                ) =>
                  // res.info.name == searchText;
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              console.log("filteredRestaurant", filteredRestaurant);
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input
            className="border-black p-2 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} // here we call the function {(e) => setUserName()}}
          />
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-2xl"
            onClick={() => {
              let filteredList = ListOfRestaurants.filter(
                (restro) => restro.info.avgRatingString > 4
              );

              setListOfRestaurants(filteredList);
              console.log("Top Rating Button Clicked", filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div> */}
      </div>
      <div className="flex flex-wrap">
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

        {/* {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resListData={restaurant} /> */}

        {/* {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resListData={restaurant} />
        ))} */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              /* {if the restaurant id promoted then add a promoted label to it} */
              restaurant.info.promoted ? (
                <RestaurantCardPromoted resListData={restaurant} />
              ) : (
                <RestaurantCard resListData={restaurant} />
              )
            }
            {/* <RestaurantCard resListData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
