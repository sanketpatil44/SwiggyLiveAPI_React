import AccoItemList from "./AccoItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handlClick = () => {
    setShowIndex();
  };

  return (
    <div className=" border-gray-200 mb-4 shadow-xl rounded-lg bg-white">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center py-4 pb-0 px-4 cursor-pointer"
        onClick={() => handlClick()}
      >
        <span className="text-lg font-medium">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-500">{showItems ? "▲" : "▼"}</span>
      </div>
      {/* Accordion Content */}
      <div className="px-4 py-2 ">
        {showItems && <AccoItemList key={data.id} items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
