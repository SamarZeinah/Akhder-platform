import { useForm } from "react-hook-form";
import { Mail as EmailIcon, Phone } from "lucide-react";
import emailjs from "emailjs-com";
import address from "../assets/address.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import Insta from "../assets/Insta.png";
import Snap from "../assets/snap.png";
import Tiktok from "../assets/Tiktok.png";
import Icon4 from "../assets/icon4.png";
import facebook from "../assets/facebook.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  Subject: string;
  message: string;
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        from_firstname: data.firstName,
        from_lastname: data.lastName,
        from_email: data.email,
        from_phone: data.phone,
        subject: data.Subject,
        message: data.message,
      };

      const response = await emailjs.send(
        "service_uwtje8a", // Service ID
        "template_dq1ou17", // Template ID

        templateParams,
        "or_uZD7JZ7H3p-1OY" //Public Key
      );

      console.log("Email sent successfully:", response.status);
      toast.success("Your message has been sent!");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Oops! Something went wrong.");
    }
  };
const{t}=useTranslation();
  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row items-stretch justify-between  my-16"
    >
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 text-start flex-1">
        <div className="flex gap-2">
          {/* first name */}
          <div className="mb-4 w-1/2">
            <label className="block mb-1 text-black">{t('ContactUs.First_Name')}</label>
            <input
              type="text"
              {...register("firstName", { required: t('ContactUs.firstName-required')})}
              placeholder="First name"
              className=" text-black w-full px-3 py-2 border border-[#F1F1F1] bg-[#F1F1F1] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>
          {/* last name */}
          <div className="mb-4 w-1/2">
            <label className="block mb-1 text-black">{t('ContactUs.Last-Name')}</label>
            <input
              type="text"
              {...register("lastName", { required: t('ContactUs.lastName-required') })}
              placeholder="Last name"
              className="text-black w-full px-3 py-2 border border-[#F1F1F1] bg-[#F1F1F1] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {/* Email */}
          <div className="mb-4 w-1/2">
            <label className="block mb-1 text-black">{t('ContactUs.Email')}</label>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <EmailIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
              <input
                type="email"
                {...register("email", {
                  required: t('ContactUs.Email-required'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder={t('ContactUs.Enter-your-email')}
                className="text-black w-full pl-10 pr-3 py-2 border border-[#F1F1F1] bg-[#F1F1F1] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
            </div>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          {/* phone */}
          <div className="mb-4 w-1/2">
            <label className="block mb-1 text-black">{t('ContactUs.Phone-number')}</label>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Phone className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
              <input
                type="tel"
                {...register("phone", {
                  required:t('ContactUs.Phone-required'),
                  pattern: {
                    value: /^[0-9]{6,15}$/,
                    message: "Invalid phone number",
                  },
                })}
                placeholder={t('ContactUs.Enter-your-Phone')}
                className=" text-black w-full pl-10 pr-3 py-2 border border-[#F1F1F1] bg-[#F1F1F1] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
        </div>
        {/* subject */}
        <div className="mb-4 ">
          <label className="block mb-1 text-black">{t('ContactUs.Subject')}</label>
          <input
            type="text"
            {...register("Subject", { required: t('ContactUs.Subject-required') })}
            placeholder={t('ContactUs.Enter-your-subject')}
            className="text-black w-full px-3 py-2 border border-[#F1F1F1] bg-[#F1F1F1] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
          />
          {errors.Subject && (
            <span className="text-red-500">{errors.Subject.message}</span>
          )}
        </div>
        {/* message */}
        <div className="mb-4">
          <label className="block mb-1 text-black">{t('ContactUs.Message')}</label>
          <textarea
            rows={5}
            {...register("message", { required: t('ContactUs.message-required') })}
            placeholder={t('ContactUs.Enter-your-message')}
            className="text-black w-full px-3 py-2 border border-[#F1F1F1] bg-[#F1F1F1] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FFC107] resize-none"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-[#FFC107] text-black py-2 rounded-[16px] hover:bg-yellow-400 transition text-[14px] font-bold"
        >
          {isSubmitting ? t('ContactUs.Loading...') : t('ContactUs.Submit')}
        </button>
      </form>

      {/*content*/}
      <div className="text-white text-start bg-[#006F3C] rounded-[16px] p-6 flex-1">
        <div className=" mb-6">
          <h1 className="font-semibold text-[24px]">{t('ContactUs.Address')}</h1>

          <div className="flex items-center gap-2">
            <p className="text-[24px] font-light"> الرياض حي القدس شارع الملك عبدالله</p>
            <img className="w-5 h-5 text-white" src={address} />
          </div>
                    <div className="flex items-center gap-2">
            <p className="text-[24px] font-light"> المنصوره شارع الاتوبيس القديم  برج الماسه</p>
            <img className="w-5 h-5 text-white" src={address} />
          </div>
        </div>

        <div className=" mb-6">
          <h1 className="font-semibold text-[24px]">{t('ContactUs.Contact')}</h1>

          <div className="flex items-center gap-2">
            <img className="w-5 h-5 text-white" src={email} />
            <p className="text-[24px] font-light"> info@Greenplatform.com </p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5 text-white" src={phone} />
            <p className="text-[24px] font-light"> +966 56 592 5177</p>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold text-[24px] ">{t('ContactUs.Open-time')}</h1>

          <div className="flex items-center gap-2">
            <p className="text-[24px] font-light">
              {" "}
              {t('ContactUs.Saturday_Thursday')}
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-[24px] mb-3">{t('ContactUs.Stay-connected')}</h1>

          <div className="flex gap-3">
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
      </div>
    </div>
  );
};

export default ContactUs;
