import React from "react";

interface TestimonialProps {
  name: string;
  quote: string;
  photo: string;
}

export const Testimonial: React.FC<TestimonialProps> = (props) => {
  return (
    <div className="relative grid grid-cols-3 bg-gray-900 bg-opacity-75 -mb-2s font-roboto">
      <div className="grid col-span-2 grid-rows-3 text-sm text-center">
        <div
          style={{ fontFamily: "Karla", fontSize: "6rem" }}
          className="absolute top-0 left-0 italic font-bold leading-none text-blue-500"
        >
          "
        </div>
        <div className="grid row-start-2 pl-2 mt-1 text-left">
          {props.quote}
        </div>
        <div className="row-start-3 pl-2 mt-1 font-semibold text-left text-blue-500">
          {props.name}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          alt={props.name}
          src={require("../../assets/images/" + props.photo)}
          className="w-20 rounded-full"
        />
      </div>
    </div>
  );
};
