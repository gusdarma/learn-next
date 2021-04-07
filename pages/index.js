import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import ReactDOM from "react-dom";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  const { useRef, useEffect } = React;

  const Ball = () => {
    useEffect(() => {
      const tl = gsap.timeline();
      tl.to(".ball1", { x: 200, ease: "bounce.in", duration: 3 });
      tl.to(".ball2", { x: 200, ease: "bounce.out", duration: 3 });
      tl.to(".ball3", { x: 200, ease: "bounce.inOut", duration: 3 });

      gsap.to("#thirdCircle", {
        x: 300,
        duration: 1,
        scrollTrigger: {
          trigger: "#thirdCircle",
          markers: true,
          scrub: true,
        },
      });
    }, []);

    return <p>yeah</p>;
  };

  if (typeof window !== "undefined") {
    ReactDOM.render(<Ball />, document.getElementById("yuhu"));
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p>kle nok</p>
        <div id="" className="ball1">
          <p id="yuhu">Yeah</p>
        </div>
        <div id="" className="ball2">
          <p id="yuhu">Yeah</p>
        </div>
        <div id="" className="ball3">
          <p id="yuhu">Yeah</p>
        </div>
      </section>
      <section>
        <p>kle nok</p>
        <div id="thirdCircle" className="">
          <p id="yuhu">scroll trigger</p>
        </div>
      </section>
      <section style={{ height: 500 }}>
        <p>dummy</p>
        <div id="" className=""></div>
      </section>
    </Layout>
  );
}
