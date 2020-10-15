import React from "react";
interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <>
      <div className="md:flex lg:justify-end bg-gray-200">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              style={{
                borderRadius: "200%",
                backgroundImage: `url(${require("../../assets/images/profile.png")}`,
              }}
              className="bg-cover bg-center bg-no-repeat shadow-lg w-32 h-32"
            />
            <h3 className="mt-4 text-3xl font-roboto font-bold text-gray-700 text-center">
              Jacek Kwarski
            </h3>
            <div className="font-inter text-gray-500 text-lg text-center font-light">
              Glenroths, UK
            </div>
            <hr className="mt-4 w-16" />
            <p className="mt-4 text-base font-roboto font-medium text-gray-500">
              Professional painter and decorator.
            </p>
            <div className="mt-4 flex justify-center text-center">
              <div className="px-8">
                <div className="text-xl text-gray-600 font-semibold">120</div>
                <h6 className="lowercase font-light">pictures</h6>
              </div>
              <div className="px-8">
                <div className="text-xl text-gray-600 font-semibold">10</div>
                <h6 className="lowercase font-light">projects</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4 w-full" />
    </>
  );
};
