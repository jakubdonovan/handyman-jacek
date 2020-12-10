import React, { useState } from "react";
import { SectionDataFragment } from "../../graphql/generated";
import { AirbnbCarousel } from "../AirbnbCarousel";

interface CardProps extends SectionDataFragment {}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  // TODO:
  // Feed projects into, project slideshow (Needs new slider component)
  const currentProject = props.projects[0] !== null && props.projects[0];

  return (
    <div style={{ backgroundColor: props.bgColor }} className="max-w-5xl py-8 ">
      {/* Header */}
      <h2 className="mb-2 text-3xl text-center text-white font-roboto">
        {props.title}
      </h2>
      <div className="grid grid-flow-col-dense grid-cols-2 text-center grid-flow">
        <div
          className={
            showMore ? "ml-6 flex flex-col justify-center items-center" : "ml-6"
          }
        >
          {/* Description */}
          <p className="w-full mt-6 overflow-hidden text-base font-normal leading-8">
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
            } mt-2 font-roboto text-xs text-center text-white opacity-50 cursor-pointer`}
          >
            Show More
          </div>

          {/* Reviews */}
          <div
            className={` ${
              showMore ? "hidden" : "block"
            } mt-4 m-4 items-start flex-col justify-center`}
          >
            <p className="text-xs tracking-wide text-left uppercase">Reviews</p>

            <img alt="5 stars" src={require("../../assets/images/stars.png")} />
          </div>

          {/* Pricing */}
          <div
            className={` ${
              showMore ? "hidden" : "block"
            } text-left m-4 text-white uppercase tracking-wider whitespace-no-wrap ${
              !props.amount && "font-bold text-lg"
            }`}
          >
            {props.amount ? (
              <span>
                £<span className="text-4xl font-bold">{props.amount}</span> per
                room
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
              className={`text-left m-4 text-white uppercase tracking-wide
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
          <h2 className="p-4">My portfolio</h2>
          {currentProject && (
            <>
              {currentProject.images.length > 4 && (
                //@ts-ignore
                <AirbnbCarousel images={currentProject.images} />
              )}
              <div className="flex justify-between p-4 tracking-widest text-center">
                <div>
                  <h6 className="text-left">Location</h6>
                  <p className="text-xl font-bold capitalize">
                    {currentProject.location}
                  </p>
                </div>
                <div>
                  <h6 className="text-left">we charged</h6>
                  <p className="text-sm font-bold">
                    £<span className="text-2xl">{currentProject.amount}</span>
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-lg text-yellow-500 font-roboto">
                  {currentProject.title}
                </h2>
                <p className="px-6 mb-4 text-base font-thin">
                  {currentProject.description}
                </p>
              </div>
              <div className="flex justify-between p-4 bg-white">
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
  );
};
