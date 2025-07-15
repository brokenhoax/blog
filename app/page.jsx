"use client";

import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./services/api";
import styles from "./Home.module.css";
import "./global.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th"; // Special case for 11th, 12th, 13th
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function formatDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Determine the appropriate suffix for the day
    const daySuffix = getDaySuffix(day);

    return `${month} ${day}${daySuffix}, ${year}`;
  }

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th"; // Special case for 11th, 12th, 13th
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  // Example usage
  const date = new Date();
  const todayDate = formatDate(date);

  return (
    <div>
      {/* Video Component */}
      <div className={`videoContainer`}>
        <video
          src={(require = "/klouds.mp4")}
          className={`backgroundVideo`}
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
      <div className="gridContainer">
        <div className="leftSidebar"></div>
        <section className={"main section"}>
          {/* Title */}
          {/* Logo */}
          <h1 id="top" className="text-accent">
            Kraus Cloud
          </h1>
          {/* Subtitle */}
          <div>
            <h2>Build your own cloud</h2>
            <p className="dateStamp text-accent">{todayDate}</p>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Divider */}
          {/* <div className="divider border-b border-accent pb-2 opacity-50"></div> */}
          <ul className={`${styles.posts}`}>
            {posts.map((post, index) => (
              <li
                key={index}
                className={`${styles.postsContainer} outline-2 hover:outline-dotted outline-accent rounded-md`}
              >
                <Link
                  href={post.path}
                  className={`group ${styles.postsLinkContainer}`}
                >
                  {/* Divider */}
                  {/* <div className="border-b border-accent opacity-50"></div> */}
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
                        priority={post.priority}
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
                          <div className={`${styles.postDate}`}>
                            {post.date}
                          </div>
                          <span
                            className={`${styles.postDateLengthSpacer} text-accent`}
                          >
                            |
                          </span>
                          {/* Minutes */}
                          <div
                            className={`${styles.postLength} text-accent italic`}
                          >
                            {post.length.minutes} mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Post Text Preview */}
                  <div className={`${styles.postsTextPreview}`}>
                    {post.previewText}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <div className={`rightSidebar`}>
          <NavBar></NavBar>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
