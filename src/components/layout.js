import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div className="flex flex-col bg-cream text-main">
        <div className="grid grid-cols-8">
          <div className="col-span-1 pt-40 h-screen top-0 sticky">
            <div className="flex flex-col-reverse justify-start items-center">
              <div className="-rotate-90 flex flex-row  translate-y-48">
                <p className="uppercase hover:text-black px-6 text-sm">
                  <Link to="/">Home</Link>
                </p>
                <p className="uppercase  hover:text-black px-6 text-sm">
                  <Link to="/destination">Destination</Link>
                </p>
                <p className="uppercase  hover:text-black px-6 text-sm whitespace-nowrap">
                  <Link to="/tips">Travrl tips</Link>
                </p>
                <p className="uppercase  hover:text-black px-6 text-sm">
                  <Link to="/about">About</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-row justify-between pt-16 pb-12">
              <h1 className="text-4xl font-serif font-semibold">Travel Blog</h1>
              <div className="flex items-center">
                <div>
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-gray-50/0 border border-main/40 text-gray-900 text-sm rounded-full block w-full pl-8 p-2.5"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <main>{children}</main>
          </div>
          <div className="col-span-1 pt-38 h-screen top-0 sticky">
            <div className="flex flex-col-reverse justify-start items-center">
              <div className="rotate-90 translate-y-20">
                <p className="uppercase hover:text-black text-sm">Subscribe</p>
              </div>
              <div className="flex flex-col gap-5">
                <FontAwesomeIcon
                  className="hover:text-black "
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="hover:text-black "
                  icon={faYoutube}
                />
                <FontAwesomeIcon
                  className="hover:text-black "
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="hover:text-black "
                  icon={faFacebook}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer>Footer</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
