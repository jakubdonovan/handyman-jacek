import React from "react";
interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <>
      <div className="py-6 bg-gray-100 md:flex lg:justify-end">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              // alt="handyman"
              style={{
                borderRadius: "200%",
                backgroundImage: `url(${require("../../assets/images/profile.png")}`,
              }}
              className="w-32 h-32 bg-center bg-no-repeat bg-cover shadow-lg"
            />
            <h3 className="mt-4 text-3xl font-bold text-center text-gray-700 font-roboto">
              Jacek Kwarski
            </h3>
            <div className="text-lg font-light text-center text-gray-500 font-inter">
              Glenroths, UK
            </div>
            <hr className="w-16 mt-4" />
            <p className="mt-4 text-base font-medium text-gray-500 font-roboto">
              Professional painter and decorator.
            </p>
            <div className="flex justify-center mt-4 text-center">
              <div className="px-8">
                <div className="text-xl font-semibold text-gray-600">120</div>
                <h6 className="font-light lowercase">pictures</h6>
              </div>
              <div className="px-8">
                <div className="text-xl font-semibold text-gray-600">10</div>
                <h6 className="font-light lowercase">projects</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
