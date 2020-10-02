import React from "react";
interface CardProps {
  sm?: boolean;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div style={{ backgroundColor: "#4267B2" }} className="mt-2 max-w-5xl py-8">
      {/* Header */}
      <h2 className="font-roboto text-center text-3xl ">Painting Services</h2>
      <div className="mt-4 grid grid-cols-2 grid-flow grid-flow-col-dense text-center">
        <div>
          {/* Description */}
          <p className="mt-12 ml-6 w-full text-base leading-8 font-normal overflow-hidden">
            Years of Experience in Exterior/Interior Painting and decorating of
            private homes, communal areas and commercial spaces.
          </p>
          {/* Show More */}
          <div
            className={`${
              props.sm ? "block" : "hidden"
            } ml-6 mt-2 font-roboto text-xs text-center text-white opacity-50`}
          >
            Show More
          </div>

          {/* Reviews */}
          <div
            className={` ${
              props.sm ? "flex" : "hidden"
            } mt-4 m-4 items-start flex-col justify-center`}
          >
            <p className="uppercase text-center tracking-wide text-xs">
              Reviews
            </p>

            <img src={require("../../assets/images/stars.png")} />
          </div>

          {/* Pricing */}
          <div
            className={` ${
              props.sm ? "block" : "hidden"
            } text-left m-4 text-white uppercase tracking-wider`}
          >
            £<span className="text-4xl font-bold">50</span> per room
          </div>
        </div>

        {/* Image */}
        <div
          className="ml-12 h-64 pb-4 rounded-tl-lg rounded-bl-lg shadow-lg bg-cover"
          style={{
            backgroundImage: `url(${require("../../assets/images/dec.webp")})`,
          }}
        />
      </div>

      {/* lg reviews/pricing */}
      {props.sm ? null : (
        <>
          <div className="flex justify-between">
            <div className="mt-4 m-4 flex items-start flex-col justify-center">
              <p className="uppercase text-center tracking-wide text-xs">
                Reviews
              </p>
              <img src={require("../../assets/images/stars.png")} />
            </div>

            <div className="text-left m-4 text-white uppercase tracking-wide">
              £<span className="text-4xl font-bold">50</span> per room
            </div>
          </div>
          <div>
            <h2 className="p-4">My portfolio</h2>
            <div className="flex justify-center">
              <img
                className=""
                src={require("../../assets/images/portfolio-2.jpg")}
              />
            </div>
            <div className="flex justify-between p-4 text-center tracking-widest">
              <div>
                <h6 className="text-left">Location</h6>
                <p className="font-bold text-xl">Glenroths</p>
              </div>
              <div>
                <h6 className="text-left">we charged</h6>
                <p className="text-sm font-bold">
                  £<span className="text-2xl">300</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-roboto text-lg text-yellow-500">
                Painting & Plastering
              </h2>
              <p className="mb-4 text-base font-thin px-6">
                Are you wondering what a half-house “paint-over” will cost?
              </p>
            </div>
            <div className="bg-white flex justify-between p-4">
              <div>
                <h6>project requirement</h6>
                <p className="text-xl font-bold" style={{ color: "#4267B2" }}>
                  Paint 5 Rooms
                </p>
              </div>
              <div>
                <h6>total sqft</h6>
                <p className="text-xl font-bold" style={{ color: "#4267B2" }}>
                  500 <span className="text-base">sqft</span>
                </p>
              </div>
            </div>
            <p className="p-4"> back</p>
          </div>
        </>
      )}
    </div>
  );
};
