import React from "react";
interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <>
      <div className="md:flex lg:justify-end bg-gray-200">
        <div className="relative flex items-center justify-end md:hidden">
          <img
            className=" rounded-tl-lg rounded-bl-lg shadow-lg w-6/12"
            src={require("../../assets/images/uncle-3.png")}
          />
          <div className=" absolute left-0  bg-blue-600 py-3 px-4 border-blue-500 border-8 rounded-full text-white font-bold font-inter text-center sm:text-4xl">
            Hey, the names Jacek!
          </div>
        </div>
      </div>
    </>
  );
};
