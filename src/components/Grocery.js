const Grocery = () => {
  return (
    <div className="grocery-container flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] shadow-2xl m-4 p-8 h-full rounded-lg">
      <h1 className="text-2xl font-bold m-2 text-gray-800">
        Welcome to Grocery
      </h1>
      <p className="text-lg m-2 text-gray-600">
        List of groceries will be displayed here.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Add Grocery
      </button>
      <ul className="list-disc list-inside mt-4"></ul>
      <input
        type="text"
        placeholder="Enter grocery item"
        className="border border-gray-300 rounded px-4 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-4 text-gray-700">Total items: 0</p>
      <div className="flex space-x-4 mt-4">
        <button className="clear-btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Clear List
        </button>
        <button className="remove-btn bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
          Remove Selected
        </button>
        <button className="view-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          View Grocery List
        </button>
      </div>
    </div>
  );
};
export default Grocery;
