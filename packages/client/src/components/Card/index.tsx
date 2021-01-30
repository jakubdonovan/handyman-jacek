import React, { useState } from "react";
import { SectionDataFragment } from "../../graphql/generated";
import { AirbnbCarousel } from "../AirbnbCarousel";
import X from "../../assets/images/xxx.png";
import XX from "../../assets/images/wallpaper.png";
import e from "../../assets/images/e.png";
import ee from "../../assets/images/stars.png";
import { BsArrowRight } from "react-icons/bs";
import ReviewCard from "../generated/ReviewCard/index";

interface CardProps extends SectionDataFragment {}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  // TODO:
  // Feed projects into, project slideshow (Needs new slider component)
  const currentProject = props.projects[0] !== null && props.projects[0];
  const textColor = props.light ? "text-white" : "text-gray-700";

  return (
    <div className="flex justify-center w-full px-12 bg-blue-700">
      <div className="max-w-5xl">
        <img className="w-12 mt-12" alt="wallpaper" src={XX} />

        <h2 className="mt-12 text-2xl text-white">Wallpapering Services</h2>
        <div className="flex items-center w-auto p-12 mt-6 -mx-12 space-x-12 bg-white">
          <p className="max-w-md text-xl leading-relaxed text-gray-700">
            Years of Experience in Exterior/Interior Painting and decorating of
            private homes, communal areas and commercial spaces.
          </p>
          <BsArrowRight className="text-4xl" />
        </div>
        <div className="relative flex justify-center w-full ">
          <img className="mt-12 shadow-lg" alt="" src={X} />
          <div className="absolute bottom-0 left-0 flex flex-col items-center bg-gray-900">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};
