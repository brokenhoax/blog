import React from "react";
import Link from "next/link";
import {
  faFlask,
  faLightbulb,
  faNetworkWired,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Callout from "../../components/callout/Callout";
import TableOfContents from "../../components/toc/TableOfContents";
import ToggleImage from "../../components/toggleImage/ToggleImage";

function PfSense() {
  const calloutContent: string[] = [
    "This lab requires a personal computer equipped with a wired Network Interface Card (NIC). While it is possible to configure our Netgate firewall over a wireless (Wi-Fi) connection, that is outside of the scope of this lab.",
    "You may choose to deviate from my IP addressing scheme, but it will be easier to follow the documentation if you use the same IP addresses.",
    "Make sure to select 'Add Associated Filter Rule' from the dropdown within the 'Filter Rule Association' option. This will save you a step by creating a firewall rule that will pass the matching traffic on the interface selected.",
    "Make these IP addresses / VLAN mappings easy to remember and have them readily accessible. It helps to build a network diagram to better visualize your lab, to aid in discussion when collaborating with others, and for overall ease of reference. I used LucidChart to diagram my home lab and included a screenshot below.",
    "We will not be using IPv6 in this lab, so you may disable/disregard all IPv6 settings.",
    "In the following section, you'll be able to review each interface configuration along with an explanation of how we'll be using that interface in our lab. ",
    "The other two rules in the screenshot below are disabled. I created these rules in order to be able to review what traffic is passing over my Default VLAN. When I'm not using them, I disable them. When these rules are disabled, the Default VLAN traffic should be blocked due to pfSense's default 'block' behavior. I've had the Default VLAN effectively blocked for a few weeks now, and it hasn't caused any issue, so I'll leave this as is for now.",
    "The words 'interface' and 'port' are often used interchangably, but we also use the word 'port' to refer to network ports (e.g., port 443 (HTTPS) and port 123 (NTP)). Moving forward, we'll refer to ethernet interfaces as 'ethernet interfaces' or simply 'interfaces' and we will refer to network ports as 'network ports' or 'ports'.",
    "Thanks for sticking around and see you at the next post! --Andrew",
  ];
  const images = [
    {
      id: "1",
      imagePath: "/images/pfsense_aliases.png",
      imageAltText: "pfSense aliases creation wizard",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "2",
      imagePath: "/images/pfsense_nginx_nat.png",
      imageAltText: "pfSense NGINX NAT policy",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "3",
      imagePath: "/images/pfsense_dns_resolver_nat.png",
      imageAltText: "pfSense DNS Resolver NAT rule",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "4",
      imagePath: "/images/pfsense_dns_resolver_configuration.png",
      imageAltText: "pfSense DNS Resolver configuration",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "5",
      imagePath: "/images/pfsense_sys_general_setup.png",
      imageAltText:
        "pfSense DNS Resolver 'Server Settings' used by 'Forwarding Mode'",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "6",
      imagePath: "/images/pfsense_dns_host_overrides.png",
      imageAltText: "pfSense DNS Resolver 'Host Overrides'",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "7",
      imagePath: "/images/pfsense_interfaces_PORT1WAN.png",
      imageAltText: "pfSense interface for PORT1WAN",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "8",
      imagePath: "/images/pfsense_interfaces_PORT2LAN.png",
      imageAltText: "pfSense interface for PORT2LAN",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "9",
      imagePath: "/images/pfsense_interfaces_PORT3.png",
      imageAltText: "pfSense interface for PORT3",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "10",
      imagePath: "/images/pfsense_interfaces_VLAN_USERS.png",
      imageAltText: "pfSense interface for VLAN_USERS",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "11",
      imagePath: "/images/pfsense_interfaces_VLAN_SERVICES.png",
      imageAltText: "pfSense interface for VLAN_SERVICES",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "12",
      imagePath: "/images/pfsense_interfaces_VLAN_STORAGE.png",
      imageAltText: "pfSense interface for VLAN_STORAGE",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "13",
      imagePath: "/images/pfsense_interfaces_VLAN_MANAGEMENT.png",
      imageAltText: "pfSense interface for VLAN_MANAGEMENT",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "14",
      imagePath: "/images/pfsense_interfaces_VLAN_DEFAULT.png",
      imageAltText: "pfSense interface for VLAN_DEFAULT",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "15",
      imagePath: "/images/pfsense_interfaces_PORT4.png",
      imageAltText: "pfSense interface for PORT4",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "16",
      imagePath: "/images/pfsense_rules_PORT1WAN.png",
      imageAltText: "pfSense rules for PORT1WAN",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "17",
      imagePath: "/images/pfsense_rules_PORT2LAN.png",
      imageAltText: "pfSense rules for PORT2LAN",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "18",
      imagePath: "/images/pfsense_rules_PORT3.png",
      imageAltText: "pfSense rules for PORT3",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "19",
      imagePath: "/images/pfsense_rules_PORT4.png",
      imageAltText: "pfSense rules for PORT4",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "20",
      imagePath: "/images/pfsense_rules_VLAN_USERS.png",
      imageAltText: "pfSense rules for VLAN_USERS",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "21",
      imagePath: "/images/pfsense_rules_VLAN_SERVICES.png",
      imageAltText: "pfSense rules for VLAN_SERVICES",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "22",
      imagePath: "/images/pfsense_rules_VLAN_STORAGE.png",
      imageAltText: "pfSense rules for VLAN_STORAGE",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "23",
      imagePath: "/images/pfsense_rules_VLAN_MANAGEMENT.png",
      imageAltText: "pfSense rules for VLAN_MANAGEMENT",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "24",
      imagePath: "/images/pfsense_rules_VLAN_DEFAULT.png",
      imageAltText: "pfSense rules for VLAN_DEFAULT",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "25",
      imagePath: "/images/network_diagram.png",
      imageAltText: "Network Diagram",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
    },
  ];
  return (
    <div>
      <section className="section motion-preset-focus">
        {/* Title */}
        <h1 id="top" className="text-accent">
          pfSense<span className="pl-4">🧪</span>
        </h1>
        <h2>The head of your home lab</h2>
        <p className="dateStamp text-accent">November 15th, 2024</p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Headline */}
        <div className="headlineWrapper">
          <p className="headline">
            Our Netgate appliance running pfSense can be referred to as the head
            of our home lab. That might sound strange, but I'm choosing my words
            carefully. Not only does pfSense give us network security (layer
            3/4, port/protocol), but it also provides us with advanced routing
            capabilities and will serve as our home lab's core router. It also
            boasts a lot of other functionality that we'll be leveraging
            throughout this series and beyond. The best part, pfSense is
            completely free and open source! This post is a bit on the longer
            side, but hang in there because it's chock-full of good stuff that
            truly is at the foundation of our home lab.
          </p>
        </div>
        {/* Table of Contents */}
        <TableOfContents params=""></TableOfContents>

        {/* Choose Your Hardware */}
        <div>
          <h3 id="choose-your-hardware" className="text-accent">
            Choose Your Hardware
            <span>
              <Link scroll={true} href="/pages/pfsense#top" className="link">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Why Netgate? Netgate is the official sponsor of the pfSense
            open-source project, so why not use their hardware? Sure, you could
            save some money by running pfSense on a less expensive (but not
            purpose-built) piece of hardware. This might be a good middle ground
            if your keeping a close eye on your budget, but still want extra
            ethernet interfaces.
          </p>
          <p>
            You could save even more by running pfSense in a virtual machine on
            your Proxmox server, but part of the home lab experience is working
            with hardware. Plus, those extra ethernet interfaces on the Netgate
            appliance I'm suggesting (i.e., the Netgate 4200) will come in handy
            as your lab grows.
          </p>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
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
            password. Once that's taken care of, we'll start configuring pfSense
            to support our lab requirements.
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
          <Callout icon={faLightbulb} text={calloutContent[7]}></Callout>
          <p>
            Before we begin configuring our interfaces, it couldn't hurt to
            remind ourselves of what we're building by reviewing the network
            diagram that was shared in the{" "}
            <a
              href="http://krauscloud.com/pages/lab-components"
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
            physical interfaces one-by-one. Most of the configuration will be
            repetitive with only a few deviations along the way. At a high
            level, when configuring a physical interface, our first step will be
            to enable the interface. Next, we'll want to choose whether or not
            the interface will receive its IP address via Dynamic Host
            Configuration Protocol (DHCP) or if we will set the interface's IP
            address statically. For this exercise, we will always give our
            interfaces a static IP address. We then may or may not need to
            assign an upstream IPv4 gateway. That should pretty much cover it.
            Let's configure our first physical interface!
          </p>
          <Callout icon={faLightbulb} text={calloutContent[4]}></Callout>
          <Callout icon={faFlask} text={calloutContent[5]}></Callout>
        </div>
        {/* WAN Interface */}
        <div>
          <h4 id="wan-interface" className="text-secondary">
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
            Port 1/4 is our "WAN" interface and now is the time, if you haven't
            already, to physically connect it to an open interface on your
            internet modem or router in order to provide Internet access to our
            firewall and anything else downstream from it. By default, Port 1/4
            should be configured to receive it's IP address assignment via
            Dynamic Host Configuration Protocol (DHCP); however, I suggest you
            set a static IP address on this interface if you can.
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
          <h4 id="lan-interface" className="text-secondary">
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
            Port 2/4 is reserved for our "LAN" interface and should be
            configured out of the box with a static IP address of 192.168.1.1.
            For our lab purposes, this interface is our Netgate appliance's
            primary management interface and we will hardwire our computer to
            this port in order to manage our Netgate appliance. In a subsequent
            lab, we will configure secure remote management using Zscaler
            Private Access (ZPA).
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
            and it's likely the interface you're connected to right now!
          </p>
          {/* <Callout icon={faWifiStrong} text={calloutContent[0]}></Callout> */}
          <ToggleImage params={images["7"]}></ToggleImage>
        </div>
        {/* Lab Interface */}
        <div>
          <h4 id="lab-interface" className="text-secondary">
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
            Port 3/4 is our "Lab" network interface and it's arguably the most
            interesting network interface on our Netgate appliance. In a
            subequent post, we will physically connect our switch to this
            interface and that switch will connect the majority of our lab
            components to our lab. Furthermore, we will be configuring our lab
            switch with four Virtual Local Area Networks (VLANs) in order to
            virtually segment our physical switch into different virtual
            networks. What's more is that we will use pfSense to allow or deny
            traffic between those VLANs.
          </p>
          <p>
            We will give this interface a static IP address and, so, we'll need
            a new subnet. To keep things easy, we'll choose 192.168.2.0/24 for
            our subnet and our IP address for this interface will be
            192.168.2.1. Ensure the interface is enabled and save your changes.
          </p>
          <ToggleImage params={images["8"]}></ToggleImage>
        </div>
        {/* Guest Interface */}
        <div>
          <h4 id="guest-interface" className="text-secondary">
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
            Port 4/4 is reserved for our "Guest" network interface. If you want,
            you could plug a wireless router into this interface, placing it
            behind your Netgate security appliance so that you could protect
            your guest WiFi users/devices with pfSense. If you're considering
            this, then don't forget to consider the security implications and
            how you might want to use pfSense to restrict traffic from this
            interface to our lab environment and vice versa. This is an optional
            step that is outside of the scope of this lab, but it should be
            simple enough to implement using the concepts you'll learn here and
            as we build out our home lab. For now, we'll leave this interface
            disabled.
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
          {/* VLAN / IP Mappings */}
          <ul className="unorderedList">
            <li key="1">
              VLAN 01 <span className="text-accent">—</span>{" "}
              <span className="text-accent">192.168.5.1</span>
              <span>
                <span className="text-accent">—</span> Default VLAN
              </span>
            </li>
            <li key="2">
              VLAN 10 <span className="text-accent">—</span>{" "}
              <span className="text-accent">192.168.10.1</span>
              <span>
                <span className="text-accent">—</span> Services VLAN
              </span>
            </li>
            <li key="3">
              VLAN 20 <span className="text-accent">—</span>{" "}
              <span className="text-accent">192.168.20.1</span>
              <span>
                <span className="text-accent">—</span> Users VLAN
              </span>
            </li>
            <li key="4">
              VLAN 30 <span className="text-accent">—</span>{" "}
              <span className="text-accent">192.168.30.1</span>
              <span>
                <span className="text-accent">—</span> Storage VLAN
              </span>
            </li>
            <li key="5">
              VLAN 40 <span className="text-accent">—</span>{" "}
              <span className="text-accent">192.168.40.1</span>
              <span>
                <span className="text-accent">—</span> Management VLAN
              </span>
            </li>
          </ul>
          <Callout icon={faNetworkWired} text={calloutContent[3]}></Callout>
          <ToggleImage params={images["24"]}></ToggleImage>
        </div>
        {/* Default VLAN Interface */}
        <div>
          <h4 id="default-vlan-interface" className="text-secondary">
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
          <p>
            The default VLAN on our HP switch is VLAN 1 which is common across
            networking manufacturers, but be sure to consult your switch's
            documentation. We configure the default VLAN interface by giving it
            a static IP addresses and checking the "enable interface" checkbox.
            In a later lab, when configuring our switch, we'll configure the
            opposite end of this connection when configuring the VLAN interfaces
            on our switch. In short, here we are creating VLANs, assigning VLANs
            to virtual interfaces, and giving those virtual interfaces an IP
            addresses so that they are reachable on the network.
          </p>
          <ToggleImage params={images["13"]}></ToggleImage>
        </div>
        {/* Services VLAN Interface */}
        <div>
          <h4 id="services-vlan-interface" className="text-secondary">
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
          <p>
            The Services VLAN, which we can also refer to as "VLAN 10", is where
            our servers live. Let's enable this interface. Next, we'll decide on
            a subnet to reserve for the services VLAN. How about 192.168.10.0/24
            for our Services VLAN IP addressing scheme? Next, let's take one of
            those IP addresses from the 192.168.10.0/24 network and assign it to
            our VLAN interface. For consistency's sake and to stay with
            convention, we'll use 192.168.10.1 for our Services VLAN inteface IP
            address assignment.
          </p>
          <ToggleImage params={images["10"]}></ToggleImage>
        </div>
        {/* Users VLAN Interface */}
        <div>
          <h4 id="users-vlan-interface" className="text-secondary">
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
          <p>
            VLAN 20 is our users VLAN so we'll definitely want to enable this
            VLAN interface. We've reserved 192.168.20.0/24 for the Users VLAN.
            Therefore, we'll assign the Users VLAN (VLAN 20's) virtual interface
            an IP address of 192.168.20.1. Not much else to configure here, so,
            we'll save our changes and continue.
          </p>
          <ToggleImage params={images["9"]}></ToggleImage>
        </div>
        {/* Storage VLAN Interface */}
        <div>
          <h4 id="storage-vlan-interface" className="text-secondary">
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
          <p>
            We have a similar configuration for our Storage VLAN, VLAN 30. We'll
            use 192.168.30.0/24 for our IP addressing scheme for this VLAN and
            we'll assign this VLAN interface an IP address of 192.168.30.1.
          </p>
          <ToggleImage params={images["11"]}></ToggleImage>
        </div>
        {/* Management VLAN Interface */}
        <div>
          <h4 id="management-vlan-interface" className="text-secondary">
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
          <p>
            And, as you could have guessed, we'll be configuring our management
            VLAN, VLAN 40, as we have the others. The subnet we'll reserve is
            192.168.40.0/24 and we'll give this VLAN interface a predictable IP
            address of 192.168.40.1.
          </p>
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
            aliases!
          </p>
          <p>
            That said, and in preparation for deploying our Nginx web server,
            we'll configure an alias for our Nginx web server. We'll use this
            later when configuring policies to allow access to our website from
            outside our network (i.e., from the Internet). Don't forget to save
            your changes.
          </p>
          <p className="label">Example Alias Configuration</p>
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
            Nginx web server, we'll create a port-forwarding NAT policy to
            forward those ports. While we're creating that NAT policy, we're
            going to make sure to select "Add associated filter rule" under the
            "Filter rule association" field. Once we save our NAT policy, we
            should notice that pfSense created a firewall rule fore to allow
            that associated traffic to pass. Keep in mind that we'll also need
            to forward those ports on our home router (in my case, my Amplifi
            home router) so that we're not blocking those connections further
            upstream in our network. Please refer to the "Amplifi" blog post to
            review those steps.
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
            using easy-to-remember Fully Qualified Domain Names (FQDNs) instead
            of IP addresses. For example, which is easier to recall? The FQDN{" "}
            <span className="text-accent">fw.krauscloud.com</span> or the IP
            address <span className="text-accent">192.168.1.2</span>?
          </p>
          <p>
            With that in mind, we want to forward all DNS traffic on all
            interfaces (both physical and virtual) to our loopback address in
            order to use our Netgate appliance for DNS resolution.
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
            names instead of IP addresses. If you want to make life easier for
            yourself and your users, then having your own DNS Resolver is the
            way to go. We will configure a few “Host Overrides” which will
            effectively swap an IP address for a hostname. Since domain names
            are easier for humans to remember, this is a no-brainer.
          </p>
          <p>
            With that in mind, you'll need to register your own domain because
            "krauscloud.com" is my domain. If you're looking for a registrar, I
            suggest Cloudflare for a few reasons one of which is that is who is
            used in a subsequent lab. Another important benefit of using
            Cloudflare is that they offer an free API as well as an integration
            with pfSense, both of which we will use when configuring Dynamic DNS
            to host our website locally.
          </p>
          <p>
            Lastly, there is no need to add all of these host overrides at once.
            For example, if you do not plan on following the Zscaler Private
            Service Edge lab course, then there is no need to add a host
            override for it since it will not exist on your network. That said,
            let's add a host override for our Netgate appliance (pfSense), our
            Proxmox server (the MS-01), and our web server (Nginx).
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
            Firewall<span className="text-accent"> {">"}</span> Rules
          </div>
          <p>
            Phew! We are three quarters of the way through this lab and we're
            finally going to start configuring some firewall rules. OK, we got
            this!
          </p>
          <p>
            The first thing to know is that the order of the rules matter. Rules
            are evaluated top to bottom, so be sure that you have your rules
            ordered properly or they might not work as expected. Typically, you
            have your more specific rules towards the top of the list and your
            more generalized rules towards the bottom of the list.
          </p>
        </div>
        {/* PORT1WAN - Firewall Rules */}
        <div>
          <h4 id="port1wan-rules" className="text-secondary">
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
            For port 1/4, our WAN port, we want to ensure that our
            auto-generated rules were created when we configured our NAT policy
            for our Nginx web server earlier in this lab. If you don't see them
            listed, then you'll need to configure them manually. Also, if youd
            don't see them then be sure to double-check that you didn't skip the
            section titled,{" "}
            <a
              href="http://krauscloud.com/pages/pfsense#nat-nginx"
              className="text-accent"
            >
              "NAT for Nginx Web Server"
            </a>
            .
          </p>
          <ToggleImage params={images["15"]}></ToggleImage>
        </div>
        {/* PORT2LAN - Firewall Rules */}
        <div>
          <h4 id="port2lan-rules" className="text-secondary">
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
            For interface 2/4, we will need a minimum of the first two rules in
            place. The first rule should already be created for you and we'll
            call this the “Anti-Lockout Rule”. This rule helps to ensure that
            you do not get locked out of your pfSense firewall should you make a
            misconfiguration. In the event that you make a misconfiguration, and
            you likely will, you should be able to make a wired connection to
            interface 2/4 to access the administrator portal to correct your
            mistake.
          </p>
          <p>
            The second rule is to redirect DNS traffic to the firewall itself
            (it's loopback address) because, as was detailed in the prior step{" "}
            <a
              href="http://krauscloud.com/pages/pfsense#configure-dns-resolver"
              className="text-accent"
            >
              “Configure DNS Resolver”
            </a>
            , we are using our Netgate appliance as a DNS resolver. Since I only
            have my Lab PC hardwired to this interface, I have set the source to
            the IP address of my Lab PC. The loopback address is the
            destination, and we're only concerned with port 53 (i.e., DNS)
            traffic.
          </p>
          <p>
            The third and fourth rule are a bad idea for a production
            environment. They effectively let all IPv4 and IPv6 traffic from any
            subnets on interface 2/4 to go to any reachable destination on the
            network known to pfSense. Obviously, we would implement much more
            granular policies in our production networks; however, we won't have
            anything plugged in to this interface in our home lab, so, not only
            are the stakes low but the exposure is, too.
          </p>
          <ToggleImage params={images["16"]}></ToggleImage>
        </div>
        {/* PORT3 - Firewall Rules */}
        <div>
          <h4 id="port3-rules" className="text-secondary">
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
            At this point, there are no rules to configure on interface 3/4. The
            only rule required on this interface is the one that was created
            when we configured port forwarding on all interfaces for DNS
            Resolution (i.e., by selecting 'Add Associated Filter Rule').
          </p>
          <ToggleImage params={images["17"]}></ToggleImage>
        </div>
        {/* PORT4 - Firewall Rules */}
        <div>
          <h4 id="port4-rules" className="text-secondary">
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
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
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
            Firewall<span className="text-accent"> {">"}</span> Rules
          </div>
          <p>
            Let's do a quick VLAN recap. We've created our VLANs, assigned our
            VLANs to virtual interfaces, and issued those interfaces static IP
            addresses. Now, just as we have with our physical ports, we are
            going to configure firewall rules to either allow or block traffic
            between our VLANs based on our requirements. For example, we will
            eventually need to provide our lab PC (which is in our "Users VLAN
            20") network access to resources such as our pfSense firewall and
            Proxmox server—both of which are part of our "Services VLAN 10".
          </p>
        </div>
        {/* VLAN 1 — Default VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-default-rules" className="text-secondary">
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
          <p>
            No firewall rules need to be configured for the Default VLAN, but
            you should see at least one rule that was created in a prior step
            when we set up our NAT DNS redirect policy for the Default VLAN. If
            you don't see it, be sure to revisit{" "}
            <a
              href="http://krauscloud.com/pages/pfsense#nat-dns-resolver"
              className="text-accent"
            >
              "NAT DNS Resolver"
            </a>
            .
          </p>
          <Callout icon={faLightbulb} text={calloutContent[6]}></Callout>
          <ToggleImage params={images["23"]}></ToggleImage>
        </div>
        {/* VLAN 10 — Services VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-services-rules" className="text-secondary">
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
            Just as before, we've already configured the DNS redirect rule when
            creating our NAT redirect policy; however, we need to configure
            three new firewall rules to allow specific traffic from our Nginx
            Web Server out of our network. In other words, when someone requests
            access to our website, we need to allow our web server to send a
            response back, that is, to serve up our website. These three allow
            rules will allow our Nginx web server access to any destination from
            any port so long as the destination port is port 53 (DNS), port 80
            (HTTP), or port 443 (HTTPS).
          </p>
          <ToggleImage params={images["20"]}></ToggleImage>
        </div>
        {/* VLAN 20 — Users VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-users-rules" className="text-secondary">
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
            later date when we harden our firewall. For now, all you should have
            to do is create an "allow all" rule for your lab PC.
          </p>
          <ToggleImage params={images["19"]}></ToggleImage>
        </div>
        {/* VLAN 30 — Storage VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-storage-rules" className="text-secondary">
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
            you'd like to take a sneak peek then feel free! In a future lab, we
            will cover not only implementing a Terramaster NAS, but providing
            secure remote access to it using our Zscaler App Connector—a
            component of Zscaler Private Access (ZPA). Using ZPA, we will be
            able to access our lab resources and applications securely from
            anywhere!
          </p>
          <ToggleImage params={images["21"]}></ToggleImage>
        </div>
        {/* VLAN 40 — Management VLAN — Firewall Rules */}
        <div>
          <h4 id="vlan-management-rules" className="text-secondary">
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
            Again, our first rule for our Management VLAN was created when we
            set up our NAT redirect policy to support using pfSense as our DNS
            resolver.Next, we need to think about how we will use this
            Management VLAN. To be clear, the Management VLAN will be used to
            manage our network Switch and not our Firewall. You may recall that
            interface 2/4 is, effectively, our Management interface for our
            Netgate appliance. Just plug directly into that interface, make sure
            to assign your PC an available IP address within the subnet
            192.168.1.0/24, and you can reach the pfSense administrator portal.
            That's great for our Netgate appliance, but how do we do the same
            for our switch?
          </p>
          <p>
            We could just plug directly into our switch's management interface
            (8/10), but that would require us to physically disconnect and
            reconnect our wired connection. That will get old quick, so, instead
            we'll add our switch's Management VLAN to our trunk port and pass
            that traffic up to our pfSense firewall. Then, we'll write a policy
            in pfSense to allow traffic from our Lab PC to our Management VLAN
            interface. Once those rules are in place, then visiting 192.168.40.1
            in my browser from my Lab PC should serve up our switch's
            administrator portal.
          </p>
          <ToggleImage params={images["22"]}></ToggleImage>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Conclusion */}
        <div>
          <h3 id="conclusion" className="text-accent">
            Conclusion
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Congratulations! At this point, you should have a working network
            for your home lab!! The only problem is, you don't have anything
            connected to it yet... We'll need more ethernet interfaces to
            connect more things to our home lab, so, in the next post, we'll add
            in a network switch and give it some VLANs! Once our switch is in
            place, we can start connecting things like servers, network attached
            storage (NAS), and even wireless access points to scale our network
            wirelessly.
          </p>

          <Callout icon={faThumbsUp} text={calloutContent["8"]}></Callout>
        </div>
      </section>
    </div>
  );
}

export default PfSense;
