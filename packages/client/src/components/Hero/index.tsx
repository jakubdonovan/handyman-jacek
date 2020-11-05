import React from "react";
import { Contact } from "../Contact";
import { Testimonial } from "../Testimonial";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const [contact, setContact] = React.useState(false);
  return (
    <>
      <div
        style={{ backgroundColor: "#384A5A" }}
        className="grid w-full max-w-screen-xl grid-cols-2 mb-4 text-white lg:mt-6"
      >
        <div className="absolute w-full border-white border-opacity-25"></div>
        {/* Header */}
        <div className="py-8 pl-12 text-left xl:w-8/12 lg:w-9/12 md:w-full">
          <h1 className="text-5xl font-black leading-tight text-white capitalize font-inter">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #4C51BF 0%, rgba(255, 255, 255, 0) 0%)",
              }}
              className="text-transparent bg-indigo-700 bg-clip-text"
            >
              Glenroths
            </span>{" "}
            finest painter & decorator
          </h1>

          <h4 className="mt-2 text-xl opacity-75 font-roboto">
            For quality paintwork at great pricing. come and give us a ring!
          </h4>

          <div className="flex items-center gap-4 mt-4 text-sm font-bold tracking-widest text-white uppercase font-roboto">
            <div className="p-2 whitespace-no-wrap border border-opacity-0 rounded-lg shadow-lg cursor-pointer">
              view portfolio
            </div>
            <div
              style={{
                background: "linear-gradient(180deg, #48BB78 0%, #2F855A 100%)",
              }}
              className="relative p-2 whitespace-no-wrap rounded-lg cursor-pointer hover:bg-green-700"
              onClick={() => setContact(true)}
            >
              request estimate
              <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
              <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          {/* Quotes */}
          <div className="mt-12">
            <Testimonial
              name="Remo Maciocia"
              quote="Couldn’t be more pleased with the result and price"
              photo="remo.jpg"
            />
          </div>
        </div>

        {contact ? (
          <Contact className="" />
        ) : (
          <img
            className=""
            alt="b"
            src={require("../../assets/images/uncle-5.png")}
          />
        )}
      </div>
    </>
  );
};
