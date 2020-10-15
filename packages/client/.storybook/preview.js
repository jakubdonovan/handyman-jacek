import React from "react";
import "../src/assets/css/main.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Stories) => (
    <div className="h-screen flex justify-center items-center">
      <Stories />
    </div>
  ),
];
