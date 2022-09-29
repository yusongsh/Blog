import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export default function featuredPost({ data }) {
  const { intro, previewPhoto, slug, title } = data.contentfulFeatured;
  console.log(`featured blog`, intro, previewPhoto, slug, title);

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
          <div className="uppercase text-sm font-semibold">Featured</div>
          <div className="py-8 text-4xl font-serif">{title}</div>
          <div>{renderRichText(intro)}</div>
          <div>
            <img src={previewPhoto.url} alt={title} />
          </div>
        </section>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query featuredPostQuery($featuredPostId: String!) {
    contentfulFeatured(id: { eq: $featuredPostId }) {
      previewPhoto {
        url
      }
      slug
      title
      intro {
        raw
      }
    }
  }
`;
