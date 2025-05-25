import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div className="header flex justify-between bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 shadow-lg mb-8">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items items-center flex ">
        <ul className="flex p-4 m-4 items-center">
          <li className="mx-4 text-lg font-semibold">
            {" "}
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-4 text-lg font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-lg font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4 text-lg font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 text-lg font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-4 text-lg font-semibold flex items-center">
            <Link to="/cart" className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                alt="Cart"
                className="w-6 h-6 mr-2"
              />
              ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="login mx-4 font-semibold h-11 px-2 bg-gray-300 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
