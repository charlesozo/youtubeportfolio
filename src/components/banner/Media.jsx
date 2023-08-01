import React from "react";
import {
    FaLinkedinIn,
  FaReact,
  FaWhatsapp,
  FaInstagram,
  FaGoogle
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  const phoneNumber = "+916372271190";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const instagramLink = "https://www.instagram.com/_hk_software/";
  const gmailLink = "mailto:hksoftware00@gmail.com"
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find us in</h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
