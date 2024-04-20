import { IoLogoInstagram } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="bg-black w-full h-full flex flex-col items-center p-52">
      <div className="flex flex-col items-center text-white gap-2 pb-32">
        <h1 className="font-semibold text-4xl lg:text-6xl">
          REACH OUT TO ME
        </h1>
      </div>
      <div className="w-5/6 flex items-center justify-evenly">
        <div className="w-1/3 transition-all hover:scale-105">
          <a href="https://instagram.com/grayyysan" className="flex flex-col items-center">
            <span className="text-7xl">
              <IoLogoInstagram />
            </span>
            <h1 className="text-4xl">@Grayyysan</h1>
          </a>
        </div>
        <div className="w-1/3 transition-all hover:scale-105">
          <a href="https://discord.com/grayyysan" className="flex flex-col items-center">
            <span className="text-7xl">
              <FaDiscord />
            </span>
            <h1 className="text-4xl">@Grayyysan</h1>
          </a>
        </div>
        <div className="w-1/3 transition-all hover:scale-105">
          <a href="https://twitter.com/grayyysan" className="flex flex-col items-center">
            <span className="text-7xl">
              <FaXTwitter />
            </span>
            <h1 className="text-4xl">@Grayyysan</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
