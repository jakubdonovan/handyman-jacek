import React, { useState } from "react";
import { SectionDataFragment } from "../../graphql/generated";
import { AirbnbCarousel } from "../AirbnbCarousel";
import X from "../../assets/images/xxx.png";
import XX from "../../assets/images/wallpaper.png";
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
    <div className="flex justify-center w-full px-4 pb-24 bg-blue-700 md:px-12">
      <div className="max-w-5xl">
        <div className="items-end justify-between md:flex">
          <img className="w-12 mt-12" alt="wallpaper" src={XX} />
          <p className="hidden font-bold md:block">
            £<span className="text-6xl">500</span> PER ROOM
          </p>
        </div>

        <h2 className="mt-12 text-2xl text-white">Wallpapering Services</h2>
        <div className="flex items-center w-auto p-4 mt-6 -mx-4 space-x-12 bg-white md:-mx-12 md:p-12">
          <p className="max-w-md text-sm leading-relaxed text-gray-700 md:text-xl">
            Years of Experience in Exterior/Interior Painting and decorating of
            private homes, communal areas and commercial spaces.
          </p>
          <BsArrowRight className="w-16 text-4xl" />
        </div>
        <div className="relative flex justify-center w-auto -mx-4 md:mx-0 md:w-full">
          <img className="mt-12 shadow-2xl" alt="" src={X} />

          <div className="absolute bottom-0 left-0 hidden w-5/12 -mb-12 -ml-12 md:block">
            <img alt="review card" src={e} />
          </div>
        </div>

        <div className="flex items-end justify-between mt-6 md:hidden">
          <div>
            <h6>reviews</h6>
            <img src={StarsImage} alt="review stars" />
          </div>
          <p className="font-bold">
            £<span className="text-4xl">500</span> PER ROOM
          </p>
        </div>
      </div>
    </div>
  );
};
