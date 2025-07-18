// import founderbg from "../assets/founderbg.png";
// import Insta from "../assets/Insta.png";
// import Snap from "../assets/snap.png";
// import Tiktok from "../assets/Tiktok.png";
// import facebook from "../assets/facebook.png";
// import Icon4 from "../assets/icon4.png";
// import founder from "../assets/founder.png";
// import founder1 from "../assets/founder1.png";
// import founder2 from "../assets/founder2.png";
// import founder3 from "../assets/founder3.png";
// import founder4 from "../assets/founder4.png";
// import founder5 from "../assets/founder5.png";
// import founder6 from "../assets/founder6.png";
// import founder7 from "../assets/founder7.png";
// import founder8 from "../assets/founder8.png";
// import { useTranslation } from "react-i18next";

// export default function Founders() {
//   const { t } = useTranslation();
//   const foundersData = [
//     {
//       img: founder,
//       name: t("Who-We-are.name1"),
//       position: t("Who-We-are.position1"),
//       description: t("Who-We-are.description1"),
//     },
//     {
//       img: founder1,
//       name: t("Who-We-are.name2"),
//       position: t("Who-We-are.position2"),
//       description: t("Who-We-are.description2"),
//     },
//     {
//       img: founder2,
//       name: t("Who-We-are.name3"),
//       position: t("Who-We-are.position3"),
//       description: t("Who-We-are.description3"),
//     },
//     {
//       img: founder3,
//       name: t("Who-We-are.name4"),
//       position: t("Who-We-are.position4"),
//       description: t("Who-We-are.description4"),
//     },
//     {
//       img: founder4,
//       name: t("Who-We-are.name5"),
//       position: t("Who-We-are.position5"),
//       description: t("Who-We-are.description5"),
//     },
//     {
//       img: founder5,
//       name: t("Who-We-are.name6"),
//       position: t("Who-We-are.position6"),
//       description: t("Who-We-are.description6"),
//     },
//     {
//       img: founder6,
//       name: t("Who-We-are.name7"),
//       position: t("Who-We-are.position7"),
//       description: t("Who-We-are.description7"),
//     },
//     {
//       img: founder7,
//       name: t("Who-We-are.name8"),
//       position: t("Who-We-are.position8"),
//       description: t("Who-We-are.description8"),
//     },
//     {
//       img: founder8,
//       name: t("Who-We-are.name9"),
//       position: t("Who-We-are.position9"),
//       description: t("Who-We-are.description9"),
//     },
//   ];

//   return (
//     // <div
//     //   className="relative bg-cover object-contain bg-center  min-h-[110vh]"
//     //   style={{
//     //     backgroundImage: `url(${founderbg})`,
//     //   }}
//     // >
//     <div
//   className="relative bg-contain"
//   style={{ backgroundImage: `url(${founderbg})` }}
// >

 
//       <div className="relative z-20 flex flex-col items-center justify-between text-center md:text-start md:items-start px-8 pt-[150px] max-w-7xl mx-auto gap-10 pb-20 opacity-0 translate-y-10 animate-fade-in-up">
//         <div className="w-full md:w-1/2 lg:w-auto mx-auto lg:mx-0 text-center lg:text-start text-white">
//           <h1 className="text-5xl font-bold mb-4 leading-normal">
//             {t("Who-We-are.Who-we-are")}
//           </h1>
//           {/* <p className="text-lg mb-11 max-w-lg">
//             {t("Who-We-are.description")}
//           </p> */}
//           <p className="text-lg mb-11 max-w-lg mx-auto md:mx-0">
//   {t("Who-We-are.description")}
// </p>

//         </div>

//         {/* Social Icons */}
//         <div>
//           <p className="text-white font-semibold text-[24px]">
//             {t("Who-We-are.Stay-connected")}
//           </p>

