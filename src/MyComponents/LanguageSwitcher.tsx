import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Globe, ChevronDown } from "lucide-react";
import global from '../assets/globe-color.svg.svg'
const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-transparent  flex items-center justify-center transition relative"
      >
        <img
          src={global}
          alt="Language"
          className="w-10 h-10"
        />
      </button>


      {open && (
        <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {t("LanguageSwitch.English")}
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {t("LanguageSwitch.Arabic")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
