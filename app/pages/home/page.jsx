"use client";
import React from "react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";

function Home() {
  const posts = [
    {
      id: "4",
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
      id: "3",
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
    {
      id: "2",
      title: "React Components",
      date: "5-5-2021",
      length: {
        minutes: "5",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 1,
      tagline: "DRY your code with React components.",
      path: "/pages/react-components",
      imagePath: "/images/code-photo.png",
      imageAltText: "Comic book characters",
    },

    {
      id: "1",
      title: "Dark Mode",
      date: "5-5-2021",
      length: {
        minutes: "5",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 1,
      tagline: "Dark mode is stupid easy.",
      path: "/pages/dark-mode",
      imagePath: "/images/dark-mode-monkey.png",
      imageAltText: "Comic book characters",
    },
  ];

  // const ref = useRef(null);

  // useEffect(() => {
  //   // let highlightedPost = document.getElementById("post1");
  //   // highlightedPost.currentTarget.className += " active";
  // }, []);

  return (
    <div className="section">
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
      <p className={`${styles.postsMessage} text-accent`}>Latest posts...</p>
      <ul className={`${styles.posts}`}>
        {posts.map((post, index) => (
          <li key={index} className={`${styles.postsContainer}`}>
            {/* Hover Background */}
            <div className={`${styles.postBackground} bg-subtle`}></div>
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
                ></Image>
              </div>
              {/* Post Body */}
              <div className={`${styles.postMain}`}>
                <Link href={post.path} className="postLink">
                  <div className={`${styles.postLevel}`}>
                    {/* Date */}
                    <div className={`${styles.postDate} text-accent`}>
                      {post.date}
                    </div>
                    <span className={`${styles.postDateLengthSpacer}`}>|</span>
                    {/* Minutes */}
                    <div>{post.length.minutes} mins</div>
                  </div>
                  {/* Title */}
                  <div className={`${styles.postTitle} text-secondary`}>
                    {post.title}
                  </div>
                  {/* Tagline */}
                  <div className={`${styles.postTagline} text-accent`}>
                    {post.tagline}
                  </div>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
