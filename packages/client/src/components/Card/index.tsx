import React, { useState } from "react";
import { SectionDataFragment } from "../../graphql/generated";
import { AirbnbCarousel } from "../AirbnbCarousel";
import X from "../../assets/images/wallpaper-example.png";
import e from "../../assets/images/review.png";
import StarsImage from "../../assets/images/stars.png";
import { BsArrowRight } from "react-icons/bs";

interface CardProps extends SectionDataFragment {}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  // TODO:
  // Feed projects into, project slideshow (Needs new slider component)
  const currentProject = props.projects[0] !== null && props.projects[0];
  const textColor = props.light ? "text-white" : "text-gray-700";

  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className="flex justify-center w-full px-8 py-20 overflow-hidden md:px-12"
    >
      <div className="max-w-5xl">
        <div className="items-end justify-between md:flex">
          <img
            className="w-12 mt-6"
            alt={props.icon.alt}
            src={require(`../../assets/images/${props.icon.filename}`).default}
          />
          <p className={`hidden font-bold md:block ${textColor}`}>
            £<span className="text-6xl">{props.amount}</span> PER ROOM
          </p>
        </div>

        <h2 className={`mt-10 text-2xl md:text-4xl ${textColor}`}>
          {props.title}
        </h2>
        <div className="flex items-center w-auto px-8 py-4 mt-6 -mx-8 space-x-12 bg-white md:-mx-12 md:p-12">
          <p className="max-w-md text-sm leading-relaxed text-gray-700 md:text-xl">
            {props.longDescription}
          </p>
          {props.light ? (
            <div className="flex items-center justify-center p-2 bg-green-200 rounded-full md:p-6">
              <BsArrowRight className="text-xl text-blue-700" />
            </div>
          ) : (
            <BsArrowRight className="text-6xl text-gray-700" />
          )}
        </div>
        <div className="relative flex justify-center w-auto -mx-8 md:mx-0 md:w-full">
          <img
            className="shadow-2xl md:mt-6"
            alt={props.image.alt}
            src={require(`../../assets/images/${props.image.filename}`).default}
          />

          <div className="absolute bottom-0 left-0 hidden w-5/12 -mb-12 -ml-12 md:block">
            <img alt="review card" src={e} />
          </div>
        </div>

        <div className="flex items-end justify-between mt-6 md:hidden">
          <div>
            <h6>reviews</h6>
            <img src={StarsImage} alt="review stars" />
          </div>
          <p className={`font-bold ${textColor}`}>
            £<span className="text-4xl">{props.amount}</span> PER ROOM
          </p>
        </div>

        <hr className="w-full h-2 mt-20 font-bold" />

        {/* Slideshow */}
        <h2 className="p-4 mt-6 text-white">My portfolio</h2>
        {currentProject && (
          <>
            {currentProject.images.length > 4 && (
              //@ts-ignore
              <AirbnbCarousel images={currentProject.images} />
            )}
            <div
              className={`flex justify-between p-4 tracking-widest text-center ${textColor}`}
            >
              <div>
                <h6 className="text-left">Location</h6>
                <p className={`text-xl font-bold capitalize ${textColor}`}>
                  {currentProject.location}
                </p>
              </div>
              <div>
                <h6 className="text-left">we charged</h6>
                <p className={`text-sm font-bold ${textColor}`}>
                  £<span className="text-2xl">{currentProject.amount}</span>
                </p>
              </div>
            </div>
            <div className={`text-center ${textColor}`}>
              <h2 className="text-lg text-yellow-500 font-roboto">
                {currentProject.title}
              </h2>
              <p
                className={`px-6 mb-4 text-center text-base font-thin ${textColor}`}
              >
                {currentProject.description}
              </p>
            </div>
            <div
              className={`flex justify-between p-4 ${
                props.light ? "bg-white" : "bg-gray-900"
              }`}
            >
              <div>
                <h6>project requirement</h6>
                <p
                  className="text-xl font-bold"
                  style={{ color: props.bgColor }}
                >
                  {currentProject.requirement}
                </p>
              </div>
              <div>
                <h6>total sqft</h6>
                <p
                  className="text-xl font-bold"
                  style={{ color: props.bgColor }}
                >
                  {currentProject.sqft} <span className="text-base">sqft</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
