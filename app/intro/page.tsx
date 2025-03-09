import GeneralNav from "../components/GeneralNav";
import IntroContent from "./components/IntroContent";
import IntroInput from "./components/IntroInput";
import IntroScrollButtons from "./components/IntroScrollButtons";

const IntroPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <GeneralNav />
        <IntroContent />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <IntroInput size={600} />
      </div>
      <IntroScrollButtons />
    </div>
  );
};
export default IntroPage;
