"use client";
import React from "react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
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
      tagline: "More than just a firewall.",
      path: "/pages/pfsense",
      imagePath: "/images/doomsday-dood.jpg",
      imageAltText: "Comic book characters",
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
      imagePath: "/images/beaker.png",
      imageAltText: "Lab beaker",
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
      imagePath: "/images/code-photo.png",
      imageAltText: "Code wallpaper",
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
      tagline: "Create a slider in Figma.",
      path: "/pages/figma-slider",
      imagePath: "/images/doomsday-dood.jpg",
      imageAltText: "Comic book characters",
    },
  ];

  // const ref = useRef(null);

  // useEffect(() => {
  //   // let highlightedPost = document.getElementById("post1");
  //   // highlightedPost.currentTarget.className += " active";
  // }, []);

  return (
    <div className={`${styles.homepage} section`}>
      <Head>
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
      <p className={`${font.className} ${styles.postsMessage} text-accent`}>
        Latest posts...
      </p>
      <ul className={`${styles.posts}`}>
        {posts.map((post, index) => (
          <li key={index} className={`${styles.postsContainer}`}>
            <Link href={post.path}>
              {/* Hover Background */}
              <div
                className={`${styles.postBackground} bg-subtle border border-accent`}
              ></div>
              {/* Post Detail */}
              <div
                id={`post${index}`}
                className={`${styles.postWrapper} hover:text-white`}
              >
                {/* Post Image */}
                <div className={`${styles.postImageContainer}`}>
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
                    <div className={`${styles.postTagline} text-accent italic`}>
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
    </div>
  );
}

export default Home;
