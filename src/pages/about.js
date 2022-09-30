import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Nav from "../components/Nav";

export default function about({ data }) {
  const cameraBag = data.contentfulCameraBag;
  const about = data.contentfulAbout;
  console.log(cameraBag, about);

  return (
    <>
      <Layout>
        <Nav />

        <section>
          <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:gap-16 w-full h-auto text-blue pb-16 md:pb-32">
            <div className="md:col-span-2">
              <LeftSection cameraBag={cameraBag} about={about} />
            </div>
            <div className="md:col-span-3 mb-16 md:mb-0">
              <RightSection about={about} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

const LeftSection = ({ cameraBag, about }) => {
  return (
    <>
      <div>
        <div className="flex md:justify-center items-center">
          <img
            src={about.profileMain.url}
            alt={about.title}
            className="rounded-full w-1/3 h-1/3 md:w-2/3 md:h-2/3"
          />
        </div>
        <h2 className="font-serif text-medium text-3xl capitalize pt-16 pb-8">
          What's in my camera bag
        </h2>
        <div className=" bg-creambg/60 rounded-lg px-6 py-12">
          <div className="pb-8">
            <h6 className="text-lg font-semibold pb-8">Camera Body</h6>
            <div className="flex flex-row justify-between items-center w-full pb-2">
              <p>{cameraBag.camera1}</p>
              <img
                src={cameraBag.cam1Photo.url}
                alt={cameraBag.camera1}
                className="w-16 h-16 object-cover rounded-full"
              ></img>
            </div>
            <div className="flex flex-row justify-between items-center w-full pb-2">
              <p>{cameraBag.camera2}</p>
              <img
                src={cameraBag.cam2Photo.url}
                alt={cameraBag.camera2}
                className="w-16 h-16 object-cover rounded-full"
              ></img>
            </div>
          </div>
          <div className="pb-8">
            <h6 className="text-lg font-semibold pb-8">Lenses</h6>
            <div className="flex flex-row justify-between items-center w-full pb-2">
              <p>{cameraBag.len2}</p>
              <img
                src={cameraBag.lens2Photo.url}
                alt={cameraBag.len2}
                className="w-16 h-16 object-cover rounded-full"
              ></img>
            </div>
            <div className="flex flex-row justify-between items-center w-full pb-2">
              <p>{cameraBag.lens3}</p>
              <img
                src={cameraBag.lens3Photo.url}
                alt={cameraBag.lens3}
                className="w-16 h-16 object-cover rounded-full"
              ></img>
            </div>
          </div>
          <div className="pb-8">
            <h6 className="text-lg font-semibold pb-8">Drone</h6>
            <div className="flex flex-row justify-between items-center w-full pb-2">
              <p>{cameraBag.drone1}</p>
              <img
                src={cameraBag.drone1Photo.url}
                alt={cameraBag.drone1}
                className="w-16 h-16 object-cover rounded-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RightSection = ({ about }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="py-2 font-light text-sm">{children}</p>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3 className="text-2xl font-medium">{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <h4 className="py-4 text-center">{children}</h4>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // console.log(node);
        return (
          <img src={node.data.target.url} alt="asset images" className="py-8" />
        );
      },
    },
  };

  return (
    <>
      <h1 className="font-serif text-medium text-3xl capitalize pb-8">
        My Story
      </h1>
      <div>{renderRichText(about.story, options)}</div>
    </>
  );
};

export const Head = () => <title>About</title>;

export const aboutQuery = graphql`
  query aboutQuery {
    contentfulCameraBag {
      camera1
      camera2
      lens1
      len2
      lens3
      drone1
      drone1Photo {
        url
      }
      cam1Photo {
        url
      }
      cam2Photo {
        url
      }
      lens2Photo {
        url
      }
      lens3Photo {
        url
      }
      lens2 {
        url
      }
    }
    contentfulAbout {
      title
      profileMain {
        url
      }
      story {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            url
            contentful_id
          }
        }
      }
    }
  }
`;
