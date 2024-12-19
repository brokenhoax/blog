import React from "react";
import {
  faMugHot,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.css";

function About() {
  return (
    <section className="section">
      <h1>About</h1>
      <div className={`${styles.socialLinksWrapper}`}>
        <FontAwesomeIcon
          icon={faXTwitter}
          className={`${styles.socialLinks}`}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${styles.socialLinks}`}
        />
      </div>
      <div className="border-b border-accent"></div>
      {/* Headline */}
      <div className="headlineWrapper">
        <p className="headline">
          Kraus Cloud is an educational blog designed for readers. It will
          include posts on web development, web design, user experience, home
          labs, cyberscurity, networking, linux, and more. Our content is
          written to be accessible as well as practical. If you're looking to
          get some hands-on experience with any of these areas of interest, then
          you've come to the right place no matter what your level of
          experience. If there's something you see that needs fixing, or some
          content you were hoping to find, let me know. Thanks for stopping by
          and enjoy the site!
        </p>
      </div>
      <div className="block border-b border-accent"></div>
      <div className={`${styles.aboutTheWriter}`}>
        <h2 className="text-accent">About the Writer</h2>
        <p>
          My name is Andrew Kraus and I enjoy all things tech and design.
          Eighteen years into my career and I've worked in tech as a reseller, a
          network architect, a manufacturer representative, a software engineer
          and, most recently, a systems engineer. My employers have been some of
          the largest and most storied in the business (IBM) to some of the
          smaller/more niche players vying to make their mark (Convr).
        </p>
        <p>
          Like my experience, my skills are diverse, but the common threads
          throughout are my desire to problem solve, the satisfaction I get from
          helping others, and, of course, my love of technology. I have learned
          most of what I know on those subjects from strangers on the internet
          and mostly for free. To return the favor, I've built out my own corner
          of the web to share what I've learned. Kraus Cloud is self-hosted and,
          by following the free courses on this site, you, too, can build your
          own home lab and website. Kraus Cloud was built using Next.js,
          TailwindCSS, Node, pfSense, Proxmox, Red Hat to name a few.
        </p>
        <p>Oh, yeah, and a lot of coffee and late nights.</p>
        <FontAwesomeIcon icon={faMugHot} className={`${styles.socialLinks}`} />
      </div>
      {/* Contact Details */}
      <div className="">
        <div className="flex flex-col">
          <div className="space-x-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/andrewkraus/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent text-gray-700"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/brokenhoax/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent text-gray-700"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
