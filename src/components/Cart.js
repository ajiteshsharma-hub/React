import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <h1 className="text-center text-3xl font-semibold my-5 text-gray-800">
      Your Cart is empty!
    </h1>
  ) : (
    <div className="text-center my-4 w-6/12 mx-auto ">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="text-right my-4">
        <button
          className="bg-white text-red-400 border-gray-100 border-2 shadow-2xl rounded-2xl font-semibold p-2 cursor-pointer"
          onClick={handleClick}
        >
          Clear Cart
        </button>
      </div>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
