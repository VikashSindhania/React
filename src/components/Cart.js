import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items); //Always Subscribe to the specific portion of the store  ?why it is called selector? --> because you are subscribing to the specific portion of the store.

  //const store = useSelector((store) => store); //Never Ever do this.It is not much efficient.

  //const cartItem = store.cart.items;

  const dispatch = useDispatch(); // Responsible for dispatching  actions to store and dispatch events to store objects in the store object collection .
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 && (
          <h1> Cart is empty Add items to the Cart! </h1>
        )}
        <ItemList items={cart} />
      </div>
    </div>
  );
};

export default Cart;
