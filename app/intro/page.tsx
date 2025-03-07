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
      <IntroInput />
      <IntroScrollButtons />
    </div>
  );
};
export default IntroPage;
