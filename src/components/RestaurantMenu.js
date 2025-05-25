import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="restaurant-menu flex justify-center items-center p-6 min-h-screen bg-gray-100">
      <button
        onClick={handleBackButtonClick}
        className="absolute top-[250px] left-[50px] bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full relative text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>
        <h3 className="text-gray-600 text-lg mb-8">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.id}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
