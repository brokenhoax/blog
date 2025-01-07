import React from "react";
import Link from "next/link";
import CodeBlock from "../../components/codeblock/CodeBlock";
import ToggleImage from "../../components/toggleImage/ToggleImage";
import Callout from "../../components/callout/Callout";
import TableOfContents from "../../components/toc/TableOfContents";
import AmazonAssociateLink from "../../components/amazonAssociateLink/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faLink } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

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
        <TableOfContents params={toc}></TableOfContents>
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
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h3>
          </div>
          <ToggleImage params={images["0"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Hardware Used */}
        <div>
          <div>
            <h3 id="hardware-used" className="text-accent">
              Hardware Used
              <span>
                <Link scroll={true} href="/pages/lab-components#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
          </div>
          <p>
            The following hardware requirements must be met or exceeded to
            complete the lab:
          </p>
          <ul className="unorderedList">
            <li>
              <div className="">Cable Modem</div>
            </li>
            <li>Wireless/Wired Router</li>
            <li>Netgate Appliance</li>
            <li>Server</li>
            <li>Personal Computer (with Ethernet Port)</li>
            <li>8GB+ USB Flash Drive</li>
          </ul>
          <h4>Amazon Links</h4>
          {/* Cable Modem */}
          <div>
            <AmazonAssociateLink
              link="https://amzn.to/4j7B0Ur"
              productText="Cable Modem — Motorola — Multi-Gigabit"
              hideMention={false}
            ></AmazonAssociateLink>
            <p>
              The assumption is that you have what's most common in
              housholds—internet provided over a broadband cable line. Why do we
              even need a modem? Becuase something has to convert that analog
              broadband signal into digital bits and bytes! Now, if you have
              fiber to the home or something crazy like satelite, then you can
              disregard all this modem talk; however, no matter what your
              situation, you do need to ensure that you have an internet
              connection and a router with one unused wired ethernet interface
              available. This unused interface will be our connection to the
              internet so it's sort of a big deal.
            </p>
            <p>
              The good news is, you likely already have this base covered by
              whatever your Internet Service Provider (ISP) has provided you;
              however, I don't like renting this sort of equipment from my ISP,
              so I always opt to bring my own modem and wireless router. This
              gives me full control over all hardware on my premise and if you
              want full control of your lab, then perhaps you should pick up
              your own gear, too. Of course, bringing your own modem requires
              some extra hoop jumping to register it with your ISP, but it will
              save you a few bucks a month and give you some more hands-on
              experience. Whatever you decide, if you do decide to purchase your
              own modem, just make sure it supports DOCSIS 3.1 or greater.
            </p>
            <p>
              Typically, your ISP will provide you with a single appliance
              that's both a modem and a router. It's also very possible that
              your ISP has provided two separate appliances—modem and,
              separately, a router. Finally, it's also possible that your ISP
              has provided you with an ethernet handoff and, therefore, you
              don't need a modem, but you will{" "}
              <span className="italic">still</span> need a router (if you want
              to connect more than one device to your network).
            </p>
          </div>
          {/* Home Router */}
          <div>
            <AmazonAssociateLink
              link="https://amzn.to/422v1Kn"
              productText="Wireless/Wired Router — Amplifi"
              hideMention={false}
            ></AmazonAssociateLink>
            <p>
              As we discussed when reviewing cable modems, you may have already
              been provided with a router by your Internet Service Provider
              (ISP). So long as you have the ability to configure port
              forwarding on your router, and you have an unused ethernet
              interface available, you're good-to-go for this lab; however, some
              ISPs prevent you from being able to configure the gear they rent
              you and that's a non-starter for home lab enthusiasts like you and
              me.
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
          <AmazonAssociateLink
            link="https://amzn.to/3W8sRVT"
            productText="Netgate — 4200 appliance"
            hideMention={false}
          ></AmazonAssociateLink>
          <AmazonAssociateLink
            link="https://amzn.to/3PnHqB3"
            productText="Minisforum — MS-01 Mini Server"
            hideMention={false}
          ></AmazonAssociateLink>
          <AmazonAssociateLink
            link="https://amzn.to/3PuuPvL"
            productText="TP Link — USB to Ethernet Adapter"
            hideMention={true}
          ></AmazonAssociateLink>
          <AmazonAssociateLink
            link="https://amzn.to/4h4Nevg"
            productText="SanDisk — 8GB USB Flash Drive"
            hideMention={false}
          ></AmazonAssociateLink>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Software Used */}
        <div>
          <div>
            <h3 id="software-used" className="text-accent">
              Software Used
              <span>
                <Link scroll={true} href="/pages/lab-components#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
          </div>
          <p>
            The following software requirements must be met or exceeded to
            complete the lab:
          </p>
          <ul className="unorderedList pt-4">
            <li>Rufus</li>
            <li>Proxmox</li>
            <li>Ubuntu Desktop</li>
            <li>Red Hat Enterprise Linux Server</li>
            <li>pfSense (on Netgate Appliance)</li>
            <li>React (create-react-app)</li>
            <li>Nginx </li>
          </ul>
        </div>
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
            <li>Internet Access with a dynamic private IP address*</li>
            <li>Domain (registered with Cloudflare Registrar)</li>
            <li>Okta Developer Environment</li>
            <li>Zscaler Private Access</li>
            <li>Zscaler Internet Access</li>
          </ul>
        </div>
        <Callout
          icon={faAsterisk}
          text="Don't worry! No static private IP address is required for the
            public-facing web server! We'll be using the Cloudflare API, and
            Dynamic DNS (DDNS) running on our Netgate firewall, to automatically
            update our Cloudflare DNS zone with our dynamic private IP address. Neat!"
        ></Callout>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Static IPs */}
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
      </section>
    </div>
  );
}

export default LabContents;
