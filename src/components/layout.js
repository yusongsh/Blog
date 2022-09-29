import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

const Layout = ({ pageTitle, children, homeDestination }) => {
  return (
    <>
      <div className="flex flex-col bg-cream text-main">
        <div className="grid grid-cols-8">
          <div className="col-span-1 pt-40 h-screen top-0 sticky">
            <div className="flex flex-col-reverse justify-start items-center">
              <div className="-rotate-90 flex flex-row  translate-y-48">
                <p className="uppercase hover:text-black px-6 text-sm ">
                  <Link to="/">Home</Link>
                </p>
                <p className="uppercase  hover:text-black px-6 text-sm ">
                  <Link to="/destination">Destination</Link>
                </p>
                <p className="uppercase  hover:text-black px-6 text-sm  whitespace-nowrap">
                  <Link to="/tips">Travrl tips</Link>
                </p>
                <p className="uppercase  hover:text-black px-6 text-sm ">
                  <Link to="/about">About</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <main>{children}</main>
          </div>
          <div className="col-span-1 pt-38 h-screen top-0 sticky">
            <div className="flex flex-col-reverse justify-start items-center">
              <div className="rotate-90 translate-y-20">
                <p className="uppercase hover:text-black text-sm hover:font-medium cursor-pointer">
                  Subscribe
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <FontAwesomeIcon
                  className="hover:text-black cursor-pointer "
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="hover:text-black cursor-pointer "
                  icon={faYoutube}
                />
                <FontAwesomeIcon
                  className="hover:text-black cursor-pointer "
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="hover:text-black cursor-pointer "
                  icon={faFacebook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-creambg text-main py-20">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
