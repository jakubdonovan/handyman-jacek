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
      style={{ borderRadius: "20px" }}
      className={"mt-2 mx-2 bg-white shadow-lg my-4" + props.className}
    >
      <h2
        style={{ borderRadius: "20px 20px 0px 0px" }}
        className="font-inter p-2 bg-blue-500 text-sm text-white h2 text-left uppercase font-bold leading-none tracking-wide"
      >
        get a quote
      </h2>

      <div className="mt-5 flex justify-around">
        <img
          onClick={() => {
            window.open("tel:/+44-7873174453");
          }}
          className="h-10 w-10 rounded-full hover:bg-opacity-75 cursor-pointer"
          src={require("../../assets/images/phone-2.png")}
        />
        <img
          onClick={() => {
            window.open("https://wa.me/447873174453");
          }}
          className="h-10 w-10 hover:bg-opacity-75 cursor-pointer"
          src={require("../../assets/images/whatsapp.webp")}
        />
        <img
          onClick={() => {
            window.open(
              "https://www.facebook.com/HandymanJacek-114037603796356"
            );
          }}
          className="h-10 w-10 hover:bg-opacity-75 cursor-pointer"
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
          <FaMailBulk className="text-blue-400 mx-2" />
          <h5 className="font-roboto text-gray-500">Send me an email</h5>
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
          <Form className="grid grid-cols-1">
            <Field
              type="text"
              id="name"
              name="name"
              className="w-6/12"
              placeholder="name"
            />
            <Field
              as=""
              type="text"
              id="email"
              name="email"
              placeholder="email"
            />
            <Field
              as="textarea"
              type="text"
              id="msg"
              name="msg"
              placeholder="msg"
            />
            <div className="grid grid-cols-1 text-red-500 mt-5 capitalize">
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
            <div className="mt-2 flex justify-center px-12">
              <button
                type="submit"
                className="animate-bounce px-4 py-2 bg-blue-500 rounded-full shadow-md text-white font-roboto uppercase tracking-widest font-bold"
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
