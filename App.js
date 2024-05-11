import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   Logo
 *     Nav Items
 * Body
 *    Search
 *      Restaurant Container
 *        Restaurant Card
 *       -Img    
 *        -Name of the Res,Star Rating ,cuisine, 
 * 
 * Footer
 *   Copyright
 *     Links
 *      Address
 *        Contact
 *
 
 *
 */

// Functional Component ==. At the end of the day is a Normal Javascript  Function
// Component is like a Function.

const styleCard = {
  // style Card is an object Here
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"
          alt="foodLogo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="footer"></div>
    </div>
  );
};

// const RestaurantCard = (props) => {
//   console.log(props);
//const { resData, resListData } = props; // from Props I sam destructuring my resData Properties
//const { resData, resListData } = props; // from Props I sam destructuring my resData Properties
// const RestaurantCard = ({ resName, cuisine }) => {

const RestaurantCard = ({ resListData }) => {
  console.log(resListData.info);
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

      <img
        className="res-logo"
        alt="swiggy Food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + //  CDN URL DATA WILL REMAIN THE SAME
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

// --> means of this Syntax here that it can be written like this Here for to understand me
// Props Are just argument to our function; Passing Properties
//<RestaurantCard  resName = "KFC"  cuisine = "Burger, Fast Food"/>   These are Props Which is Passed in the Functional Component
// React Will basically take all these properties or props and Wrap it inside as an object;
// props are an Javascript object now here  and its written  inside curly Braces {}. {} curly Braces we use for Javascript code .
// const RestaurantCard = (props) -->  can Destructure like this cool Developers --> const RestaurantCard = ({resName,cuisine}) => {block of Code}
// <h3>{props.resName}</h3> --> {resName}
//<h4>{props.cuisine}</h4> --> {cuisine}

// From Backened the Data Should be come in JSON format

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

const resArrList = [
  {
    info: {
      id: "786467",
      name: "Paratha Wala",
      cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
      locality: "Mahesh Nagar",
      areaName: "Srikrishnapuri",
      costForTwo: "₹200 for two",
      cuisines: ["Thalis", "Chinese"],
      avgRating: 3.3,
      veg: true,
      parentId: "13893",
      avgRatingString: "3.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 76,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "75-80 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 10:00:00",
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
        header: "10% OFF",
        subHeader: "UPTO ₹40",
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
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/paratha-wala-mahesh-nagar-srikrishnapuri-patna-786467",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "352207",
      name: "Hotel Sidh Vedantha",
      cloudinaryImageId: "ecnxjlvnx5tppareepbw",
      locality: "Kankarbagh",
      areaName: "Lohia Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese", "Biryani", "Indian"],
      avgRating: 4.2,
      parentId: "437308",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 23:55:00",
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
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-sidh-vedantha-kankarbagh-lohia-nagar-patna-352207",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "815738",
      name: "Cake Master",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/eee6b62c-bd18-464c-80ae-8ab0f15ce69e_815738.jpg",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 3.2,
      parentId: "12617",
      avgRatingString: "3.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 64,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 23:00:00",
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
        header: "20% OFF",
        subHeader: "UPTO ₹100",
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
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cake-master-kankarbagh-patna-815738",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "863062",
      name: "Pizza Hub",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/74ca6e7f-b96f-4950-ad33-05a257242142_863062.jpg",
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
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hub-srikrishnapuri-patna-863062",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "810602",
      name: "Annapurna Rasoi",
      cloudinaryImageId: "a6191b983b6f25f9dc82780a244ed21e",
      locality: "Agam Kuan Shitala Colony",
      areaName: "Kankarbagh",
      costForTwo: "₹299 for two",
      cuisines: [
        "Chinese",
        "Mughlai",
        "Indian",
        "Asian",
        "Tandoor",
        "Bihari",
        "Home Food",
        "Fast Food",
      ],
      avgRating: 4.2,
      parentId: "34128",
      avgRatingString: "4.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 86,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "85-90 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 23:59:00",
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
        header: "15% OFF",
        subHeader: "UPTO ₹45",
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
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/annapurna-rasoi-agam-kuan-shitala-colony-kankarbagh-patna-810602",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870513",
      name: "Pizza King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/14/9d4c93c1-9eef-492d-91a6-ad2a6c03bbc1_870513.jpg",
      locality: "Srikrishnapuri",
      areaName: "Srikrishnapuri",
      costForTwo: "₹300 for two",
      cuisines: ["Beverages", "Pizzas"],
      avgRating: 5,
      veg: true,
      parentId: "4202",
      avgRatingString: "5.0",
      totalRatingsString: "2",
      sla: {
        deliveryTime: 69,
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
        header: "20% OFF",
        subHeader: "UPTO ₹100",
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
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-king-srikrishnapuri-patna-870513",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "343468",
      name: "Cake 24x7",
      cloudinaryImageId: "yuai9tmymsdhq4az9os2",
      locality: "Road No 12",
      areaName: "Don Bosco Raod",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Indian", "Ice Cream Cakes", "Cakes and Pastries"],
      avgRating: 3.8,
      veg: true,
      parentId: "54688",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-18 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
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
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cake-24x7-road-no-12-don-bosco-raod-patna-343468",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "815741",
      name: "Cake Point",
      cloudinaryImageId: "e1114ef2ed8df79fdf4acaee0ec0b040",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      parentId: "2650",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-11 23:45:00",
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
        header: "50% OFF",
        subHeader: "UPTO ₹100",
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
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cake-point-kankarbagh-patna-815741",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "402137",
      name: "Veg Food Hub",
      cloudinaryImageId: "pa2xtea4hyzd47o37jy5",
      locality: "Machua Toli",
      areaName: "Bakerganj",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Chinese", "Fast Food", "Italian"],
      avgRating: 3.8,
      veg: true,
      parentId: "222100",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 69,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "65-70 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-12 00:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
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
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bb81fa5b-7349-4c02-b12f-a22965db7a99",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/veg-food-hub-machua-toli-bakerganj-patna-402137",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    // return a Piece of JSX code
    <div className="body">
      <div className="search">Search</div>
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

        {resArrList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resListData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

{
  /* */
}
