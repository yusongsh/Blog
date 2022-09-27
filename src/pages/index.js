import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <div>Hello World</div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
