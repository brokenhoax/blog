"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navbar/NavBar";

function Home() {
  const posts = [
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
      path: "/dark-mode",
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
      path: "/react-components",
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
      path: "/figma-slider",
    },
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
      path: "/ready-set-go",
    },
  ];

  return (
    <>
      <NavBar></NavBar>
      <main id="blog" className="section">
        <div className="flex flex-col px-8 md:w-700">
          {/* Author Data */}
          {/* <div className="author">
            <Image
              src={`/images/headshot.jpg`}
              alt={"A close up picture of Andrew Kraus"}
              width="921"
              height="919"
              className="headshot"
              priority
            ></Image>
            <div className="contact">
              <div className="authorName">Andrew Kraus</div>
              <div className="linkedIn">@brokenhoax</div>
            </div>
          </div> */}
          {/* Posts */}
          <ul className="posts">
            {posts.map((post, index) => (
              <li key={index}>
                <div className="postsWrapper">
                  {/* Post Number */}
                  <div className="postNumber">
                    <div className="postIndex">{index + 1}</div>
                  </div>
                  {/* Post Body */}
                  <div className="postList">
                    <Link href={post.path} className="postLink">
                      {/* Title */}
                      <div className="postTitle">{post.title}</div>
                      <div className="postData">
                        {/* Tagline */}
                        <div className="postTagline">{post.tagline}</div>
                        {/* Minutes */}
                        <div className="postLength">
                          {post.length.minutes} mins
                        </div>
                      </div>
                      <div className="postDate">{post.date}</div>
                    </Link>
                  </div>
                </div>
                <hr className="faintDivider"></hr>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
