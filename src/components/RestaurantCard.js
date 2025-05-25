import React from "react";
import { CDN_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData?.card?.card?.info;
  const { slaString } = resData?.card?.card?.info?.sla;
  return (
    <div className="res-card p-4 w-[250px]  bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 ">
      <div className="res-image">
        <img
          alt="Restaurant Image"
          className="res-logo h-[200px] w-[230px] rounded-lg"
          src={CDN_URL + resData?.card?.card?.info?.cloudinaryImageId}
        />
      </div>
      <div className="res-info ">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="font-semibold py-2">{cuisines.join(",")}</h4>
        <h4 className="font-bold py-2">{avgRating}</h4>
        <h4 className="font-normal py-2">{costForTwo}</h4>
        <h4 className="font-normal py-2">{slaString}</h4>
      </div>
    </div>
  );
};

// Higher order component.

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
