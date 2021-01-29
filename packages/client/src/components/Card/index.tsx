import React, { useState } from "react";
import { SectionDataFragment } from "../../graphql/generated";
import { AirbnbCarousel } from "../AirbnbCarousel";

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
      className={`flex justify-center w-full ${textColor}`}
    >
      {/* Header */}
      <div className={`max-w-5xl py-8 md:py-16`}>
        <h2
          className={`text-3xl md:text-4xl ${textColor} text-center font-roboto mb-4 md:mb-0`}
        >
          {props.title}
        </h2>
        <div className="grid grid-flow-col-dense grid-cols-2 text-center md:mt-12 grid-flow">
          <div
            className={
              showMore
                ? "ml-6 flex flex-col justify-center items-center"
                : "ml-6"
            }
          >
            {/* Description */}
            <p
              className={`w-full mt-6 overflow-hidden text-base md:text-xl font-normal ${textColor} leading-8`}
            >
              {showMore ? props.longDescription : props.shortDescription}
            </p>
            {showMore && (
              <img
                alt="5 stars"
                className="w-8/12 mt-4 md:w-4/12"
                src={require("../../assets/images/award.png")}
              />
            )}
            {/* Show More */}
            <div
              onClick={() => setShowMore(!showMore)}
              className={`${
                showMore ? "hidden" : "block"
              } mt-2 font-roboto ${textColor} text-xs text-center opacity-50 cursor-pointer uppercase`}
            >
              Show More
            </div>

            {/* Reviews */}
            <div
              className={` ${
                showMore ? "hidden" : "block"
              } mt-4 m-4 items-start flex-col justify-center`}
            >
              <p
                className={`text-xs tracking-wide text-left uppercase ${textColor}`}
              >
                Reviews
              </p>

              <img
                alt="5 stars"
                src={require("../../assets/images/stars.png")}
              />
            </div>

            {/* Pricing */}
            <div
              className={` ${
                showMore ? "hidden" : "block"
              } text-left m-4 uppercase tracking-wider whitespace-no-wrap ${
                !props.amount && "font-bold text-lg"
              }`}
            >
              {props.amount ? (
                <span>
                  £<span className="text-4xl font-bold">{props.amount}</span>{" "}
                  per room
                </span>
              ) : (
                "Get a FREE quote!"
              )}
            </div>
          </div>

          {/* Image */}
          <div
            className="h-64 pb-4 ml-12 bg-cover rounded-tl-lg rounded-bl-lg shadow-lg lg:rounded-lg"
            style={{
              backgroundImage: `url(${require("../../assets/images/" +
                props.image.filename)})`,
            }}
          />
        </div>

        {/* lg reviews/pricing */}
        {showMore && (
          <>
            <div className="flex justify-between">
              <div className="flex flex-col items-start justify-center m-4 mt-4">
                <p className="text-xs tracking-wide text-center uppercase">
                  Reviews
                </p>
                <img
                  alt="5 stars"
                  src={require("../../assets/images/stars.png")}
                />
              </div>

              <div
                className={`text-left m-4 uppercase tracking-wide
            ${!props.amount && "text-lg font-bold"}
            `}
              >
                {props.amount ? (
                  <span>
                    £<span className="text-4xl font-bold">{props.amount}</span>{" "}
                    per room
                  </span>
                ) : (
                  "Get a FREE quote!"
                )}
              </div>
            </div>
            {/* Slideshow */}

            <hr className="w-full mt-8 " />
            <h2 className={`p-4 md:mt-8 opacity-75 ${textColor}`}>
              My portfolio
            </h2>
            {currentProject && (
              <>
                {currentProject.images.length > 4 && (
                  //@ts-ignore
                  <AirbnbCarousel images={currentProject.images} />
                )}
                <div className="flex justify-between p-4 tracking-widest text-center">
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
                <div className="text-center">
                  <h2 className="text-lg text-yellow-500 font-roboto">
                    {currentProject.title}
                  </h2>
                  <p className={`px-6 mb-4 text-base font-thin ${textColor}`}>
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
                      {currentProject.sqft}{" "}
                      <span className="text-base">sqft</span>
                    </p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
