import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Nav from "../components/Nav";

export default function cherry({ data }) {
  const { blogPost, slug, thumbnail, timeStamp, title } =
    data.contentfulBlogPost;
  //   console.log(data);

  return (
    <Layout>
      <Nav />
      <BlogPost data={data} />
    </Layout>
  );
}

export const Head = () => (
  <title>A Handy Guide To Cherry Blossom in Japan</title>
);

const BlogPost = ({ data }) => {
  const { blogPost, slug, thumbnail, timeStamp } = data.contentfulBlogPost;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <div className="px-6 md:px-16">
            <p className="py-4">{children}</p>
          </div>
        );
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <div className="px-6 md:px-16 py-8">
            <h3 className="text-4xl font-semibold">{children}</h3>
          </div>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <div className="px-6 md:px-16">
            <h4 className="pt-8 pb-4 text-2xl">{children}</h4>
          </div>
        );
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        return (
          <div className="px-6 md:px-16">
            <h4 className="pt-8 pb-4 text-lg font-medium">{children}</h4>
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // console.log(node);
        return (
          <img
            src={node.data.target.url}
            alt="asset images"
            className="py-8 w-full"
          />
        );
      },
    },
  };

  return (
    <>
      <div className="bg-creambg">
        <img src={thumbnail.url} alt={slug} className="w-full" />
        <h5 className="px-6 md:px-16 pt-16 text-sm font-medium">{timeStamp}</h5>
        <div>{renderRichText(blogPost, options)}</div>
      </div>
    </>
  );
};

export const cherryPageQuery = graphql`
  query cherryPagQuery {
    contentfulBlogPost {
      blogPost {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            url
            contentful_id
          }
        }
      }
      slug
      thumbnail {
        url
      }
      title
      timeStamp
    }
  }
`;
