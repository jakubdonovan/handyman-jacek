import React from "react";
interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-5xl grid-cols-2 gap-4 py-8 sm:gap-12 md:px-12 lg:grid-cols-3">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="w-40 h-40 bg-gray-400 sm:w-64 sm:h-64 animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
