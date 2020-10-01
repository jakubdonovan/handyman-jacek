import React from "react";
import { FaMailBulk } from "react-icons/fa";
interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="mt-2 mx-2 bg-white shadow-lg rounded-lg">
      <h2 className="h2 text-center">get a quote</h2>

      <div className="mt-5 flex justify-around">
        <img
          className="h-10 w-10 rounded-full"
          src={require("../../assets/images/phone-2.png")}
        />
        <img
          className="h-10 w-10"
          src={require("../../assets/images/whatsapp.webp")}
        />
        <img
          className="h-10 w-10"
          src={require("../../assets/images/messenger.png")}
        />
      </div>

      <h5 className="mt-2 font-roboto font-normal text-sm text-center text-gray-400">
        *Guaranteed Response within 15 mins
      </h5>

      <div className="mt-6 grid grid-cols-3">
        <hr className="ml-12 -mr-6 mt-3 text-gray-500 bg-green-300" />
        <div className="text-lg text-center text-gray-400 font-bold mx-8 ">
          OR
        </div>
        <hr className="-ml-6 mr-12 mt-3 text-gray-500" />
      </div>

      <div className="flex flex-col px-4 py-2">
        <div className="flex items-center ">
          <FaMailBulk className="text-gray-400 mx-2" />
          <h5 className="font-roboto text-gray-500">Send me an email</h5>
        </div>
        <input className="w-6/12" placeholder="name" />
        <input className="" placeholder="email" />
        <textarea className="" placeholder="msg" />
        <div className="mt-2 flex justify-center px-12">
          <button className="px-4 py-2 bg-green-500 rounded-lg shadow-md text-white font-roboto uppercase tracking-widest font-bold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
