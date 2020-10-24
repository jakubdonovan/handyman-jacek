import React from "react";
import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { Logo } from "../../components/Logo";
import { Profile } from "../../components/Profile";
import {
  SectionsQueryHookResult,
  useSectionsQuery,
} from "../../graphql/generated";
interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
  const { data } = useSectionsQuery();

  return (
    <div className="bg-gray-200">
      {/* Logo */}
      <div className="hidden md:block relative">
        <div className="w-10/12">
          <Logo />
        </div>
        <Hero />
      </div>

      <div className="md:hidden">
        <Profile />
      </div>

      <div style={{ backgroundColor: "#4267B2" }} className="grid grid-rows-1">
        <div className="flex justify-center">
          {data?.sectionMany.map(
            (section: SectionsQueryHookResult, i: number) => {
              return <Card key={i} {...section} />;
            }
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-2">
          <h2 className="text-3xl text-gray-900">And much more...</h2>
          <p className="text-left font-inter text-gray-600">
            Have a special request?{" "}
          </p>
        </div>

        <div className="mt-4 w-full flex justify-center items-center">
          <button className="mx-5 px-3 py-2 shadow-lg bg-blue-500 text-white rounded-full">
            Contact me
          </button>

          <a
            href="/images"
            className="mx-5 font-roboto text-blue-500 underline "
          >
            My Portfolio
          </a>
        </div>
      </div>
      <div
        style={{ textShadow: "0 0 0 #a0aec0" }}
        className="mt-4 text-center font-normal text-xs font-inter text-transparent"
      >
        Made with <span aria-label="heart emoji">❤</span>️ by{" "}
        <span className="text-blue-500">Jakub</span> in Glenroths.
      </div>
    </div>
  );
};
