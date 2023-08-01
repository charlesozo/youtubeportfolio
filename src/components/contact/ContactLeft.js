import React from 'react'
import { FaGoogle, FaWhatsapp,FaInstagram} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  const phoneNumber = "+916372271190";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const instagramLink = "https://www.instagram.com/_hk_software/";
  const gmailLink = "mailto:hksoftware00@gmail.com"
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">HK SOFTWARE</h3>
        <p className="text-lg font-normal text-gray-400">
        Empowering Businesses
       with Innovative Solutions
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Let's Keep in Touch
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+916370148998</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hksoftware00@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <span className="bannerIcon">
          <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              data-tip="Contact via WhatsApp"
            >
              <FaInstagram />
            </a>
           
          </span>
          <span className="bannerIcon">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-tip="Contact via WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </span>
          <span className="bannerIcon">
          <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              data-tip="Contact via WhatsApp"
            >
              <FaGoogle />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft