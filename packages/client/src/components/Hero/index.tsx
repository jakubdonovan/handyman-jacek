import React from "react";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      {/* header */}
      {/* Contact Form */}
      <div className="lg:mt-6 w-full bg-gray-700">
        <div>
          <h1>
            <span>Glenroths</span> finest painter & decorator
          </h1>

          <h4>
            For quality paintwork at great pricing. come and give us a ring!
          </h4>

          <div>view portfolio</div>

          <div>request estimate</div>
        </div>

        <img src="" />
      </div>
    </>
  );
};
