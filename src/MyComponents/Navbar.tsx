// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import { Menu } from "lucide-react";
// import { HashLink } from "react-router-hash-link";
// import LanguageSwitcher from "./LanguageSwitcher";
// import { useTranslation } from "react-i18next";
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// const{t}=useTranslation()
//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 py-5 transition-all duration-300 ${
//         scrolled ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl px-4 flex items-center justify-between h-16 mx-auto">
//         {/* Logo */}
//         <HashLink to="/" className="text-xl ">
//           <img src={Logo} alt="Logo" className="w-32 h-32" />
//         </HashLink>

//         {/* Navigation Links for large screens */}
//         <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
//           <HashLink
//             to="/#Home"
//             className="text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
//           >
//             {t('Navbar.Home')}
//           </HashLink>

//           <HashLink
//             smooth
//             to="/#services"
//             className="text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
//           >
//             {t('Navbar.Services')}

//           </HashLink>

//           <HashLink
//             smooth
//             to="/#about"
//             className="text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
//           >
//             {t('Navbar.About_us')}

//           </HashLink>

//           <HashLink
//             smooth
//             to="/#Contact"
//             className="text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
//           >
//             {t('Navbar.Contact_us')}
//           </HashLink>
//           <HashLink
//             smooth
//             to="/Founder"
//             className="text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
//           >
//             {t('Navbar.Who_We_are')}
//           </HashLink>
//         </nav>

//         {/* Buttons for large screens */}
//         <div className="hidden md:flex gap-4">
//           <LanguageSwitcher/>
//           <Link
//             to="/login"
//             className="font-bold border border-[#FFC107] text-[#FFC107] px-10 py-2 rounded-[16px] hover:bg-[#FFC107] hover:text-white transition text-sm"
//           >
//             {t('Navbar.Log_in')}
//           </Link>
//           <Link
//             to="/login"
//             className="font-bold bg-[#FFC107] text-white px-10 py-2  rounded-[16px] transition text-sm"
//           >
//             {t('Navbar.Sign_in')}
//           </Link>
//         </div>

//         {/* Hamburger Icon for small screens */}
//         <div className="md:hidden text-white">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <Menu size={50} />
//           </button>
//         </div>
//       </div>

//       {/* Dropdown menu under the icon */}
//       {menuOpen && (
//         <div className="absolute top-full right-0 bg-gray-900 text-white w-[200px] px-4 py-4 rounded-lg shadow-lg z-50 md:hidden">
//           <div className="space-y-3 text-center">
//             <Link to="/" className="block text-sm hover:text-[#FFC107]">
//               Home
//             </Link>
//             <Link to="/services" className="block text-sm hover:text-[#FFC107]">
//               Services
//             </Link>
//             <Link to="/about" className="block text-sm hover:text-[#FFC107]">
//               About us
//             </Link>
//             <Link to="/contact" className="block text-sm hover:text-[#FFC107]">
//               Contact us
//             </Link>
//             <Link to="/contact" className="block text-sm hover:text-[#FFC107]">
//               Who We are
//             </Link>
//             <div className="flex flex-col gap-2 pt-2">
//               <Link
//                 to="/login"
//                 className="font-bold border border-[#FFC107] text-[#FFC107] px-4 py-1 rounded-full hover:bg-[#FFC107] hover:text-white transition text-sm"
//               >
//                 Log in
//               </Link>
//               <Link
//                 to="/login"
//                 className="font-bold bg-[#FFC107] text-white px-4 py-1 rounded-full transition text-sm"
//               >
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#000000cc] backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl px-4 flex items-center justify-between min-h-[70px] md:min-h-[100px] mx-auto">
        {/* Logo */}
        <HashLink to="/" className="text-xl">
          <img
            src={Logo}
            alt="Logo"
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </HashLink>

        {/* Navigation Links for large screens */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <HashLink
            to="/#Home"
            className="text-lg lg:text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
          >
            {t("Navbar.Home")}
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="text-lg lg:text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
          >
            {t("Navbar.Services")}
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="text-lg lg:text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
          >
            {t("Navbar.About_us")}
          </HashLink>
          <HashLink
            smooth
            to="/#Contact"
            className="text-lg lg:text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
          >
            {t("Navbar.Contact_us")}
          </HashLink>
          <Link
            to="/Founder"
            className="text-lg lg:text-xl hover:text-[#FFC107] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFC107] after:transition-all after:duration-500 hover:after:w-full"
          >
            {t("Navbar.Who_We_are")}
          </Link>
        </nav>

        {/* Buttons for large screens */}
        <div className="hidden md:flex gap-3 items-center">
          <LanguageSwitcher />
          <Link
            to="/login"
            className="font-bold border border-[#FFC107] text-[#FFC107] px-6 py-2 rounded-full hover:bg-[#FFC107] hover:text-white transition text-sm"
          >
            {t("Navbar.Log_in")}
          </Link>
          <Link
            to="/login"
            className="font-bold bg-[#FFC107] text-white px-6 py-2 rounded-full transition text-sm"
          >
            {t("Navbar.Sign_in")}
          </Link>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="absolute top-full right-4 bg-gray-900 text-white w-[85vw] max-w-[260px] px-4 py-5 rounded-lg shadow-lg z-50 md:hidden transition-all duration-300">
          <div className="flex flex-col gap-2 text-center">
            <HashLink
              to="/#Home"
              className="text-base sm:text-lg hover:text-[#FFC107]"
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar.Home")}
            </HashLink>
            <HashLink
              to="/#services"
              className="text-base sm:text-lg hover:text-[#FFC107]"
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar.Services")}
            </HashLink>
            <HashLink
              to="/#about"
              className="text-base sm:text-lg hover:text-[#FFC107]"
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar.About_us")}
            </HashLink>
            <HashLink
              to="/#Contact"
              className="text-base sm:text-lg hover:text-[#FFC107]"
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar.Contact_us")}
            </HashLink>
            <Link
              to="/Founder"
              className="text-base sm:text-lg hover:text-[#FFC107]"
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar.Who_We_are")}
            </Link>

  <div className="pt-3">
        <LanguageSwitcher />
      </div>
            <div className="flex flex-col gap-2 pt-3">
              <Link
                to="/login"
                className="font-bold border border-[#FFC107] text-[#FFC107] px-6 py-2 rounded-full hover:bg-[#FFC107] hover:text-white transition text-sm w-full"
              >
                {t("Navbar.Log_in")}
              </Link>
              <Link
                to="/login"
                className="font-bold bg-[#FFC107] text-white px-6 py-2 rounded-full transition text-sm w-full"
              >
                {t("Navbar.Sign_in")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
