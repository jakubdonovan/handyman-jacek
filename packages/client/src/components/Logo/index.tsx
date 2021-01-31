import React from "react";
// import { FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div
      style={{ backgroundColor: "" }}
      className="p-2 leading-none bg-indigo-700 md:bg-gray-900"
    >
      <div className="absolute top-0 bottom-0 right-0 text-white md:bottom-auto font-inter">
        <div className="hidden gap-4 mt-2 md:flex"></div>
      </div>
      <h1 className="p-4 text-xl font-normal tracking-wider text-left text-white font-leckerli">
        <Link to="/">handyman</Link>
      </h1>
    </div>
  );
};
