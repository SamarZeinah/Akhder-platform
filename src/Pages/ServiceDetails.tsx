import { useParams } from "react-router-dom";
import servbg from "../assets/Servbg.png";
import mobilebg from "../assets/mobilebg.png";
import Insta from "../assets/Insta.png";
import Snap from "../assets/snap.png";
import Tiktok from "../assets/Tiktok.png";
import facebook from "../assets/facebook.png";
import Icon4 from "../assets/icon4.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import { Heart, Star, Users } from "lucide-react";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";

const ServiceDetails = () => {
  const { id } = useParams();

  const contentData = [
    {
      id: "1",
      background: servbg,
      header: {
        title: "Website Design and Development",
        desc: `We design modern, responsive websites that reflect your business identity and showcase your services in the best possible way. Whether you're looking for a profile website, an online store, or a custom control panel, we're here to create the perfect solution.`,
      },
      stats: [
        { value: "5+", label: "Experiences" },
        { value: "20+", label: "Project done" },
        { value: "80+", label: "Happy Clients" },
      ],
      projectsHeader: {
        title: "Creative & Tech-Driven Digital Solutions",
        desc: "We provide innovative web solutions that combine modern design with effective performance to achieve your goals.",
      },
      projects: [
        {
          title: "Mandob Website",
          desc: `A plug-in system that connects the driver to the average user, where the user can search for a driver to
       plug his or her orders anywhere, choose the best driver and truck, as well as the best price, and then make an order.
       The driver agrees to deliver the order or refuse if he or she is unable to deliver it.`,
          image: photo1,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "Tawjihi Gate Website",
          desc: `Offering arrange of courses across our chain of global learning centres , each having unique features and properties, enabling us to meet our student smiscell an eousde mands.
      An educational portal through which tea chersc and classes, brief sand educational units , as well a sup load education video sex plaining to student sand to each student has an
        ip link they take after registering on the website and paying the necessary expenses.`,
          image: photo2,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "iKhair Website",
          desc: `ikhair is the first Payment Arabic platform and application to pay charities Via SMS, Bank account and credit card. It support
       Mobile Donation App, pay zakat, and donate from your mobile via SMS, Creditcard and Bank account. more than 13 million dur ham for more than 150 charitabl`,
          image: photo3,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "Raslan Children Company Website",
          desc: `This website serve the architecture field , where there is a group of specialized engineers and technicians to install and work all kinds of Hashemite stones and pharaonic
        stones and all kinds of in teri or an dexter ior decorations and finish villas and palaces. It is a Content Management System using Laravel.`,
          image: photo4,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "Dr Motasem Bader Website",
          desc: `Apersonaldentist's Website that enabl espatients to book and inquire the dentist online without having to go to the clinic, as well as available medical consultations, saving time and effort on patients and ensuring the level of service. You can view all services that including, Dentalimplant , SurgeryوFixed and variable
        teeth installation, whitening,  Orthodontics, Ceramic scales, Cosmetic, fillings, Dental nerve treatment`,
          image: photo5,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
      ],
    },
    {
      id: "2",
      background: mobilebg,
      header: {
        title: "Mobile design and development",
        desc: `We develop modern, easy-to-use applications that reflect your business's identity and meet your needs. 
        Whether it's a service application, an online store, or a custom management system, we create a unique and integrated experience for you.`,
      },
      stats: [
        { value: "5+", label: "Experiences" },
        { value: "20+", label: "Project done" },
        { value: "80+", label: "Happy Clients" },
      ],
      projectsHeader: {
        title: "Creative & Tech-Driven Mobile Apps",
        desc: "We craft mobile apps that blend sleek design with powerful functionality to bring your vision to life.",
      },
      projects: [
        {
          title: "IKhair Application",
          desc: `Mobile Donation App, pay zakat, and donate from your mobile via SMS , Credit card and Bank a ccount .more than 13 million dur ham for more than 150 chari table  projects an dur gent cases.`,
          image: mobile1,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "Seyana - UAEA pplication",
          desc: `Seyanah-UAE app is an amazing and flexible app forhome services Facilitate the user to request more than on order with categories (Plumber,Laundry, Packers Movers, Washing Machine, Painting, Cleaning, CarWash ,PestsControlandmore .`,
          image: mobile2,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "Mega JO Application",
          desc: `it is consider edane-commerce mobile application where you can make online shopping with online payment methods . it has multi- vendor  feature . Anyvendor scanview their products.`,
          image: mobile3,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
        {
          title: "Raslan Children Company Website",
          desc: `This website serve the architecture field , where there is a group of specialized engineers and technicians to install and work all kinds of Hashemite stones and pharaonic stones and all kinds of in teri or an dexter ior decorations and finish villas and palaces. It is a Content Management System using Laravel.`,
          image: mobile4,
          badges: [
            { icon: <Heart />, value: "00+" },
            { icon: <Star />, value: "20+" },
            { icon: <Users />, value: "35+" },
          ],
        },
      ],
    },
  ];

  const service = contentData.find((item) => item.id === id);
  const selectedProjects = service?.projects || [];

  return (
    <>
      <div
        className="relative bg-cover min-h-[110vh]"
        style={{
          backgroundImage: `url(${service?.background})`,
        }}
      >
        <div className="relative z-20 flex flex-col items-center justify-between text-center md:text-start md:items-start px-8 pt-[150px] max-w-7xl mx-auto gap-10 pb-20 opacity-0 translate-y-10 animate-fade-in-up">
          <div className="w-full md:w-1/2 lg:w-auto mx-auto lg:mx-0 text-center lg:text-start text-white">
            <h1 className="text-5xl font-bold mb-4 leading-normal">
              {service?.header.title}
            </h1>
            <p className="text-lg mb-11 max-w-lg">{service?.header.desc}</p>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-white font-semibold text-[24px]">
              Stay connected
            </p>
      
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

            <div className="bg-white/20 p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-9">
              {service?.stats?.map((stat, i) => (
                <div
                  key={i}
                  className="text-white text-center w-full min-w-[120px] md:w-1/3 hover:scale-x-110 transition rounded-xl"
                >
                  <h3 className="font-semibold text-2xl mb-2 text-[#FFC107]">
                    {stat.value}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#006F3C]  py-24 px-4 text-center text-white">
        <p className="font-bold text-[40px] md:text-[60px] leading-tight mb-6">
          {service?.projectsHeader?.title}
        </p>
        <p className="font-light max-w-xl mx-auto text-lg">
          {service?.projectsHeader?.desc}
        </p>

        {selectedProjects.map((project, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between text-white px-8 py-[16px] mt-[48px] gap-12 text-center md:text-start`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="w-full md:w-1/2">
              <h1 className="font-bold text-[24px] mb-4">{project.title}</h1>
              <p className="text-[20px] font-light">{project.desc}</p>
              <div className="flex gap-3 mt-6 flex-wrap justify-center md:justify-start">
                {project.badges.map((badge, i) => (
                  <p
                    key={i}
                    className="font-bold bg-[#FFC107] text-white px-4 py-2 rounded-[16px] text-sm hover:scale-110 transition flex items-center"
                  >
                    {badge.icon}
                    <span className="ml-2">{badge.value}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceDetails;
