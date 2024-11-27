import React from "react";
import Link from "next/link";
import { faWifiStrong } from "@fortawesome/free-solid-svg-icons";
import Callout from "../../components/callout/Callout";
import ToggleImage from "../../components/toggleImage/ToggleImage";

interface IProps {
  htmlContent: string[];
  type: string;
}

function PfSense({ htmlContent }: IProps) {
  const calloutContent = [
    "While it is possible to configure our Netgate firewall over a wireless (Wi-Fi) connection, that is outside of the scope of this lab. Also, if your computer does not have an ethernet port, then consider connecting a wireless router to port 2/4 and configure the wireless router (and any client devices connected to it) receive their IP addresses via DHCP from the Netgate firewall. On my router, this requires setting the router's DHCP setting to bridge mode. Once that's done, you can connect to the wireless router in order to connect to the management interface. ",
  ];
  htmlContent = [
    `
    Interfaces > PORT1WAN`,
  ];
  const images = [
    {
      id: "1",
      imagePath: "/images/pfsense_aliases.png",
      imageAltText: "pfSense aliases creation wizard",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
  ];
  return (
    <div>
      <section className="section">
        {/* Title */}
        <h1 id="top" className="flex text-accent">
          pfSense<span className="pl-4">🧪</span>
        </h1>
        <h2>More than just a firewall</h2>
        <p className="dateStamp text-accent">November 15th, 2024</p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Headline */}
        <div className="headlineWrapper">
          <p className="headline">
            A core component of our lab will be our Netgate appliance running
            pfSense. Netgate is the official sponsor of the pfSense open-source
            project, so why not use their hardware?
          </p>
          <p className="headline">
            Well, you could save some money by running pfSnense on a dedicated
            and less expensive (but not purpose-built) piece of hardware. This
            might be a good middle ground if your keeping a close eye on your
            budget, but want extra ethernet interfaces.
          </p>
          <p className="headline">
            You could save even more mula by running pfSense in a VM on your
            server, but part of the home lab experience is working with
            hardware. Plus, those extra interfaces on the Netgate appliance I'm
            suggesting (Netgate 4200) will come in handy as your lab grows.
          </p>
          <p className="headline">
            Whatver you decide, it's important to know that our Netgate
            appliance is more than just a firewall. We'll be using it for
            Dynamic DNS for hosting our website as well as for routing, DNS
            resolution, Network Address Translation, and so much more as our use
            cases grow (NTP, DHCP, etc.).
          </p>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Table of Contents */}
        <div>
          <h3 className="text-accent">Table of Contents</h3>
          <ol className="orderedList">
            <li key="1" className="hover:text-accent">
              <Link href="/pages/pfsense#update-default-password">
                Update the Default Password
              </Link>
            </li>
            <li key="2" className="hover:text-accent">
              <Link href="/pages/pfsense#wan-interface">
                WAN Interface (igc3)
              </Link>
            </li>
            <li key="3" className="hover:text-accent">
              <Link href="/pages/pfsense#management-interface">
                Management Interface (igc2)
              </Link>
            </li>
            <li key="4" className="hover:text-accent">
              <Link href="/pages/pfsense#lan-interface">
                LAN Interface (igc1)
              </Link>
            </li>
            <li key="4" className="hover:text-accent">
              <Link href="/pages/pfsense#guest-interface">
                Guest Interface (igc0)
              </Link>
            </li>
            <li key="5" className="hover:text-accent">
              <Link href="/pages/pfsense#aliases">Aliases</Link>
            </li>
            <li key="5" className="hover:text-accent">
              <Link href="/pages/pfsense#nat-nginx">
                NAT for Nginx Web Server
              </Link>
            </li>
          </ol>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Update the Default Password */}
        <div>
          <h3 id="update-default-password" className="text-accent">
            Update the Default Password
            <span>
              <Link scroll={true} href="/pages/pfsense#top" className="link">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <p>
            {" "}
            The first change to make to our Netgate (pfSense) firewall is to
            change the default administrator password.
            <a
              href="https://docs.netgate.com/pfsense/en/latest/recipes/changing-credentials.html#user-manager-accounts"
              className="text-accent"
              target="_blank"
            >
              {" "}
              Follow these steps{" "}
            </a>
            from pfSense's documentation to change the default administrator
            password. Once that's taken care of, we'll start configuring our
            firewall policies to support our lab requirements.
          </p>
        </div>
        {/* WAN Interface */}
        <div>
          <h3 id="wan-interface" className="text-accent">
            WAN Interface (igc3)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT1WAN
          </div>
          <p>
            Port 1/4 is reserved for our WAN interface and it should be directly
            connected to our internet modem. Furthermore, this interface should
            be configured to receive it's IP address assignment via Dynamic Host
            Configuration Protocol (DHCP). If your network requirements are
            different (e.g., perhaps, you'd like to assign your Netgate firewall
            WAN interface with a static IP address), then feel free to deviate
            from this lab guide to suit your requirements.
          </p>
        </div>
        {/* Management Interface */}
        <div>
          <h3 id="management-interface" className="text-accent">
            MGT Interface (igc2)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT2LAN
          </div>
          <p>
            Port 2/4 is reserved for our management interface and should be
            configured out of the box with a static IP address of 192.168.1.1.
            This interface is effectively our management interface and we will
            hardwire our computer to this port on our Netgate firewall. Don't
            forget to assign your computer with a static IP address within the
            same subnet as the management interface (e.g., 192.168.1.38).
          </p>
        </div>
        <Callout icon={faWifiStrong} text={calloutContent[0]}></Callout>
        {/* LAN Interface */}
        <div>
          <h3 id="lan-interface" className="text-accent">
            LAN Interface (igc1)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT3
          </div>
          <p>
            Port 3/4 is reserved for our LAN network interface. Off of this
            interface, we will connect a small switch which we will configure
            with four Virtual Local Area Networks (VLANs):
          </p>
          <ul className="unorderedList">
            <li key="1">
              VLAN 01: <span className="text-accent">Default VLAN</span>
            </li>
            <li key="2">
              VLAN 10: <span className="text-accent">Services VLAN</span>
            </li>
            <li key="3">
              VLAN 20: <span className="text-accent">Users VLAN</span>
            </li>
            <li key="3">
              VLAN 30: <span className="text-accent">Storage VLAN</span>
            </li>
            <li key="4">
              VLAN 40: <span className="text-accent">Management VLAN</span>
            </li>
          </ul>
          <p>
            We will discuss the switch configuration in a separeate blog post,
            but suffice it to say that the majority of our lab components will
            be connected to this switch. We'll be using static IP address
            assignment for this interface, so we'll need a new subnet. To keep
            things easy, we'll choose 192.168.2.1. Ensure the interface is
            enabled and save your changes.
          </p>
        </div>
        {/* Guest Interface */}
        <div>
          <h3 id="guest-interface" className="text-accent">
            Guest Interface (igc0)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT4
          </div>
          <p>
            Port 4/4 is reserved for our Guest network interface. You'll likely
            want to plug your home wireless router into this port and completely
            isolate it from the rest of the network by ensuring, with pfSense,
            that no traffic is allowed to pass between the Home Network and the
            Lab Network. This is an optional step that is outside of the scope
            of this lab, but it should be simple enough to implement using the
            concepts you'll learn here as we build out our lab.
          </p>
        </div>
        {/* Aliases */}
        <div>
          <h3 id="aliases" className="text-accent">
            Aliases
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall <span className="text-accent">{">"}</span> Aliases
          </div>
          <p>
            pfSense aliases make it easier to implement our configurations.
            Instead of having to remember IP addresses and type out URLs, we can
            simply create aliases which we can later select from dropdown menus
            as we create policies in the administration portal. In preparation
            for deploying our Nginx web server, we'll configure an alias for our
            Nginx web server. We'll use this later when configuring policies to
            allow. Don't forget to save your changes!
          </p>
          <h4>Example Alias Configuration</h4>
          <ul className="unorderedList">
            <li key="1">
              Name: <span className="text-accent">nginx_web_server</span>
            </li>
            <li key="2">
              Description: <span className="text-accent">nginx web server</span>
            </li>
            <li key="3">
              Type: <span className="text-accent">Host(s)</span>
            </li>
            <li key="4">
              IP or FQDN: <span className="text-accent">192.168.10.4</span>
            </li>
            <li key="5">
              Description: <span className="text-accent">nginx web server</span>
            </li>
          </ul>
          <ToggleImage params={images["0"]}></ToggleImage>
        </div>
        {/* NAT for Nginx */}
        <div>
          <h3 id="nat-nginx" className="text-accent">
            NAT for Nginx Web Server
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall <span className="text-accent">{">"}</span> NAT{" "}
            <span className="text-accent">{">"}</span> Port Forward
          </div>
          <p>
            As is typical of a web server, our Nginx web server will be
            listening on port 80 and port 443, so we'll want to forward port 80
            and port 443 to our Nginx web server. We'll also need to forward
            those ports on our home router (in my case, my Amplifi home router).
            Please refer to the "Amplifi" blog post to review those steps.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PfSense;
