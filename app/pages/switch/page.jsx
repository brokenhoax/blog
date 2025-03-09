import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import ToggleImage from "../../components/toggleImage/ToggleImage";
import TableOfContents from "../../components/toc/TableOfContents";

function Switch() {
  const images = [
    {
      id: "1",
      imagePath: "/images/slider_handle.webp",
      imageAltText: "Figma slider handle",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "2",
      imagePath: "/images/slider_handle.webp",
      imageAltText: "Figma slider handle",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/slider_bar.webp",
      imageAltText: "Slider bar",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "4",
      imagePath: "/images/interactions.webp",
      imageAltText: "Figma slider interactions",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "5",
      imagePath: "/images/constraints_zero.webp",
      imageAltText: "Figma empty slider constraints",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "6",
      imagePath: "/images/constraints_half.webp",
      imageAltText: "Figma half slider constraints",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/constraints_full.webp",
      imageAltText: "Figma full slider constraints",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/slider_mov.gif",
      imageAltText: "Range slider in action",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/constraints.webp",
      imageAltText: "Constraints close up",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
  ];
  const toc = (
    <ol className="orderedList">
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/figma-slider#components-and-variants">
          Components and Variants
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/figma-slider#slider-handle">
          Slider Handle
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/figma-slider#slider-bar">
          Slider Bar
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/figma-slider#interactions">
          Interactions
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/figma-slider#constraints">
          Constraints
        </Link>
      </li>
    </ol>
  );
  return (
    <>
      <NavBar></NavBar>
      <section className="section motion-preset-focus">
        {/* Title */}
        <h1 id="top" className="text-accent">
          Switch
        </h1>
        {/* Subtitle */}
        <div>
          <h2>Connect your network</h2>
          <p className="dateStamp text-accent">February 16th, 2025</p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Headline */}
        <div className="headlineWrapper">
          <p className="headline">TBD</p>
        </div>
        {/* Post Image */}
        <div className="imageWrapper"></div>
        {/* Table of Contents */}
        <TableOfContents params={toc}></TableOfContents>
        {/* TBD */}
        <div>
          <h3 id="components-and-variants" className="text-accent">
            TBD
            <span>
              <Link scroll={true} href="/pages/figma-slider#title">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>tbd</p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Switch;
