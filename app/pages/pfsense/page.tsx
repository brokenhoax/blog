import React from "react";
import Link from "next/link";
import { faWifiStrong, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Callout from "../../components/callout/Callout";
import ToggleImage from "../../components/toggleImage/ToggleImage";

function PfSense() {
  const calloutContent: string[] = [
    "While it is possible to configure our Netgate firewall over a wireless (Wi-Fi) connection, that is outside of the scope of this lab. Also, if your computer does not have an ethernet port, then consider connecting a wireless router to port 2/4 and configure the wireless router (and any client devices connected to it) receive their IP addresses via DHCP from the Netgate firewall. On my router, this requires setting the router's DHCP setting to bridge mode. Once that's done, you can connect to the wireless router in order to connect to the management interface.",
    "You may choose to deviate from my IP addressing scheme, but it will be easier to follow the documentation if you use the same IP addresses.",
    "Make sure to select 'Add Associated Filter Rule' from the dropdown within the 'Filter Rule Association' option. This will save you a step by creating a firewall rule that will pass the matching traffic on the interface selected.",
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
            You could save even more by running pfSense in a VM on your server,
            but part of the home lab experience is working with hardware. Plus,
            those extra interfaces on the Netgate appliance I'm suggesting
            (Netgate 4200) will come in handy as your lab grows.
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
                Port 1 — WAN Interface (igc3)
              </Link>
            </li>
            <li key="3" className="hover:text-accent">
              <Link href="/pages/pfsense#management-interface">
                Port 2 — Management Interface (igc2)
              </Link>
            </li>
            <li key="4" className="hover:text-accent">
              <Link href="/pages/pfsense#lan-interface">
                Port 3 — LAN Interface (igc1)
              </Link>
            </li>
            <li key="5" className="hover:text-accent">
              <Link href="/pages/pfsense#guest-interface">
                Port 4 — Guest Interface (igc0)
              </Link>
            </li>
            <li key="6" className="hover:text-accent">
              <Link href="/pages/pfsense#aliases">Aliases</Link>
            </li>
            <li key="7" className="hover:text-accent">
              <Link href="/pages/pfsense#nat-nginx">
                NAT for Nginx Web Server
              </Link>
            </li>
            <li key="8" className="hover:text-accent">
              <Link href="/pages/pfsense#nat-dns-resolver">
                NAT for DNS Resolver
              </Link>
            </li>
            <li key="9" className="hover:text-accent">
              <Link href="/pages/pfsense#port1wan-rules">
                PORT1WAN - Firewall Rules
              </Link>
            </li>
            <li key="10" className="hover:text-accent">
              <Link href="/pages/pfsense#port2lan-rules">
                PORT2LAN - Firewall Rules
              </Link>
            </li>
            <li key="11" className="hover:text-accent">
              <Link href="/pages/pfsense#port3-rules">
                PORT3 - Firewall Rules
              </Link>
            </li>
            <li key="12" className="hover:text-accent">
              <Link href="/pages/pfsense#port4-rules">
                PORT4 - Firewall Rules
              </Link>
            </li>
            <li key="13" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-users-rules">
                VLAN_USERS - Firewall Rules
              </Link>
            </li>
            <li key="14" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-services-rules">
                VLAN_SERVICES - Firewall Rules
              </Link>
            </li>
            <li key="15" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-storage-rules">
                VLAN_STORAGE - Firewall Rules
              </Link>
            </li>
            <li key="16" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-management-rules">
                VLAN_MANAGEMENT - Firewall Rules
              </Link>
            </li>
            <li key="17" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-default-rules">
                VLAN_DEFAULT - Firewall Rules
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
            Port 1 — WAN Interface (igc3)
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
          <ToggleImage params={images["6"]}></ToggleImage>
        </div>
        {/* Management Interface */}
        <div>
          <h3 id="management-interface" className="text-accent">
            Port 2 — MGT Interface (igc2)
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
          <Callout icon={faWifiStrong} text={calloutContent[0]}></Callout>
          <ToggleImage params={images["7"]}></ToggleImage>
        </div>
        {/* LAN Interface */}
        <div>
          <h3 id="lan-interface" className="text-accent">
            Port 3 — LAN Interface (igc1)
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
            <li key="4">
              VLAN 30: <span className="text-accent">Storage VLAN</span>
            </li>
            <li key="5">
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
          <ToggleImage params={images["8"]}></ToggleImage>
          <ToggleImage params={images["9"]}></ToggleImage>
          <ToggleImage params={images["10"]}></ToggleImage>
          <ToggleImage params={images["11"]}></ToggleImage>
          <ToggleImage params={images["12"]}></ToggleImage>
          <ToggleImage params={images["13"]}></ToggleImage>
        </div>
        {/* Guest Interface */}
        <div>
          <h3 id="guest-interface" className="text-accent">
            Port 4 — Guest Interface (igc0)
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
            concepts you'll learn here as we build out our lab. For now, we'll
            leave this interface disabled.
          </p>
          <ToggleImage params={images["14"]}></ToggleImage>
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
            as we create policies in the administration portal. Furthermore,
            updating an IP address requires only one corresponding update to the
            firewall-the alias.Imagine how difficult managing your pfSense
            policies would be without aliases! That said, and in preparation for
            deploying our Nginx web server, we'll configure an alias for our
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
            and port 443 to our Nginx web server. Using our new alias for our
            Nginx web server, we'll create a port-forwarding NAT rule to forward
            those ports. We'll also need to forward those ports on our home
            router (in my case, my Amplifi home router) so that we're not
            blocking those connections further up in our network. Please refer
            to the "Amplifi" blog post to review those steps.
          </p>
          <ToggleImage params={images["1"]}></ToggleImage>
        </div>
        {/* NAT for DNS Resolver */}
        <div>
          <h3 id="nat-dns-resolver" className="text-accent">
            NAT for DNS Resolver
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
        {/* Configure DNS Resolver */}
        <div>
          <h3 id="configure-dns-resolver" className="text-accent">
            Configure DNS Resolver
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
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
        {/* PORT1WAN - Firewall Rules */}
        <div>
          <h3 id="port1wan-rules" className="text-accent">
            PORT1WAN - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
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
          <h3 id="port2lan-rules" className="text-accent">
            PORT2LAN - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
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
          <h3 id="port3-rules" className="text-accent">
            PORT3 - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
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
          <h3 id="port4-rules" className="text-accent">
            PORT4 - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
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
        {/* VLAN_USERS - Firewall Rules */}
        <div>
          <h3 id="vlan-users-rules" className="text-accent">
            VLAN_USERS - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_USERS
          </div>
          <p></p>
          <ToggleImage params={images["19"]}></ToggleImage>
        </div>
        {/* VLAN_SERVICES - Firewall Rules */}
        <div>
          <h3 id="vlan-services-rules" className="text-accent">
            VLAN_SERVICES - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_SERVICES
          </div>
          <p></p>
          <ToggleImage params={images["20"]}></ToggleImage>
        </div>
        {/* VLAN_STORAGE - Firewall Rules */}
        <div>
          <h3 id="vlan-storage-rules" className="text-accent">
            VLAN_STORAGE - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_STORAGE
          </div>
          <p></p>
          <ToggleImage params={images["21"]}></ToggleImage>
        </div>
        {/* VLAN_MANAGEMENT - Firewall Rules */}
        <div>
          <h3 id="vlan-management-rules" className="text-accent">
            VLAN_MANAGEMENT - Firewall Rules
            <span>
              <Link scroll={true} href="/pages/pfsense#top">
                {" "}
                #{" "}
              </Link>
            </span>
          </h3>
          <div className="text-white bg-subtle path">
            Firewall<span className="text-accent"> {">"}</span> Rules{" "}
            <span className="text-accent">{">"}</span> VLAN_MANAGEMENT
          </div>
          <p></p>
          <ToggleImage params={images["22"]}></ToggleImage>
        </div>
      </section>
    </div>
  );
}

export default PfSense;
