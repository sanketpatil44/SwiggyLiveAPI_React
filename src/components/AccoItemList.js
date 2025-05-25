import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const AccoItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="flex flex-col justify-between items-center gap-2 p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            <div className="relative flex flex-col justify-center items-center w-full">
              <button
                className="absolute top-0 left-[320px] bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded shadow-md hover:bg-bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-30 h-30 rounded-full object-cover mb-2"
              />

              <span className="text-lg font-medium text-gray-900">
                {item?.card?.info?.name}
              </span>
              <span className="text-gray-500 mt-1">
                Rs-{item?.card?.info?.price / 100}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600 mt-1 text-center">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccoItemList;
