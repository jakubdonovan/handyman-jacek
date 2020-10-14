import React from "react";
import { Contact } from "../Contact";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      {/* header */}
      {/* Contact Form */}
      <div className="lg:mt-6 flex w-full">
        <h2 className="hidden md:block mt-12 font-roboto text-4xl text-blue-600 font-semibold text-center">
          Your friendly neighborhood handyman!
        </h2>
        <Contact />
        <img
          className="absolute top-0 right-0 inset-0 object-contain"
          src={require("../../assets/images/uncle-4.png")}
        />{" "}
      </div>
    </>
  );
};
