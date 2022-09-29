import React from "react";
import { Link, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";

export default function destination({ data }) {
  const destinations = data.allContentfulDestinations.nodes;
  const featured = data.allContentfulFeatured.nodes;
  console.log(destinations);

  return (
    <>
      <Layout>
        <section>
          <div className="flex flex-row justify-between pt-16 pb-12">
            <Link to="/">
              <h1 className="text-4xl font-serif font-semibold">Travel Blog</h1>
            </Link>
          </div>
        </section>
        <PageFeatured destinations={destinations} />
        <hr className="py-8" />
        <FeaturedHorizontal featured={featured} />
      </Layout>
    </>
  );
}

const PageFeatured = ({ destinations }) => {
  return (
    <>
      <div className="mb-32 flex flex-col items-center ">
        <div className="font-serif text-2xl py-8 font-semibold">
          Top Destinations
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 h-auto">
          {destinations.map((destination, idx) => {
            return (
              <div className="flex flex-col items-center">
                <img
                  src={destination.previewPhoto.url}
                  alt={destination.title}
                />
                <h3 className="bg-cream px-6 py-6 shadow-md w-8/12 text-center -top-8 relative">
                  {destination.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const FeaturedHorizontal = ({ featured }) => {
  return (
    <>
      <div className="flex flex-col mb-32">
        <h2 className="font-serif text-2xl font-semibold pb-12">Featured</h2>
        <div className="flex flex-row gap-16 w-full h-full">
          {featured.map((feature, idx) => {
            return (
              <div key={idx} className="pb-12 w-1/3 h-auto">
                <Link to={`/${feature.slug}`}>
                  <img
                    src={feature.previewPhoto.url}
                    alt={feature.title}
                    className="object-cover"
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
};

export const destinationQuery = graphql`
  query destinationQuery {
    allContentfulDestinations {
      nodes {
        title
        previewPhoto {
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
  }
`;
