"use client";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Image from "next/image";
// import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";
import { Ubuntu } from "next/font/google";

// const font = Permanent_Marker({
//   subsets: ["latin"],
//   style: ["normal"],
//   weight: ["400"],
//   display: "swap",
// });

const font = Ubuntu({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

function Home() {
  const posts = [
    {
      id: "4",
      title: "Lab 2 — pfSense",
      date: "11-15-2024",
      length: {
        minutes: "60",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 4,
      tagline: "Secure your network.",
      path: "/pages/pfsense",
      imagePath: "/images/fire.jpg",
      imageAltText: "Flame",
      priority: true,
    },
    {
      id: "3",
      title: "Lab 1 — Gear Up",
      date: "10-31-2024",
      length: {
        minutes: "10",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 2,
      tagline: "Building a home lab? Let's gear up.",
      path: "/pages/lab-components",
      imagePath: "/images/sparkle.jpg",
      imageAltText: "Sparkle",
      priority: true,
    },
    {
      id: "2",
      title: "Ready Set Go",
      date: "6-3-2021",
      length: {
        minutes: "10",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 2,
      tagline: "Publish your app with GitHub Pages.",
      path: "/pages/ready-set-go",
      imagePath: "/images/code.jpg",
      imageAltText: "Code",
      priority: true,
    },
    {
      id: "1",
      title: "Figma Slider",
      date: "7-14-2022",
      length: {
        minutes: "15",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 3,
      tagline: "Create a range slider in Figma.",
      path: "/pages/figma-slider",
      imagePath: "/images/spring.jpg",
      imageAltText: "Spring",
      priority: true,
    },
  ];

  const today = new Date();
  const todayDate = today.toDateString();

  return (
    <div>
      <NavBar></NavBar>
      <section className="section">
        {/* <Head>
                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/favicons/apple-touch-icon.png"
                ></link>
                <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicons/favicon-32x32.png"
                ></link>
                <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicons/favicon-16x16.png"
                ></link>
                <link rel="manifest" href="/favicons/site.webmanifest"></link>
              </Head> 
          */}
        <h1
          className={`${styles.postsMessage} bg-gradient-to-r from-accent to-subtle text-transparent bg-clip-text`}
        >
          Welcome to Kraus Cloud
        </h1>
        <div>
          <h2 className={`${styles.postsDescription}`}>
            An educational tech blog
          </h2>
          {/* <p className="dateStamp  bg-gradient-to-r from-accent to-subtle text-transparent bg-clip-text">
              {todayDate}
            </p> */}
        </div>
        {/* Divider */}
        {/* <div className="divider border-b border-accent"></div> */}
        <ul className={`${styles.posts}`}>
          {posts.map((post, index) => (
            <li key={index} className={`${styles.postsContainer}`}>
              <Link href={post.path} className="group">
                {/* Hover Background */}
                <div
                  className={`${styles.postBackground} bg-subtle bg-gradient-to-bl from-primary to-accent/75 shadow-md`}
                ></div>
                {/* Post Detail */}
                <div
                  id={`post${index}`}
                  className={`${styles.postWrapper} group-hover:text-white`}
                >
                  {/* Post Image */}
                  <div
                    className={`${styles.postImageContainer} hover:motion-preset-shake`}
                  >
                    <Image
                      src={post.imagePath}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="100px"
                      alt={post.imageAltText}
                      className={`${styles.postImage}`}
                    ></Image>
                  </div>
                  {/* Post Body */}
                  <div href={post.path} className={`${styles.postMain}`}>
                    <div className={`${styles.postLink}`}>
                      {/* Title */}
                      <div className={`${styles.postTitle} text-secondary`}>
                        {post.title}
                      </div>
                      {/* Tagline */}
                      <div
                        className={`${styles.postTagline} text-accent italic`}
                      >
                        {post.tagline}
                      </div>
                      <div className={`${styles.postLevel}`}>
                        {/* Date */}
                        <div className={`${styles.postDate}`}>{post.date}</div>
                        <span
                          className={`${styles.postDateLengthSpacer} text-accent`}
                        >
                          |
                        </span>
                        {/* Minutes */}
                        <div>{post.length.minutes} mins</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
