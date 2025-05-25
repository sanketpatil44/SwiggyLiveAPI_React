import { useDispatch, useSelector } from "react-redux";
import AccoItemList from "./AccoItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-10">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Your Cart
      </h1>
      <div className="flex justify-center items-center mb-6">
        <button
          onClick={() => handleClearCart()}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-indigo-600 transition duration-200"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <p className="text-gray-500 text-md flex justify-center">
          Your cart is empty. Add more items to your cart!
        </p>
      )}

      <div className="flex flex-col items-center w-full">
        <AccoItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
