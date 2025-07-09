import AboutPhoto from "../assets/AboutPhoto.png";
import AboutIcon1 from "../assets/AboutIcon1.png";
import AboutIcon2 from "../assets/AboutIcon2.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col text-center md:flex-row md:text-start items-center 
      justify-between text-white p-8 my-16   gap-10 bg-[#006F3C] px-24 py-24"
      >
        <div className="text-black">
          {/* <img
            src={AboutPhoto}
            alt="AboutPhoto"
            className="w-[400px] h-[400px] object-cover text-center mx-auto"
          /> */}
          <img
            src={AboutPhoto}
            alt="AboutPhoto"
            className="w-[400px] h-[400px] object-cover text-center mx-auto
              opacity-0 translate-y-10 animate-fade-in-up"
          />
        </div>
        <div>
          <div className="flex items-start gap-4">
            {/*  Line */}
            <div className="w-[8px] h-[137px] bg-[#FFC107] rounded"></div>

            {/* content */}
            <div className="text-white">
              {/* <h1 className="text-5xl font-bold mb-5">About us</h1>
              <p className="text-3xl max-w-xl">
                Akhdar delivers smart digital solutions to help businesses grow
                and succeed.
              </p> */}
              <h1 className="text-5xl font-bold mb-5 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[200ms]">
                About us
              </h1>
              <p className="text-3xl max-w-xl opacity-0 translate-y-10 animate-fade-in-up animation-delay-[400ms]">
                Akhdar delivers smart digital solutions to help businesses grow
                and succeed.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-10">
            {/* <div className="flex items-start gap-4">
              <img src={AboutIcon1} className="w-[100px] h-[100px]" />
              <p className="text-lg text-white max-w-xl leading-relaxed min-h-[96px] ">
                We specialize in programming mobile apps, websites, and
                databases that ensure smooth and reliable performance.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={AboutIcon2} className="w-[100px] h-[100px]" />
              <p className="text-lg text-white max-w-xl leading-relaxed min-h-[96px] ">
                We offer marketing, advertising, and design services that boost
                visibility, connect with your audience, and reflect your brand’s
                identity.
              </p>
            </div> */}
            <div className="flex items-start gap-4 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[600ms]">
              <img src={AboutIcon1} className="w-[100px] h-[100px]" />
              <p className="text-lg text-white max-w-xl leading-relaxed min-h-[96px]">
                We specialize in programming mobile apps, websites, and
                databases that ensure smooth and reliable performance.
              </p>
            </div>

            <div className="flex items-start gap-4 opacity-0 translate-y-10 animate-fade-in-up animation-delay-[800ms]">
              <img src={AboutIcon2} className="w-[100px] h-[100px]" />
              <p className="text-lg text-white max-w-xl leading-relaxed min-h-[96px]">
                We offer marketing, advertising, and design services that boost
                visibility, connect with your audience, and reflect your brand’s
                identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
