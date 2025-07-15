import { Outlet } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />

      {/* fixed icons*/}
      <div className="fixed bottom-6 left-6 z-50 flex flex-row gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/966565925177"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full animate-pulse-scale shadow-lg"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        {/* Phone */}
        <a
          href="tel:+966565925177"
          className="bg-[#FFC107] p-3 rounded-full shadow-lg animate-pulse-scale"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
