import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [filteredListOfResto, setFilteredListOfResto] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    console.log(json);
    // setListOfResto(json.data.cards.slice(4));
    // const apiData = [];
    // json?.data?.cards?.forEach((item) => {
    //   if (item.card?.card?.info) {
    //     apiData.push(item);
    //   }
    // });
    // setListOfResto(apiData);
    const cards = json?.data?.cards || [];
    const validRestaurants = cards.reduce((acc, item) => {
      if (item.card?.card?.info) {
        acc.push(item);
      }
      return acc;
    }, []);
    setListOfResto(validRestaurants);
    setFilteredListOfResto(validRestaurants);
  };

  // if (listOfResto.length === 0) {
  //   return <Shimmer />;
  // }

  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return (
      <h1>Looks like you are offline. Please check your network connection.</h1>
    );
  }

  return listOfResto.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body h-100% bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] shadow-2xl m-4">
      <div className="filter flex items-center">
        <div className="search-container m-4 ">
          <input
            className="search-box p-3 border-solid border border-black h-11 w-[256px] rounded-lg"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn px-4 py-2 m-4 bg-gray-300 rounded-lg"
            onClick={() => {
              const filteredRestoList = listOfResto.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredListOfResto(filteredRestoList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn h-11 mx-4 px-2 bg-gray-300 rounded-lg"
          onClick={() => {
            const filteredList = listOfResto.filter(
              (restaurant) =>
                restaurant.card.card.info.avgRating &&
                restaurant.card.card.info.avgRating > 4.3
            );
            setFilteredListOfResto(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        <button
          className="back-btn mx-4 h-11 px-2 bg-gray-300 rounded-lg"
          onClick={() => setFilteredListOfResto(listOfResto)}
        >
          Back
        </button>
      </div>
      <div className="res-container flex flex-wrap gap-4">
        {filteredListOfResto.map((restaurant) => (
          <Link
            className="res-link"
            key={restaurant.card.card.info.id}
            to={`/restaurants/${restaurant.card.card.info.id}`}
          >
            {restaurant.card.card.info.promoted ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
