import { useState } from "react";
import bg from "../assets/background.png";
import bg2 from "../assets/background2.png"
import Overlay from "../assets/Overlay.png";
import Overlay2 from "../assets/Overlay2.png"
import Icon from "../assets/icon.png";
import AnimationIcon from "../assets/AnimationIcon.png";
import Slider from "./Slider";
import About from "./About";
import ContactUs from "./ContactUs";
import MyMap from "./MyMap";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
const { t ,i18n} = useTranslation();
  return (
    <>
      {/* Section with background image + overlay */}
      <div
      id="Home"
        className="relative min-h-[130vh] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${i18n.language === "en" ? bg : bg2})` 
        }}
      >
       
        <div
  className="absolute inset-0 z-10 bg-cover"
  style={{
    backgroundImage: `url(${i18n.language === "en" ? Overlay : Overlay2})`
  }}
>

          {/* Landing content */}
          <div
            className="flex flex-col text-center md:flex-row md:text-start items-center justify-between text-white px-8 mt-[50px] lg:mt-[150px] max-w-7xl mx-auto gap-10 py-20
            opacity-0 translate-y-10 animate-fade-in-up"
          >
            {/* text */}
            <div className="w-full md:w-1/2 lg:w-auto mx-auto lg:mx-0 text-center lg:text-start">
              <h1 className="text-5xl font-bold mb-4 leading-normal">
                {t('Home.Web&AppServices')} <br />
               {t('Home.One_Unified_Platform')}
              </h1>
              <p className="text-lg mb-11">
                {t('Home.Websites')}
                <br />
                {t('Home.built_business')}
              </p>
              <div className="inline-block animate-float">
                <a
                  href="#Contact"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="font-bold bg-[#FFC107] px-20 py-4 rounded-[16px] transition-all duration-700 ease-in-out
                    text-black text-lg shadow-md
                    hover:shadow-lg transform hover:-translate-y-4 hover:scale-105
                    hover:bg-[#006F3C] hover:text-white"
                >
                 {t('Home.Contact_Us')}
                </a>
              </div>
            </div>

            {/* icon animation */}
            {/* <div className="relative w-[100px] h-[100px] cursor-pointer hidden lg:block">
              <img
                src={Icon}
                alt="Yellow Icon"
                className={`absolute top-40 right-60 w-[80px] h-[80px] rounded-full transition-opacity duration-300  animate-float ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={AnimationIcon}
                alt="Green Icon"
                className={`absolute top-40 right-60 w-[80px] h-[80px] rounded-full transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div> */}
            <div className="relative w-[100px] h-[100px] cursor-pointer hidden lg:block">
              <img
                src={Icon}
                alt="Yellow Icon"
                className={`absolute top-40 ${
                  i18n.language==="ar" ? "left-60" : "right-60"
                } w-[80px] h-[80px] rounded-full transition-opacity duration-300 animate-float ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={AnimationIcon}
                alt="Green Icon"
                className={`absolute top-40 ${
                  i18n.language==="ar"  ? "left-60" : "right-60"
                } w-[80px] h-[80px] rounded-full transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Rest of the page */}
      <Slider/>
      <About/>
      <ContactUs/>
      <MyMap/>
 
    </>
  );
};

export default Home;
