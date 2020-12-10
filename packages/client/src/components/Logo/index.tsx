import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";
interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div style={{ backgroundColor: "#384A5A" }} className="p-2 leading-none">
      <div className="absolute top-0 right-0 text-white font-inter">
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-2">
            <FaMailBulk className="text-lg text-green-500" />
            enquire@handymanjacek.com
          </div>
          <div className="flex items-center gap-2 pr-4">
            <FaPhone className="text-lg text-green-500" />
            0800 532 132
          </div>
        </div>
      </div>
      <h1 className="p-4 text-xl tracking-wider text-left text-white h2">
        handyman
      </h1>
    </div>
  );
};
