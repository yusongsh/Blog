import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Featured from "../components/Featured";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function IndexPage({ data }) {
  const heroInfo = data.allContentfulHomeHero.nodes;
  const homeDestination = data.allContentfulHomepageDestination.nodes;
  const topDestinations = data.allContentfulDestinations.nodes;
  const featured = data.allContentfulFeatured.nodes;

  const [isOpen, setIsOpen] = useState(false);

  // console.log(`here is the data`, homeDestination, featured);
  return (
    <Layout pageTitle={"Home Page"}>
      <section>
        <div className="flex flex-row-reverse justify-between md:flex-row md:justify-between pt-16 pb-12 w-full">
          <div className="flex md:hidden"></div>
          <Link to="/">
            <h1 className="text-4xl font-serif font-semibold">Travel Blog</h1>
          </Link>
          <div className="hidden md:flex md:items-center">
            <Search
              homeDestination={homeDestination}
              featured={featured}
              topDestinations={topDestinations}
            />
          </div>
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
                    <Link to="/">Home</Link>
                  </p>
                  <p className="uppercase  hover:text-black py-4 text-lg ">
                    <Link to="/destination">Destination</Link>
                  </p>
                  <p className="uppercase  hover:text-black py-4 text-lg ">
                    <Link to="/about">About</Link>
                  </p>
                  <p className="uppercase  hover:text-black py-4 text-lg  whitespace-nowrap">
                    <Link to="subscribe">Subscribe</Link>
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

      <section className="pb-16 md:pb-32">
        <div className="flex flex-col">
          <Carousel carousel={heroInfo} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 w-full h-auto gap-20">
        <div className="md:col-span-2 flex flex-col items-start">
          <div className="pb-12">
            <h2 className="font-serif text-2xl font-semibold">Destinations</h2>
          </div>
          <div className="flex flex-col">
            {homeDestination.map((destination, idx) => {
              return (
                <div key={idx} className="pb-6">
                  <Link to={`/${destination.slug}`}>
                    <img
                      src={destination.featurePhoto.url}
                      alt={destination.title}
                      className="object-cover w-screen h-auto"
                    />
                    <h3 className="font-medium text-lg py-4">
                      {destination.title}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-1">
          <Featured featured={featured} />
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => <title>Home</title>;

export const homePageQuery = graphql`
  query homePageQuery {
    allContentfulHomeHero {
      nodes {
        intro {
          raw
        }
        title
        datePosted
        photo {
          url
        }
      }
    }
    allContentfulHomepageDestination {
      nodes {
        slug
        id
        title
        featurePhoto {
          url
        }
      }
    }
    allContentfulFeatured {
      nodes {
        slug
        title
        previewPhoto {
          url
        }
        intro {
          raw
        }
      }
    }
    allContentfulDestinations {
      nodes {
        slug
        title
        previewPhoto {
          url
        }
      }
    }
  }
`;
