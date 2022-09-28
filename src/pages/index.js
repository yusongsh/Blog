import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Carousel from "../components/Carousel";

export default function IndexPage({ data }) {
  const heroInfo = data.allContentfulHomeHero.nodes;

  // console.log(`here is te data`, heroInfo);
  return (
    <Layout pageTitle={"Home Page"}>
      <section className="">
        <div className="flex flex-col">
          <Carousel carousel={heroInfo} />
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
  }
`;
