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

export default function Layout({ pageTitle, children, homeDestination }) {
  return (
    <>
      <div className="px-4 md:px-0 flex flex-col bg-cream text-main">
        <div className="grid gird-cols-6 md:grid-cols-8">
          <Nav />
          <div className="col-span-6 h-full pb-32 ">
            <main>{children}</main>
          </div>
          <div className="hidden md:block md:col-span-1 pt-38 h-screen top-0 sticky">
            <div className="hidden md:block ">
              <div className="flex flex-col-reverse justify-start items-center">
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
      </div>
      <div className="bg-creambg text-main py-20 static">
        <Footer />
      </div>
    </>
  );
}

const Nav = () => {
  return (
    <>
      <div className=" hidden md:block col-span-1 pt-40 h-screen top-0 sticky">
        <div className="flex flex-col-reverse justify-start items-center">
          <div className="-rotate-90 flex flex-row  translate-y-48">
            <p className="uppercase hover:text-black px-6 text-sm ">
              <Link to="/">Home</Link>
            </p>
            <p className="uppercase  hover:text-black px-6 text-sm ">
              <Link to="/destination">Destination</Link>
            </p>
            <p className="uppercase  hover:text-black px-6 text-sm ">
              <Link to="/about">About</Link>
            </p>
            <p className="uppercase  hover:text-black px-6 text-sm  whitespace-nowrap">
              <Link to="subscribe">Subscribe</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
