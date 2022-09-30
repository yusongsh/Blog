import * as React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import { Link } from "gatsby";

export default function Carousel({ carousel, data }) {
  const [index, setIndex] = useState(0);
  const length = carousel.length - 1;
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="font-light text-sm md:font-normal">{children}</p>
      ),
    },
  };

  // console.log(carousel);
  return (
    <>
      <section className="flex flex-col justify-center items-end">
        <div className="object-cover md:mb-16">
          {carousel.map((carousel, idx) => {
            return (
              <div className="" key={idx}>
                <Link to="/cherry">
                  {idx === index && (
                    <div className="relative w-full flex flex-col items-center">
                      <img
                        src={carousel.photo.url}
                        alt={carousel.title}
                        className="object-cover w-screen h-auto"
                      />
                      <div className="md:absolute md:-bottom-36 lg:-bottom-24 md:w-3/4 flex flex-col bg-creambg py-6 px-6 md:py-8 md:px-12">
                        <h5 className="text-xs font-semibold">
                          {carousel.datePosted}
                        </h5>
                        <h3 className="text-2xl md:text-3xl uppercase py-4 md:py-6">
                          {carousel.title}
                        </h3>
                        {carousel.intro && (
                          <span>{renderRichText(carousel.intro, options)}</span>
                        )}
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:flex flex-row items-center gap-8">
          <div className="flex pointer z-10">
            <FontAwesomeIcon
              onClick={handleNext}
              icon={faArrowLeftLong}
              className="text-main"
            />
          </div>
          <div>
            <FontAwesomeIcon
              onClick={handlePrevious}
              icon={faArrowRightLong}
              className="text-main"
            />
          </div>
        </div>
      </section>
    </>
  );
}
