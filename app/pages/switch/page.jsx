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
      imagePath: "/images/kraus-cloud-switch-close.webp",
      imageAltText: "Figma slider handle",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "2",
      imagePath: "/images/kraus-cloud-windows-device-manager.webp",
      imageAltText: "Windows Device Manager > USB Serial Port (COM5)",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/kraus-cloud-putty.webp",
      imageAltText: "Putty Session Configuration",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/kraus-cloud-putty-session.webp",
      imageAltText: "Putty Session",
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
        <Link scroll={true} href="/pages/switch#choose-your-hardware">
          Choose Your Hardware
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#serial">
          Connect Via Console (Serial) Cable
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#change-context">
          Change Context
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#view-menu">
          View Menu
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#basic-setup">
          Basic Setup
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#create-vlans">
          Create VLANs
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#basic-make-trunk-interface">
          Make Trunk Interface
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#assign-vlans-to-interfaces">
          Assign VLANs to Interfaces
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#sntp">
          Simple Network Time Protocol (SNTP)
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#netgate">
          Connect Switch to Security Appliance (Netgate)
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#set-management-vlan">
          Set Management VLAN
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#ssh">
          Connect Via Ethernet Cable (SSH)
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#disable-ip-routing">
          Disable IP Routing
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#factory-reset">
          Factory Reset
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#backup-configuration">
          Backup Configuration
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#next-steps">
          Next Steps
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#useful-commands">
          Useful Commands
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
          <Image
            src={images[0].imagePath}
            width={images[0].width}
            height={images[0].height}
            sizes={images[0].sizes}
            style={images[0].style}
            alt={images[0].imageAltText}
            priority={images[0].priority}
            quality={100}
            decoding="sync"
            loading="eager"
          ></Image>
          <p className="headline">
            Our Netgate security appliance comes with four wired ethernet
            interfaces, but one is already in use as our uplink and the other
            three aren't enough to meet our lab's needs. We're going to need
            more interfaces so we'll be connecting an 8-port gigabit ethernet
            switch to our lab in this post. In fact, we'll be doing a lot more
            than just connecting our switch to another device. We'll be dividing
            up eight (8) of the ten (10) interfaces into four (4) separate
            Virtual Local Area Networks (VLANs) and also applying multiple
            configurations to improve our lab's security posture while we're at
            it.
          </p>
          <p className="headline">
            This post covers a ton of critical Networking 101 fundamentals and
            also provides a lot hands-on experience. By the end, you'll have the
            network and security foundation for your lab in place and a decent
            amount of networking and network security experience as a cherry on
            top.
          </p>
        </div>
        {/* Post Image */}
        <div className="imageWrapper"></div>
        {/* Table of Contents */}
        <TableOfContents params={toc}></TableOfContents>
        {/* Choose Your Hardware */}
        <div>
          <h3 id="choose-your-hardware" className="text-accent">
            Choose Your Hardware
            <span>
              <Link scroll={true} href="/pages/switch#toc">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Hands-on networking experience is priceless because, these days, an
            understanding of networking is encouraged if not outright required
            in the tech industry. The network touches everything and if you want
            to build more complex systems in the future then you'll need to know
            how to interconnect them. That said…
          </p>
          <p>
            The only piece of legacy hardware I'm using in this lab series is my
            HP 2915al switch. The HP 2915al is a little over 14 years old at
            this point but, the concepts in this lab are still very relevant.
            Plus, our configuration requirements are minimal and pretty much any
            small switch (8-10 interfaces) will do for our lab so it won't be
            difficult to find a substitute.
          </p>
          <p>
            If you're looking for a recommendation, I've suggested the Cisco
            Catalyst 1200 series switch in the first post in the series titled
            “Gear Up”. Finally, keep in mind that while the below instructions
            and commands will not be compatible with a Cisco 1200 series switch,
            it will be a worthy challenge to similarly configure a different
            switch. Let's get networking!
          </p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Connect Via Console (Serial) Cable */}
        <div>
          <h3 id="serial" className="text-accent">
            Connect Via Console (Serial) Cable
            <span>
              <Link scroll={true} href="/pages/switch#toc">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Assuming our switch is powered on and we have a console connection
            established between our PC and our HP 2915 switch, we'll want to
            launch PuTTY and establish a serial connection.
          </p>
          <p>
            With PuTTY open, under “Session”, select “Serial” for the
            “Connection type”, confirm your “Serial line” using Windows Device
            Manger, and click “Open”.
          </p>
          <p>
            If a blank Putty terminal window opens, that's a good thing! Just
            left-click the blank terminal, hit “enter” on your keyboard a few
            times to help kick in the Serial connection and you should see a
            prompt load.
          </p>
          <ToggleImage params={images["1"]}></ToggleImage>
          <ToggleImage params={images["2"]}></ToggleImage>
          <ToggleImage params={images["3"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* TBD */}
        <div>
          <h3 id="choose-your-hardware" className="text-accent">
            TBD
            <span>
              <Link scroll={true} href="/pages/switch#toc">
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
