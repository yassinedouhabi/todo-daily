// import PropTypes from "prop-types";
import footerIcon from "../assets/icon.svg";
import { FaLocationDot } from "react-icons/fa6";
import { links } from "../data/links";
import { features } from "../data/features";
import { socialMedia } from "../data/socialMedia";
import pricingPlans from "../data/pricingPlans.json";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="bg-white text-red-500 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="logo-company flex flex-col items-start gap-6 mb-4 md:mb-0">
          <div className="flex items-center gap-4">
            <img className="w-10" src={footerIcon} alt="todo daily" />
            <span className="text-gray-800 font-bold text-sm md:text-base capitalize">
              Let&apos;s change your habit,
              <br /> join with millions of people
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2">Company</h3>
            <span className="text-gray-800 text-base font-bold">
              DK Tech Company
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-base font-normal">
              <FaLocationDot className="text-red-500" />
              Uma Street, Lost City, Aincard
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-4 md:gap-8">
            {/* features && quick links */}
            <div className="flex flex-col md:flex-row md:gap-32 gap-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Features</h3>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href=""
                        className="text-gray-600 font-normal normal-case hover:text-gray-800 transition duration-300"
                      >
                        {feature.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
                <ul>
                  {links.map((link, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href={link.href}
                        className="text-gray-600 font-normal normal-case hover:text-gray-800 transition duration-300"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* pricing && follow us */}
            <div className="flex flex-col md:flex-row md:gap-32 gap-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Pricing</h3>
                <ul>
                  {pricingPlans.map((plan, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href="#"
                        className="text-gray-600 font-normal normal-case hover:text-gray-800 transition duration-300"
                      >
                        {plan.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="text-gray-600 font-normal normal-case hover:text-gray-800 transition duration-300"
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright
        className={"mt-8 text-gray-800 text-center"}
        copyrightSymbol={"©"}
        date={2024}
        link={"Todo Daily. "}
        text={"All rights reserved."}
      />{" "}
    </footer>
  );
};

export default Footer;
