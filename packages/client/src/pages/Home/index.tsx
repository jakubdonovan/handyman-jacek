import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { Profile } from "../../components/Profile";
import { useSectionsQuery } from "../../graphql/generated";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { data } = useSectionsQuery();

  const [contact, setContact] = React.useState(false);
  return (
    <div className="relative bg-gray-900">
      <div className="justify-center hidden md:flex">
        <Hero setContact={setContact} contact={contact} />
      </div>

      <div className="md:hidden">
        <Profile />
        <hr className="w-full" />
      </div>

      <div className="grid grid-cols-1">
        <div className="flex flex-col items-center justify-center">
          {data?.sectionMany.map((section, i: number) => {
            return <Card key={i} {...section} />;
          })}
        </div>
      </div>
      <div className="h-64 py-8 bg-white">
        <div className="flex flex-col items-center justify-center ">
          <div className="mt-2">
            <h2 className="text-3xl text-gray-900">And much more...</h2>
            <p className="text-left text-gray-600 font-inter">
              Have a special request?{" "}
            </p>
          </div>

          <div className="flex items-center justify-center w-full py-8 mt-4">
            <button
              onClick={() => {
                setContact(true);
                // eslint-disable-next-line no-restricted-globals
                scrollTo(0, 0);
              }}
              className="px-3 py-2 mx-5 text-white duration-200 ease-in-out transform bg-blue-500 rounded-full shadow-lg font-roboto active:scale-90"
            >
              Contact me
            </button>

            <Link
              // eslint-disable-next-line no-restricted-globals
              onClick={() => scrollTo(0, 0)}
              to="/portfolio"
              className="mx-5 text-blue-500 underline duration-200 ease-in-out transform font-roboto active:scale-90"
            >
              My Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
