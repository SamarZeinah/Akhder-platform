import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WebIcon from "../assets/webicon.png";
import MobileIcon from "../assets/mobileicon.png";
import DatabaseIcon from "../assets/databaseicon.png";
import marketing from '../assets/Marketing.png';
import Advertising from '../assets/Advertising.png';
import Motion from '../assets/Motion.png';
import Design from '../assets/Design.png';
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: WebIcon,
    title: "Websites",
    desc: "We create responsive websites that reflect your brand and offer a smooth user experience.",
  },
  {
    id: 2,
    img: MobileIcon,
    title: "Mobile Applications",
    desc: "Custom mobile apps with smart design and smooth performance.",
  },
  {
    id: 3,
    img: DatabaseIcon,
    title: "Databases",
    desc: "We create advertising campaigns that attract attention and achieve impact.",
  },
  {
    id: 4,
    img: marketing,
    title: "Digital Marketing",
    desc: "Reach the right audience with smart, effective, and targeted strategies.",
  },
  {
    id: 5,
    img: Advertising,
    title: "Advertising",
    desc: "Impactful campaigns that grab attention, build connection, and drive results.",
  },
  {
    id: 6,
    img: Motion,
    title:"Motion Graphics",
    desc: "Bring your story to life with bold, dynamic visuals that inspire, stay unforgettable.",
  },
  {
    id: 7,
    img: Design,
    title: "Graphic Design",
    desc: "Visual identity that makes your brand stand out and stay memorable.",
  },
];

const CardSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
const navigate = useNavigate();

  return (
    <div id="services" className="relative z-10 -mt-40 px-28">
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        spaceBetween={10}
        slidesPerView={1.2}
        speed={800}
        breakpoints={{
          // 640: { slidesPerView: 1.5 },
          // 768: { slidesPerView: 2.2 },
          // 1024: { slidesPerView: 3 },
            640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={card.id}>
            <div
             onClick={() => navigate(`/service/${card.id}`)}
              className={`p-5 h-[340px] rounded-lg overflow-visible shadow-lg text-center max-w-[300px] mx-auto
                transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl
                ${index % 2 === 0 ? "bg-white text-black" : "bg-[#006F3C] text-white"}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-[100px] h-[100px] object-cover mx-auto mt-5"
              />
              <div className="px-4 pt-[70px]">
                <h3 className="text-lg font-bold leading-normal mb-2">
                  {card.title}
                </h3>
                <p className="text-sm leading-normal">{card.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <button
        ref={prevRef}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 z-10
          bg-white border-2 border-green-600 text-green-600
          p-2 rounded-full shadow-md
          hover:bg-green-600 hover:text-white
          transition duration-300"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        ref={nextRef}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-10
          bg-white border-2 border-green-600 text-green-600
          p-2 rounded-full shadow-md
          hover:bg-green-600 hover:text-white
          transition duration-300"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CardSlider;
