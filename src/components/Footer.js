import React from "react";
import { Link } from "gatsby";
import { InstagramData } from "./InstagramData";

export default function Footer() {
  //   console.log(InstagramData);

  return (
    <>
      <div className="flex flex-col items-center w-full px-4">
        {/* <------- Instagram section is underneath--------> */}
        <Instagram />
        <section className="flex flex-col items-start md:items-center text-sm">
          <div className="flex flex-col sm:flex-row mt-16 gap-2 sm:gap-6">
            <p className="uppercase hover:text-black pb-4  ">
              <Link to="/">Home</Link>
            </p>
            <p className="uppercase  hover:text-black pb-4 ">
              <Link to="/destination">Destination</Link>
            </p>
            <p className="uppercase  hover:text-black pb-4  whitespace-nowrap">
              <Link to="/traveltips">Travrl tips</Link>
            </p>
            <p className="uppercase  hover:text-black pb-4 ">
              <Link to="/about">About</Link>
            </p>
          </div>
          <div className="flex flex-row py-8">
            <p className="pr-4 uppercase">Get in Touch:</p>
            <p className="pr-4">
              <a href="">jackshi.sys@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="pr-4 uppercase">
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mx-auto w-full">
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
