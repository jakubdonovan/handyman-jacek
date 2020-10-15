import React from "react";
interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div className="p-2 leading-none">
      <h1 className="h2 text-4xl text-center text-blue-800 tracking-wider">
        J<span className="text-yellow-500">L</span>
      </h1>
      <h4 className="mb-2 font-inter text-gray-500 font-light text-sm opacity-50 text-center ">
        painter and decorator
      </h4>
    </div>
  );
};