//           <div className="flex gap-3 mt-7">
//             <a
//               href="https://www.instagram.com/egytech209/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={Insta}
//                 alt="Instagram"
//                 className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
//               />
//             </a>
//             <a
//               href="https://www.facebook.com/profile.php?id=61566863757062"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={facebook}
//                 alt="facebook"
//                 className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
//               />
//             </a>
//             <a href="#">
//               <img
//                 src={Tiktok}
//                 alt="Tiktok"
//                 className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
//               />
//             </a>
//             <a href="#">
//               <img
//                 src={Snap}
//                 alt="Snapchat"
//                 className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110 "
//               />
//             </a>
//             <a href="#">
//               <img
//                 src={Icon4}
//                 alt="Icon 4"
//                 className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110"
//               />
//             </a>
//           </div>

//           <div className="bg-white/20 p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-9 w-full">
//             <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
//               <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">5+</h3>
//               <p>{t("Who-We-are.Experiences")}</p>
//             </div>
//             <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
//               <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">
//                 {t("Who-We-are.20+")}
//               </h3>
//               <p>{t("Who-We-are.Project-done")}</p>
//             </div>
//             <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
//               <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">
//                 {t("Who-We-are.80+")}
//               </h3>
//               <p>{t("Who-We-are.Happy-Clients")}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Founder Section */}
//       <div className="bg-[#006F3C]  py-24 px-4 text-center text-white">
//         <p className="font-bold text-[40px] md:text-[60px] leading-tight mb-6">
//           {t("Who-We-are.Our-Founders")}
//         </p>
//         <p className="font-light max-w-xl mx-auto text-lg">
//           {t("Who-We-are.Proudly-led")}
//         </p>

//         {/* <div className="flex flex-wrap justify-center gap-20 mt-10">
//           {foundersData.map((founder, index) => (
//             <div
//               key={index}
//               className="relative w-full sm:w-[400px] opacity-0 animate-fade-in-up"

//               style={{
//                 animationDelay: `${index * 200}ms`,
//                 animationFillMode: "forwards",
//               }}
//             >
//               <div className="absolute top-4 right-4 w-full h-full bg-[#FFC107] rounded-xl z-0 "></div>
//                <div className="relative bg-white rounded-xl shadow-md p-10 z-10 hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[400px]">

//                 <img
//                   src={founder.img}
//                   alt={founder.name}
//                   className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-[#333]">
//                   {founder.name}
//                 </h3>
//                 <p className="text-[#FFC107] font-medium">{founder.position}</p>
//                 <p className="text-gray-600 mt-2 text-sm">
//                   {founder.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div> */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 mt-10 px-4 justify-items-center">
//           {foundersData.map((founder, index) => (
//             <div
//               key={index}
//               className="relative w-full sm:max-w-[340px] lg:max-w-[380px] opacity-0 animate-fade-in-up"
//               style={{
//                 animationDelay: `${index * 200}ms`,
//                 animationFillMode: "forwards",
//               }}
//             >
//               <div className="absolute top-4 right-4 w-full h-full bg-[#FFC107] rounded-xl z-0"></div>

//               <div className="relative bg-white rounded-xl shadow-md p-10 z-10 hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[400px]">
//                 <img
//                   src={founder.img}
//                   alt={founder.name}
//                   className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-[#333]">
//                   {founder.name}
//                 </h3>
//                 <p className="text-[#FFC107] font-medium">{founder.position}</p>
//                 <p className="text-gray-600 mt-2 text-sm">
//                   {founder.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import founderbg from "../assets/founderbg.png";
import Insta from "../assets/Insta.png";
import Snap from "../assets/snap.png";
import Tiktok from "../assets/Tiktok.png";
import facebook from "../assets/facebook.png";
import Icon4 from "../assets/icon4.png";
import founder from "../assets/founder.png";
import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";
import founder3 from "../assets/founder3.png";
import founder4 from "../assets/founder4.png";
import founder5 from "../assets/founder5.png";
import founder6 from "../assets/founder6.png";
import founder7 from "../assets/founder7.png";
import founder8 from "../assets/founder8.png";

// Counter Component
function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">{count}+</h3>
  );
}

