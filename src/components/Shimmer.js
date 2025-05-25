const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 animate-pulse h-[400px] w-[250px] m-2 rounded-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
