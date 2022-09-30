import React from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Layout from "../components/layout";

export default function destinationPost({ data }) {
  const { previewPhoto, title, topDestination } = data.contentfulDestinations;

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
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h4 className="pt-8 pb-4 text-2xl">{children}</h4>;
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
          {previewPhoto && (
            <img
              src={previewPhoto.url}
              alt="featured"
              className="w-full pb-8"
            />
          )}
          {title && (
            <p className="text-center font-serif text-4xl pt-16 pb-8">
              {title}
            </p>
          )}
          {topDestination ? (
            <div>{renderRichText(topDestination, options)}</div>
          ) : (
            <p className="py-8">🫣 something went wrong, try some other pages</p>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const Head = ({ data }) => {
  const title = data.contentfulDestinations;
  <title>{title}</title>;
};

export const pageQuery = graphql`
  query destinationPostQuery($destinationPostId: String!) {
    contentfulDestinations(id: { eq: $destinationPostId }) {
      slug
      title
      topDestination {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            url
            contentful_id
          }
        }
      }
      previewPhoto {
        url
      }
    }
  }
`;
