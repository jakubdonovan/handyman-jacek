import React from "react";
import { Contact } from "../Contact";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      {/* header */}
      {/* Contact Form */}
      <div className="lg:mt-6 w-full">
        {/* <h2 className="mt-12 font-roboto text-4xl text-blue-600 font-semibold text-left">
          Your friendly neighborhood handyman!
        </h2> */}
        <div className="flex justify-start lg:justify-center px-12 lg:-ml-64 py-12">
          <Contact className="max-w-lg" />
        </div>
        <img
          className="h-full inset-y-0 absolute top-0 right-0 object-contain"
          src={require("../../assets/images/uncle-4.png")}
        />{" "}
      </div>
    </>
  );
};
