// import AboutPhoto from "../assets/AboutPhoto.png";
// import AboutIcon1 from "../assets/AboutIcon1.png";
// import AboutIcon2 from "../assets/AboutIcon2.png";
// import { useTranslation } from "react-i18next";

// const About = () => {
//   const{t}=useTranslation()
//   return (
//     <>
//       <div
//         id="about"
//         className="flex flex-col text-center md:flex-row md:text-start items-center 
//       justify-between text-white p-8 my-16   gap-10 bg-[#006F3C] px-24 py-24"
//       >
//         <div className="text-black">
        
//           <img
//             src={AboutPhoto}
//             alt="AboutPhoto"
//             className="w-[400px] h-[400px] object-cover text-center mx-auto
//               opacity-0 translate-y-10 animate-fade-in-up"
//           />
//         </div>
//         <div>
//           <div className="flex items-start gap-4">
//             {/*  Line */}
//             <div className="w-[8px] h-[137px] bg-[#FFC107] rounded"></div>

//             {/* content */}
//             <div className="text-white">
//               <h1 className="text-5xl font-bold mb-5 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[200ms]">
//                 {t('AboutUs.About_us')}
//               </h1>
//               <p className="text-3xl max-w-xl opacity-0 translate-y-10 animate-fade-in-up animation-delay-[400ms]">
//                  {t('AboutUs.Akhdar_delivers')}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 mt-10">
//             <div className="flex items-start gap-4 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[600ms]">
//               <img src={AboutIcon1} className="w-[100px] h-[100px]" />
//               <p className="text-lg text-white max-w-xl leading-relaxed min-h-[96px]">
//                  {t('AboutUs.We_specialize')}
//               </p>
//             </div>

//             <div className="flex items-start gap-4 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[800ms]">
//               <img src={AboutIcon2} className="w-[100px] h-[100px]" />
//               <p className="text-lg text-white max-w-xl leading-relaxed min-h-[96px]">
//                  {t('AboutUs.We_offer')}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

import AboutPhoto from "../assets/AboutPhoto.png";
import AboutIcon1 from "../assets/AboutIcon1.png";
import AboutIcon2 from "../assets/AboutIcon2.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const{t}=useTranslation()
  return (
    <>
      <div
  id="about"
  className="flex flex-col text-center md:flex-row md:text-start items-center justify-between text-white p-6 md:p-12 lg:px-24 lg:py-24 my-16 gap-10 bg-[#006F3C]"
>
  <div className="text-black">
    <img
      src={AboutPhoto}
      alt="AboutPhoto"
      className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover text-center mx-auto opacity-0 translate-y-10 animate-fade-in-up"
    />
  </div>
  <div>
    <div className="flex items-start gap-4">
      <div className="w-[8px] h-[137px] bg-[#FFC107] rounded"></div>

      <div className="text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[200ms]">
          {t("AboutUs.About_us")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl opacity-0 translate-y-10 animate-fade-in-up animation-delay-[400ms]">
          {t("AboutUs.Akhdar_delivers")}
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-6 mt-10">
      <div className="flex items-start gap-4 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[600ms]">
        <img src={AboutIcon1} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]" />
        <p className="text-sm md:text-base lg:text-lg text-white max-w-xl leading-relaxed min-h-[96px]">
          {t("AboutUs.We_specialize")}
        </p>
      </div>

      <div className="flex items-start gap-4 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[800ms]">
        <img src={AboutIcon2} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]" />
        <p className="text-sm md:text-base lg:text-lg text-white max-w-xl leading-relaxed min-h-[96px]">
          {t("AboutUs.We_offer")}
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default About;
