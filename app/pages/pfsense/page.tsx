import React from "react";
import Link from "next/link";
import {
  faWifiStrong,
  faLightbulb,
  faNetworkWired,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import Callout from "../../components/callout/Callout";
import ToggleImage from "../../components/toggleImage/ToggleImage";

function PfSense() {
  const calloutContent: string[] = [
    "This lab requires a personal computer equipped with a wired Network Interface Card (NIC). While it is possible to configure our Netgate firewall over a wireless (Wi-Fi) connection, that is outside of the scope of this lab.",
    "You may choose to deviate from my IP addressing scheme, but it will be easier to follow the documentation if you use the same IP addresses.",
    "Make sure to select 'Add Associated Filter Rule' from the dropdown within the 'Filter Rule Association' option. This will save you a step by creating a firewall rule that will pass the matching traffic on the interface selected.",
    "Make these IP addresses / VLAN mappings easy to remember and have them readily accessible. It helps to build a network diagram to better visualize your lab, to aid in discussion when collaborating with others, and for overall ease of reference. I used LucidChart to diagram my home lab and included a screenshot of it below.",
    "We will not be using IPv6 in this lab, so you may disable/disregard all IPv6 settings.",
    "In the following section, you'll be able to review each interface configuration along with an explanation of how we'll be using that interface in our lab. ",
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
    {
      id: "2",
      imagePath: "/images/pfsense_nginx_nat.png",
      imageAltText: "pfSense NGINX NAT policy",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "3",
      imagePath: "/images/pfsense_dns_resolver_nat.png",
      imageAltText: "pfSense DNS Resolver NAT rule",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "4",
      imagePath: "/images/pfsense_dns_resolver_configuration.png",
      imageAltText: "pfSense DNS Resolver configuration",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "5",
      imagePath: "/images/pfsense_sys_general_setup.png",
      imageAltText: "pfSense DNS server settings for forwarding mode support",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "6",
      imagePath: "/images/pfsense_dns_host_overrides.png",
      imageAltText: "pfSense DNS Resolver host overrides",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "7",
      imagePath: "/images/pfsense_interfaces_PORT1WAN.png",
      imageAltText: "pfSense interface for PORT1WAN",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "8",
      imagePath: "/images/pfsense_interfaces_PORT2LAN.png",
      imageAltText: "pfSense interface for PORT2LAN",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "9",
      imagePath: "/images/pfsense_interfaces_PORT3.png",
      imageAltText: "pfSense interface for PORT3",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "10",
      imagePath: "/images/pfsense_interfaces_VLAN_USERS.png",
      imageAltText: "pfSense interface for VLAN_USERS",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "11",
      imagePath: "/images/pfsense_interfaces_VLAN_SERVICES.png",
      imageAltText: "pfSense interface for VLAN_SERVICES",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "12",
      imagePath: "/images/pfsense_interfaces_VLAN_STORAGE.png",
      imageAltText: "pfSense interface for VLAN_STORAGE",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "13",
      imagePath: "/images/pfsense_interfaces_VLAN_MANAGEMENT.png",
      imageAltText: "pfSense interface for VLAN_MANAGEMENT",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "14",
      imagePath: "/images/pfsense_interfaces_VLAN_DEFAULT.png",
      imageAltText: "pfSense interface for VLAN_DEFAULT",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "15",
      imagePath: "/images/pfsense_interfaces_PORT4.png",
      imageAltText: "pfSense interface for PORT4",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "16",
      imagePath: "/images/pfsense_rules_PORT1WAN.png",
      imageAltText: "pfSense rules for PORT1WAN",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "17",
      imagePath: "/images/pfsense_rules_PORT2LAN.png",
      imageAltText: "pfSense rules for PORT2LAN",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "18",
      imagePath: "/images/pfsense_rules_PORT3.png",
      imageAltText: "pfSense rules for PORT3",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "19",
      imagePath: "/images/pfsense_rules_PORT4.png",
      imageAltText: "pfSense rules for PORT4",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "20",
      imagePath: "/images/pfsense_rules_VLAN_USERS.png",
      imageAltText: "pfSense rules for VLAN_USERS",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "21",
      imagePath: "/images/pfsense_rules_VLAN_SERVICES.png",
      imageAltText: "pfSense rules for VLAN_SERVICES",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "22",
      imagePath: "/images/pfsense_rules_VLAN_STORAGE.png",
      imageAltText: "pfSense rules for VLAN_STORAGE",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "23",
      imagePath: "/images/pfsense_rules_VLAN_MANAGEMENT.png",
      imageAltText: "pfSense rules for VLAN_MANAGEMENT",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "24",
      imagePath: "/images/pfsense_rules_VLAN_DEFAULT.png",
      imageAltText: "pfSense rules for VLAN_DEFAULT",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "25",
      imagePath: "/images/network_diagram.png",
      imageAltText: "Network Diagram",
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
            project, so why not use their hardware? Well, you could save some
            money by running pfSense on a dedicated and less expensive (but not
            purpose-built) piece of hardware. This might be a good middle ground
            if your keeping a close eye on your budget, but still want extra
            ethernet ports.
          </p>
          <p className="headline">
            You could save even more by running pfSense in a virtual machine on
            your Proxmox server, but part of the home lab experience is working
            with hardware. Plus, those extra ports on the Netgate appliance I'm
            suggesting (i.e., the Netgate 4200) will come in handy as your lab
            grows.
          </p>
          <p className="headline">
            Whatver you decide, it's important to know that your Netgate
            appliance is more than just a firewall. We'll be using it for
            Dynamic DNS to host our website as well as for local routing, DNS
            resolution, Network Address Translation, and so much more as our use
            cases grow (NTP, DHCP, etc.). So, while this portion of the lab is a
            bit on the lengthy side, it's packed full of valuable learnings and
            is truly fundamental to the creation of our lab.
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
            {/* Configuring Physical Interfaces */}
            <li key="2" className="hover:text-accent">
              <Link href="/pages/pfsense#configuring-physical-interfaces">
                Configuring Physical Interfaces
              </Link>
            </li>
            <ol className="secondOrderedList">
              <li key="3" className="hover:text-accent">
                <Link href="/pages/pfsense#wan-interface">
                  Port 1 (igc3) — WAN Interface
                </Link>
              </li>
              <li key="4" className="hover:text-accent">
                <Link href="/pages/pfsense#lan-interface">
                  Port 2 (igc2) — LAN Interface
                </Link>
              </li>
              <li key="5" className="hover:text-accent">
                <Link href="/pages/pfsense#lab-interface">
                  Port 3 (igc1) — Lab Interface
                </Link>
              </li>
              <li key="6" className="hover:text-accent">
                <Link href="/pages/pfsense#guest-interface">
                  Port 4 (igc0) — Guest Interface
                </Link>
              </li>
            </ol>
            {/* Configuring Virtual Interfaces */}
            <li key="7" className="hover:text-accent">
              <Link href="/pages/pfsense#configuring-virtual-interfaces">
                Configuring Virtual Interfaces
              </Link>
            </li>
            <ol className="secondOrderedList">
              <li key="8" className="hover:text-accent">
                <Link href="/pages/pfsense#default-vlan-interface">
                  VLAN 1 — Default VLAN — Interface
                </Link>
              </li>
              <li key="9" className="hover:text-accent">
                <Link href="/pages/pfsense#services-vlan-interface">
                  VLAN 10 — Services VLAN — Interface
                </Link>
              </li>
              <li key="10" className="hover:text-accent">
                <Link href="/pages/pfsense#users-vlan-interface">
                  VLAN 20 — Users VLAN — Interface
                </Link>
              </li>
              <li key="11" className="hover:text-accent">
                <Link href="/pages/pfsense#storage-vlan-interface">
                  VLAN 30 — Storage VLAN — Interface
                </Link>
              </li>
              <li key="12" className="hover:text-accent">
                <Link href="/pages/pfsense#management-vlan-interface">
                  VLAN 40 — Management VLAN — Interface
                </Link>
              </li>
            </ol>
            <li key="13" className="hover:text-accent">
              <Link href="/pages/pfsense#aliases">Aliases</Link>
            </li>
            <li key="14" className="hover:text-accent">
              <Link href="/pages/pfsense#nat-nginx">
                NAT for Nginx Web Server
              </Link>
            </li>
            <li key="15" className="hover:text-accent">
              <Link href="/pages/pfsense#nat-dns-resolver">
                NAT for DNS Resolver
              </Link>
            </li>
            {/* Configuring Physical Interface Firewall Rules */}
            <li key="16" className="hover:text-accent">
              <Link href="/pages/pfsense#configuring-physical-interface-firewall-rules">
                Configuring Physical Interface Firewall Rules
              </Link>
            </li>
            <ol className="secondOrderedList">
              <li key="17" className="hover:text-accent">
                <Link href="/pages/pfsense#port1wan-rules">
                  Port 1 (igc3) — Firewall Rules
                </Link>
              </li>
              <li key="18" className="hover:text-accent">
                <Link href="/pages/pfsense#port2lan-rules">
                  Port 2 (igc2) — Firewall Rules
                </Link>
              </li>
              <li key="19" className="hover:text-accent">
                <Link href="/pages/pfsense#port3-rules">
                  Port 3 (igc1) — Firewall Rules
                </Link>
              </li>
              <li key="20" className="hover:text-accent">
                <Link href="/pages/pfsense#port4-rules">
                  Port 4 (igc0) — Firewall Rules
                </Link>
              </li>
            </ol>
            {/* Configuring Virtual Interface Firewall Rules */}
            <li key="21" className="hover:text-accent">
              <Link href="/pages/pfsense#configuring-virtual-interface-firewall-rules">
                Configuring Virtual Interface Firewall Rules
              </Link>
            </li>
            <ol className="secondOrderedList">
              <li key="22" className="hover:text-accent">
                <Link href="/pages/pfsense#vlan-default-rules">
                  VLAN 1 — Default VLAN — Firewall Rules
                </Link>
              </li>
              <li key="23" className="hover:text-accent">
                <Link href="/pages/pfsense#vlan-services-rules">
                  VLAN 10 — Services VLAN — Firewall Rules
                </Link>
              </li>
              <li key="24" className="hover:text-accent">
                <Link href="/pages/pfsense#vlan-users-rules">
                  VLAN 20 — Users VLAN — Firewall Rules
                </Link>
              </li>
              <li key="25" className="hover:text-accent">
                <Link href="/pages/pfsense#vlan-storage-rules">
                  VLAN 30 — Storage VLAN — Firewall Rules
                </Link>
              </li>
              <li key="26" className="hover:text-accent">
                <Link href="/pages/pfsense#vlan-management-rules">
                  VLAN 40 — Management VLAN — Firewall Rules
                </Link>
              </li>
            </ol>
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
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            This lab guide assumes that you've reviewed Netgate's{" "}
            <a
              href="https://docs.netgate.com/pfsense/en/latest/solutions/netgate-4200/getting-started.html"
              className="text-accent"
              target="_blank"
            >
              {" "}
              "Getting Started" guide{" "}
            </a>{" "}
            for the 4200 appliance and that you're able to access the
            adminstrative web interface. Once we're logged in using the default
            credentials of "admin" for the username and "pfsense" for the
            password, the first change to make to our Netgate (pfSense) firewall
            is to change the default administrator password to something more
            complex and, therefore, secure.
          </p>
          <p>
            I suggest setting a much longer password (twelve or more characters)
            consisting of upper and lower case letters as well as numbers and
            symbols.
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
            firewall to support our lab requirements.
          </p>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Configuring Physical Interfaces */}
        <div>
          <h3 id="configuring-physical-interfaces" className="text-accent">
            Configuring Physical Interfaces
            <span>
              <Link scroll={true} href="/pages/pfsense#top" className="link">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Before we begin, it couldn't hurt to remind ourselves of what we're
            building by reviewing the network diagram that was shared in the{" "}
            <a
              href="http://localhost:3000/pages/lab-components"
              className="text-accent"
              target="_blank"
            >
              "Gear Up"
            </a>{" "}
            blog post that kicked off this series:
          </p>
          <ToggleImage params={images["24"]}></ToggleImage>
          <p>
            Now that we're ready, let's configure the Netgate appliance's
            physical interfaces (ports). There are only a few changes we need to
            make to our physical interfaces and most of these configurations
            will be repetitive with only a few deviations along the way.
          </p>
          <p>
            In general, when configuring a physical interface, our first step
            will be to enable the interface. Next, we'll want to choose whether
            or not the interface will receive its IP address via Dynamic Host
            Configuration Protocol (DHCP) or if we will set the interface's IP
            address statically. For this exercise, we will always give our
            interfaces a static IP address. We then may or may not need to
            assign an upstream IPv4 gateway and that should pretty much cover
            it.
          </p>
          <Callout icon={faLightbulb} text={calloutContent[4]}></Callout>
          <Callout icon={faFlask} text={calloutContent[5]}></Callout>
        </div>
        {/* WAN Interface */}
        <div>
          <h4 id="wan-interface" className="text-accent">
            Port 1 — WAN Interface (igc3)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT1WAN
          </div>
          <p>
            Port 1/4 is our WAN interface and now is the time, if you haven't
            already, to physically connect it to an open port on your internet
            modem or router in order to provide Internet access to our firewall
            and anything else downstream from it. By default, Port 1/4 should be
            configured to receive it's IP address assignment via Dynamic Host
            Configuration Protocol (DHCP); however, I suggest you set a static
            IP address on this interface if you can.
          </p>
          <p>
            On my Amplifi home router, I have the ability to reserve a portion
            of the IP addresses issued from the router's DHCP pool for static IP
            address assignment. In my lab, I have configured my Amplifi router
            to reserve 192.168.132.1 through 192.168.132.99 for static IP
            address assignement, leaving 192.168.132.100 through 192.168.132.254
            for DHCP to use on other devices—connected either wirelessly or
            hardwired to the Amplifi router. If your network requirements are
            different, then feel free to deviate from this guide to suit your
            needs. I will be setting a static IP address of 192.168.132.7 for my
            PORT1WAN interface.
          </p>
          <ToggleImage params={images["6"]}></ToggleImage>
        </div>
        {/* LAN Interface */}
        <div>
          <h4 id="lan-interface" className="text-accent">
            Port 2 — LAN Interface (igc2)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT2LAN
          </div>
          <p>
            Port 2/4 is reserved for our LAN interface and should be configured
            out of the box with a static IP address of 192.168.1.1. For our lab
            purposes, this interface is our Netgate appliance's primary
            management interface and we will hardwire our computer to this port
            in order to manage our Netgate appliance. In a subsequent lab, we
            will configure secure remote management using Zscaler Private Access
            (ZPA).
          </p>
          <p>
            Don't forget to assign your computer with a static IP address within
            the same subnet as the management interface (e.g., 192.168.1.2). You
            should know this already, though, since you've gone through the
            Netgate 4200{" "}
            <a
              href="https://docs.netgate.com/pfsense/en/latest/solutions/netgate-4200/getting-started.html"
              className="text-accent"
              target="_blank"
            >
              Getting Started guide
            </a>{" "}
            and it's likely the port you're connected to right now!
          </p>
          {/* <Callout icon={faWifiStrong} text={calloutContent[0]}></Callout> */}
          <ToggleImage params={images["7"]}></ToggleImage>
        </div>
        {/* Lab Interface */}
        <div>
          <h4 id="lab-interface" className="text-accent">
            Port 3 — Lab Interface (igc1)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> PORT3
          </div>
          <p>
            Port 3/4 is reserved for our Lab network interface. We will
            eventually physically connect our switch to this interface and we
            will also configure four Virtual Local Area Networks (VLANs) to
            virtually segment our switch into different virtual networks. We
            will discuss the switch configuration in a separate blog post, but
            suffice it to say that the majority of our lab components will be
            connected to this switch and all traffic traversing the switch will
            be tagged to a specific VLAN (e.g., Proxmox Server on VLAN 10
            "Services VLAN"). We will give this interface a static IP address
            and, so, we'll need a new subnet. To keep things easy, we'll choose
            192.168.2.0/24 for our subnet and our IP address for this interface
            will be 192.168.2.1. Ensure the interface is enabled and save your
            changes.
          </p>
          <ToggleImage params={images["8"]}></ToggleImage>
        </div>
        {/* Guest Interface */}
        <div>
          <h4 id="guest-interface" className="text-accent">
            Port 4 — Guest Interface (igc0)
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
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
            concepts you'll learn here as we build out our lab. For now, we'll
            leave this interface disabled.
          </p>
          <ToggleImage params={images["14"]}></ToggleImage>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Configuring Virtual Interfaces */}
        <div>
          <h3 id="configuring-virtual-interfaces" className="text-accent">
            Configuring Virtual Interfaces
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}> # </span>
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> VLANs
          </div>
          <p>
            In a later lab, we'll map our VLANs to physical interfaces on our
            lab's switch. Then, we'll physically connect our switch to Port 3 on
            our Netgate appliance and we'll configure what's called a "trunk"
            port. Our trunk port will include all of our VLANs and it's
            effectively how we get our VLAN traffic passed between our pfSense
            firewall and our switch. We'll use our pfSense firewall to create
            routing and firewall rules to allow only the appropriate
            communications between VLANs. These communications are considered
            east/west traffic (as opposed to north/south traffic from/to our LAN
            to/from the Internet.)
          </p>
          <p>
            So, all traffic from our switch goes up to our pfSense firewall
            where policy is applied and devices connected to the switch cannot
            communicate to one another without passing through the pfSense
            firewall. That said, now is a good time to configure our VLAN
            interfaces within pfSense. Feel free to use the IP addressing shared
            below if you'd like to keep your lab consistent with this guide:
          </p>
          <Callout icon={faNetworkWired} text={calloutContent[3]}></Callout>
          <ToggleImage params={images["24"]}></ToggleImage>
          {/* VLAN / IP Mappings */}
          <ul className="unorderedList">
            <li key="1">
              VLAN 01 <span className="text-subtle">—</span>{" "}
              <span className="text-accent">192.168.5.1</span>
              <span>
                <span className="text-subtle">—</span> Default VLAN
              </span>
            </li>
            <li key="2">
              VLAN 10 <span className="text-subtle">—</span>{" "}
              <span className="text-accent">192.168.10.1</span>
              <span>
                <span className="text-subtle">—</span> Services VLAN
              </span>
            </li>
            <li key="3">
              VLAN 20 <span className="text-subtle">—</span>{" "}
              <span className="text-accent">192.168.20.1</span>
              <span>
                <span className="text-subtle">—</span> Users VLAN
              </span>
            </li>
            <li key="4">
              VLAN 30 <span className="text-subtle">—</span>{" "}
              <span className="text-accent">192.168.30.1</span>
              <span>
                <span className="text-subtle">—</span> Storage VLAN
              </span>
            </li>
            <li key="5">
              VLAN 40 <span className="text-subtle">—</span>{" "}
              <span className="text-accent">192.168.40.1</span>
              <span>
                <span className="text-subtle">—</span> Management VLAN
              </span>
            </li>
          </ul>
        </div>
        {/* Default VLAN Interface */}
        <div>
          <h4 id="default-vlan-interface" className="text-accent">
            VLAN 01 - Default VLAN - Interface
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}> # </span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> VLAN_DEFAULT
            (igc1.1)
          </div>
          <ToggleImage params={images["13"]}></ToggleImage>
        </div>
        {/* Services VLAN Interface */}
        <div>
          <h4 id="services-vlan-interface" className="text-accent">
            VLAN 10 - Services VLAN - Interface
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> VLAN_SERVICES
            (igc1.10)
          </div>
          <p>VLAN 10 - Services VLAN - Interface</p>
          <ToggleImage params={images["10"]}></ToggleImage>
        </div>
        {/* Users VLAN Interface */}
        <div>
          <h4 id="users-vlan-interface" className="text-accent">
            VLAN 20 - Users VLAN - Interface
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> VLAN_USERS
            (igc1.20)
          </div>
          <p>VLAN 20 - Users VLAN - Interface</p>
          <ToggleImage params={images["9"]}></ToggleImage>
        </div>
        {/* Storage VLAN Interface */}
        <div>
          <h4 id="storage-vlan-interface" className="text-accent">
            VLAN 30 - Storage VLAN - Interface
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span> VLAN_STORAGE
            (igc1.30)
          </div>
          <p>VLAN 30 - Storage VLAN - Interface</p>
          <ToggleImage params={images["11"]}></ToggleImage>
        </div>
        {/* Management VLAN Interface */}
        <div>
          <h4 id="management-vlan-interface" className="text-accent">
            VLAN 40 - Management VLAN - Interface
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Interfaces <span className="text-accent">{">"}</span>{" "}
            VLAN_MANAGEMENT (igc1.40)
          </div>
          <p>VLAN 40 - Management VLAN - Interface</p>
          <ToggleImage params={images["12"]}></ToggleImage>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Aliases */}
        <div>
          <h3 id="aliases" className="text-accent">
            Aliases
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall <span className="text-accent">{">"}</span> Aliases
          </div>
          <p>
            pfSense aliases make it easier to configure our firewall. Instead of
            having to remember and type out IP addresses and FQDNs, we can
            simply create aliases which reference those IP addresses and FQDNs
            which we can later select from dropdown menus as we configure
            pfSense. For instance, what if you need to change an IP address
            assigned to a resource that you have 10+ policies written for within
            pfSesnse. With aliases, updating an IP address requires only one
            corresponding update to the firewall-the alias. Without aliases,
            you'd have to locate and change that IP address in your policies
            across pfSense. This is obviously very prone to human error. Imagine
            how difficult managing your pfSense policies would be without
            aliases! That said, and in preparation for deploying our Nginx web
            server, we'll configure an alias for our Nginx web server. We'll use
            this later when configuring policies to allow access to our website
            from outside our network (i.e., from the Internet). Don't forget to
            save your changes.
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
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* NAT for Nginx */}
        <div>
          <h3 id="nat-nginx" className="text-accent">
            NAT for Nginx Web Server
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
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
            and port 443 to our Nginx web server. Using our new alias for our
            Nginx web server, we'll create a port-forwarding NAT rule to forward
            those ports. We'll also need to forward those ports on our home
            router (in my case, my Amplifi home router) so that we're not
            blocking those connections further upstream in our network. Please
            refer to the "Amplifi" blog post to review those steps.
          </p>
          <ToggleImage params={images["1"]}></ToggleImage>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* NAT for DNS Resolver */}
        <div>
          <h3 id="nat-dns-resolver" className="text-accent">
            NAT for DNS Resolver
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall <span className="text-accent">{">"}</span> NAT{" "}
            <span className="text-accent">{">"}</span> Port Forward
          </div>
          <p>
            Another amazing capability built in to pfSense is its ability to act
            as both a DNS Forwarder or DNS Resolver. Having a DNS resolver give
            us more control over DNS by providing the ability to serve resources
            using easy to remember Fully-Qualified Domain Names (FQDNs) instead
            of IP addresses. For example,{" "}
            <span className="text-accent">fw.krauscloud.com</span> vs{" "}
            <span className="text-accent">192.168.1.2</span> is pretty much a
            super power for our home lab purposes.
          </p>
          <p>
            With that in mind, we want to forward all DNS traffic on all
            interfaces (both physical and virtual) to our loopback address in
            order to use our Netgate appliance for DNS resolution. Don't worry
            about the VLAN interfaces as we haven't configured those yet. We'll
            configure VLANs when we set up our switch. For now, just focus on
            the physical interfaces.
          </p>
          <p>
            Once in place, these NAT port-forwarding rules will redirect all DNS
            (port 53) requests from local clients destined to any external IP
            address. Those requests will be redirected to the Netgate appliance
            itself and, in the next section, we will configure pfSense to either
            resolve those requests or forward them to another DNS provider.
          </p>
          <Callout icon={faLightbulb} text={calloutContent[2]}></Callout>
          <ToggleImage params={images["2"]}></ToggleImage>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Configure DNS Resolver */}
        <div>
          <h3 id="configure-dns-resolver" className="text-accent">
            Configure DNS Resolver
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Services <span className="text-accent">{">"}</span> DNS Resolver{" "}
            <span className="text-accent">{">"}</span> General Settings
          </div>
          <p>
            As was mentioned earlier, having a DNS resolver gives us more
            control over DNS such as the ability to serve resources using domain
            names instead of IP addresses (e.g., fw.krauscloud.com vs
            192.168.1.2). If you want to make life easier for yourself and your
            users, then having your own DNS Resolver is the way to go. We'll be
            specifying two “Host Overrides” which will effectively swap an IP
            address for a hostname. Since domain names are easier for humans to
            remember, this is a no-brainer.
          </p>
          <p>
            With that in mind, you'll need to register your own domain because
            "krauscloud.com" is my domain. Also, feel free to choose subdomains
            that make sense for you. Lastly, there's no need to add all of these
            host overrides at once. If you don't plan on following the Zscaler
            Private Service Edge lab course, then there's no need to add a host
            override since it won't exist on your network. So, for starters,
            let's just add host overrides for our Netgate appliance (pfSense),
            our Proxmox server (the MS-01), and our web app (Next.js app).
          </p>
          <Callout icon={faLightbulb} text={calloutContent[1]}></Callout>
          <ToggleImage params={images["3"]}></ToggleImage>
          <ToggleImage params={images["4"]}></ToggleImage>
          <ToggleImage params={images["5"]}></ToggleImage>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Configuring Physical Interface Firewall Rules */}
        <div>
          <h3
            id="configuring-physical-interface-firewall-rules"
            className="text-accent"
          >
            Configuring Physical Interface Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> TBD{" "}
            <span className="text-accent">{">"}</span> TBD
          </div>
          <p>TBD...</p>
        </div>
        {/* PORT1WAN - Firewall Rules */}
        <div>
          <h4 id="port1wan-rules" className="text-accent">
            PORT1WAN - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> PORT1WAN
          </div>
          <p>
            For port 1/4, our WAN port, we want to ensure that our NAT
            auto-generated rule was created to forward any port 80 traffic to
            our Nginx server. Here, we're using an alias for our Nginx server,
            the details of which you can see when you hover over the alias. My
            alias of nginx_server is simply an alias for the IP address of my
            Nginx Web server (Ubuntu Desktop virtual machine).
          </p>
          <ToggleImage params={images["15"]}></ToggleImage>
        </div>
        {/* PORT2LAN - Firewall Rules */}
        <div>
          <h4 id="port2lan-rules" className="text-accent">
            PORT2LAN - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> PORT2LAN
          </div>
          <p>
            For port 2/4, we will need four rules in place. The first rule
            should already be created for you and we'll call this the
            “Anti-Lockout Rule”. This rule helps to ensure that you do not get
            locked out of your pfSense firewall should you make a
            misconfiguration. In the event that you make a misconfiguration, you
            should be able to make a wired connection to port 2/4 to access the
            web user interface.
          </p>
          <p>
            The second rule is to redirect DNS traffic to the firewall itself
            (it's loopback address) because, as was detailed in the prior step
            “Configure DNS Resolver”, we are using our Netgate appliance as a
            DNS resolver. Considering the fact that I only have a PC hard wired
            to this port, I have set the source to the IP address of my PC. The
            loopback address is the destination, and we're only concerned with
            port 53 (i.e., DNS) traffic.
          </p>
          <p>
            The third and fourth rule are not ideal for a production
            environment. They effectively let all IPv4 and IPv6 traffic from any
            subnets on port 2/4 to go to any reachable destination on the
            network known to pfSense. Obviously, we would be much more granular
            in on policy on production networks.
          </p>
          <ToggleImage params={images["16"]}></ToggleImage>
        </div>
        {/* PORT3 - Firewall Rules */}
        <div>
          <h4 id="port3-rules" className="text-accent">
            PORT3 - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> PORT3
          </div>
          <p>
            At this point, there are no rules to configure on port 3/4. The only
            rule required on this interface is the one that was created when we
            configured port forwarding on all interfaces for DNS Resolution
            (i.e., by selecting 'Add Associated Filter Rule').
          </p>
          <ToggleImage params={images["17"]}></ToggleImage>
        </div>
        {/* PORT4 - Firewall Rules */}
        <div>
          <h4 id="port4-rules" className="text-accent">
            PORT4 - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> PORT4
          </div>
          <p>
            For now, this port is disabled, so, you shouldn't even see an option
            to configure firewall rules for this interface. In the future,
            consider enabling this interface and adding a wireless access point.
            You could then apply what you've learned in this lab and build out
            additional use cases with wireless devices (guest network, IoT/OT,
            etc.).
          </p>
        </div>
        {/* Configuring Virtual Interface Firewall Rules */}
        <div>
          <h3
            id="configuring-virtual-interface-firewall-rules"
            className="text-accent"
          >
            Configuring Virtual Interface Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> TBD{" "}
            <span className="text-accent">{">"}</span> TBD
          </div>
          <p>TBD...</p>
        </div>
        {/* VLAN 1 — Default VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-default-rules" className="text-accent">
            VLAN 1 — Default VLAN — Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_DEFAULT
          </div>
          <p>TBD...</p>
          <ToggleImage params={images["22"]}></ToggleImage>
        </div>
        {/* VLAN 10 — Services VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-services-rules" className="text-accent">
            VLAN 10 — Services VLAN — Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_SERVICES
          </div>
          <p>
            For now, we don't need any rules for the Services VLAN, because we
            we've already configured the DNS redirect rule when creating our NAT
            redirect policy. The other three rules are to allow access from our
            Zscaler App Connector to other resources on our network. We will
            cover Zscaler App Connectors in a future lab.
          </p>
          <ToggleImage params={images["20"]}></ToggleImage>
        </div>
        {/* VLAN 20 — Users VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-users-rules" className="text-accent">
            VLAN 20 — Users VLAN — Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_USERS
          </div>
          <p>
            Our first rule for the Users VLAN is to redirect all DNS traffic to
            the firewall for resolution. Since we've already configured that
            rule when creating the NAT redirect policy, that should already be
            created for us. Our second rule can be skipped for now, but it will
            come in handy when we implement a Zscaler Branch Connector in a
            future lab. The remaining four rules allow access from our lab PC to
            various applications and resources. We can set those rules up at a
            later date when we go through hardening our firewall. For now, all
            you should have to do is create an "allow all" rule for your lab PC.
          </p>
          <ToggleImage params={images["19"]}></ToggleImage>
        </div>
        {/* VLAN 30 — Storage VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-storage-rules" className="text-accent">
            VLAN 30 — Storage VLAN — Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_STORAGE
          </div>
          <p>
            We won't be configuring our Storage VLAN in this lab; however, if
            you'd like to take a sneak peek then feel free! In a future lab,
            we'll cover not only implementing a Terramaster NAS, but providing
            secure remote access to it using our Zscaler App Connector—a
            component of Zscaler Private Access.
          </p>
          <ToggleImage params={images["21"]}></ToggleImage>
        </div>
        {/* VLAN 40 — Management VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-management-rules" className="text-accent">
            VLAN 40 — Management VLAN — Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h4>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_MANAGEMENT
          </div>
          <p>
            Our Management VLAN is critical—especially when we've locked
            ourselves out of our switch, but it also comes with a risk. With the
            "allow any" firewall rule in place, anybody who connects to the
            Management VLAN will have full access. We'll cover steps we can take
            to harden our lab in a future post. Finally, so as to not introduce
            confusion, the Management VLAN will be used to manage our network
            Switch and not our Firewall. As was mentioned in a previous step,
            the PORT2LAN interface is our management interface for our pfSense
            firewall.
          </p>
          <ToggleImage params={images["22"]}></ToggleImage>
        </div>
      </section>
    </div>
  );
}

export default PfSense;
