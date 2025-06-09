"use client";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import "./global.css";

function Home() {
  const posts = [
    {
      id: "5",
      title: "Lab 3 — Switch",
      date: "2-16-2025",
      length: {
        minutes: "40",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 4,
      tagline: "Connect your network.",
      path: "/pages/switch",
      imagePath: "/images/infrared-eye.webp",
      imageAltText: "Infrared eye.",
      priority: false,
      previewText: `Our Netgate security appliance comes with four wired ethernet
      interfaces, but one is already in use as our uplink and the other
      three aren't enough to meet our lab's needs. We're going to need
      more interfaces so we'll be connecting an 8-port (interface)
      gigabit ethernet switch to our firewall in this post. In fact, we'll be
      doing a lot more than just connecting our switch to our firewall. 
      Other objectives include dividing our ten (10) physical interfaces
      into five (5) separate Virtual Local Area Networks (VLANs), disabling 
      inter-VLAN routing, hardening our switch, and backing up our configuration.
      `,
    },
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
      imagePath: "/images/fire.webp",
      imageAltText: "Flame",
      priority: false,
      previewText: `pfSense running on a Netgate 4200 appliance not only provides our
      lab with network security, but it will also serve as our lab's
      core router. pfSense also boasts a lot of other functionality that
      we'll be leveraging throughout this series and beyond. The best
      part, pfSense is completely free and open source! This post is a
      bit on the longer side, but hang in there because it's chock-full
      of good stuff that's at the foundation of our home lab and core to
      learning networking and cybersecurity.`,
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
      imagePath: "/images/sparkle.webp",
      imageAltText: "Sparkle",
      priority: false,
      previewText: `pfSense running on a Netgate 4200 appliance not only provides our
      lab with network security, but it will also serve as our lab's
      core router. pfSense also boasts a lot of other functionality that
      we'll be leveraging throughout this series and beyond. The best
      part, pfSense is completely free and open source! This post is a
      bit on the longer side, but hang in there because it's chock-full
      of good stuff that's at the foundation of our home lab and core to
      learning networking and cybersecurity.`,
    },
    {
      id: "2",
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
      imagePath: "/images/spring.webp",
      imageAltText: "Spring",
      priority: false,
      previewText: `I'm building a mockup in Figma for a new feature at work and I've
      been asked to include a range slider that allows a user to change
      "synonym sensitivity" on a scale from 1 to 100. I figured building a
      slider in Figma would be a worthy challenge and one worth sharing.
      What's more, this tutorial will expose you to highly useful Figma
      concepts such as components/variants, constraints, interactions, and
      basic styling. Let's jump in!`,
    },
    {
      id: "1",
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
      imagePath: "/images/code.webp",
      imageAltText: "Code",
      priority: false,
      previewText: `So, you've dabbled with create-react-app and you're ready to build and share something amazing with the world. Now what? This post will walk you through creating a GitHub repository to manage and back up your application as well as using GitHub Pages to publish your app to the web.`,
    },
  ];

  const today = new Date();
  const todayDate = today.toDateString();

  return (
    <div className="gridContainer">
      <div className="leftSidebar"></div>
      <section className={"main section"}>
        {/* Title */}
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
                className={`group ${styles.postsLinkContainer} bg-subtle`}
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
                        <div className={`${styles.postDate}`}>{post.date}</div>
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
  );
}

export default Home;
