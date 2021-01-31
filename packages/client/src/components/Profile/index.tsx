import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import MobileHeroImage from "../../assets/images/mobile-hero.png";
interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  return (
    <div
      style={{ borderRadius: "0 0 50px 50px", backgroundColor: "#4C51BF" }}
      className="relative grid h-64 grid-cols-2 px-8"
    >
      <div className="flex flex-col items-start justify-start">
        <h1 className="mt-4 text-2xl font-bold text-left text-white font-proxima">
          AN <span className="underline">EXPERT</span> HANDYMAN IN YOUR AREA.
        </h1>
        <button
          style={{ color: "#4C51BF" }}
          className="flex items-center gap-2 px-4 py-2 mt-4 font-black tracking-wider text-purple-900 uppercase rounded-full focus:outline-none font-proxima from-white to-gray-100 bg-gradient-to-t"
        >
          contact
          <HiArrowNarrowRight className="text-xl font-bold" />
        </button>
      </div>
      <div className="flex items-start justify-start -mt-8 -ml-4">
        <img
          style={{ maxWidth: "110%" }}
          alt="any"
          className=""
          src={MobileHeroImage}
        />
      </div>
    </div>
  );
};
