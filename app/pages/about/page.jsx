import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <section className="section">
      <h1>About</h1>

      <p className="dateStamp text-accent">June 5th, 2022</p>
      <FontAwesomeIcon icon={faXTwitter} />
      <div className="border-b border-accent"></div>
      {/* Headline */}
      <div className="headlineWrapper">
        <p className="headline">
          My name is Andrew Kraus and I enjoy all things tech and design. I have
          learned most of what I know on those subjects from strangers on the
          internet and mostly for free. To return the favor, I've built out my
          own corner of the web to share what I've learned.
        </p>
        <p className="headline">
          Kraus Cloud is meant to be educational, is designed for readers, and
          its content will include subjects such as web development, web design,
          user experience, cybescurity, networking, linux, and more!
        </p>
      </div>
      <div className="block border-b border-accent"></div>
      <h3 className="text-accent">About the Writer</h3>
      <h4 className="font-bold ">Andrew Kraus</h4>
      <p>
        Understanding the intersection of business, people, and technology
        requires a good mix of hard and soft skills and a lot of practice.
        Eighteen years into my career and I've worked in tech as a reseller, a
        network architect, a manufacturer representative, and, most recently, a
        software engineer. My employers have been some of the largest and most
        storied in the business (IBM) to some of the smaller/more niche players
        vying to make their mark (Convr).
      </p>
      <p>
        Like my experience, my skills are diverse, but the common threads
        throughout are my desire to problem solve, the satisfaction I get from
        helping others, and, of course, my love of technology. Thanks for
        stopping by!
      </p>
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
