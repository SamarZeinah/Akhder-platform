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
import { useTranslation } from "react-i18next";



const CardSlider = () => {
  const{t}=useTranslation()
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
const cards = [
  {
    id: 1,
    img: WebIcon,
    title: t('sliders.title1'),
    desc: t('sliders.desc1'),
  },
  {
    id: 2,
    img: MobileIcon,
    title: t('sliders.title2'),
    desc: t('sliders.desc2'),
  },
  {
    id: 3,
    img: DatabaseIcon,
     title: t('sliders.title3'),
    desc: t('sliders.desc3'),
  },
  {
    id: 4,
    img: marketing,
    title: t('sliders.title4'),
    desc: t('sliders.desc4'),
  },
  {
    id: 5,
    img: Advertising,
    title: t('sliders.title5'),
    desc: t('sliders.desc5'),
  },
  {
    id: 6,
    img: Motion,
    title: t('sliders.title6'),
    desc: t('sliders.desc6'),
  },
  {
    id: 7,
    img: Design,
    title: t('sliders.title7'),
    desc: t('sliders.desc7'),
  },
];
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
    // <div id="services" className="relative z-10 -mt-40 px-28">
    <div id="services" className="relative z-10 -mt-40 px-4 sm:px-10 md:px-28">

      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        spaceBetween={10}
        slidesPerView={1.2}
        speed={800}
      //   breakpoints={{

      // 480: { slidesPerView: 1.2 },
      // 640: { slidesPerView: 1.5 },
      // 768: { slidesPerView: 2 },
      // 1024: { slidesPerView: 2.5 },
      // 1280: { slidesPerView: 3 },
      //   }}
      breakpoints={{
  0: { slidesPerView: 1 },
  480: { slidesPerView: 1.1 },
  640: { slidesPerView: 1.3 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 2.5 },
  1280: { slidesPerView: 3 },
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
                className="w-[100px] h-[100px] object-cover mx-auto mt-5 animate-float"
              />

              <div className="px-4 pt-[40px] mb-10">
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
