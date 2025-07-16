import Logo from "../assets/logo.svg";
import Insta from "../assets/Insta.png";
import Snap from "../assets/snap.png";
import Tiktok from "../assets/Tiktok.png";
import Icon4 from "../assets/icon4.png";
import facebook from "../assets/facebook.png";

import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="contact" className="bg-[#004324]">
      {/* <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-30 px-6 md:px-24 pt-16 pb-8"> */}
      <div
        className={`flex flex-col md:flex-row items-center md:items-start text-center ${
          i18n.language === "ar" ? "md:text-right" : "md:text-left"
        } gap-30 px-6 md:px-24 pt-16 pb-8`}
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        {/* left side*/}
        {/* <div className="flex flex-col md:flex-col items-center md:items-start text-center md:text-right  w-full md:w-1/3"> */}
        <div
          className={`flex flex-col md:flex-col items-center md:items-start text-center  ${
            i18n.language === "ar" ? "md:text-right" : "md:text-left"
          }  w-full md:w-1/3`}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <img src={Logo} className="w-44 h-44" alt="Logo" />
          <h1 className="text-3xl text-white font-bold max-w-xl leading-snug">
            {t("Footer.Web&AppServices")}
            <br />
            {t("Footer.One-Unified-Platform")}
          </h1>
          <div className="flex gap-3 mt-7 mb-5">
            <a
              href="https://www.instagram.com/egytech209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Insta}
                alt="Instagram"
                className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566863757062"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook"
                className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
              />
            </a>
            <a href="#">
              <img
                src={Tiktok}
                alt="Tiktok"
                className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
              />
            </a>
            <a href="#">
              <img
                src={Snap}
                alt="Snapchat"
                className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
              />
            </a>
            <a href="#">
              <img
                src={Icon4}
                alt="Icon 4"
                className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* right side*/}
        <div className="flex items-start gap-8 md:gap-12 w-full  md:w-2/3">
          {/* line*/}
          <div className="hidden md:block w-[2px] h-[350px] bg-white rounded"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-white w-full my-auto">
            {/* col1 */}
            <div>
              <h3 className="text-3xl mb-4 text-[#FFC107]">
                {t("Footer.Quick-Links")}
              </h3>
              <ul className="space-y-6">
                <li>
                  <HashLink
                    smooth
                    to="/#"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    {t("Footer.Home")}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#services"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    {t("Footer.Services")}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#Contact"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    {t("Footer.Contact-us")}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#about"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    {t("Footer.About-us")}
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* col2 */}
            <div>
              <h3 className="text-3xl mb-4 text-[#FFC107]">
                {" "}
                {t("Footer.Services")}
              </h3>
              <ul className="space-y-6">
                <li className="hover:text-[#FFC107] text-xl ">
                  {" "}
                  {t("Footer.websites")}
                </li>
                <li className="hover:text-[#FFC107] text-xl ">
                  {t("Footer.Mobile-application")}
                </li>
                <li className="hover:text-[#FFC107] text-xl ">
                  {" "}
                  {t("Footer.Database")}
                </li>
              </ul>
            </div>

            {/* col3 */}
            <div>
              <h3 className="text-3xl mb-4 text-[#FFC107]">
                {" "}
                {t("Footer.Contact-us")}
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="mailto:info@Greenplatform.com"
                    className="hover:text-[#FFC107] text-xl underline"
                  >
                    info@Greenplatform.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+966551019873"
                    className="hover:text-[#FFC107] text-xl underline"
                  >
                    +966 55 101 9873
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0551019873"
                    className="hover:text-[#FFC107] text-xl underline"
                  >
                    05510 19873
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* line*/}

      <div className="h-[2px] max-w-[90%] md:max-w-[1000px] mx-auto bg-white rounded mt-6" />
      <p className="text-center text-white py-7">{t("Footer.Copyright")}</p>
    </div>
  );
};

export default Footer;
