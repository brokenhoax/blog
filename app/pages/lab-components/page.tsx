import React from "react";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import ToggleImage from "../../components/toggleImage/ToggleImage";
import Callout from "../../components/callout/Callout";
import Image from "next/image";
import TableOfContents from "../../components/toc/TableOfContents";
import KcLink from "../../components/kclink/KcLink";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import styles from "../lab-components/LabComponents.module.css";

function LabContents() {
  const htmlContent: string[] = [
    `
    staticIPs = {
      "ubuntuWebServer": "192.168.10.4",
      "rhelAppConnectorServer": "192.168.10.5",
      "cyberPanelServer": "192.168.10.6",
      "rhelPrivateServiceEdgeServer": "192.168.10.7",
      "windowsServer2022": "192.168.10.8"
    }
    `,
  ];
  const images = [
    {
      id: "1",
      imagePath: "/images/network_diagram.webp",
      imageAltText: "Network Diagram",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "2",
      imagePath: "/images/motorola_modem.webp",
      imageAltText: "Modem — Motorola",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "15%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/netgate.webp",
      imageAltText: "Security Appliance — Netgate 4200",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "31%", height: "auto" },
      priority: true,
    },
    {
      id: "4",
      imagePath: "/images/ms01.webp",
      imageAltText: "Server - Minisforum MS-01",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "33%", height: "auto" },
      priority: true,
    },
    {
      id: "5",
      imagePath: "/images/amplifi-router.webp",
      imageAltText: "Router - Amplifi",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "18%", height: "auto" },
      priority: true,
    },
    {
      id: "6",
      imagePath: "/images/anker-ethernet-adapter.webp",
      imageAltText: "Ethernet Adapter - USB-C",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "20%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/oikwan-serial-adapter.webp",
      imageAltText: "Serial Adapter - Oikwan",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "20%", height: "auto" },
      priority: true,
    },
    {
      id: "8",
      imagePath: "/images/comptia-network-plus.webp",
      imageAltText: "Certification Book - Network+",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "9",
      imagePath: "/images/sandisk-flash-drive.webp",
      imageAltText: "Flash Drive - Sandisk 8GB",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "10",
      imagePath: "/images/proxmox.webp",
      imageAltText: "Virtualization Platform - Proxmox",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "16%", height: "auto" },
      priority: true,
    },
    {
      id: "11",
      imagePath: "/images/ubuntu.webp",
      imageAltText: "Web Server's Operating System - Ubuntu (Desktop)",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "12%", height: "auto" },
      priority: true,
    },
    {
      id: "12",
      imagePath: "/images/red-hat-logo.webp",
      imageAltText:
        "Zscaler App Connector Operating System - Red Hat Enterprise Linux",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "13",
      imagePath: "/images/pfsense-logo.webp",
      imageAltText: "Network Security Solution - pfSense",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "14",
      imagePath: "/images/nextjs-logo.webp",
      imageAltText: "React (Front-End) Framework - Next.js",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "12%", height: "auto" },
      priority: true,
    },
    {
      id: "15",
      imagePath: "/images/nginx-logo.webp",
      imageAltText: "Web Server - NGINX",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "22%", height: "auto" },
      priority: true,
    },
    {
      id: "16",
      imagePath: "/images/cisco-switch.webp",
      imageAltText: "Switch - Cisco 1200",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "33%", height: "auto" },
      priority: true,
    },
    {
      id: "17",
      imagePath: "/images/echogear-rack.webp",
      imageAltText: "Network Rack - ECHOGEAR",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "33%", height: "auto" },
      priority: true,
    },
    {
      id: "18",
      imagePath: "/images/ethernet-cables.webp",
      imageAltText: "Ethernet Cables",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "33%", height: "auto" },
      priority: true,
    },
    {
      id: "19",
      imagePath: "/images/cloudflare-logo.webp",
      imageAltText: "Cloudflare Logo",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "20",
      imagePath: "/images/zscaler-logo.webp",
      imageAltText: "Zscaler Logo",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "21",
      imagePath: "/images/okta-developer-logo.webp",
      imageAltText: "Okta Developer Logo",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "22",
      imagePath: "/images/kraus-cloud-lab.webp",
      imageAltText: "Kraus Cloud Home Lab",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: {
        width: "100%",
        height: "auto"
      },
      priority: true,
    },
  ];
  const toc = (
    <ol className="orderedList">
      <li key="1" className="hover:text-accent">
        <Link href="/pages/lab-components#network-diagram">
          Network Diagram
        </Link>
      </li>
      <li key="2" className="hover:text-accent">
        <Link href="/pages/lab-components#hardware-used">Hardware Used</Link>
      </li>
      <li key="3" className="hover:text-accent">
        <Link href="/pages/lab-components#software-used">Software Used</Link>
      </li>
      <li key="4" className="hover:text-accent">
        <Link href="/pages/lab-components#services-used">Services Used</Link>
      </li>
    </ol>
  );
  return (
    <>
      <NavBar></NavBar>
      <section className="section motion-preset-focus">
        {/* Header */}
        <div>
          {/* Title */}
          <h1 id="top" className="flex text-accent">
            Gear Up
          </h1>
          <h2>Components & Requirements</h2>
          <p className="dateStamp text-accent">October 31st, 2024</p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Headline */}
        <div className="headlineWrapper">
          <Image
            src={images[21].imagePath}
            width={images[21].width}
            height={images[21].height}
            sizes={images[21].sizes}
            style={images[21].style}
            alt={images[21].imageAltText}
            priority={images[21].priority}
            quality={100}
            decoding="sync"
            loading="eager"
          ></Image>
          <p className="headline">
            By the end of this lab, you will have built your own personal cloud
            consisting of a virtualization server, a security appliance to help
            ensure your network is locked down, a network switch virtualized
            into four separate virtual networks and an endless number of
            possibitlies for how to use your home lab. It's not much of a cloud
            if you don't have a presence on the web, so this lab will also
            include guidance on how to build a NextJS web app and deploy it on
            your own NGINX web server. Start thinking of a name for your cloud
            and review the rundown of required components listed below. Let's
            gear up and go!
          </p>
        </div>
        {/* Table of Contents */}
        <TableOfContents params={toc} length="5"></TableOfContents>
        {/* Network Diagram */}
        <div>
          <h3 id="network-diagram" className="text-accent">
            Network Diagram
            <span>
              <Link
                scroll={true}
                href="/pages/lab-components#top"
                className="link"
              >
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <ToggleImage params={images["0"]}></ToggleImage>
          <p>
            Above you'll find our Home Lab network diagram. Typical home
            internet setups include the first two components closest to the
            internet: a modem and a router. Oftentimes, those devices are
            combined into one single modem/router appliance and provided by your
            internet provider, but everybody's situtation is different. Either
            way, the lion's share of work we'll be working on will be our
            Netgate appliance and everything connected downstream from it.
          </p>
          <p>
            Building a home lab is a lot of fun for you, but if you share an
            internet connection with others then you'll want to put your lab
            <span className="italic"> behind</span> your shared Wi-Fi. Why? You
            will break your lab many times over as you build it out. That's why
            I chose to place my lab behind my router. With this design, I should
            never disrupt the home Wi-Fi because my router sits in front of my
            lab and the router is all my family needs to get online. If I break
            something in my lab, the home Wi-Fi keeps humming along. That said,
            you can also connect your Netgate appliance directly to your modem
            or ethernet internet handoff and place your wireless router behind
            your firewall. That would be a more secure design after all but, for
            now, let's focus on following the lab and being a good steward of
            the home Wi-Fi.
          </p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Hardware Used */}
        <div>
          <h3 id="hardware-used" className="text-accent">
            Hardware Used
            <span>
              <Link scroll={true} href="/pages/lab-components#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          {/* Words of Encouragement */}
          <p>
            The lab environment we're going to build in this Home Lab series is
            something anybody can build in a few weekends. All it takes is a
            fairly-new computer, an internet connection, about $2-3K for lab
            gear and some patience. While $2-3K might sound pretty steep,
            building a home lab is, arguably, the most affordable way to learn
            tech because bootcamps, certifications, and degrees cost at least as
            much if not significantly more and with a home lab you're getting
            hands-on experience. Another benefit of building a home lab is that
            you own the environment and can use it in any way you wish. You
            could build your own online shop and run your own small business.
            You can use your lab to build your own production studio and run a
            legitimate YouTube channel. There are a ton of awesome things you
            can do once you have the right mix of tech in your home lab. Build
            yourself a lab. It'll be good for you!
          </p>
          <p>
            The following hardware requirements must be met or exceeded to
            complete the lab:
          </p>
          {/* TOC — Hardware Used */}
          <ul className="unorderedList">
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-modem"
              >
                Cable Modem
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-router"
              >
                Wireless/Wired Router
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-firewall"
              >
                Security Appliance
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-switch"
              >
                Switch
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-server"
              >
                Server
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-rack"
              >
                Rack
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-cables"
              >
                Ethernet Cables
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-computer"
              >
                Personal Computer (with Ethernet Port)
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-ethernet-adapter"
              >
                Ethernet Adapter - USB-C to RJ-45 (Ethernet)
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-serial-cable"
              >
                Console Cable - USB-C to RJ-45 (Serial)
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-flash-drive"
              >
                8GB+ USB Flash Drive
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-network-plus"
              >
                Book - Network+ Certification
              </Link>
            </li>
          </ul>
          <h4>Amazon Associate Links</h4>
          {/* KcLinks */}
          <div>
            {/* Cable Modem */}
            <KcLink
              elementId="lab-components-modem"
              webLink="https://amzn.to/4j7B0Ur"
              productDescription="Cable Modem — Motorola"
              hideLink={false}
            >
              <div>
                <p>
                  <Image
                    className={`${styles.productImage}`}
                    src={images[1].imagePath}
                    width={images[1].width}
                    height={images[1].height}
                    sizes={images[1].sizes}
                    style={images[1].style}
                    alt={images[1].imageAltText}
                    priority={images[1].priority}
                    quality={100}
                    decoding="sync"
                    loading="eager"
                  ></Image>
                  My assumption is that you have what's most common in
                  housholds—internet provided over a broadband cable line. Why
                  do we even need a modem? Well, something has to convert that
                  analog broadband signal into digital bits and bytes!
                </p>
                <p>
                  The good news is, you likely already have this base covered by
                  whatever your Internet Service Provider (ISP) has provided you
                  and by "provided" I mean rented. I don't like renting hardware
                  from my ISP, so I always opt to bring my own modem and
                  wireless router. This gives me full control over all hardware
                  on my premise and if you want full control of your lab, then
                  perhaps you should pick up your own gear, too.
                </p>
                <p>
                  Of course, bringing your own modem does require some extra
                  hoop jumping to register it with your ISP, but it will save
                  you a few bucks a month and give you some more hands-on
                  experience. Whatever you decide, if you do purchase your own
                  modem, just make sure it supports DOCSIS 3.1 or greater.
                </p>
              </div>
            </KcLink>
            {/* Home Router */}
            <KcLink
              elementId="lab-components-router"
              webLink="https://amzn.to/422v1Kn"
              productDescription="Router — Amplifi"
              hideLink={false}
            >
              <div>
                <Image
                  className={`${styles.productImage}`}
                  src={images[4].imagePath}
                  width={images[4].width}
                  height={images[4].height}
                  sizes={images[4].sizes}
                  style={images[4].style}
                  alt={images[4].imageAltText}
                  priority={images[4].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                <p>
                  When reviewing cable modems, I mentioned that you may have
                  already been provided with a router by your ISP. So long as
                  you have the ability to configure port forwarding on your
                  router, and you have at least one unused ethernet interface
                  available on your router, you'll be good-to-go for this lab;
                  however, some ISPs prevent you from being able to configure
                  the gear they rent you and that's a non-starter for home lab
                  enthusiasts like you and me.
                </p>
                <p>
                  That said, I really like the Amplifi home router that I picked
                  up back in 2019 but, while it's still available on the market,
                  it's a bit long in the tooth and over-priced considering its
                  age. So, I'm recommending the latest version of Amplifi home
                  router—the "Alien WiFi 6" router. You can definitely find
                  something that costs a lot less, but the quality, performance,
                  feature set, and ease of use is worth the extra investment. If
                  there were an area to save when picking out your lab
                  compenents, this might be it, but while there's a plethora of
                  cheap options to choose from out there, I wouldn't go less
                  than $100 for a decent modern home wireless router.
                </p>
              </div>
            </KcLink>
            {/* Netgate — 4200 appliance */}
            <KcLink
              elementId="lab-components-firewall"
              webLink="https://amzn.to/3W8sRVT"
              productDescription="Netgate — 4200 appliance"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[2].imagePath}
                  width={images[2].width}
                  height={images[2].height}
                  sizes={images[2].sizes}
                  style={images[2].style}
                  alt={images[2].imageAltText}
                  priority={images[3].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                Our Netgate appliance is a big part of our home lab. It's both
                our firewall and our core router and that's just scratching the
                surface of how we'll be using pfSense on our Netgate appliance.
                Netgate, being the official sponsor of the pfSense open-source
                project, is the obvious choice for an out of the box security
                appliance running pfSense. Yes, you could always get something
                cheaper on Amazon and install pfSense on it yourself, but
                considering how much responsibility we put on pfSense in our
                home lab, it makes sense to me to go with Netgate. The 4200, in
                particular, will provide us with four routable interfaces
                supporting up to 2.5Gbps, giving us plenty of room for growth as
                our lab expands.
              </p>
            </KcLink>
            {/* Switch - Cisco Catalyst 1200 Series */}
            <KcLink
              elementId="lab-components-switch"
              webLink="https://amzn.to/4hDGBjv"
              productDescription="Switch — Cisco Catalyst 1200"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[15].imagePath}
                  width={images[15].width}
                  height={images[15].height}
                  sizes={images[15].sizes}
                  style={images[15].style}
                  alt={images[15].imageAltText}
                  priority={images[15].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                The switch I'm using in my home lab is a bit long in the
                tooth—over ten years old at least. Luckily, I don't need
                anything too sophisticated and the HP 2915al is more than up to
                the task. Obviously, for anybody reading this in 2025 and
                beyond, you won't likely be able to get your hands on the same
                switch, but you can easily find a substitute for likely a lot
                less than you'd expect (like the one I'm recommending here, by
                Cisco, for less than $300).
              </p>
              <p>
                What you'll need is an 8-port (i.e., eight ethernet interfaces)
                gigabit ethernet switch. The 2915al has an extra two ports for
                uplink ports, so, technically mine has 10 interfaces, but you
                don't necessarily need that since we won't be using all of them
                to build our our home lab. Your switch will need to support
                VLANs (IEEE 802.1Q) and and it couldn't hurt to find one that is
                capable of powering devices connected to it (devices like a
                wireless access point that we'll be adding to our lab in a
                future post). The 2915al is also capable of inter-VLAN routing,
                which means it can route traffic between interfaces that are on
                separate VLANs, but I disable that feature in our lab so you
                won't need it anyways. All routing will be handled by our
                Netgate network security appliance for better control and
                security of our network traffic.
              </p>
            </KcLink>
            {/* Minisforum — MS-01 Server */}
            <KcLink
              elementId="lab-components-server"
              webLink="https://amzn.to/3PnHqB3"
              productDescription="Minisforum — MS-01 Server"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[3].imagePath}
                  width={images[3].width}
                  height={images[3].height}
                  sizes={images[3].sizes}
                  style={images[3].style}
                  alt={images[3].imageAltText}
                  priority={images[3].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                The other workhorse in your lab is your server. Keep in mind
                that the more resources you have in your home server (i.e.,
                processing power and memory ) the more you'll be able to do in
                your lab simultaneously. That's why I went with the new MS-01 by
                Minisforum. For starters, it has the home lab community all
                abuzz because it packs a ton of capability in a very small
                footprint. What's more, the expandability with 2.5Gpbs and
                10Gbps networking, three M.2 storage slots, and up to 92GB
                memory will give you room to grow for quite some time. If stock
                is limited, consider buying either pre-configured or bare-bones
                configurations and customizing with more storage, memory, PCIe
                expansion, etc. This thing is awesome. Make it your own!
              </p>
            </KcLink>
            {/* Network Rack */}
            <KcLink
              elementId="lab-components-rack"
              webLink="https://amzn.to/3CAbMxl"
              productDescription="ECHOGEAR - Network Rack"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[16].imagePath}
                  width={images[16].width}
                  height={images[16].height}
                  sizes={images[16].sizes}
                  style={images[16].style}
                  alt={images[16].imageAltText}
                  priority={images[16].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                You'll also need a place to put all of this fancy new gear of
                yours, so it's time to invest in a network rack. You can go with
                a floor rack or one that mounts to the wall, as is depicted in
                my home lab. Choose whatever is best suited for your space;
                however, an added benefit of a wall-mounted network rack is that
                the odds of water frying your lab gear is far less likely if
                it's not touching the floor. Plus, you'll have less dust sucked
                up by the fans in your hardware when wall mounted. It's helpful
                to plan out your rack layout ahead of time so that you can pick
                up the right number of shelves and mix of Ethernet cables of
                various lengths to make all of your connections.
              </p>
            </KcLink>
            {/* Ethernet Cables */}
            <KcLink
              elementId="lab-components-cables"
              webLink="https://amzn.to/3WI1jXD"
              productDescription="Ethernet Cables"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[17].imagePath}
                  width={images[17].width}
                  height={images[17].height}
                  sizes={images[17].sizes}
                  style={images[17].style}
                  alt={images[17].imageAltText}
                  priority={images[17].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                On the subject of ethernet cables and what's referred to as
                “cable management”, my advice is to keep everything looking
                sharp by using the same color Ethernet cables from the same
                manufacturer; however, others may argue that different color
                cables should be used for different connections for ease of
                identification. We're not running a production environment here,
                and it's not going to be that complex; however, good cable
                management will help keep your hardware accessible and also
                improve airflow to your components.
              </p>
            </KcLink>
            {/* Ethernet Adapter - USB C to RJ-45 (F) */}
            <KcLink
              elementId="lab-components-ethernet-adapter"
              webLink="https://amzn.to/402G0kp"
              productDescription="Ethernet Adapter - USB C to RJ-45 (F)"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[5].imagePath}
                  width={images[5].width}
                  height={images[5].height}
                  sizes={images[5].sizes}
                  style={images[5].style}
                  alt={images[5].imageAltText}
                  priority={images[5].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                If your computer isn't equipped with an ethernet interface, and
                most likely it's not, then you'll need pick up one of these
                adapters. Newer computers come with USB-C ports on them, but be
                sure to double-check that you have what you need (e.g., Do you
                have a USB port to spare? Do you need USB-A adapter instead?)
                because you'll be hardwired to the network switch while building
                out your homelab.
              </p>
            </KcLink>
            {/* Console - USB C to RJ-45 (M) Serial */}
            <KcLink
              elementId="lab-components-serial-cable"
              webLink="https://amzn.to/4gFo1rt"
              productDescription="Console - USB C to RJ-45 (M) Serial"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[6].imagePath}
                  width={images[6].width}
                  height={images[6].height}
                  sizes={images[6].sizes}
                  style={images[6].style}
                  alt={images[6].imageAltText}
                  priority={images[6].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                Sometimes you have to make a serial connection, but modern
                computers no longer come with serial interfaces. What a
                first-world problem! Still, the good network engineer in you
                says you should probably pick up one of these while you're at
                it, especially if you plan on using some refurbished networking
                gear in your lab (like that HP 2915 switch)
              </p>
            </KcLink>
            {/* SanDisk — 32GB Flash Drive */}
            <KcLink
              elementId="lab-components-flash-drive"
              webLink="https://amzn.to/3PpwUJG"
              productDescription="SanDisk — 32GB Flash Drive"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[8].imagePath}
                  width={images[8].width}
                  height={images[8].height}
                  sizes={images[8].sizes}
                  style={images[8].style}
                  alt={images[8].imageAltText}
                  priority={images[8].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                You will need a flash drive or two for creating boot drives.
                We'll be loading Proxmox on to our Minisforum MS-01 server in an
                upcoming course and we'll need a spare flash drive with at least
                2GB of room for the task. I can't believe how much storage you
                can get for ~$11 these days. It almost feels illegal!
              </p>
            </KcLink>
            {/* Network+ Exam Guide */}
            <KcLink
              webLink="https://amzn.to/3PogAc8"
              productDescription="Exam Guide - Network+"
              elementId="lab-components-network-plus"
              hideLink={false}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[7].imagePath}
                  width={images[7].width}
                  height={images[7].height}
                  sizes={images[7].sizes}
                  style={images[7].style}
                  alt={images[7].imageAltText}
                  priority={images[7].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                For those of you with less experience with computer networking,
                I strongly suggest you get yourself a copy of the Network+ exam
                guide. It will teach you everything you need to know your way
                around your home lab's network. Plus, if you take the exam you
                can add it to your resume and that's never a bad thing! That
                said, I'm not going to teach concepts like IP addressing,
                subnetting, etc., as it's assumed that you are familiar with
                those already. However, I will make recommendations and provide
                direction when we encounter new concepts along the way.
              </p>
            </KcLink>
          </div>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Software Used */}
        <div>
          <h3 id="software-used" className="text-accent">
            Software Used
            <span>
              <Link scroll={true} href="/pages/lab-components#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            The following software requirements must be met or exceeded to
            complete the lab:
          </p>
          <ul className="unorderedList pt-4">
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-rufus"
              >
                Rufus
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-proxmox"
              >
                Proxmox
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-ubuntu"
              >
                Ubuntu Desktop
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-rhel"
              >
                Red Hat Enterprise Linux Server
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-pfsense"
              >
                pfSense (on Netgate Appliance)
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-next-js"
              >
                Next.js (create-next-app)
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link
                scroll={true}
                href="/pages/lab-components#lab-components-nginx"
              >
                Nginx
              </Link>
            </li>
          </ul>
          {/* Rufus */}
          <KcLink
            elementId="lab-components-rufus"
            webLink="https://rufus.ie/en/"
            productDescription="Rufus"
            hideLink={true}
          >
            <div>
              <p>
                Our MS-01 mini-server will come with Windows pre-installed and
                we'll want to overwrite that with Proxmox Virtual Environment so
                that we can run our lab VMs on Proxmox. We'll need a boot drive
                to boot and install Proxmox, and Rufus is my go-to bootable USB
                flash drive utility for Windows. Click the link to go to the{" "}
                <a href="https://rufus.ie/en/" className="text-accent">
                  Rufus download page
                </a>
                .
              </p>
              <Callout
                icon={faBullhorn}
                text="If you're running MacOS or Linux, don't dispair! Our friends at
              Proxmox have made it easy by providing instructions on their wiki
              detailing what commands to run to create a boot drive in command
              line: https://pve.proxmox.com/wiki/Prepare_Installation_Media"
              ></Callout>
            </div>
          </KcLink>
          {/* Proxmox */}
          <KcLink
            elementId="lab-components-proxmox"
            webLink="https://proxmox.com/en/"
            productDescription="Proxmox"
            hideLink={true}
          >
            <p>
              <Image
                className={`${styles.productImage}`}
                src={images[9].imagePath}
                width={images[9].width}
                height={images[9].height}
                sizes={images[9].sizes}
                style={images[9].style}
                alt={images[9].imageAltText}
                priority={images[9].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
              Proxmox is an free and amazing virtualization platform that can
              help you build and run virtual machines and containers. Support
              for any given application varies by operating system and any
              decent lab will have to support a handful of different
              applications. So, it goes that any decent lab will inevitably need
              to support at least a handful of different operating systems. In
              our case, our web server will run in an Ubutntu Desktop virtual
              server in Proxmox and our Zscaler App Connector, running on Red
              Hat Enterpise Linux, will be our second virtual server running in
              Proxmox. By the time we're done with this lab series, we'll have
              four virtual macines running. Proxmox is an amazing piece of
              technology and the fact that it's free to use is remarkable.
              Consider subscribing for Proxmox support as a thank you for their
              generosity.
            </p>
          </KcLink>
          {/* Ubuntu Server */}
          <KcLink
            elementId="lab-components-ubuntu"
            webLink="https://ubuntu.com/desktop"
            productDescription="Ubuntu"
            hideLink={true}
          >
            <p>
              <Image
                className={`${styles.productImage}`}
                src={images[10].imagePath}
                width={images[10].width}
                height={images[10].height}
                sizes={images[10].sizes}
                style={images[10].style}
                alt={images[10].imageAltText}
                priority={images[10].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
              Ubuntu is the world's most popular debian-based Linux
              distribution. We'll be running Ubuntu as a virtual machine in
              Proxmox. Within Ubuntu, we'll run our Nginx web server which we'll
              use to host our website. If you'd rather use a different Linux
              distribution, or go with an entirely different OS to host your web
              server, feel free to mix it up. So long as your OS of choice can
              run Nginx you should have no problem following along in subsequent
              labs.
            </p>
          </KcLink>
          {/* Red Hat Enterprise Linux Server */}
          <KcLink
            elementId="lab-components-rhel"
            webLink="https://developers.redhat.com/"
            productDescription="Red Hat Enterprise Linux"
            hideLink={true}
          >
            <p>
              <Image
                className={`${styles.productImage}`}
                src={images[11].imagePath}
                width={images[11].width}
                height={images[11].height}
                sizes={images[11].sizes}
                style={images[11].style}
                alt={images[11].imageAltText}
                priority={images[11].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
              Since Zscaler is an enterprise-grade cloud security platform,
              we'll need to run an enterprise-grade Linux server operating
              system in order to be properly supported. Red Hat Enterprise Linux
              (RHEL) is the go-to Linux distribution for business applications
              and is recommended by Zscaler as a supported OS for Zscaler App
              Connectors.
            </p>
            <p>
              I'm sure you're thinking, "All of this sounds very expensive...
              aren't we building a home lab?" Luckily for us, we can get our
              hands on a free copy of RHEL through the{" "}
              <a href="https://developers.redhat.com/" className="text-accent">
                Red Hat Developer program
              </a>
              . This version cannot be used for commercial purposes, so read the
              fine print, but using the Developer program should save you around
              $380 per year on licensing RHEL for your lab. Sweet!
            </p>
          </KcLink>
          {/* pfSense */}
          <KcLink
            elementId="lab-components-pfsense"
            webLink="https://docs.netgate.com/pfsense/en/latest/preface/index.html"
            productDescription="pfSense"
            hideLink={true}
          >
            <p>
              <Image
                className={`${styles.productImage}`}
                src={images[12].imagePath}
                width={images[12].width}
                height={images[12].height}
                sizes={images[12].sizes}
                style={images[12].style}
                alt={images[12].imageAltText}
                priority={images[12].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
              pfSense is open source network security software that is feature
              rich and easy to learn. It's also widely used and well
              documented—both with the official documentation as well as from
              the community (e.g., YouTube). As it pertains to our lab, pfSense
              will handle our routing and network security while also providing
              other ancillary services. It really is a core component of our lab
              and a Swiss Army knife that we'll be reaching for throughout the
              rest of this series. pfSense comes pre-installed on the Netgate
              4200 appliance, so I've linked to the official documentation for
              quick reference.
            </p>
          </KcLink>
          {/* Next.js */}
          <KcLink
            elementId="lab-components-next-js"
            webLink="https://nextjs.org/docs/app/getting-started/installation"
            productDescription="Next.js"
            hideLink={true}
          >
            <p>
              <Image
                className={`${styles.productImage}`}
                src={images[13].imagePath}
                width={images[13].width}
                height={images[13].height}
                sizes={images[13].sizes}
                style={images[13].style}
                alt={images[13].imageAltText}
                priority={images[13].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
              Next.js is a popular front-end framework that we'll be using to
              build a modern website. What's a front-end framework? It's an
              opinionated framework for writing HTML, CSS, and JavaScript in a
              way that makes building modern, performant, and scalable web
              applications easier. Don't worry if you lack coding experience.
              We're going to take you to the point where you essentially have a
              "Hello, World!" page in just a few commands. Developing it into a
              legitimate website, or, even better, a full-blown web app, is out
              of scope for this lab series. If learning to code is something
              you're interested in then I'd recommend checking out{" "}
              <a href="https://www.codewithmosh.com" className="text-accent">
                codewithmosh.com
              </a>
              .
            </p>
          </KcLink>
          {/* Nginx */}
          <KcLink
            elementId="lab-components-nginx"
            webLink="https://nginx.org/"
            productDescription="Nginx"
            hideLink={true}
          >
            <p>
              <Image
                className={`${styles.productImage}`}
                src={images[14].imagePath}
                width={images[14].width}
                height={images[14].height}
                sizes={images[14].sizes}
                style={images[14].style}
                alt={images[14].imageAltText}
                priority={images[14].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
              Nginx packs a lot of capability—most of which is more than we'll
              need for our lab purposes. Running on our Ubuntu virtual machine,
              Nginx is the web server we'll use to serve up our website to the
              world. At the end of the Nginx lab you'll see your work come
              together with your own personal home lab and cloud!
            </p>
          </KcLink>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Services Used */}
        <div>
          <div>
            <div>
              <h3 id="services-used" className="text-accent">
                Services Used
                <span>
                  <Link scroll={true} href="/pages/lab-components#top">
                    <span className={`topScroller text-subtle`}>#</span>
                  </Link>
                </span>
              </h3>
            </div>
            <p>
              The following service provided requirements must be met or
              exceeded to complete the lab:
            </p>
            <ul className="unorderedList pt-4">
              <li className="hover:text-accent">
                <Link
                  id="lab-components-internet"
                  scroll={true}
                  href="/pages/lab-components#lab-components-internet"
                >
                  Internet Connection with a static or dynamic private IP
                  address
                </Link>
              </li>
              <li>
                <Link
                  id="lab-components-cloudflare"
                  scroll={true}
                  href="/pages/lab-components#lab-components-cloudflare"
                >
                  Domain (registered with Cloudflare)
                </Link>
              </li>
              <li>
                <Link
                  id="lab-components-okta"
                  scroll={true}
                  href="/pages/lab-components#lab-components-okta"
                >
                  Okta Developer Account (Optional)
                </Link>
              </li>
              <li>
                <Link
                  id="lab-components-zpa"
                  scroll={true}
                  href="/pages/lab-components#lab-components-zpa"
                >
                  Zscaler Private Access (Optional)
                </Link>
              </li>
              <li>
                <Link
                  id="lab-components-zia"
                  scroll={true}
                  href="/pages/lab-components#lab-components-zia"
                >
                  Zscaler Internet Access (Optional)
                </Link>
              </li>
            </ul>
          </div>
          {/* KcLinks */}
          <div>
            {/* Internet Connection */}
            <div>
              <p>
                Obviously, you need an internet connection if you're building
                your own cloud and want it to connect to something other than
                itself. For this lab, the type of internet connection you have
                shouldn't matter much, but what does matter is the type of IP
                address that you're issued, be it Static or Dynamic. A Static IP
                address will always be the same. A Dynamic IP address will
                eventually if not frequently change. So, if you have a Dynamic
                IP address issued by your Internet Service Provider, then you'll
                want to use Dynamic Domain Name System (DDNS) to keep keep your
                IP address updated with your web hosting provider. We will be
                using Cloudflare in this lab. If you choose another web hosting
                provider, just make sure that they have an API that allows you
                to use DDNS to update your web host with your IP address.
              </p>
              <Callout
                text="If you're not familiar with APIs, don't sweat it. pfSense 
                has an integration with Cloudflare that uses the API for us and makes DDNS configuration 
                stupid simple."
                icon={faBullhorn}
              ></Callout>
            </div>
            {/* Registered Domain */}
            <KcLink
              elementId="lab-components-cloudflare"
              webLink=""
              productDescription="Registered Domain — Cloudflare"
              hideLink={true}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[18].imagePath}
                  width={images[18].width}
                  height={images[18].height}
                  sizes={images[18].sizes}
                  style={images[18].style}
                  alt={images[18].imageAltText}
                  priority={images[18].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                The most exciting point that we'll reach throughout this lab
                will be when we publish our very own self-hosted website. In
                order to do that, we'll need to have our own domain (e.g.,
                krauscloud.com) and, so, we'll have to pick a registrar.
                Cloudflare is an excellent choice, becuase they have an open API
                which we'll use in conjunction with Dynamic Domain Name System
                (DDNS) on our Netgate appliance. DDNS will help us maintain our
                presence on the web, by regularly updating Cloudflare with our
                public IP address. For those of us with a dynamic IP address
                issued to us by our Internet Service Provider (ISP), this is a
                must have. Whomever you choose as your registrar, if you have a
                dynamic IP address then either you'll need a registrar like
                Cloudflare who will let you programmatically update your DNS "A"
                record or you'll have to inquire with your ISP for a static IP
                address. The latter will surely come with a surcharge making
                Cloudflare an obvious choice.
              </p>
            </KcLink>
            {/* Okta Developer Account */}
            <KcLink
              elementId="lab-components-okta"
              webLink=""
              productDescription="Identity Provider (IdP) — Okta"
              hideLink={true}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[20].imagePath}
                  width={images[20].width}
                  height={images[20].height}
                  sizes={images[20].sizes}
                  style={images[20].style}
                  alt={images[20].imageAltText}
                  priority={images[20].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                No home lab is complete without users and networks are made up
                of differnet types of users with different requirements. If you
                think about a typical business, you have all sorts of different
                users types demanding different things of your network. There
                are administrators, employees, and even guests. Even within
                "employees" there are various departments and groups that may
                require differentiated access to various aspects of the network
                or systems within it. As our lab matures, we'll want to
                experiement with how we can provide differented access to our
                users, and in order to do that we'll need an Identity Provider
                (IdP) like Okta to help us manage our user accounts. Okta is the
                perfect IdP for our home lab, because not only are they a
                leading enterprise-grade player in the identity space, but they
                also provide free developer accounts that we can use for our
                home lab. Nice!
              </p>
            </KcLink>
            {/* Zscaler Private Access */}
            <KcLink
              elementId="lab-components-zpa"
              webLink=""
              productDescription="Remote Access Solution — Zscaler Private Access"
              hideLink={true}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[19].imagePath}
                  width={images[19].width}
                  height={images[19].height}
                  sizes={images[19].sizes}
                  style={images[19].style}
                  alt={images[19].imageAltText}
                  priority={images[19].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                Zscaler Private Access (ZPA) provides secure remote access to
                your private applications and resources. Sounds like a VPN,
                right? Well, ZPA is a proxy-based approach to providing remote
                access and, therefore, it's far more secure because of the
                underlying architecture. Like ZIA, ZPA is an enterprise-level
                remote access solution that you likely won't be able to get your
                hands on outside of an enterprise agreement with Zscaler. We
                will explore budget remote access solutions in a future post.
                For now, it's just good to be aware of enterprise-grade security
                solutions that are solving security problems at scale.
              </p>
            </KcLink>
            {/* Zscaler Internet Access */}
            <KcLink
              elementId="lab-components-zia"
              webLink=""
              productDescription="Internet Security — Zscaler Internet Access"
              hideLink={true}
            >
              <p>
                <Image
                  className={`${styles.productImage}`}
                  src={images[19].imagePath}
                  width={images[19].width}
                  height={images[19].height}
                  sizes={images[19].sizes}
                  style={images[19].style}
                  alt={images[19].imageAltText}
                  priority={images[19].priority}
                  quality={100}
                  decoding="sync"
                  loading="eager"
                ></Image>
                Zscaler Internet Access (ZIA) is how we'll secure our traffic
                leaving our network, that is, traffic going out to the Internet.
                While our Netgate security appliance provides us with internal
                network security for our east/west traffic (i.e., at layers 3
                and 4 of the OSI model), it doesn't do much for us as far as
                keeping us safe on the web. Furthermore, ZIA is an
                enterprise-level Security Service Edge (SSE) solution that most
                home labs won't be able to implement unless you can get your
                hands on a Zscaler tenant through your employer. In future
                posts, we'll explore how we can best secure our internet access
                on a budget.
              </p>
            </KcLink>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default LabContents;
