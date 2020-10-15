import React, { useState } from "react";
import { SectionDataFragment } from "../../graphql/generated";
import { AirbnbCarousel } from "../AirbnbCarousel";

interface CardProps extends SectionDataFragment {}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const currentProject = props.projects[0] !== null && props.projects[0];

  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className="mt-2 max-w-5xl py-8"
    >
      {/* Header */}
      <h2 className="font-roboto text-center text-3xl ">{props.title}</h2>
      <div className="mt-4 grid grid-cols-2 grid-flow grid-flow-col-dense text-center">
        <div
          className={
            showMore ? "ml-6 flex flex-col justify-center items-center" : "ml-6"
          }
        >
          {/* Description */}
          <p className="mt-6 w-full text-base leading-8 font-normal overflow-hidden">
            {showMore ? props.longDescription : props.shortDescription}
          </p>
          {showMore && (
            <img
              className="mt-4 w-8/12 md:w-4/12"
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
            <p className="uppercase text-left tracking-wide text-xs">Reviews</p>

            <img src={require("../../assets/images/stars.png")} />
          </div>

          {/* Pricing */}
          <div
            className={` ${
              showMore ? "hidden" : "block"
            } text-left m-4 text-white uppercase tracking-wider whitespace-no-wrap ${
              !props.amount && "font-bold text-lg"
            }`}
          >
            {props.amount
              ? `£ ${(
                  <span className="text-4xl font-bold">50</span>
                )} per room `
              : "Get a FREE quote!"}
          </div>
        </div>

        {/* Image */}
        <div
          className="ml-12 h-64 pb-4 rounded-tl-lg rounded-bl-lg shadow-lg bg-cover lg:rounded-lg"
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
            <div className="mt-4 m-4 flex items-start flex-col justify-center">
              <p className="uppercase text-center tracking-wide text-xs">
                Reviews
              </p>
              <img src={require("../../assets/images/stars.png")} />
            </div>

            <div
              className={`text-left m-4 text-white uppercase tracking-wide
            ${!props.amount && "text-lg font-bold"}
            `}
            >
              {props.amount
                ? `£ ${(
                    <span className="text-4xl font-bold">50</span>
                  )} per room `
                : "Get a FREE quote!"}
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
              <div className="flex justify-between p-4 text-center tracking-widest">
                <div>
                  <h6 className="text-left">Location</h6>
                  <p className="font-bold text-xl capitalize">
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
                <h2 className="font-roboto text-lg text-yellow-500">
                  {currentProject.title}
                </h2>
                <p className="mb-4 text-base font-thin px-6">
                  {currentProject.description}
                </p>
              </div>
              <div className="bg-white flex justify-between p-4">
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
