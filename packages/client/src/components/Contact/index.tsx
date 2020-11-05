import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import * as Yup from "yup";
interface ContactProps {
  className: string;
}

export const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  return (
    <div
      className={
        "rounded-lg mt-2 mx-2 rounded-t-lg bg-white shadow-lg my-4" +
        props.className
      }
    >
      <div className="w-full p-2 text-sm font-bold leading-none tracking-wide text-left text-white uppercase bg-blue-500 rounded-t-lg font-inter h2">
        get a quote
      </div>

      <div className="flex justify-around mt-5">
        <img
          alt="phone"
          onClick={() => {
            window.open("tel:/+44-7873174453");
          }}
          className="w-10 h-10 rounded-full cursor-pointer hover:bg-opacity-75"
          src={require("../../assets/images/phone-2.png")}
        />
        <img
          alt="messenger"
          onClick={() => {
            window.open(
              "https://www.facebook.com/HandymanJacek-114037603796356"
            );
          }}
          className="w-10 h-10 cursor-pointer hover:bg-opacity-75"
          src={require("../../assets/images/messenger.png")}
        />
        <img
          alt="whatsapp"
          onClick={() => {
            window.open("https://wa.me/447873174453");
          }}
          className="w-10 h-10 cursor-pointer hover:bg-opacity-75"
          src={require("../../assets/images/whatsapp.webp")}
        />
      </div>

      <h5 className="mt-4 text-xs italic font-normal text-center text-gray-400 font-roboto">
        (Guaranteed Response within 15 mins)
      </h5>

      <div className="grid grid-cols-3 mt-6">
        <hr className="mt-3 ml-12 -mr-6 text-gray-500 bg-green-300" />
        <div className="mx-8 text-lg font-bold text-center text-gray-400 ">
          OR
        </div>
        <hr className="mt-3 mr-12 -ml-6 text-gray-500" />
      </div>

      <div className="flex flex-col px-4 py-2">
        <div className="flex items-center ">
          <FaMailBulk className="mx-2 text-blue-400" />
          <h5 className="text-gray-500 font-roboto">Send me an email</h5>
        </div>
        <Formik
          // @ts-ignore
          onSubmit={(values) =>
            window.open(
              `mailto:enquiries@handymanjacek.com?subject=Free Quote&body=${values.msg}`
            )
          }
          initialValues={{ name: "", email: "", msg: "" }}
          validationSchema={Yup.object({
            name: Yup.string(),
            email: Yup.string().required().email(),
            msg: Yup.string().required(),
          })}
        >
          <Form className="grid grid-cols-1 text-gray-900">
            <Field
              className="w-6/12 focus:outline-none"
              type="text"
              id="name"
              name="name"
              placeholder="name"
            />
            <Field
              className="focus:outline-none"
              as=""
              type="text"
              id="email"
              name="email"
              placeholder="email"
            />
            <Field
              className="h-24 focus:outline-none"
              as="textarea"
              type="text"
              id="msg"
              name="msg"
              placeholder="msg"
            />
            <div className="grid grid-cols-1 mt-5 text-red-500 capitalize">
              <div>
                <ErrorMessage name="name" />
              </div>
              <div>
                <ErrorMessage name="email" />
              </div>
              <div>
                <ErrorMessage name="msg" />
              </div>
            </div>
            <div className="flex justify-center px-12 mt-2">
              <button
                type="submit"
                className="px-4 py-2 font-bold tracking-widest text-white uppercase bg-blue-500 rounded-full shadow-md animate-bounce font-roboto"
              >
                Send
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
