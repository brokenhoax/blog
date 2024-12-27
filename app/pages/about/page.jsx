import React from "react";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.css";

function About() {
  return (
    <section className="section">
      <h1>About</h1>
      {/* Headline */}
      <div className="block border-b border-accent"></div>
      <div>
        <h2 className={`${styles.aboutTheWriter} text-accent text-regular`}>
          Kraus Cloud
        </h2>
        <p className="italic">
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
        <div className="faintDivider block border-b border-accent"></div>
        <h2 className={`${styles.aboutTheWriter} text-accent text-regular`}>
          The Writer
        </h2>
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
          TailwindCSS, Node, pfSense, Proxmox, Red Hat to name a few. Oh, yeah,
          and a lot of coffee and late nights.
        </p>
      </div>
    </section>
  );
}

export default About;
