import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <section>
      <div className="flex flex-row-reverse justify-between md:flex-row md:justify-between pt-16 pb-12 w-full">
        <div className="flex md:hidden"></div>
        <Link to="/">
          <h1 className="text-4xl font-serif font-semibold">Travel Blog</h1>
        </Link>

        <div className="flex md:hidden z-1000 bg-main">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-main-green inline-flex items-center justify-center p-3 rounded text-white hover:bg-main-green-shade"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            className="md:hidden bg-creambg mb-8"
            id="mobile-menu"
            // onClick={() => setIsOpen(!isOpen)}
          >
            <div
              ref-setter={ref}
              className="h-screen flex flex-col justify-evenly items-center"
            >
              <div className="flex flex-col items-center">
                <p className="uppercase hover:text-black py-4 text-lg ">
                  <Link onClick={() => closeMenu()} to="/">
                    Home
                  </Link>
                </p>
                <p className="uppercase  hover:text-black py-4 text-lg ">
                  <Link onClick={() => closeMenu()} to="/destination">
                    Destination
                  </Link>
                </p>
                <p className="uppercase  hover:text-black py-4 text-lg ">
                  <Link onClick={() => closeMenu()} to="/about">
                    About
                  </Link>
                </p>
                <p className="uppercase  hover:text-black py-4 text-lg  whitespace-nowrap">
                  <Link onClick={() => closeMenu()} to="/subscribe">
                    Subscribe
                  </Link>
                </p>
              </div>
              <div className="flex flex-row items-center gap-5">
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
        )}
      </Transition>
    </section>
  );
}
