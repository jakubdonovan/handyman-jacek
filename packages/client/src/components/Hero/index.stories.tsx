import React from "react";
import { Hero } from ".";

export default {
  title: "Hero",
  component: Hero,
};

const [contact, setContact] = React.useState(false);
export const HeroLG = () => <Hero {...{ contact, setContact }} />;
