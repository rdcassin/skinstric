import GeneralNav from "../../components/GeneralNav";
import IntroContent from "../components/IntroContent";
import PhotoUploadInput from "./components/PhotoUploadInput";
import PhotoUploadScrollButtons from "./components/PhotoUploadScrollButton";

const IntroPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <GeneralNav />
        <IntroContent />
      </div>
      <PhotoUploadInput />
      <PhotoUploadScrollButtons />
    </div>
  );
};
export default IntroPage;
