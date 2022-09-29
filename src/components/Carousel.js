import * as React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

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
        <p className="text-sm">{children}</p>
      ),
    },
  };

  // console.log(carousel);
  return (
    <>
      <section className="flex flex-col justify-center items-end">
        <div className="object-cover mb-16">
          {carousel.map((carousel, idx) => {
            return (
              <div className="" key={idx}>
                {idx === index && (
                  <div className="relative w-full flex flex-col items-center">
                    <img
                      src={carousel.photo.url}
                      alt={carousel.title}
                      className="object-cover w-screen h-auto"
                    />
                    <div className="absolute -bottom-24 w-3/4 flex flex-col bg-creambg py-8 px-12">
                      <h5 className="text-xs font-semibold">
                        {carousel.datePosted}
                      </h5>
                      <h3 className="text-2xl uppercase py-3">
                        {carousel.title}
                      </h3>
                      {carousel.intro && (
                        <span>{renderRichText(carousel.intro, options)}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-8">
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
