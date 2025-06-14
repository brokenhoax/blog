"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Link from "next/link";
import Callout from "../../components/callout/Callout";
import { faBullhorn, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faBluesky,
  faGithub,
  faLinkedin,
  faSquareTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.css";

const headshot = {
  id: "1",
  imagePath: "/images/kraus.webp",
  imageAltText: "Andrew Kraus",
  width: 0,
  height: 0,
  sizes: "100%",
  style: { width: "100%", height: "auto" },
  priority: true,
};

function About() {
  let krausGitHubReviewed = null;
  let krausLinkedInReviewed = null;
  let krausXReviewed = null;
  let krausBlueskyReviewed = null;
  const [linkedInReviewed, setLinkedInReview] = useState(null);
  const [gitHubReviewed, setGitHubReview] = useState(null);
  const [xReviewed, setXReview] = useState(null);
  const [blueSkyReviewed, setBlueSkyReview] = useState(null);

  const reviewChecker = (param, func) => {
    let reviewed = window.localStorage.getItem(param);
    if (reviewed === "true") {
      func(true);
    } else {
      func(false);
    }
  };

  useEffect(() => {
    reviewChecker("krausLinkedInReviewed", setLinkedInReview);
  }, []);

  useEffect(() => {
    reviewChecker("krausGitHubReviewed", setGitHubReview);
  }, []);

  useEffect(() => {
    reviewChecker("krausXReviewed", setXReview);
  }, []);

  useEffect(() => {
    reviewChecker("krausBlueSkyReviewed", setBlueSkyReview);
  }, []);

  const socialTrackerMessage = (reviewStatus, param) => {
    if (reviewStatus) {
      return (
        <div className={`${styles.socialTrackerMessageReviewed} bg-subtle`}>
          <div className={`${styles.socialTrackerStatusMessage}`}>Reviewed</div>
        </div>
      );
    } else {
      return (
        <div className={`${styles.socialTrackerMessage} bg-subtle`}>
          <div className={`${styles.socialTrackerStatusMessage}`}>{param}</div>
        </div>
      );
    }
  };

  function trackSocial(param) {
    if (param === "github") {
      krausGitHubReviewed = localStorage.getItem("krausGitHubReviewed");
      if (krausGitHubReviewed === "true") {
        return;
      } else {
        localStorage.setItem("krausGitHubReviewed", "true");
        setGitHubReview(!gitHubReviewed);
      }
    }
    if (param === "linkedin") {
      krausLinkedInReviewed = localStorage.getItem("krausLinkedInReviewed");
      if (krausLinkedInReviewed === "true") {
        return;
      } else {
        localStorage.setItem("krausLinkedInReviewed", "true");
        setLinkedInReview(!krausLinkedInReviewed);
      }
    }
    if (param === "x") {
      krausXReviewed = localStorage.getItem("krausXReviewed");
      if (krausXReviewed === "true") {
        return;
      } else {
        localStorage.setItem("krausXReviewed", "true");
        setXReview(!xReviewed);
      }
    }
    if (param === "bluesky") {
      krausBlueskyReviewed = localStorage.getItem("krausBlueskyReviewed");
      if (krausBlueskyReviewed === "true") {
        return;
      } else {
        localStorage.setItem("krausBlueskyReviewed", "true");
        setBlueSkyReview(!blueSkyReviewed);
      }
    }
  }

  const today = new Date();
  const todayDate = today.toDateString();

  return (
    <div>
      {/* Video Component */}
      <div className={`videoContainer`}>
        <video
          src={(require = "/klouds.mp4")}
          className={`backgroundVideo`}
          autoPlay
          playsinline
          muted
          loop
        ></video>
      </div>
      {/* Post */}
      <div className="gridContainer">
        <div className={`leftSidebar`}></div>
        <div className={`main`}>
          <section className={`section motion-preset-focus`}>
            {/* Title */}
            <h1 className="text-accent">About</h1>
            <h2>About Kraus Cloud</h2>
            <p className="dateStamp  bg-gradient-to-r from-accent to-subtle text-transparent bg-clip-text">
              {todayDate}
            </p>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
            {/* About Kraus Cloud */}
            <div className={`${styles.aboutKrausCloud}`}>
              {/* Logo */}
              {/* <div className={`${styles.logoWrapper}`}>
              <svg
                width="100%"
                viewBox="0 0 585 423"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles.logo} fill-accent text-transparent bg-clip-text motion-preset-blur-right`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M293.162 0.921282C275.666 2.51228 251.899 7.57528 236.198 13.0583C227.663 16.0383 211.111 24.2463 198.356 31.8243C180.77 42.2723 159.855 62.4813 147.642 80.8273C133.311 102.353 127.168 122.175 127.172 146.87C127.178 182.135 140.901 215.31 162.636 232.607C178.965 245.601 197.549 252.313 228.759 256.489L231.855 256.903L232.491 269.448C233.247 284.368 234.63 288.209 239.87 289.939C243.082 290.999 250.617 290.748 251.824 289.541C252.098 289.267 251.563 287.885 250.635 286.469C249.438 284.643 248.792 280.837 248.411 273.382C247.909 263.546 247.997 262.87 249.768 262.865C255.601 262.849 291.285 260.72 300.662 259.828L311.662 258.782L317.662 252.886L323.662 246.991L326.023 248.93C328.891 251.287 338.811 251.6 344.786 249.522C352.13 246.969 354.162 246.707 354.162 248.316C354.162 250.731 357.593 251.87 364.874 251.87C369.644 251.87 372.438 251.365 374.098 250.202C375.762 249.036 378.171 248.604 382.103 248.764C385.243 248.892 389.804 248.289 392.428 247.398C396.523 246.008 397.421 245.985 399.395 247.224C404.677 250.537 414.323 249.933 418.509 246.028C420.399 244.265 421.269 244.134 425.63 244.955C431.851 246.127 439.892 244.744 446.281 241.403L450.981 238.945L452.572 241.372C454.401 244.165 454.61 245.265 453.138 244.355C452.574 244.007 450.753 244.021 449.09 244.386C444.719 245.346 446.929 247.472 453.774 248.893C458.538 249.882 460.954 249.693 472.778 247.402C486.021 244.836 508.723 238.778 512.01 236.932C513.523 236.082 513.512 235.947 511.879 235.317C510.848 234.921 504.302 236.338 496.379 238.673C483.17 242.566 473.608 244.87 470.66 244.87C469.888 244.87 468.554 243.39 467.695 241.581C466.837 239.772 464.758 236.622 463.075 234.581C460.197 231.09 459.68 230.871 454.339 230.885C447.824 230.903 444.694 232.213 447.162 233.889C448.459 234.77 448.392 235.124 446.662 236.503C445.562 237.38 442.257 239.224 439.317 240.601C432.732 243.684 429.162 242.771 429.162 238.003C429.162 235.456 428.715 235.009 425.578 234.42C421.484 233.652 415.999 234.59 414.954 236.236C414.565 236.849 414.896 238.342 415.69 239.553C417.027 241.594 416.916 241.909 414.178 243.859L411.223 245.963L410.709 243.666C410.426 242.403 410.3 239.795 410.428 237.87L410.662 234.37L405.215 234.061C396.58 233.571 395.327 234.184 394.969 239.081C394.673 243.135 394.498 243.333 389.959 244.737C384.582 246.401 382.162 245.351 382.162 241.355C382.162 238.927 380.47 237.87 376.58 237.87C375.25 237.87 374.162 237.42 374.162 236.87C374.162 236.32 372.025 235.872 369.412 235.874C363.985 235.878 359.443 238.219 356.108 242.73C354.839 244.446 353.316 245.483 352.515 245.175C351.32 244.716 345.841 245.716 339.969 247.465C338.569 247.881 338.222 247.136 337.969 243.169L337.662 238.37L331.235 238.068L324.809 237.765L316.735 245.733L308.662 253.701L293.936 254.405C285.836 254.793 275.818 254.792 271.674 254.403L264.139 253.697L278.389 244.183C293.985 233.772 311.904 220.535 319.54 213.786C326.703 207.455 334.485 197.793 333.342 196.65C332.818 196.126 328.788 195.45 324.388 195.148L316.387 194.6L310.527 200.985C295.029 217.869 284.841 227.731 276.03 234.377C265.378 242.412 251.944 250.87 249.836 250.87C248.726 250.87 248.493 246.608 248.569 227.665L248.662 204.459L245.483 203.54C243.735 203.035 240.312 202.92 237.878 203.285L233.451 203.949L232.931 228.452C232.644 241.929 232.173 253.192 231.883 253.482C231.053 254.313 213.662 251.06 207.083 248.843C190.238 243.169 175.615 233.409 165.915 221.369C157.484 210.904 149.646 192.595 145.579 173.87C143.151 162.69 142.612 138.529 144.532 126.87C153.721 71.0423 206.724 21.4773 272.21 7.47428C291.215 3.41028 301.394 2.56228 324.471 3.12428C366.062 4.13528 402.147 12.7513 443.24 31.4803C475.401 46.1373 503.455 65.1993 526.227 87.8643C546.054 107.599 558.004 124.72 567.793 147.417C577.401 169.694 581.316 188.481 581.328 212.37C581.342 239.234 577.507 257.215 567.252 278.37C559.471 294.422 551.343 305.527 535.182 322.183C506.05 352.208 474.813 371.07 426.662 387.71C400.744 396.667 390.274 398.87 373.622 398.87C359.458 398.87 353.417 397.735 344.662 393.43C335.164 388.759 330.026 383.188 323.735 370.735L318.498 360.37H313.58H308.662L308.362 365.552C308.098 370.108 307.563 371.234 303.929 374.868C298.95 379.847 281.415 391.717 272.272 396.298C262.723 401.082 237.919 410.437 227.025 413.363C204.037 419.536 187.723 421.499 172.053 419.978C159.501 418.759 152.88 416.477 142.796 409.894C132.962 403.474 128.072 398.948 121.153 389.859C107.847 372.378 104.302 359.569 106.364 336.411C107.165 327.415 107.84 324.091 109.048 323.198C111.529 321.364 109.139 319.67 103.275 319.107C96.7279 318.478 93.5289 319.357 92.8449 321.973C92.3039 324.044 91.9749 324.081 79.9759 323.401C63.9329 322.493 55.2569 320.683 46.6559 316.45C31.9549 309.215 22.5189 295.837 18.0349 275.87C14.9569 262.168 15.0049 238.4 18.1379 224.391C25.2229 192.716 43.6159 161.363 68.6959 138.208C78.8849 128.802 94.4049 117.132 97.6619 116.428C98.7619 116.19 100.965 115.717 102.557 115.377C107.444 114.334 103.851 112.38 97.2089 112.47C87.5589 112.601 74.4419 120.342 55.2099 137.257C28.6329 160.633 8.32388 194.813 1.66988 227.37C-0.559123 238.273 -0.556123 262.58 1.67588 273.37C3.70988 283.205 8.37988 294.69 12.5919 300.211C16.6049 305.473 25.6739 312.798 33.0279 316.718C44.0759 322.606 61.4669 325.816 82.5289 325.853C92.2959 325.87 92.3879 325.893 91.7029 328.12C90.2999 332.685 89.8999 355.294 91.1189 361.164C93.7969 374.061 107.791 394.83 119.791 403.718C140.883 419.341 156.54 423.762 186.589 422.58C208.365 421.724 229.532 416.964 255.162 407.158C263.137 404.107 272.362 400.259 275.662 398.606C283.269 394.797 299.929 383.708 305.774 378.563C308.235 376.396 310.358 374.792 310.492 374.997C318.427 387.164 327.691 393.976 342.162 398.284C355.175 402.158 386.04 402.167 403.261 398.301C407.332 397.388 421.462 392.827 434.662 388.167C479.485 372.342 508.07 355.099 536.188 326.922C564.165 298.886 577.316 274.591 583.307 239.87C584.06 235.508 584.608 224.212 584.618 212.87C584.632 196.495 584.269 191.554 582.352 182.036C575.655 148.783 560.495 119.151 536.735 92.8703C523.51 78.2423 501.715 60.3173 483.162 48.8103C462.785 36.1723 425.814 19.3423 404.662 13.0763C368.912 2.48628 326.644 -2.12172 293.162 0.921282ZM370.068 247.483C368.605 249.246 367.895 248.729 368.743 246.519C369.089 245.618 369.796 245.144 370.315 245.465C370.878 245.813 370.778 246.628 370.068 247.483Z"
                />
              </svg>
            </div> */}
              <div className={`${styles.krausCloudWrapper}`}>
                <p className="italic">
                  Kraus Cloud is an educational tech blog. It explores topics
                  such as home labs, web development, web design, cybersecurity,
                  networking, linux, and other similar subjects. If you're
                  interested in gaining experience with any of these topics, no
                  matter what your skill level, then you've come to the right
                  place.
                </p>
                <p className="italic">
                  Kraus Cloud is self-hosted and serves as a guide for you to
                  build your own Cloud. By following the free content on this
                  site, you can build your own home lab, website, and personal
                  cloud and you'll learn a lot of valuable skills along the way.
                  Kraus Cloud was built using technologies including Next.js
                  (React), NodeJS, TailwindCSS, pfSense, Proxmox, Red Hat, and
                  Nginx to name a few. Also, and perhaps it goes without saying,
                  a lot of coffee and late nights.
                </p>
              </div>
            </div>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
            <div className={`${styles.disclaimer}`}>
              <Callout
                icon={faBullhorn}
                text={`It would help to have some experience with coding as well as some basic networking knowledge; however, my goal is that all content on this site be approachable for a wide range of audiences. 
                      If you don't have any exposure to coding or networking, don't sweat it. You'll be able to copy/paste 
                      and Google/YouTube your way through any project shared here.`}
              ></Callout>
            </div>
            <div className={`${styles.subHeaderWrapper}`}>
              {/* Divider */}
              <div className="divider border-b border-accent"></div>
              {/* Image */}
              {/* <div className={`${styles.parallax}`}></div> */}
              {/* About the Writer */}
              <div className={`${styles.writerWrapper}`}>
                <h2 className={`${styles.subHeader}`}>About the Writer</h2>
                <div>
                  <p>
                    My name is Andrew Kraus and I enjoy all things tech and
                    design. Almost twenty years in to my career and I've worn
                    many hats. I've been a tech seller, a tech buyer, a creator
                    and a user. My employers have been some of the largest and
                    most storied in the business (IBM) to some of the
                    smaller/more niche players vying to make their mark (Convr).
                  </p>
                  <p>
                    That said, most of what I know I've learned from strangers
                    on the internet and mostly for free. To return the favor and
                    to share what I've learned, I've built my own Cloud.
                  </p>
                  <p>
                    If you'd like to connect professionally, please reach out
                    using the link provided below and, if you're just here out
                    of curiousity, be sure to check out{" "}
                    <Link href="/" target="_blank" className="text-accent">
                      our latest blogs
                    </Link>{" "}
                    before you go.
                  </p>
                </div>
              </div>
              {/* Let's Connect */}
              <div>
                <h3 className={`${styles.subHeader}`}>Let's Connect</h3>
                <div className={`${styles.socialIconsWrapper}`}>
                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/andrewkraus/"
                    target="_blank"
                    className={`${styles.socialTracker} ${
                      linkedInReviewed ? "text-accent" : "text-secondary"
                    } bg-subtle border-2 border-subtle hover:border-subtle hover:bg-subtle hover:text-accent`}
                    onClick={() => trackSocial("linkedin")}
                  >
                    <div
                      className={`${styles.socialIcon} bg-subtle active:border-accent focus:border-accent`}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2xl"
                        fixedWidth={true}
                      ></FontAwesomeIcon>
                    </div>
                    {socialTrackerMessage(linkedInReviewed, "LinkedIn")}
                  </Link>
                  {/* GitHub */}
                  <Link
                    href="https://github.com/brokenhoax"
                    target="_blank"
                    className={`${styles.socialTracker} ${
                      gitHubReviewed ? "text-accent" : "text-secondary"
                    } bg-subtle border-2 border-subtle hover:border-subtle hover:bg-subtle hover:text-accent`}
                    onClick={() => trackSocial("github")}
                  >
                    <div
                      className={`${styles.socialIcon} bg-subtle active:border-accent focus:border-accent`}
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2xl"
                        fixedWidth={true}
                      ></FontAwesomeIcon>
                    </div>
                    {socialTrackerMessage(gitHubReviewed, "GitHub")}
                  </Link>
                </div>
                <div className={`${styles.socialIconsWrapper}`}>
                  {/* X */}
                  <Link
                    href="https://x.com/krauscloud"
                    target="_blank"
                    className={`${styles.socialTracker} ${
                      xReviewed ? "text-accent" : "text-secondary"
                    } bg-subtle border-2 border-subtle hover:border-subtle hover:bg-subtle hover:text-accent`}
                    onClick={() => trackSocial("x")}
                  >
                    <div
                      className={`${styles.socialIcon} bg-subtle active:border-accent focus:border-accent`}
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        size="2xl"
                        fixedWidth={true}
                      ></FontAwesomeIcon>
                    </div>
                    {socialTrackerMessage(xReviewed, "X")}
                  </Link>
                  {/* Bluesky */}
                  <Link
                    href="https://bsky.app/profile/krauscloud.bsky.social"
                    target="_blank"
                    className={`${styles.socialTracker} ${
                      blueSkyReviewed ? "text-accent" : "text-secondary"
                    } bg-subtle border-2 border-subtle hover:border-subtle hover:bg-subtle hover:text-accent`}
                    onClick={() => trackSocial("bluesky")}
                  >
                    <div
                      className={`${styles.socialIcon} bg-subtle active:border-accent focus:border-accent`}
                    >
                      <FontAwesomeIcon
                        icon={faBluesky}
                        size="2xl"
                        fixedWidth={true}
                      ></FontAwesomeIcon>
                    </div>
                    {socialTrackerMessage(blueSkyReviewed, "Bluesky")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={`rightSidebar`}>
          <NavBar></NavBar>
        </div>
        <div
          className={`footer`}
        >
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default About;
