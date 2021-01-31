import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../Contact";
import { Testimonial } from "../Testimonial";
interface HeroProps {
  contact: boolean;
  setContact: (contact: boolean) => any;
}

export const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <div className="relative grid w-full max-w-full grid-cols-2 gap-4 overflow-x-hidden text-white">
        {/* Header */}
        <div className="flex flex-col items-center justify-end">
          <div className="max-w-lg pl-12 mt-12 text-left y-8 xl:w-8/12 lg:w-9/12 md:w-full">
            <h1 className="text-5xl font-black leading-tight text-white capitalize font-inter">
              <span className="text-transparent from-purple-500 via-purple-600 to-purple-700 bg-gradient-to-r bg-clip-text">
                Glenroths
              </span>{" "}
              finest painters & decorators
            </h1>

            <h4 className="mt-2 text-xl opacity-75 font-roboto">
              For quality paintwork at great pricing, come and give us a ring!
            </h4>

            <div className="flex items-center mt-12 space-x-4 text-sm font-bold tracking-widest text-white uppercase font-roboto">
              <div className="p-2 whitespace-no-wrap duration-200 ease-in-out transform border border-opacity-0 rounded-lg shadow-lg cursor-pointer active:scale-90">
                <Link to="/portfolio">view portfolio</Link>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #48BB78 0%, #2F855A 100%)",
                }}
                className="relative p-2 whitespace-no-wrap duration-200 ease-in-out transform rounded-lg cursor-pointer hover:bg-green-700 active:scale-90"
                onClick={() => props.setContact(true)}
              >
                request estimate
                <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            {/* Quotes */}
            <div className="mt-12 mb-24">
              <Testimonial
                name="Remo Maciocia"
                quote="Couldn’t be more pleased with the result and price."
                photo="remo.jpg"
              />
            </div>
          </div>
        </div>

        {props.contact ? (
          <Contact className="inline-flex pb-20 justify-self-center" />
        ) : (
          <div
            className="object-contain -mr-40"
            style={{
              backgroundImage: `url(${
                require("../../assets/images/x.svg").default
              })`,
            }}
          />
        )}
      </div>
    </>
  );
};
