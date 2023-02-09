import React from "react";
import Layout from "../components/layout";
import Nav from "../components/Nav";

export default function travelTips() {
  return (
    <>
      <Layout>
        <Nav />
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    </>
  );
}

export const Head = () => <title>Travel Tips</title>;
