import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Featured from "../components/Featured";

export default function IndexPage({ data }) {
  const heroInfo = data.allContentfulHomeHero.nodes;
  const homeDestination = data.allContentfulHomepageDestination.nodes;
  const featured = data.allContentfulFeatured.nodes;

  // console.log(`here is the data`, featured);
  return (
    <Layout pageTitle={"Home Page"}>
      <section>
        <div className="flex flex-row justify-between pt-16 pb-12">
          <Link to="/">
            <h1 className="text-4xl font-serif font-semibold">Travel Blog</h1>
          </Link>
          <div className="flex items-center">
            <Search homeDestination={homeDestination} />
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="flex flex-col">
          <Carousel carousel={heroInfo} />
        </div>
      </section>

      <section className="grid grid-cols-3 w-full h-auto gap-20">
        <div className="col-span-2 flex flex-col items-start">
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
        <div className="col-span-1">
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
        title
        featurePhoto {
          url
        }
        slug
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
  }
`;
