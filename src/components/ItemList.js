import { CDN_URL } from "../utils/constant";

import { useDispatch } from "react-redux";

import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch(); //useDispatch is an hook here

  const handleAddItem = (item) => {
    //dispatch Action related to redux concept and NJ diagram redux
    console.log("handleAddItem...", item);
    //Dispatch an Action...
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 bg-black text-white shadow-lg  "
                onClick={() => handleAddItem(item)} //--> this is the callback function,  //{()=>{}} callbacks handler Syntax
                // onClick={handleAddItem} --> It is preferred when you want to execute the function without any additional arguments.
                //onClick={handleAddItem(item)}  -->   this is calling the function Right Away...
                //onClick = {()=>{handleaddItem()}} --> This is often used when you need to perform additional actions or pass parameters to the function.
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
