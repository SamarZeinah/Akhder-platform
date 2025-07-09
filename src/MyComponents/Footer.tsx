import Logo from "../assets/logo.svg";
import Insta from "../assets/Insta.png";
import Snap from "../assets/snap.png";
import Tiktok from "../assets/Tiktok.png";
import Icon4 from "../assets/icon4.png";
import facebook from "../assets/facebook.png";

import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div id="contact" className="bg-[#004324]">
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-30 px-6 md:px-24 pt-16 pb-8">
        {/* left side*/}
        <div className="flex flex-col md:flex-col items-center md:items-start text-center md:text-left  w-full md:w-1/3">
          <img src={Logo} className="w-16 h-16 mb-5" alt="Logo" />
          <h1 className="text-3xl text-white font-bold max-w-xl leading-snug">
            Web & App Services
            <br />
            One Unified Platform.
          </h1>
          <div className="flex gap-3 mt-7">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-white w-full">
            {/* col1 */}
            <div>
              <h3 className="text-3xl mb-4 text-[#FFC107]">Quick Links</h3>
              <ul className="space-y-6">
                <li>
                  <HashLink
                    smooth
                    to="/#"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#services"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    Services
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#Contact"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    Contact us
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#about"
                    className="text-xl hover:text-[#FFC107] underline"
                  >
                    About us
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* col2 */}
            <div>
              <h3 className="text-3xl mb-4 text-[#FFC107]">Services</h3>
              <ul className="space-y-6">
                <li className="hover:text-[#FFC107] text-xl ">websites</li>
                <li className="hover:text-[#FFC107] text-xl ">
                  Mobile application
                </li>
                <li className="hover:text-[#FFC107] text-xl ">Database</li>
              </ul>
            </div>

            {/* col3 */}
            <div>
              <h3 className="text-3xl mb-4 text-[#FFC107]">Contact us</h3>
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
      <p className="text-center text-white py-7">
        Copyright © 2023 Moon| All Rights Reserved | Terms and Conditions |
        Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
