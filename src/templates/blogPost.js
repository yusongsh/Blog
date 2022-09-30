import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export default function blogPost({ data }) {
  const { featurePhoto, featurePost, title, timeStamp } =
    data.contentfulHomepageDestination;

  // console.log(`blog post console here`, featurePhoto);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="py-4">{children}</p>;
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
      <Layout>
        <section>
          <div className="flex flex-row justify-between pt-16 pb-12">
            <Link to="/">
              <h1 className="text-4xl font-serif font-semibold">Travel Blog</h1>
            </Link>
          </div>
        </section>

        <section>
          <div className="flex flex-col">
            {featurePhoto && (
              <img
                src={featurePhoto.url}
                alt="featured"
                className="w-full pb-8"
              />
            )}
            {title && (
              <p className="text-center font-serif text-4xl pt-16 pb-8">
                {title}
              </p>
            )}
            {timeStamp && (
              <p className="text-sm pb-8 text-center font-semibold">
                {timeStamp}
              </p>
            )}
            {featurePost ? (
              <div>{renderRichText(featurePost, options)}</div>
            ) : (
              <p className="py-8">
                🫣 something went wrong, try some other pages
              </p>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const Head = ({ data }) => {
  const title = data.contentfulHomepageDestination;
  <title>{title}</title>;
};

export const pageQuery = graphql`
  query blogPostQuery($blogPostId: String!) {
    contentfulHomepageDestination(id: { eq: $blogPostId }) {
      title
      slug
      timeStamp
      featurePhoto {
        url
      }
      featurePost {
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
