import React from "react";
import { Contact } from "../../components/Contact";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <Contact />
    </div>
  );
};
