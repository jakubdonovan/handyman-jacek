import React from "react";
import { Contact } from "../../components/Contact";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="bg-gray-100">
      <div className="p-2 bg-blue-500 leading-none">
        <h1 className="h1 text-white tracking-wider">Jacek Litwinski</h1>
        <h4 className="mb-2 font-inter font-light text-sm opacity-50 text-gray-200">
          painter and decorator
        </h4>
      </div>
      <div className="px-4 flex justify-center mt-4">
        <div
          className="h-40 w-full bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: `url(${require("../../assets/images/uncle.jpg")})`,
          }}
        />
      </div>

      <h2 className="mt-2 font-roboto text-lg text-gray-500 font-semibold text-center">
        Your friendly neighborhood handyman!
      </h2>
      <Contact />
    </div>
  );
};
