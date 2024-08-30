import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //Here state is Lifted. see showItems . so here the concept arise controlled &  uncontrolled Components.so here parent component "Restaurant Menu" is controlling the child component "Restaurant Category".means parent component had control of it so here RestaurantCategory is treated as controlled Component.Before it Restaurant category is treated as uncontrolled components.r
  //console.log("props", data);

  //const [showItems, setShowItems] = useState(false);            // Lifting up the state

  //   const handleClick = (data) => {
  //     console.log("clicked");
  //      setShowItems(showItems)
  //     //setShowItems(!showItems); //Toggle Features              // now this function is called ny its Parent component.
  //   };

  const handleClick = () => {
    console.log("clicked");
    setShowIndex();
  };

  return (
    <div>
      {/* {Header} */}
      {/* ResCategory */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* {Accordion Body } */}
    </div>
  );
};
export default RestaurantCategory;

// const RestaurantCategory = () => {
//   return (<div>JSX Syntax</div>)
// };
// export default RestaurantCategory;
