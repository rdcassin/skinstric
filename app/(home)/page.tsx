"use client";

import LandingContent from "./components/LandingContent";
import LandingNav from "./components/LandingNav";
import {
  ScrollButtonLeft,
  ScrollButtonRight,
} from "./components/ScrollButtons";
import { useMediaQuery } from "usehooks-ts";

export const Home = () => {
  const smallScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <LandingNav />
      <LandingContent />
      <ScrollButtonLeft size={smallScreen ? 300 : 600} />
      <ScrollButtonRight size={smallScreen ? 300 : 600} />
    </div>
  );
};

export default Home;
