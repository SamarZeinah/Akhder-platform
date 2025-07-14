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

export default function Founders() {
  const foundersData = [
    {
      img: founder,
      name: "MOHAMED ELSHAHAT",
      position: "TEAM LEADER",
      description:
        "Team leader from Egypt with 2 years of experience and strong soft skills.",
    },
    {
      img: founder1,
      name: "WAEL FOTOUH",
      position: "GENERAL MANAGER",
      description:
        "Experienced tech leader with strong development, networking, and management skills",
    },
    {
      img: founder2,
      name: "Hossam Abdel-rahman",
           position: "Front-end Developer",
      description:
        "Experienced tech leader with strong develop Front-end developer using Angular to build dynamic apps ",
    },
    {
      img: founder3,
      name: "AHMED ABDELRAHMAN",
      position: " Ui/Ux Designer",
      description:
        "UI/UX Designer experienced in SDLC, agile methods, and user-focused product design",
    },
    {
      img: founder4,
      name: "HESHAM FAHMI",
      position: "Mobile App Developer",
      description:
        "Flutter/Dart developer with Firebase integration and Android development experience.",
    },
    {
      img: founder5,
      name: "HAMADA SALAH",
      position: "Web Developer",
      description:
        "Full-stack developer with 3 years’ experience in Laravel, PHP, JavaScript",
    },
    {
      img: founder6,
      name: "Samar  Zeinah",
      position: "Front-end Developer",
      description:
        "Front-end developer using React to create responsive, interactive interfaces",
    },
    {
      img: founder7,
      name: "Rawan Mohamed",
      position: "Ui/Ux designer",
      description:
        "UI is the visual part of an app buttons, forms designed to offer simple, intuitive user experience.",
    },
    {
      img: founder8,
      name: "Mohamed Salah",
      position: "Back-end Developer",
      description:
        "Back-end developer skilled in ExpressNode.js and Express, focused on secure and efficient API ",
    },
  ];

  return (
    <div
      className="relative bg-cover min-h-[110vh]"
      style={{
        backgroundImage: `url(${founderbg})`,
      }}
    >
      <div className="relative z-20 flex flex-col items-center justify-between text-center md:text-start md:items-start px-8 pt-[150px] max-w-7xl mx-auto gap-10 pb-20 opacity-0 translate-y-10 animate-fade-in-up">
        <div className="w-full md:w-1/2 lg:w-auto mx-auto lg:mx-0 text-center lg:text-start text-white">
          <h1 className="text-5xl font-bold mb-4 leading-normal">
            Who we are?
          </h1>
          <p className="text-lg mb-11 max-w-lg">
            We are a Saudi programming company that creates digital solutions
            intelligently and professionally. We design and develop systems,
            websites, and applications that meet your business needs and keep
            pace with market expectations. We work on the details and build
            technology with confidence, to be a true partner for success.
          </p>
        </div>

        {/* Social Icons */}
        <div>
          <p className="text-white font-semibold text-[24px]">Stay connected</p>

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

          <div className="bg-white/20 p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-9 w-full">
            <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
              <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">5+</h3>
              <p>Experiences</p>
            </div>
            <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
              <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">
                20+
              </h3>
              <p>Project done</p>
            </div>
            <div className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl">
              <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">
                80+
              </h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
      {/* Founder Section */}
      <div className="bg-[#006F3C]  py-24 px-4 text-center text-white">
        <p className="font-bold text-[40px] md:text-[60px] leading-tight mb-6">
          Our Founders
        </p>
        <p className="font-light max-w-xl mx-auto text-lg">
          Proudly led by visionaries with deep expertise in technology and
          programming.
        </p>

        <div className="flex flex-wrap justify-center gap-20 mt-10">
          {foundersData.map((founder, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[400px] opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="absolute top-4 right-4 w-full h-full bg-[#FFC107] rounded-xl z-0 "></div>
              <div className="relative bg-white rounded-xl shadow-md p-10 z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-[#333]">
                  {founder.name}
                </h3>
                <p className="text-[#FFC107] font-medium">{founder.position}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
