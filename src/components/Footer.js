import React from "react";
import { Link } from "gatsby";
import { InstagramData } from "./InstagramData";

export default function Footer() {
  //   console.log(InstagramData);

  return (
    <>
      <div className="flex flex-col items-center">
        {/* <------- Instagram section is underneath--------> */}
        <Instagram />
        <section className="flex flex-col items-center text-sm">
          <div className="flex flex-row mt-16">
            <p className="uppercase hover:text-black px-6  ">
              <Link to="/">Home</Link>
            </p>
            <p className="uppercase  hover:text-black px-6 ">
              <Link to="/destination">Destination</Link>
            </p>
            <p className="uppercase  hover:text-black px-6  whitespace-nowrap">
              <Link to="/traveltips">Travrl tips</Link>
            </p>
            <p className="uppercase  hover:text-black px-6 ">
              <Link to="/about">About</Link>
            </p>
          </div>
          <div className="flex flex-row py-8">
            <p className="px-4 uppercase">Get in Touch:</p>
            <p className="px-4">
              <a href="">jackshi.sys@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-row">
            <p className="px-4 uppercase">
              © 2022{" "}
              <a
                href="https://yusong.space/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:bg-main hover:text-cream hover:p-2 hover:no-underline"
              >
                Designed
              </a>{" "}
              &{" "}
              <a
                href="https://github.com/yusongsh/Blog"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:bg-main hover:text-cream hover:p-2 hover:no-underline"
              >
                Developed
              </a>{" "}
              by Yusong Shi
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

const Instagram = () => {
  return (
    <div className="bg-creambg text-main flex flex-col items-center">
      <h1 className="font-serif text-2xl font-bold mb-8">
        FOLLOW ALONG ON INSTAGRAM
      </h1>
      <div className="grid grid-cols-5 gap-8 mx-auto">
        {InstagramData.map((instagram, idx) => {
          return (
            <div className="w-36 h-36" key={idx}>
              <a
                href="https://www.instagram.com/iackyshi/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagram.image}
                  alt={instagram.alt}
                  className="object-cover w-full aspect-square"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
