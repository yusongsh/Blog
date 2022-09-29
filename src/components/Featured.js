import React from "react";
import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function Featured({ featured }) {
  // console.log(featured);

  return (
    <>
      <div className="col-span-2 flex flex-col items-start">
        <div className="pb-12">
          <h2 className="font-serif text-2xl font-semibold">Featured</h2>
        </div>
        <div className="flex flex-col">
          {featured.map((feature, idx) => {
            return (
              <div key={idx} className="pb-12">
                <Link to={`/${feature.slug}`}>
                  <img
                    src={feature.previewPhoto.url}
                    alt={feature.title}
                    className="object-cover w-screen h-auto"
                  />
                  <h3 className="font-medium py-4">{feature.title}</h3>
                  <div className="text-xs font-light">
                    {renderRichText(feature.intro)}
                  </div>
                  <button className="pt-4 text-sm hover:underline hover:underline-offset-4 hover:text-black">
                    read more
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
