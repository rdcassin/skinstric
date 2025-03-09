"use client";

import LandingContent from "./components/LandingContent";
import LandingNav from "./components/LandingNav";
import {
  ScrollButtonLeft,
  ScrollButtonRight,
} from "./components/ScrollButtons";

export const Home = () => {

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <LandingNav />
      <LandingContent />
      <ScrollButtonLeft size={600} />
      <ScrollButtonRight size={600} />
    </div>
  );
};

export default Home;