export default function Founders() {
  const { t } = useTranslation();

  const foundersData = [
    { img: founder, name: t("Who-We-are.name1"), position: t("Who-We-are.position1"), description: t("Who-We-are.description1") },
    { img: founder1, name: t("Who-We-are.name2"), position: t("Who-We-are.position2"), description: t("Who-We-are.description2") },
    { img: founder2, name: t("Who-We-are.name3"), position: t("Who-We-are.position3"), description: t("Who-We-are.description3") },
    { img: founder3, name: t("Who-We-are.name4"), position: t("Who-We-are.position4"), description: t("Who-We-are.description4") },
    { img: founder4, name: t("Who-We-are.name5"), position: t("Who-We-are.position5"), description: t("Who-We-are.description5") },
    { img: founder5, name: t("Who-We-are.name6"), position: t("Who-We-are.position6"), description: t("Who-We-are.description6") },
    { img: founder6, name: t("Who-We-are.name7"), position: t("Who-We-are.position7"), description: t("Who-We-are.description7") },
    { img: founder7, name: t("Who-We-are.name8"), position: t("Who-We-are.position8"), description: t("Who-We-are.description8") },
    { img: founder8, name: t("Who-We-are.name9"), position: t("Who-We-are.position9"), description: t("Who-We-are.description9") },
  ];

  return (
    <div className="relative bg-contain" style={{ backgroundImage: `url(${founderbg})` }}>
      {/* Header and description */}
      <div className="relative z-20 flex flex-col items-center justify-between text-center md:text-start md:items-start px-8 pt-[150px] max-w-7xl mx-auto gap-10 pb-20 opacity-0 translate-y-10 animate-fade-in-up">
        <div className="w-full md:w-1/2 lg:w-auto mx-auto lg:mx-0 text-center lg:text-start text-white">
          <h1 className="text-5xl font-bold mb-4 leading-normal">{t("Who-We-are.Who-we-are")}</h1>
          <p className="text-lg mb-11 max-w-lg mx-auto md:mx-0">{t("Who-We-are.description")}</p>
        </div>

        {/* Social Icons */}
        <div>
          <p className="text-white font-semibold text-[24px]">{t("Who-We-are.Stay-connected")}</p>
          <div className="flex gap-3 mt-7">
            <a href="https://www.instagram.com/egytech209/" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" className="w-[40px] h-[40px] hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566863757062" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-[40px] h-[40px] hover:scale-110 transition-transform" />
            </a>
            <a href="#"><img src={Tiktok} alt="Tiktok" className="w-[40px] h-[40px] hover:scale-110 transition-transform" /></a>
            <a href="#"><img src={Snap} alt="Snapchat" className="w-[40px] h-[40px] hover:scale-110 transition-transform" /></a>
            <a href="#"><img src={Icon4} alt="Icon 4" className="w-[40px] h-[40px] hover:scale-110 transition-transform" /></a>
          </div>

          {/* Numbers Section */}
          <div className="bg-white/20 p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-9 w-full">
            <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
              <Counter end={5} />
              <p>{t("Who-We-are.Experiences")}</p>
            </div>
            <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
              <Counter end={20} />
              <p>{t("Who-We-are.Project-done")}</p>
            </div>
            <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
              <Counter end={80} />
              <p>{t("Who-We-are.Happy-Clients")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Cards Section */}
      <div className="bg-[#006F3C] py-24 px-4 text-center text-white">
        <p className="font-bold text-[40px] md:text-[60px] leading-tight mb-6">{t("Who-We-are.Our-Founders")}</p>
        <p className="font-light max-w-xl mx-auto text-lg">{t("Who-We-are.Proudly-led")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 mt-10 px-4 justify-items-center">
          {foundersData.map((founder, index) => (
            <div
              key={index}
              className="relative w-full sm:max-w-[340px] lg:max-w-[380px] opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="absolute top-4 right-4 w-full h-full bg-[#FFC107] rounded-xl z-0"></div>
              <div className="relative bg-white rounded-xl shadow-md p-10 z-10 hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[400px]">
                <img src={founder.img} alt={founder.name} className="w-40 h-40 object-cover rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#333]">{founder.name}</h3>
                <p className="text-[#FFC107] font-medium">{founder.position}</p>
                <p className="text-gray-600 mt-2 text-sm">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
