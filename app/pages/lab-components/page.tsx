import React from "react";
import Link from "next/link";
import CodeBlock from "../../components/codeblock/CodeBlock";
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
      imagePath: "/images/network_diagram.png",
      imageAltText: "Network Diagram",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "2",
      imagePath: "/images/motorola_modem.jpg",
      imageAltText: "Modem — Motorola",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "15%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/netgate.jpg",
      imageAltText: "Security Appliance — Netgate 4200",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "31%", height: "auto" },
      priority: true,
    },
    {
      id: "4",
      imagePath: "/images/ms01.jpg",
      imageAltText: "Server - Minisforum MS-01",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "33%", height: "auto" },
      priority: true,
    },
    {
      id: "5",
      imagePath: "/images/amplifi-router.jpg",
      imageAltText: "Router - Amplifi",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "18%", height: "auto" },
      priority: true,
    },
    {
      id: "6",
      imagePath: "/images/anker-ethernet-adapter.jpg",
      imageAltText: "Ethernet Adapter - USB-C",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "20%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/oikwan-serial-adapter.jpg",
      imageAltText: "Serial Adapter - Oikwan",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "20%", height: "auto" },
      priority: true,
    },
    {
      id: "8",
      imagePath: "/images/comptia-network-plus.jpg",
      imageAltText: "Certification Book - Network+",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "9",
      imagePath: "/images/sandisk-flash-drive.jpg",
      imageAltText: "Flash Drive - Sandisk 8GB",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "9",
      imagePath: "/images/proxmox.png",
      imageAltText: "Virtualization Platform - Proxmox",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "16%", height: "auto" },
      priority: true,
    },
    {
      id: "10",
      imagePath: "/images/ubuntu.png",
      imageAltText: "Web Server's Operating System - Ubuntu (Desktop)",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "12%", height: "auto" },
      priority: true,
    },
    {
      id: "11",
      imagePath: "/images/red-hat-logo.png",
      imageAltText:
        "Zscaler App Connector Operating System - Red Hat Enterprise Linux",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "12",
      imagePath: "/images/pfsense-logo.png",
      imageAltText: "Network Security Solution - pfSense",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "25%", height: "auto" },
      priority: true,
    },
    {
      id: "13",
      imagePath: "/images/nextjs-logo.png",
      imageAltText: "React (Front-End) Framework - Next.js",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "12%", height: "auto" },
      priority: true,
    },
    {
      id: "14",
      imagePath: "/images/nginx-logo.png",
      imageAltText: "Web Server - NGINX",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "22%", height: "auto" },
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
      <li key="5" className="hover:text-accent">
        <Link href="/pages/lab-components#static-ips">Static IPs</Link>
      </li>
    </ol>
  );
  const staticIPs = (
    <div>
      <div>
        <h3 id="static-ips" className="text-accent">
          Static IPs
          <span>
            <Link scroll={true} href="/pages/lab-components#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </span>
        </h3>
      </div>
      {/* Code Snippet */}
      <CodeBlock props={htmlContent[0]} type="JSON"></CodeBlock>
      {/* Divider */}
      <div className="divider border-b border-accent"></div>
    </div>
  );
  return (
    <div>
      <section className="section motion-preset-focus">
        {/* Title */}
        <h1 id="top" className="flex text-accent">
          Gear Up<span className="pl-4">🧪</span>
        </h1>
        <h2>Components & Requirements</h2>
        <p className="dateStamp text-accent">October 31st, 2024</p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Headline */}
        <div className="headlineWrapper">
          <p className="headline">
            The lab environment we're going to build in these next few posts is
            something anybody can build in a few weekends. All it takes is a bit
            of sticktuitivness, a fairly-new computer, an internet connection,
            and about $1K for lab gear.
          </p>
          <p className="headline">
            Keep in mind that many bootcamps, certifications, and degrees cost
            at least as much if not significantly more. Another benefit of
            building a home lab is that you own the environment and, therefore,
            can use it in any way you wish. Build yourself a lab. It'll be good
            for you!
          </p>
          <p className="headline">
            At the culmination of this lab, you will have built your own
            personal cloud that includes a mini-server running a few virtual
            servers, a security appliance to help ensure your network is locked
            down, and a network switch configured with four Virtual networks
            which we will use to segment our users and devices by various use
            cases. It's not much of a cloud if you don't have a presence, so
            this lab will include guidance on how to build a NextJS app and
            deploy it on your own NGINX web server..
          </p>
        </div>
        {/* Table of Contents */}
        <TableOfContents params={toc} length="5"></TableOfContents>
        {/* Network Diagram */}
        <div>
          <div>
            <h3 id="network-diagram" className="text-accent">
              Network Diagram
              <span>
                <Link
                  scroll={true}
                  href="/pages/lab-components#top"
                  className="link"
                >
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
          </div>
          <ToggleImage params={images["0"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Hardware Used */}
        <h3 id="hardware-used" className="text-accent">
          Hardware Used
          <span>
            <Link scroll={true} href="/pages/lab-components#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </span>
        </h3>
        <p>
          The following hardware requirements must be met or exceeded to
          complete the lab:
        </p>
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
              href="/pages/lab-components#lab-components-server"
            >
              Server
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
        {/* Cable Modem */}
        <KcLink
          webLink="https://amzn.to/4j7B0Ur"
          productDescription="Cable Modem — Motorola"
          elementId="lab-components-modem"
          hideAmazon={false}
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
              housholds—internet provided over a broadband cable line. Why do we
              even need a modem? Well, something has to convert that analog
              broadband signal into digital bits and bytes! No matter what your
              situation, you do need to ensure that you have an internet
              connection and a router with one unused wired ethernet interface
              available.
            </p>
            <p>
              The good news is, you likely already have this base covered by
              whatever your Internet Service Provider (ISP) has provided you and
              by "provided" I mean "rented". Typically, your ISP will provide
              you with a single appliance that's both a modem and a router. It's
              also very possible that your ISP has provided two separate
              appliances—a modem and a router. Finally, it's also possible that
              your ISP has provided you with an ethernet handoff and, therefore,
              you don't need a modem at all. No matter the case, you will{" "}
              <span className="italic">still</span> need a router, that is, if
              you want to connect more than one device to your network and I
              know you do!
            </p>
            <Callout
              text="I don't like renting hardware from my ISP, so I always opt to
                    bring my own modem and wireless router. This gives me full control
                    over all hardware on my premise and if you want full control of
                    your lab, then perhaps you should pick up your own gear, too. Of
                    course, bringing your own modem does require some extra hoop
                    jumping to register it with your ISP, but it will save you a few
                    bucks a month and give you some more hands-on experience. Whatever
                    you decide, if you do decide to purchase your own modem, just make
                    sure it supports DOCSIS 3.1 or greater."
              icon={faBullhorn}
            ></Callout>
          </div>
        </KcLink>
        {/* Home Router */}
        <KcLink
          webLink="https://amzn.to/422v1Kn"
          productDescription="Router — Amplifi"
          elementId="lab-components-router"
          hideAmazon={false}
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
              When reviewing cable modems, I mentioned that you may have already
              been provided with a router by your Internet Service Provider
              (ISP). So long as you have the ability to configure port
              forwarding on your router, and you have at least one unused
              ethernet interface available on your router, you'll be good-to-go
              for this lab; however, some ISPs prevent you from being able to
              configure the gear they rent you and that's a non-starter for home
              lab enthusiasts like you and me.
            </p>
            <p>
              That said, I really like the Amplifi home router that I picked up
              back in 2019, but while it's still available on the market, it's a
              bit long in the tooth. So, instead, I'm recommending the latest
              version of Amplifi home router—the "Alien WiFi 6" router. You can
              definitely find something that costs a lot less, but the quality,
              performance, feature set, and ease of use is worth the extra
              investment. If there were an area to save when picking out your
              lab compenents, this might be it, but while there's a plethora of
              cheap options to choose from out there, I wouldn't go less than
              $100 for a decent modern home wireless router.
            </p>
          </div>
        </KcLink>
        {/* Netgate — 4200 appliance */}
        <KcLink
          webLink="https://amzn.to/3W8sRVT"
          productDescription="Netgate — 4200 appliance"
          elementId="lab-components-firewall"
          hideAmazon={false}
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
            Our Netgate appliance is a big part of our home lab. It's both our
            firewall and our core router and that's just scratching the surface
            of how we'll be using pfSense on our Netgate appliance. Netgate,
            being the official sponsor of the pfSense open-source project, is
            the obvious choice for an out of the box security appliance running
            pfSense. Yes, you could always get something cheaper on Amazon and
            install pfSense on it yourself, but considering how much
            responsibility we put on pfSense in our home lab, it makes sense to
            me to go with Netgate. The 4200, in particular, will provide us with
            four routable interfaces supporting up to 2.5Gbps, giving us plenty
            of room for growth as our lab expands.
          </p>
        </KcLink>
        {/* Minisforum — MS-01 Server */}
        <KcLink
          webLink="https://amzn.to/3PnHqB3"
          productDescription="Minisforum — MS-01 Server"
          elementId="lab-components-server"
          hideAmazon={false}
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
            The other workhorse in your lab is your server. Keep in mind that
            the more resources you have in your home server (i.e., processing
            power and memory ) the more you'll be able to do in your lab
            simultaneously. That's why I went with the new MS-01 by Minisforum.
            For starters, it has the home lab community all abuzz because it
            packs a ton of capability in a very small footprint. What's more,
            the expandability with 2.5Gpbs and 10Gbps networking, three M.2
            storage slots, and up to 92GB memory will give you room to grow for
            quite some time. If stock is limited, consider buying either
            pre-configured or bare-bones configurations and customizing with
            more storage, memory, PCIe expansion, etc. This thing is awesome.
            Make it your own!
          </p>
        </KcLink>
        {/* Ethernet Adapter - USB C to RJ-45 (F) */}
        <KcLink
          webLink="https://amzn.to/402G0kp"
          elementId="lab-components-ethernet-adapter"
          productDescription="Ethernet Adapter - USB C to RJ-45 (F)"
          hideAmazon={false}
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
            If your computer isn't equipped with an ethernet interface, and most
            likely it's not, then you'll need pick up one of these adapters.
            Newer computers come with USB-C ports on them, but be sure to
            double-check that you have what you need (e.g., Do you have a USB
            port to spare? Do you need USB-A adapter instead?) because you'll be
            hardwired to the network switch while building out your homelab.
          </p>
        </KcLink>
        {/* Console - USB C to RJ-45 (M) Serial */}
        <KcLink
          webLink="https://amzn.to/4gFo1rt"
          productDescription="Console - USB C to RJ-45 (M) Serial"
          elementId="lab-components-serial-cable"
          hideAmazon={false}
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
            Sometimes you have to make a serial connection, but modern computers
            no longer come with serial interfaces. What a first-world problem!
            Still, the good network engineer in you says you should probably
            pick up one of these while you're at it, especially if you plan on
            using some refurbished networking gear in your lab (like that HP
            2915 switch)
          </p>
        </KcLink>
        {/* SanDisk — 32GB Flash Drive */}
        <KcLink
          webLink="https://amzn.to/3PpwUJG"
          productDescription="SanDisk — 32GB Flash Drive"
          elementId="lab-components-flash-drive"
          hideAmazon={false}
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
            You will need a flash drive or two for creating boot drives. We'll
            be loading Proxmox on to our Minisforum MS-01 server in an upcoming
            course and we'll need a spare flash drive with at least 2GB of room
            for the task. I can't believe how much storage you can get for ~$11
            these days. It almost feels illegal!
          </p>
        </KcLink>
        {/* Network+ Exam Guide */}
        <KcLink
          webLink="https://amzn.to/3PogAc8"
          productDescription="Exam Guide - Network+"
          elementId="lab-components-network-plus"
          hideAmazon={false}
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
            For those of you with less experience with computer networking, I
            strongly suggest you get yourself a copy of the Network+ exam guide.
            It will teach you everything you need to know your way around your
            home lab's network. Plus, if you take the exam you can add it to
            your resume and that's never a bad thing! That said, I'm not going
            to teach concepts like IP addressing, subnetting, etc., as it's
            assumed that you are familiar with those already. However, I will
            make recommendations and provide direction when we encounter new
            concepts along the way.
          </p>
        </KcLink>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
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
        </div>
        {/* Rufus */}
        <KcLink
          webLink="https://rufus.ie/en/"
          productDescription="Rufus"
          elementId="lab-components-rufus"
          hideAmazon={true}
        >
          <div>
            <p>
              Our MS-01 mini-server will come with Windows pre-installed and
              we'll want to overwrite that with Proxmox Virtual Environment so
              that we can run our lab VMs on Proxmox. We'll need a boot drive to
              boot and install Proxmox, and Rufus is my go-to bootable USB flash
              drive utility for Windows. Click the link to go to the{" "}
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
          webLink="https://proxmox.com/en/"
          productDescription="Proxmox"
          elementId="lab-components-proxmox"
          hideAmazon={true}
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
            Proxmox is an free and amazing virtualization platform that can help
            you build and run virtual machines and containers. Support for any
            given application varies by operating system and any decent lab will
            have to support a handful of different applications. So, it goes
            that any decent lab will inevitably need to support at least a
            handful of different operating systems. In our case, our web server
            will run in an Ubutntu Desktop virtual server in Proxmox and our
            Zscaler App Connector, running on Red Hat Enterpise Linux, will be
            our second virtual server running in Proxmox. By the time we're done
            with this lab series, we'll have four virtual macines running.
            Proxmox is an amazing piece of technology and the fact that it's
            free to use is remarkable. Consider subscribing for Proxmox support
            as a thank you for their generosity.
          </p>
        </KcLink>
        {/* Ubuntu Server */}
        <KcLink
          webLink="https://ubuntu.com/desktop"
          productDescription="Ubuntu"
          elementId="lab-components-ubuntu"
          hideAmazon={true}
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
            Ubuntu is the world's most popular debian-based Linux distribution.
            We'll be running Ubuntu as a virtual machine in Proxmox. Within
            Ubuntu, we'll run our Nginx web server which we'll use to host our
            website. If you'd rather use a different Linux distribution, or go
            with an entirely different OS to host your web server, feel free to
            mix it up. So long as your OS of choice can run Nginx you should
            have no problem following along in subsequent labs.
          </p>
        </KcLink>
        {/* Red Hat Enterprise Linux Server */}
        <KcLink
          webLink="https://developers.redhat.com/"
          productDescription="Red Hat Enterprise Linux"
          elementId="lab-components-rhel"
          hideAmazon={true}
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
            Since Zscaler is an enterprise-grade cloud security platform, we'll
            need to run an enterprise-grade Linux server operating system in
            order to be properly supported. Red Hat Enterprise Linux (RHEL) is
            the go-to Linux distribution for business applications and is
            recommended by Zscaler as a supported OS for Zscaler App Connectors.
          </p>
          <p>
            I'm sure you're thinking, "All of this sounds very expensive...
            aren't we building a home lab?" Luckily for us, we can get our hands
            on a free copy of RHEL through the{" "}
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
          webLink="https://docs.netgate.com/pfsense/en/latest/preface/index.html"
          productDescription="pfSense"
          elementId="lab-components-pfsense"
          hideAmazon={true}
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
            documented—both with the official documentation as well as from the
            community (e.g., YouTube). As it pertains to our lab, pfSense will
            handle our routing and network security while also providing other
            ancillary services. It really is a core component of our lab and a
            Swiss Army knife that we'll be reaching for throughout the rest of
            this series. pfSense comes pre-installed on the Netgate 4200
            appliance, so I've linked to the official documentation for quick
            reference.
          </p>
        </KcLink>
        {/* Next.js */}
        <KcLink
          webLink="https://nextjs.org/docs/app/getting-started/installation"
          productDescription="Next.js"
          elementId="lab-components-next-js"
          hideAmazon={true}
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
            opinionated framework for writing HTML, CSS, and JavaScript in a way
            that makes building modern, performant, and scalable web
            applications easier. Don't worry if you lack coding experience.
            We're going to take you to the point where you essentially have a
            "Hello, World!" page in just a few commands. Developing it into a
            legitimate website, or, even better, a full-blown web app, is out of
            scope for this lab series. If learning to code is something you're
            interested in then I'd recommend checking out{" "}
            <a href="https://www.codewithmosh.com" className="text-accent">
              codewithmosh.com
            </a>
            .
          </p>
        </KcLink>
        {/* Nginx */}
        <KcLink
          webLink="https://nginx.org/"
          productDescription="Nginx"
          elementId="lab-components-nginx"
          hideAmazon={true}
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
        {/* Services Used */}
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
            The following service provided requirements must be met or exceeded
            to complete the lab:
          </p>
          <ul className="unorderedList pt-4">
            <li className="hover:text-accent">
              <Link
                id="lab-components-internet"
                scroll={true}
                href="/pages/lab-components#lab-components-internet"
              >
                Internet Access with a dynamic private IP address*
              </Link>
            </li>
            <li>
              <Link
                id="lab-components-cloudflare"
                scroll={true}
                href="/pages/lab-components#lab-components-cloudflare"
              >
                Domain (registered with Cloudflare Registrar)
              </Link>
            </li>
            <li>
              <Link
                id="lab-components-okta"
                scroll={true}
                href="/pages/lab-components#lab-components-okta"
              >
                Okta Developer Environment
              </Link>
            </li>
            <li>
              <Link
                id="lab-components-zpa"
                scroll={true}
                href="/pages/lab-components#lab-components-zpa"
              >
                Zscaler Private Access
              </Link>
            </li>
            <li>
              <Link
                id="lab-components-zia"
                scroll={true}
                href="/pages/lab-components#lab-components-zia"
              >
                Zscaler Internet Access
              </Link>
            </li>
          </ul>
        </div>
        <Callout
          icon={faBullhorn}
          text="Don't worry! No static private IP address is required for the
            public-facing web server! We'll be using the Cloudflare API, and
            Dynamic DNS (DDNS) running on our Netgate firewall, to automatically
            update our Cloudflare DNS zone with our dynamic private IP address. Neat!"
        ></Callout>
        {/* Divider */}
        {/* <div className="divider border-b border-accent"></div>
        {staticIPs} */}
      </section>
    </div>
  );
}

export default LabContents;
