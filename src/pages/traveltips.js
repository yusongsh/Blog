import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function travelTips() {
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
        <h1>Page underconstruction</h1>
      </Layout>
    </>
  );
}

export const Head = () => <title>Travel Tips</title>;
