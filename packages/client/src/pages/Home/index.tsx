import React from "react";
import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { Logo } from "../../components/Logo";
import { Profile } from "../../components/Profile";
import { useSectionsQuery } from "../../graphql/generated";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { data } = useSectionsQuery();

  return (
    <div className="bg-gray-200">
      {/* Logo */}
      <div className="relative hidden md:block">
        <Logo />
        <div
          style={{ backgroundColor: "#384A5A" }}
          className="flex justify-center"
        >
          <Hero />
        </div>
      </div>

      <div className="md:hidden">
        <Profile />
      </div>

      <div style={{ backgroundColor: "#4267B2" }} className="grid grid-cols-1">
        <div className="flex flex-col items-center justify-center">
          {data?.sectionMany.map((section, i: number) => {
            return <Card key={i} {...section} />;
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-2">
          <h2 className="text-3xl text-gray-900">And much more...</h2>
          <p className="text-left text-gray-600 font-inter">
            Have a special request?{" "}
          </p>
        </div>

        <div className="flex items-center justify-center w-full mt-4">
          <button className="px-3 py-2 mx-5 text-white bg-blue-500 rounded-full shadow-lg">
            Contact me
          </button>

          <a
            href="/images"
            className="mx-5 text-blue-500 underline font-roboto "
          >
            My Portfolio
          </a>
        </div>
      </div>
      <div
        style={{ textShadow: "0 0 0 #a0aec0" }}
        className="mt-4 text-xs font-normal text-center text-transparent font-inter"
      >
        Made with <span aria-label="heart emoji">❤</span>️ by{" "}
        <span className="text-blue-500">Jakub</span> in Glenroths.
      </div>
    </div>
  );
};
