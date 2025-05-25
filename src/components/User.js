import { useEffect, useState } from "react";

const User = (props) => {
  const [userInfoData, setUserInfoData] = useState([]);
  useEffect(() => {
    userInfo();
  }, []);

  const userInfo = async () => {
    const data = await fetch("https://api.github.com/users/sanketpatil44");
    const json = await data.json();
    setUserInfoData(json);
    console.log(json);
  };
  const { name, location, bio, avatar_url } = userInfoData;

  return (
    <div className="user-card h-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg rounded-lg m-4 flex flex-col items-center justify-center p-6">
      <img
        className="user-image w-32 h-32 rounded-full border-4 border-gray-300 shadow-md m-4"
        src={avatar_url}
        alt="User Avatar"
      />
      <h2 className="text-2xl font-bold text-gray-800 mt-2">Name: {name}</h2>
      <h3 className="text-lg font-medium text-gray-600 mt-1">
        Location: {location}
      </h3>
      <p className="user-bio text-base font-light text-gray-500 mt-2 text-center">
        Bio: {bio}
      </p>
    </div>
  );
};

export default User;
