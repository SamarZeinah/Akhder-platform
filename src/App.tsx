// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./MyComponents/Layout";
// import Home from "./MyComponents/Home";
// import ServiceDetails from "./Pages/ServiceDetails";
// import { ToastContainer } from "react-toastify";
// import Founders from "./Pages/Founders";

// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { Cookie } from "lucide-react";
// import HttpApi from 'i18next-http-backend';
// import { useEffect } from "react";

// i18n
//   .use(initReactI18next) 
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     fallbackLng: "en",
//     detection:{
//       order: ['cookie','htmlTag', 'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
//       caches:["cookie"]
//     },
//       backend:{
//           loadPath: '/locale/{{lng}}/translation.json',

//       }
//   });

// const App = () => {
//     const { t } = useTranslation();
//   useEffect(() => {
//   console.log("اللغة الحالية:", i18n.language);
// }, [i18n.language]);

//   return (
//     <>
//      {/* <div style={{ display: "flex", gap: "10px", padding: "10px" }}> */}
//         <button onClick={() => i18n.changeLanguage("en")}>English</button>
//         <button onClick={() => i18n.changeLanguage("ar")}>عربية</button>
//       {/* </div> */}
//        <h2>{t('Welcome to React')}</h2>
//     <Router>
//       <ToastContainer position="top-center" />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/service/:id" element={<ServiceDetails />} />
//           <Route path="/Founder" element={<Founders />} />
//         </Route>
//       </Routes>
//     </Router>
//     </>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./MyComponents/Layout";
import Home from "./MyComponents/Home";
import ServiceDetails from "./Pages/ServiceDetails";
import Founders from "./Pages/Founders";
import { ToastContainer } from "react-toastify";

import './i18n'; 
import i18n from "i18next";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    console.log("Current Language:", i18n.language);
  }, [i18n.language]);

  return (
    <>
     
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/Founder" element={<Founders />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
