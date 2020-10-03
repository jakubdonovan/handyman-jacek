import React from "react";
import { Card } from "../../components/Card";
import { Contact } from "../../components/Contact";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const CardProps = {
    sm: true,
    images: [
      {
        title: "b",
        content: "a",
        filename: "a.webp",
        position: 0,
        media: (
          <img
            className="hover:opacity-75 cursor-pointer w-full h-full"
            src={require("../../assets/images/a.webp")}
          />
        ),
      },
      {
        title: "b",
        content: "a",
        filename: "a.webp",
        position: 1,
        media: (
          <img
            className="w-full h-full"
            src={require("../../assets/images/a.webp")}
          />
        ),
      },
      {
        title: "b",
        content: "a",
        filename: "a.webp",
        position: 2,
        media: (
          <img
            className="w-full h-full"
            src={require("../../assets/images/a.webp")}
          />
        ),
      },
      {
        title: "b",
        content: "a",
        filename: "a.webp",
        position: 3,
        media: (
          <img
            className="w-full h-full"
            src={require("../../assets/images/a.webp")}
          />
        ),
      },
    ],
  };
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
          className="h-40 w-full bg-cover bg-no-repeat bg-center rounded-lg shadow-lg max-w-sm"
          style={{
            backgroundImage: `url(${require("../../assets/images/uncle.jpg")})`,
          }}
        />
      </div>

      <h2 className="mt-2 font-roboto text-lg text-gray-500 font-semibold text-center">
        Your friendly neighborhood handyman!
      </h2>
      <div className="mt-6 flex justify-center">
        <Contact />
      </div>
      <div
        style={{ backgroundColor: "#4267B2" }}
        className="flex justify-center"
      >
        <Card {...CardProps} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mt-2">
          <h2 className="text-3xl text-gray-900">And much more...</h2>
          <p className="text-left font-inter text-gray-600">
            Have a special request?{" "}
          </p>
        </div>
        <div className="mt-4 w-full flex justify-center items-center">
          <button className="mx-5 px-3 py-2 shadow-lg bg-blue-500 text-white rounded-full">
            Contact me
          </button>

          <a className="mx-5 font-roboto text-blue-500 underline ">
            My Portfolio
          </a>
        </div>
      </div>
      <div
        style={{ textShadow: "0 0 0 #a0aec0" }}
        className="mt-4 text-center font-normal text-xs font-inter text-transparent"
      >
        Made with ❤️ by <span className="text-blue-500">Jakub</span> in
        Glenroths.
      </div>
    </div>
  );
};
