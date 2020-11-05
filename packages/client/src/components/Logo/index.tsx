import React from "react";
interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div style={{ backgroundColor: "#384A5A" }} className="p-2 leading-none">
      <h1 className="text-4xl tracking-wider text-center text-blue-500 h2">
        J<span className="text-blue-500">L</span>
      </h1>
      <h4 className="mb-2 text-sm font-light text-center text-gray-500 opacity-50 font-inter ">
        painter and decorator
      </h4>
    </div>
  );
};
